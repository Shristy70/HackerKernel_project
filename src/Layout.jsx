import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import TopNavbar from "./components/Navbar";
const Layout = () => {
  return (
    <>
      <TopNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
