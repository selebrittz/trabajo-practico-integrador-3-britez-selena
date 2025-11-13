import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const { formState, username, password, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      onLogin(username);
      navigate("/home");
      handleReset();
    } else {
      alert("Usuario o contraseña incorrectos");
      navigate("/register");
    }
  };

  //  busca en el almacenamiento local del navegador (localStorage) el usuario que guardaste desde tu formulario de registro.

  // compara si el username y el password que escribió el usuario coinciden con ese registro.

  // si coincide llama a onLogin(username) (me deja entrar).

  // si no muestra una alerta que dice “Usuario o contraseña incorrectos”.

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
        <h2 className="mb-4 text-center">Login</h2>

        <div className="mb-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-light w-100">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
