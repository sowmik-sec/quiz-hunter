import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import NotFoundRoute from "../components/NotFoundRoute/NotFoundRoute";
import Quizzes from "../components/Quizzes/Quizzes";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import { Main } from "./Main";

const fetchData = () => {
  return fetch(`https://openapi.programming-hero.com/api/quiz`);
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Topics />,
        loader: () => fetchData(),
      },
      {
        path: "/topics",
        element: <Topics />,
        loader: () => fetchData(),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetchData(),
      },
      { path: "/blog", element: <Blog /> },
      {
        path: "/quiz/:quizId",
        element: <Quizzes />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundRoute />,
  },
]);
