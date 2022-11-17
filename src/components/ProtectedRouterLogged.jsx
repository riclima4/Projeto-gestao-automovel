import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRouteLogged = () => {
  const { user } = UserAuth();
  console.log(user);
  if (user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRouteLogged;
