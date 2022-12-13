import React from "react";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./hooks/useAuth/AuthProvider";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />;
    </AuthProvider>
  );
};

export default App;
