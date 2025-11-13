import { Navigate, Route, Router, Routes } from "react-router";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

export const AppRouter = ({ isLogged, onLogin }) => {
  return (
    <Routes>
      <Route element={<PublicRoutes isLogged={isLogged} />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login onLogin={onLogin} />} />
      </Route>

      <Route element={<PrivateRoutes isLogged={isLogged} />}>
        <Route path="home" element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/Home" />}></Route>
    </Routes>
  );
};
