import { createBrowserRouter } from "react-router-dom";

// pages
import EventCreate from "./pages/EventCreate";
import EventEdit from "./pages/EventEdit";
import EventShare from "./pages/EventShare";

// error handling
import {
  ShareEventPageError,
  EditEventPageError,
} from "./components/ErrorViews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EventCreate />,
  },
  {
    path: "/edit/:id",
    element: <EventEdit />,
    errorElement: <EditEventPageError />,
  },
  {
    path: "/share/:id",
    element: <EventShare />,
    errorElement: <ShareEventPageError />,
  },
]);

export default router;
