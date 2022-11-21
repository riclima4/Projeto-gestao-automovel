import React, { useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Cars from "./components/Cars/Cars";
import Account from "./components/Account/Account";
import Help from "./components/Help/Help";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRouteNotLogin from "./components/ProtectedRouteNotLogin";
import ProtectedRouteLogged from "./components/ProtectedRouterLogged";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<ProtectedRouteNotLogin />}>
              <Route index element={<Dashboard />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/account" element={<Account />} />
              <Route path="/help" element={<Help />} />
              <Route path="/modal" element={<Modal />} />
            </Route>
            <Route element={<ProtectedRouteLogged />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </AuthContextProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
