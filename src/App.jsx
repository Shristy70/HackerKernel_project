import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Display from "./pages/Display";

import Layout from "./Layout";
import Login from "./components/Login";


const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null; 
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/login" element={<Login />} />

       
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />

    
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
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
