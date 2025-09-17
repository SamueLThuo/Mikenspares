import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const token = localStorage.getItem("access_token");
  const isStaff = localStorage.getItem("is_staff") === "true";
  const isSuperuser = localStorage.getItem("is_superuser") === "true";

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !(isStaff || isSuperuser)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
