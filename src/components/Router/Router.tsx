import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CommunityPage from "../../routes/Community/CommunityPage";
import HomePage from "../../routes/Home/HomePage";
import {CommunityPageLoader} from "../../routes/Community/CommunityPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <div>about</div>,
  },
  {
    path: "c/:communityName",
    loader: CommunityPageLoader,
    element: <CommunityPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
