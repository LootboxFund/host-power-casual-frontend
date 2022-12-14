import { createBrowserRouter } from "react-router-dom";

// pages
import CreateEvent from "./pages/EventCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEvent />,
  },
]);

export default router;
