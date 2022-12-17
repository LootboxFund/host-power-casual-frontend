import { createBrowserRouter } from "react-router-dom";

// pages
import EventCreate from "./pages/EventCreate";
import EventEdit from "./pages/EventEdit";
import EventShare from "./pages/EventShare";
import LoginPage from "./pages/Login";

// error handling
import {
  ShareEventPageError,
  EditEventPageError,
} from "./components/ErrorViews";

// auth guard
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter(
  [
    {
      path: "/",
      // NOTE: this does not need auth guard - anonymous users will get created
      element: <EventCreate />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/edit/:id",
      element: (
        <RequireAuth redirectTo="/">
          <EventEdit />
        </RequireAuth>
      ),
      errorElement: <EditEventPageError />,
    },
    {
      path: "/share/:id",
      element: (
        <RequireAuth redirectTo="/">
          <EventShare />
        </RequireAuth>
      ),
      errorElement: <ShareEventPageError />,
    },
  ],
  {
    basename: "/host", // This app gets served at go.lootbox.fund/host/** */
  }
);

export default router;
