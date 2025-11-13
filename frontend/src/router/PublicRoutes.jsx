import { Navigate, Outlet } from "react-router";

export const PublicRoutes = () => {
  const isLogged = localStorage.getItem("user"); // miramos si hay token

  // Si NO está logueado, dejamos que vea la página (Outlet)
  // Si está logueado, lo mandamos al home
  return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};
