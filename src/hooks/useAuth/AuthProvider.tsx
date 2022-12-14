import { auth } from "../../api/firebase";
import {
  User,
  signInAnonymously as signInAnonymouslyFirebase,
} from "firebase/auth";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { UserID } from "@wormgraph/helpers";
import {
  CreateUserRecordPayload,
  CreateUserResponse,
  MutationCreateUserRecordArgs,
} from "../../api/graphql/generated/types";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./api.gql";
import client from "../../api/graphql/client";

interface FrontendUser {
  id: UserID;
  email: string | null;
  phone: string | null;
  isEmailVerified: boolean;
  username: string | null;
  avatar: string | null;
  isAnonymous: boolean;
}

export interface AuthContextType {
  user: FrontendUser | null | undefined;
  signInAnonymously: (email?: string) => Promise<FrontendUser>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {}

const AuthProvider = ({ children }: PropsWithChildren<AuthProviderProps>) => {
  /**
   * user = undefined -> unset (loading)
   * user = null -> unauthenticated
   * user = USER -> authenticated
   */
  const [user, setUser] = useState<FrontendUser | null | undefined | null>(
    undefined
  );

  const [createUserMutation] = useMutation<
    { createUserRecord: CreateUserResponse },
    MutationCreateUserRecordArgs
  >(CREATE_USER);

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

    return convertUserToUserFE(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signInAnonymously,
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
