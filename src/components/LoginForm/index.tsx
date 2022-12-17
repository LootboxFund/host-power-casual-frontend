import { Alert, message, Tooltip } from "antd";
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
type AuthFlowType = "login" | "signup";

interface LoginFormProps {
  onLoginCallback: (user: FrontendUser) => void;
  onSignOutCallback?: () => void;
  initFlow?: AuthFlowType;
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
  const [authFlowType, setAuthFlowType] = useState<AuthFlowType>(
    props.initFlow || "signup"
  );

  useEffect(() => {
    return () => {
      // cleanup
      setEmail("");
      setPassword("");
    };
  }, []);

  const handleSignUp = async () => {
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
    if (password !== passwordConfirm) {
      message.error("Passwords do not match");
      return;
    }

    const loadingMessage = message.loading("Creating your account...", 0);

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

    if (emailSignInMethods.length > 0) {
      // User already exists
      message.error("An account with that email already exists");
      loadingMessage();
      setLoading(false);
      return;
    }

    let loggedInUser: FrontendUser;
    try {
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

    message.success(`Welcome ${loggedInUser?.username || "Friend"}!`);

    props.onLoginCallback(loggedInUser);

    return;
  };

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

    if (emailSignInMethods.length === 0) {
      // User does not exist
      message.error("Invalid email or password");
      loadingMessage();
      setLoading(false);
      return;
    }

    try {
      // Existing user - we just log them in

      if (emailSignInMethods.includes("password")) {
        // We only support password for now
        // WARNING: for now they will loose this event
        loggedInUser = await signInWithEmailAndPassword(email, password);
        navigate("/");
      } else {
        // Existing user with a different method
        // Right now we dont support other login methods
        throw new Error("Please add a password to your account to sign in.");
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

    message.success(`Welcome ${loggedInUser?.username || "Friend"}!`);
    props.onLoginCallback(loggedInUser);

    return;
  };

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

  const toggleAuthType = () => {
    if (authFlowType === "signup") {
      setAuthFlowType("login");
    } else {
      setAuthFlowType("signup");
    }
  };

  const authHandler = async () => {
    if (authFlowType === "signup") {
      return handleSignUp();
    } else {
      return handleLogin();
    }
  };

  return (
    <div className={styles.frameDiv}>
      <div className={styles.frameDiv1}>
        <b className={styles.loginToLootbox}>
          {authFlowType === "signup"
            ? "Create New Account"
            : "Login to Lootbox"}
        </b>
      </div>
      {authFlowType === "login" && !!user && user.isAnonymous && (
        <Tooltip title="If you made an event as an unverified user, you will loose access to it once you log into an existing account. You can either A) create a new account with a new email or B) create a new event after logging into your account.">
          <Alert
            message="Logging into an existing account will loose any work done as an unverified user."
            type="warning"
          />
        </Tooltip>
      )}
      <div className={styles.frameDiv2}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.frameInput}
          type="text"
          placeholder="Email"
          name="email"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              authHandler();
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
                authHandler();
              }
            }}
          />
        </div>
      )}

      {loginMode === "email-password" && authFlowType === "signup" && (
        <div className={styles.frameDiv2}>
          <input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className={styles.frameInput}
            type="password"
            placeholder="Confirm Password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                authHandler();
              }
            }}
          />
        </div>
      )}

      <div className={styles.frameDiv2}>
        <button
          className={styles.frameButton}
          onClick={authHandler}
          disabled={loading}
        >
          {authFlowType === "signup" ? (
            <b className={styles.next}>Sign Up</b>
          ) : (
            <b className={styles.next}>
              {loginMode === "email-link" ? "Send Login Email" : "Login"}
            </b>
          )}
        </button>
      </div>

      <button className={styles.ghostButton} onClick={toggleAuthType}>
        <i className={styles.lightText}>
          {authFlowType === "signup"
            ? "Already have an account? Log in."
            : "Don't have an account? Sign up."}
        </i>
      </button>

      {/* <div className={styles.frameDiv2}>
        <button className={styles.frameButton1} onClick={toggleLoginMode}>
          <div className={styles.useAPassword}>
            {loginMode === "email-password" ? "Passwordless" : "Use a Password"}
          </div>
        </button>
      </div> */}
      {user && !user.isAnonymous && (
        <button
          className={styles.ghostButton}
          onClick={handleSignOut}
          style={{ marginTop: "12px" }}
        >
          <i className={styles.lightText}>Sign out</i>
        </button>
      )}
    </div>
  );
};

export default LoginForm;
