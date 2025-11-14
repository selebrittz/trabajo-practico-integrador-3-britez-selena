import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await fetch("http://localhost:3000/api/profile", {
          credentials: "include",
        });

        const data = await resp.json();

        if (resp.ok) {
          setUser(data.user);
        } else {
          console.log("No se pudo cargar el perfil");
        }
      } catch (error) {
        console.log("Error en /profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <Navbar />

      <main
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div
          className="p-4 rounded shadow text-center"
          style={{
            backgroundColor: "#FFB5CD",
            color: "white",
            width: "350px",
          }}
        >
          <h2 className="mb-4">Home</h2>

          {isLoading ? (
            <p>Cargando usuario...</p>
          ) : (
            <h4>Bienvenido, {user?.name} {user?.lastname}</h4>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};
