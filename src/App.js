import React from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Cars from "./components/Cars/Cars";
import Account from "./components/Account/Account";
import Help from "./components/Help/Help";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/conta" element={<Account />} />
            <Route path="/ajuda" element={<Help />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
