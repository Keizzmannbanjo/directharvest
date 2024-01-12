// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import AuthService from "./AuthService";

const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = AuthService.isAuthenticated();

  if (isAuthenticated) {
    return <Route path={path} element={element} />;
  }

  // Redirect to the login page if the user is not authenticated
  return <Navigate to="/signin" />;
};

export default PrivateRoute;
