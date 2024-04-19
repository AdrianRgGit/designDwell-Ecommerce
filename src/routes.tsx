import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/Error/ErrorPage/ErrorPage";
import NotFoundPage from "./components/Error/NotFoundPage/NotFoundPage";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },


  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
