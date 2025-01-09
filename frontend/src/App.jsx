import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import AddAdvertisement from "./pages/AddAdvertisement/AddAdvertisement";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./context/ProtectedRoute";
import PublicRoute from "./context/PublicRoute";

const App = () => {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/add-advertisement"
          element={
            <ProtectedRoute>
              <AddAdvertisement />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
