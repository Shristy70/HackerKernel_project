import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import UserNavbar from "./components/UserNavbar";

const Layout = () => {
  return (
    <>
      <UserNavbar />
      <div className="d-flex mt-5">
        <Sidebar />
        <div className="ms-3 mt-5 vh-90  flex-fill">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
