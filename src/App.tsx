import { ApolloProvider } from "@apollo/client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import client from "./api/graphql/client";
import AuthProvider from "./hooks/useAuth/AuthProvider";
import routes from "./routes";
import { HeadProvider } from "react-head";

const App: React.FC = () => {
  const initGTag = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      // @ts-ignore
      (window as any).dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-GVHNC0FVDV");
  };

  return (
    <HeadProvider>
      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GVHNC0FVDV"
      />
      {initGTag()}
      <ApolloProvider client={client}>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </ApolloProvider>
    </HeadProvider>
  );
};

export default App;
