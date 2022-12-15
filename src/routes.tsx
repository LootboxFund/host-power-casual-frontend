import { createBrowserRouter } from "react-router-dom";

// pages
import EventCreate from "./pages/EventCreate";
import EventEdit from "./pages/EventEdit";
import EventShare from "./pages/EventShare";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EventCreate />,
  },
  {
    path: "/edit/:id",
    element: <EventEdit />,
  },
  {
    path: "/share/:id",
    element: <EventShare />,
  },
]);

export default router;
