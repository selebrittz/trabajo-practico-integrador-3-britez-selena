import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Loading } from "../components/Loading";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      const resp = await fetch("http://localhost:3000/api/profile", {
        method: "GET",
        credentials: "include",
      });

      if (!resp.ok) throw new Error();

      const data = await resp.json();
      setUser(data.user || data);
    } catch {
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleLogout = async () => {
    try {
      const resp = await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (resp.ok) navigate("/login");
    } catch {
      alert("Error al cerrar sesión");
    }
  };

  if (loading) return <Loading />;

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div
        className="p-4 rounded shadow"
        style={{ backgroundColor: "#FFB5CD", color: "white", width: "400px" }}
      >
        <h2 className="text-center mb-4">Mi Perfil</h2>

        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Usuario:</strong> {user.username}</p>

        {user.person && (
          <>
            <p><strong>Nombre:</strong> {user.person.firstname}</p>
            <p><strong>Apellido:</strong> {user.person.lastname}</p>
            <p><strong>Email:</strong> {user.person.email}</p>
            <p><strong>DNI:</strong> {user.person.dni}</p>
          </>
        )}

        <button className="btn btn-light w-100 mt-3" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};
