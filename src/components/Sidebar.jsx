import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-primary text-white vh-100 p-5"
      style={{
        width: "300px",
        position: "fixed",
        boxShadow: "2px 0 5px rgba(32, 31, 31, 0.2)",
      }}
    >
      <h2 className="text-center mb-4 border-bottom pb-2">Menu</h2>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link
            to="/home"
            className="nav-link text-white p-2 rounded sidebar-link hover-link"
          >
            Home
          </Link><br />
        </li>
        <li className="nav-item mb-3">
          <Link
            to="/addproduct"
            className="nav-link text-white p-2 rounded sidebar-link hover-link"
          >
            Add Products
          </Link> <br />
        </li>
        <li className="nav-item mb-3">
          <Link
            to="/display"
            className="nav-link text-white p-2 rounded sidebar-link hover-link"
          >
            Display
          </Link><br />
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
