import { auth } from "../../api/firebase";
import {
  User,
  signInAnonymously as signInAnonymouslyFirebase,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  EmailAuthCredential,
  linkWithCredential,
} from "firebase/auth";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { UserID } from "@wormgraph/helpers";
import {
  CreateUserRecordPayload,
  CreateUserResponse,
  MutationCreateUserRecordArgs,
} from "../../api/graphql/generated/types";
import { useMutation } from "@apollo/client";
import {
  CREATE_USER,
  UPGRADE_TO_AFFILIATE,
  UpgradeToAffilitateResponseFE,
} from "./api.gql";
import client from "../../api/graphql/client";
import { isValidEmail } from "../../lib/email";
import { FrontendUser } from "../../lib/types";

export interface AuthContextType {
  /**
   * user = undefined -> unset (loading)
   * user = null -> unauthenticated
   * user = USER -> authenticated
   */
  user: FrontendUser | null | undefined;
  signInAnonymously: (email?: string) => Promise<FrontendUser>;
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<FrontendUser>;
  linkAnonAccountWithCredential: (
    credential: EmailAuthCredential
  ) => Promise<FrontendUser>;
  upgradeUserToAffiliate: () => Promise<null>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {}

const AuthProvider = ({ children }: PropsWithChildren<AuthProviderProps>) => {
  const [user, setUser] = useState<FrontendUser | null | undefined | null>(
    undefined
  );

  const [createUserMutation] = useMutation<
    { createUserRecord: CreateUserResponse },
    MutationCreateUserRecordArgs
  >(CREATE_USER);

  const [upgradeToAffiliateMutation] =
    useMutation<UpgradeToAffilitateResponseFE>(UPGRADE_TO_AFFILIATE);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = convertUserToUserFE(user);
        setUser(userData);
      } else {
        setUser(null);
      }
      client.resetStore();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInAnonymously = async (email?: string): Promise<FrontendUser> => {
    // Sign in anonymously
    const { user } = await signInAnonymouslyFirebase(auth);

    // Now create a user record
    const createUserPayload: CreateUserRecordPayload = {};
    if (!user.email && !!email) {
      createUserPayload.email = email;
    }

    await createUserMutation({ variables: { payload: createUserPayload } });
    await upgradeToAffiliateMutation();

    await _refreshUser();

    return convertUserToUserFE(user);
  };

  const upgradeUserToAffiliate = async (): Promise<null> => {
    if (!user) {
      throw new Error("No user logged in");
    }

    await upgradeToAffiliateMutation();

    return null;
  };

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<FrontendUser> => {
    if (!email) {
      throw new Error("Email is required");
    }
    if (!password) {
      throw new Error("Password is required");
    }
    if (!isValidEmail(email)) {
      throw new Error("Invalid email");
    }

    // setAuthPersistence()

    const { user } = await signInWithEmailAndPasswordFirebase(
      auth,
      email,
      password
    );

    await _refreshUser();

    // // Send email verification only once on login
    // const verificationEmailAlreadySent = localStorage.getItem(EMAIL_VERIFICATION_COOKIE_NAME)

    // if (!!user.email && !user.emailVerified && !verificationEmailAlreadySent) {
    //   sendEmailVerification(user)
    //     .then(() => {
    //       console.log('email verification sent')
    //       localStorage.setItem(EMAIL_VERIFICATION_COOKIE_NAME, 'true')
    //     })
    //     .catch((err) => LogRocket.captureException(err))
    // }

    return convertUserToUserFE(user);
  };

  const logout = async (): Promise<void> => {
    await auth.signOut();

    await _refreshUser();
  };

  const linkAnonAccountWithCredential = async (
    credential: EmailAuthCredential
  ): Promise<FrontendUser> => {
    if (!auth?.currentUser || !auth.currentUser) {
      throw new Error("No user logged in");
      // } else if (user.id !== auth.currentUser.uid) {
      //   throw new Error("User ID mismatch");
    } else if (!auth.currentUser.isAnonymous) {
      throw new Error("User is not anonymous");
    }

    const result = await linkWithCredential(auth.currentUser, credential);
    await _refreshUser();

    return convertUserToUserFE(result.user);
  };

  const _refreshUser = async (): Promise<FrontendUser | null> => {
    await auth.currentUser?.reload();
    const newUser = auth.currentUser
      ? convertUserToUserFE(auth.currentUser)
      : null;
    setUser(newUser);

    return newUser;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signInAnonymously,
        signInWithEmailAndPassword,
        linkAnonAccountWithCredential,
        upgradeUserToAffiliate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const convertUserToUserFE = (user: User): FrontendUser => {
  const {
    uid,
    email,
    phoneNumber,
    displayName,
    photoURL,
    emailVerified,
    isAnonymous,
  } = user;

  const userData: FrontendUser = {
    id: uid as UserID,
    email: email,
    phone: phoneNumber,
    isEmailVerified: emailVerified,
    username: displayName,
    avatar: photoURL,
    isAnonymous,
  };
  return userData;
};

export default AuthProvider;
