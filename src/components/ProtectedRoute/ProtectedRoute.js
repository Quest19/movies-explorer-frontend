import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({isLoggedIn, element: Component, ...props}) => {
  console.log("isLoggedIn:", isLoggedIn);
  return (
    isLoggedIn ? <Component {...props} /> : <Navigate to='/' replace/>
  )
}

export default ProtectedRoute;