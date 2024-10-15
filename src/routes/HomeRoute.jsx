import Layout from "~/layouts/Layout";
import Home from "~/pages/Home/Home";
import NotFound from "~/pages/NotFound/NotFound";

export const HomeRoute = {
  path: "/",
  element: <Layout />,
  // errorElement: <NotFound />,
  children: [{ path: "/", element: <Home /> }],
};
