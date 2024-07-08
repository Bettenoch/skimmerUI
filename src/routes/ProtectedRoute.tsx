import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../hooks/user.actions";

// Define the type for the props
interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = getUser();

  return user ? <>{children}</> : <Navigate to="/login/" />;
}

export default ProtectedRoute;
