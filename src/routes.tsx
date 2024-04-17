import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
