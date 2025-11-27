import { Navigate, Route, Routes } from "react-router";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";

export const AppRouter = ({ authStatus }) => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="home" element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
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
