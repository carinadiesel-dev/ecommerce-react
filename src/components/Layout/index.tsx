import { Outlet } from "react-router-dom";
import Footer from "../Footer/index";
import NavBar from "../Navigation/index";

export default function Layout() {
  return (
    <>
      <NavBar />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
}
