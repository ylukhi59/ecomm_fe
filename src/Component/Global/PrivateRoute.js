import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'; // Use Navigate for redirection

function PrivateRoute() {
  const auth = sessionStorage.getItem("token"); // Check if the user is authenticated

  // If authenticated, render the child components (protected routes), otherwise redirect to the Login page
  return auth ? <Outlet /> : <Navigate to="/login"  />;
}

export default PrivateRoute;
