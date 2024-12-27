import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Layout from "./Layout";
import Login from "./components/Login";

// Mock authentication function (replace with actual logic)
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null; // Example: check if a token exists
};

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route for Login */}
        <Route path="/login" element={<Login />} />

        {/* Default route for "/" */}
        <Route
          path="/"
          element={
            isAuthenticated() ? (
              <Navigate to="/home" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="display" element={<Display />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
