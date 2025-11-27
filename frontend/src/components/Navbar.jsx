import { Link, useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/profile", {
          method: "GET",
          credentials: "include",
        });

        setAuthenticated(res.ok);
      } catch {
        setAuthenticated(false);
      }
    };

    checkProfile();
  }, [location]);

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        setAuthenticated(false);
        navigate("/login");
      } else {
        alert("Error al cerrar sesión");
      }
    } catch {
      alert("No se pudo cerrar sesión");
    }
  };

  return (
    <nav
      className="d-flex justify-content-between align-items-center px-4 py-3"
      style={{ backgroundColor: "#FFB5CD", color: "white" }}
    >
      <h4 className="m-0" style={{ fontWeight: "bold" }}>
        Mi App
      </h4>

      <div className="d-flex gap-3">
        {!authenticated && (
          <>
            <Link className="text-white text-decoration-none" to="/login">
              Login
            </Link>
            <Link className="text-white text-decoration-none" to="/register">
              Register
            </Link>
          </>
        )}

        {authenticated && (
          <>
            <Link className="text-white text-decoration-none" to="/home">
              Home
            </Link>
            <Link className="text-white text-decoration-none" to="/tasks">
              Tasks
            </Link>
            <Link className="text-white text-decoration-none" to="/profile">
              Profile
            </Link>

            <button onClick={handleLogout} className="btn btn-light btn-sm">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
