import { useEffect, useState } from "react";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });

      if (res.ok) {
        setIsLogged(true);
      }
    } catch (error) {
      console.log("error", error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = () => {
    setIsLogged(true);
  };
  if (loading) return <h1>Cargando...</h1>;

  return (
    <>
      <AppRouter authStatus={isLogged} onLogin={handleLogin} />
    </>
  );
};
