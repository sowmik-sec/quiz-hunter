import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import { Main } from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Topics /> },
      { path: "/topics", element: <Topics /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);