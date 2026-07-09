import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AiPolicy from "../pages/ai-policy/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ai-policy",
    element: <AiPolicy />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
