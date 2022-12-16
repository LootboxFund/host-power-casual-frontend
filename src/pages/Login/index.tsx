import { FunctionComponent } from "react";
import LoginForm from "../../components/LoginForm";
import { FrontendUser } from "../../lib/types";

const LoginPage: FunctionComponent = () => {
  const loginCallback = (user: FrontendUser) => {};
  return (
    <div>
      <LoginForm onLoginCallback={loginCallback} />
    </div>
  );
};

export default LoginPage;
