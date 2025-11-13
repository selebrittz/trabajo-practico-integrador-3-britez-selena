import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
import "bootstrap/dist/css/bootstrap.min.css";

export const Register = () => {
  const navigate = useNavigate();
  const {
    formState,
    username,
    email,
    password,
    firstname,
    lastname,
    handleChange,
    handleReset,
  } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Guardar el formulario completo en localStorage
    localStorage.setItem("user", JSON.stringify(formState));
    console.log(formState);
    navigate("/login");
    handleReset();
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

        <div className="mb-3">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            value={username}
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={email}
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={password}
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="firstname"
            className="form-control"
            placeholder="First Name"
            value={firstname}
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="lastname"
            className="form-control"
            placeholder="Last Name"
            value={lastname}
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-light w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};
