import { FunctionComponent } from "react";
import LoginForm from "../../components/LoginForm";
import { FrontendUser } from "../../lib/types";
import styles from "./index.module.css";

const LoginPage: FunctionComponent = () => {
  const loginCallback = (user: FrontendUser) => {};
  return (
    <div className={styles.loginPageContainer}>
      <LoginForm onLoginCallback={loginCallback} />
    </div>
  );
};

export default LoginPage;
