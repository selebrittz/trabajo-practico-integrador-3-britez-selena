import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const Register = () => {
  const navigate = useNavigate();

  const {
    name,
    lastname,
    username,
    email,
    password,
    handleChange,
    handleReset,
  } = useForm({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      lastname,
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(response);

      if (response.ok) {
        alert("Registro exitoso.");
        handleReset();
        navigate("/login");
      } else {
        alert(data.message || "Error al registrar");
      }
    } catch (error) {
      console.log("ERROR:", error);
      alert("Error en la petición");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded shadow"
        style={{ backgroundColor: "#FFB5CD", color: "white", width: "350px" }}
      >
        <h2 className="mb-4 text-center">Register</h2>

        <input
          type="text"
          name="name"
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastname"
          className="form-control mb-3"
          placeholder="Lastname"
          value={lastname}
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          required
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-light w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};
