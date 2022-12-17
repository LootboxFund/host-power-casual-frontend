import { message } from "antd";
import { EmailAuthProvider } from "firebase/auth";
import { FunctionComponent, useEffect, useState } from "react";
import { auth } from "../../api/firebase";
import { useAuth } from "../../hooks/useAuth";
import { isValidEmail } from "../../lib/email";
import styles from "./index.module.css";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { FrontendUser } from "../../lib/types";
import { useNavigate } from "react-router-dom";
import { parseAuthError } from "../../lib/firebase";

type LoginMode = "email-link" | "email-password";

interface LoginFormProps {
  onLoginCallback: (user: FrontendUser) => void;
  onSignOutCallback?: () => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = (props) => {
  const {
    user,
    signInWithEmailAndPassword,
    linkAnonAccountWithCredential,
    logout,
    signInAnonymously,
  } = useAuth();
  const navigate = useNavigate();
  const [loginMode, setLoginMode] = useState<LoginMode>("email-password");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // const toggleLoginMode = () => {
  //   if (loginMode === "email-link") {
  //     setLoginMode("email-password");
  //   } else {
  //     setLoginMode("email-link");
  //   }
  // };

  useEffect(() => {
    return () => {
      // cleanup
      setEmail("");
      setPassword("");
    };
  }, []);

  const handleLogin = async () => {
    if (loading) {
      return;
    }
    if (!email) {
      message.error("Please enter your email address");
      return;
    }
    if (!isValidEmail(email)) {
      message.error("Please enter a valid email address");
      return;
    }
    if (!password) {
      message.error("Please enter your password");
      return;
    }

    const loadingMessage = message.loading("Logging in...", 0);

    // See if that user exists
    let emailSignInMethods: string[] = [];
    setLoading(true);
    try {
      emailSignInMethods = await fetchSignInMethodsForEmail(auth, email);
    } catch (err) {
      console.log("error fethcing sign in methods");
      message.error("An error occured. Please try again later.");
      loadingMessage();
      setLoading(false);
      return;
    }

    let loggedInUser: FrontendUser;
    const isNewUser = emailSignInMethods.length === 0;

    try {
      if (!isNewUser) {
        // Existing user - we just log them in

        if (emailSignInMethods.includes("password")) {
          // We only support password for now
          // WARNING: for now they will loose this event
          loggedInUser = await signInWithEmailAndPassword(email, password);
        } else {
          // Existing user with a different method
          // Right now we dont support other login methods
          throw new Error("Please try again with a new email");
        }
      } else {
        // New user
        if (user?.isAnonymous) {
          loggedInUser = await linkAnonAccountWithCredential(
            EmailAuthProvider.credential(email, password)
          );
        } else {
          // This is a logged in  NON anonymous user (or logged out) user.
          // For breivity, we just
          // - logout
          // - signInAnonymously
          // - linkAnonAccountWithCredential

          await logout();
          await signInAnonymously(email);
          loggedInUser = await linkAnonAccountWithCredential(
            EmailAuthProvider.credential(email, password)
          );
          navigate("/");
        }
      }
    } catch (err: any) {
      console.log("error logging in", err);
      message.error(
        parseAuthError(
          err?.message || "An error occured. Please try again later."
        )
      );
      return;
    } finally {
      setLoading(false);
      loadingMessage();
    }

    props.onLoginCallback(loggedInUser);

    return;
  };

  // if (!!user && !user.isAnonymous) {
  //   return (
  //     <div className={styles.frameDiv}>
  //       <Result
  //         status="info"
  //         title="You're Already Logged In"
  //         subTitle={
  //           <>
  //             Do you want to sign out to make a new account?
  //             <br />
  //             <br />
  //             <Button type="primary" onClick={handleLogout}>
  //               Sign Out
  //             </Button>
  //           </>
  //         }
  //       ></Result>
  //     </div>
  //   );
  // }

  const handleSignOut = async () => {
    try {
      await logout();
      message.success("Signed out successfully");
      navigate("/");
    } catch (err) {
      console.log("error logging out");
      message.error("An error occured. Please try again later.");
    }

    props.onSignOutCallback?.();
  };

  const isUserLoggedInAndNotAnon = !!user && !user.isAnonymous;

  return (
    <div className={styles.frameDiv}>
      <div className={styles.frameDiv1}>
        <b className={styles.loginToLootbox}>
          {isUserLoggedInAndNotAnon ? "Create New Account" : "Login to Lootbox"}
        </b>
      </div>
      <div className={styles.frameDiv2}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.frameInput}
          type="text"
          placeholder="Email"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
      </div>
      {loginMode === "email-password" && (
        <div className={styles.frameDiv2}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.frameInput}
            type="password"
            name="password"
            placeholder="Password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />
        </div>
      )}

      {/* {isUserLoggedInAndNotAnon && loginMode === "email-password" && (
        <div className={styles.frameDiv2}>
          <input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className={styles.frameInput}
            type="password"
            name="password"
            placeholder="Confirm Password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />
        </div>
      )} */}

      <div className={styles.frameDiv2}>
        <button
          className={styles.frameButton}
          onClick={handleLogin}
          disabled={loading}
        >
          <b className={styles.next}>
            {loginMode === "email-link" ? "Send Login Email" : "Login"}
          </b>
        </button>
      </div>
      {/* <div className={styles.frameDiv2}>
        <button className={styles.frameButton1} onClick={toggleLoginMode}>
          <div className={styles.useAPassword}>
            {loginMode === "email-password" ? "Passwordless" : "Use a Password"}
          </div>
        </button>
      </div> */}
      {user && !user.isAnonymous && (
        <button className={styles.ghostButton} onClick={handleSignOut}>
          <i className={styles.lightText}>sign out</i>
        </button>
      )}
    </div>
  );
};

export default LoginForm;
