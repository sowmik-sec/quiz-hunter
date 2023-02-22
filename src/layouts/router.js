import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Quizzes from "../components/Quizzes/Quizzes";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import { Main } from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Topics />,
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
      },
      {
        path: "/topics",
        element: <Topics />,
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
      },
      { path: "/statistics", element: <Statistics /> },
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
]);
