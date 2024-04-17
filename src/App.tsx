import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/Layout/Layout";

const App = () => {
  return <Layout children={<RouterProvider router={routes} />}></Layout>;
};

export default App;
