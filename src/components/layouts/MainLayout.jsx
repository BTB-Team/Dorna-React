import {Outlet} from "react-router-dom";
import {Footer} from "../footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
