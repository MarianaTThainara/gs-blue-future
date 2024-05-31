import App from "./App";
import Home from "./routes/Home";
import Study from "./routes/Study";
import Problem from "./routes/Problem";
import Solution from "./routes/Solution";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/problem",
        element: <Problem />,
      },
      {
        path: "/study",
        element: <Study />,
      },
      {
        path: "/solution",
        element: <Solution />,
      },
    ],
  },
];
