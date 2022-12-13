import { createBrowserRouter } from "react-router-dom";

// pages
import CreateEvent from "./pages/CreateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEvent />,
  },
]);

export default router;
