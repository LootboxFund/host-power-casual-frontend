import { User } from "firebase/auth";
import { auth } from "../../api/firebase";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserID } from "@wormgraph/helpers";

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = convertUserToUserFE(user);
        setUser(userData);
      } else {
        setUser(null);
      }
      // client.resetStore();  // TODO ADD THIS LINE
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
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
