import { Link, useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    try {
      const resp = await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (resp.ok) {
        alert("Sesión cerrada");
        navigate("/login");
      } else {
        alert("Error al cerrar sesión");
      }
    } catch (error) {
      console.log("Error logout:", e.error);
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
        <Link to="/home" className="text-white text-decoration-none">
          Home
        </Link>

        <Link to="/tasks" className="text-white text-decoration-none">
          Tasks
        </Link>

        <Link to="/profile" className="text-white text-decoration-none">
          Profile
        </Link>

        <button onClick={handleLogout} className="btn btn-light btn-sm">
          Logout
        </button>
      </div>
    </nav>
  );
};
