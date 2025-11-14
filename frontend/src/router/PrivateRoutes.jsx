import { Navigate, Outlet } from "react-router";

export const PrivateRoutes = ({ isLogged }) => {
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};
