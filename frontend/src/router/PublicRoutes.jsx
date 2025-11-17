import { Navigate, Outlet } from "react-router";
import { useState, useEffect } from "react";

export const PublicRoutes = () => {
  const [isAuth, setIsAuth] = useState(null);

  const checkAuth = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });

      setIsAuth(response.ok);
    } catch (e) {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (isAuth === null) return <p>Cargando...</p>;

  return isAuth ? <Navigate to="/home" /> : <Outlet />;
};
