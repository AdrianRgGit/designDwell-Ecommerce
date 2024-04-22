import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/Error/ErrorPage/ErrorPage";
import NotFoundPage from "./components/Error/NotFoundPage/NotFoundPage";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import Products from "./components/Products/Products";

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
    path: "/products",
    element: <Products />,
    errorElement: <ErrorPage />,
  },


  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
