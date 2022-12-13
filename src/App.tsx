import { ApolloProvider } from "@apollo/client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import client from "./api/graphql/client";
import AuthProvider from "./hooks/useAuth/AuthProvider";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={routes} />;
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
