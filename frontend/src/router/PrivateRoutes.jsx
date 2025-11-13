import { Navigate, Outlet } from "react-router";

export const PrivateRoutes = () => {
  const isLogged = localStorage.getItem("user");

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};
