import { Navigate, Outlet } from "react-router";

export const Privateoutes = () => {
  const isLogged = localStorage.getItem("token");

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};
