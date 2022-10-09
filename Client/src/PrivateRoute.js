import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// This component is necessary not to allow the user to access pages once the logout function is activated

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children: <Navigate to="/login"/>
  
};

export default PrivateRoute;
