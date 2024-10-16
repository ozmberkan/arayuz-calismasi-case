import Layout from "~/layouts/Layout";
import NotFound from "~/pages/NotFound/NotFound";
import Home from "~/pages/Home/Home";

export const HomeRoute = {
  path: "/",
  element: <Layout />,
  // errorElement: <NotFound />,
  children: [{ path: "/", element: <Home /> }],
};
