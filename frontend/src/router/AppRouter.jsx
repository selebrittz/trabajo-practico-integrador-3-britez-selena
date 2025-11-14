import { Navigate, Route, Router, Routes } from "react-router";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

export const AppRouter = ({ authStatus, onLogin }) => {
  return (
    <Routes>
      <Route element={<PublicRoutes isLogged={authStatus} />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login handleLogin={onLogin} />} />
      </Route>

      <Route element={<PrivateRoutes isLogged={authStatus} />}>
        <Route path="home" element={<Home />} />
      </Route>

      <Route
        path="*"
        element={
          authStatus ? <Navigate to="/Home" /> : <Navigate to="/login" />
        }
      ></Route>
    </Routes>
  );
};
