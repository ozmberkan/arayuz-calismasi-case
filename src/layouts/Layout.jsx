import Container from "~/containers/Container";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
