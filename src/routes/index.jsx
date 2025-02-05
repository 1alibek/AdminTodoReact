import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/layout";
import Home from "../pages/Home"

import Basket from "../pages/basket";
import Customer from "../pages/customer";
import People from "../pages/people";
import Statictics from "../pages/statistics";
export const root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/statictics",
        element: <Statictics />,
      },
    ],
  },
]);
