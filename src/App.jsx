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

function App() {
  const [showNav, setShowNav] = useState(true);
  return (
    <>
      <Router>
        {showNav && <Navbar />}
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<ProtectedRouteNotLogin />}>
              <Route index element={<Dashboard funcNav={setShowNav} />} />
              <Route path="/cars" element={<Cars funcNav={setShowNav} />} />
              <Route
                path="/account"
                element={<Account funcNav={setShowNav} />}
              />
              <Route path="/help" element={<Help funcNav={setShowNav} />} />
            </Route>
            <Route element={<ProtectedRouteLogged />}>
              <Route path="/login" element={<Login funcNav={setShowNav} />} />
              <Route
                path="/register"
                element={<Register funcNav={setShowNav} />}
              />
            </Route>
          </Routes>
        </AuthContextProvider>
        {showNav && <Footer />}
      </Router>
    </>
  );
}

export default App;
