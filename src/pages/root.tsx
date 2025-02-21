import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import DashBoard from "./dashboard";
import Body from "./body";

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
  return <RouterProvider router={browserRouter} />;
};

export default Root;
