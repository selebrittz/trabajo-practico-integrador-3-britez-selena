import { useForm } from "../hooks/useForm";
import "../styles/Login.css";

export const Login = ({ onLogin }) => {
  const { formState, username, password, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    onLogin(username);
    handleReset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="login-form border border-dark rounded p-4 m-auto mt-5"
      style={{ maxWidth: "400px", backgroundColor: "#FFB5CD" }} 
    >
      <h2 className="mb-4 text-white text-center">Login</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        required
        onChange={handleChange}
        className="form-control mb-3"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        required
        onChange={handleChange}
        className="form-control mb-3"
      />

      <button type="submit" className="btn btn-light w-100">
        Iniciar Sesión
      </button>
    </form>
  );
};
