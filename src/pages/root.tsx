import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import DashBoard from "./dashboard";
import Body from "./body";
import { useEffect } from "react";
import { setMobileView } from "../store/utilities.store";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashBoard />,
    errorElement: <p>Page is not found</p>,
  },
  {
    path: ":topic",
    element: <DashBoard />,
    children: [
      {
        path: ":subtopic",
        element: <Body />,
      },
    ],
  },
];

const browserRouter = createBrowserRouter(routes);

const Root: React.FC = () => {
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 769;
      setMobileView(mobileView);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <RouterProvider router={browserRouter} />;
};

export default Root;
