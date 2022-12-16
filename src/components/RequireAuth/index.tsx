import { Result, Spin } from "antd";
import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type RequireAuthProps = {
  redirectTo: string;
  children: JSX.Element;
};

const RequireAuth: FunctionComponent<RequireAuthProps> = ({
  children,
  redirectTo,
}): JSX.Element => {
  const { user } = useAuth();
  console.log("require auth user", user);

  if (user === undefined) {
    // Loading
    return (
      <Result
        icon={
          <Spin size="large" style={{ display: "block", margin: "auto" }} />
        }
      />
    );
  }

  return user ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
