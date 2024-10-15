import Layout from "~/layouts/Layout";
import Home from "~/pages/Home/Home";

export const HomeRoute = {
  path: "/",
  element: <Layout />,
  children: [{ path: "/", element: <Home /> }],
};
