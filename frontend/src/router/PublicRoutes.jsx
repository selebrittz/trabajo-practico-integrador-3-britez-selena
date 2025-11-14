import { Navigate, Outlet } from "react-router";

export const PublicRoutes = ({ isLogged}) => {

  // Si NO está logueado, dejamos que vea la página (Outlet)
  // Si está logueado, lo mandamos al home
  return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};
