import React from "react";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-between align-items-center  bg-white border-bottom fixed-top w-100 shadow-sm">
      <img
        src="https://img.freepik.com/premium-vector/beauty-hand-drawn-clothing-store-logo-boutique_637057-230.jpg"
        className="img-fluid rounded-circle"
        style={{ width: "80px" }}
        alt="Logo"
      />
      <button
        onClick={handleLogout}
        className="btn btn-primary btn-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default UserNavbar;
