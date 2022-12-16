import { FunctionComponent } from "react";
import LoginForm from "../../components/LoginForm";

const LoginPage: FunctionComponent = () => {
  const handleLogin = (email: string, password: string) => {
    console.log("login", email);
  };
  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
