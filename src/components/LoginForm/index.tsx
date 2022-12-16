import { message } from "antd";
import { FunctionComponent, useState } from "react";
import { isValidEmail } from "../../lib/types/email";
import styles from "./index.module.css";

type LoginMode = "email-link" | "email-password";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = (props) => {
  const [loginMode, setLoginMode] = useState<LoginMode>("email-password");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const toggleLoginMode = () => {
  //   if (loginMode === "email-link") {
  //     setLoginMode("email-password");
  //   } else {
  //     setLoginMode("email-link");
  //   }
  // };

  const handleLogin = () => {
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
    props.onLogin(email, password);
  };

  return (
    <div className={styles.frameDiv}>
      <div className={styles.frameDiv1}>
        <b className={styles.loginToLootbox}>Login to Lootbox</b>
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

      <div className={styles.frameDiv2}>
        <button className={styles.frameButton} onClick={handleLogin}>
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
      <button className={styles.frameButton2}>
        <i className={styles.cancel}>cancel</i>
      </button>
    </div>
  );
};

export default LoginForm;
