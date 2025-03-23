import React from "react";
import { Navigate } from "react-router";

const RequireAuth = ({ children }) => {
  const isLoggedIn = localStorage.getItem("login");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
