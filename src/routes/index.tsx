import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/home";
import { Create } from "../pages/movies/create";
import { List } from "../pages/movies/list";
import { Update } from "../pages/movies/update";
import { Details } from "../pages/movies/details";
import { AppLayout } from "../components/app-layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <List />,
      },
      {
        path: "/movie",
        element: <Create />,
      },
      {
        path: "/movie/:id",
        element: <Update />,
      },
      {
        path: "/movie/details/:id",
        element: <Details />,
      },
    ],
  },
]);
