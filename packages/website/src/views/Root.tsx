import React from "react";
import {
  BrowserRouter as Router,
  Routes as RouterRoutes,
  Route,
} from "react-router-dom";
import { Routes } from "#routes";
import Index from "./Index";
import Login from "./Login";
import "@messagewith/emoji/lib/joypixels/joypixels-sprite-24.min.css";
import "@messagewith/emoji/lib/joypixels/joypixels-sprite-32.min.css";
import Logout from "#views/Logout";
import ForgottenPassword from "./ForgottenPassword";
import Register from "./Register";

const Root = () => (
  <Router>
    <RouterRoutes>
      <Route path={Routes.Index} element={<Index />} />
      <Route path={Routes.Login} element={<Login />} />
      <Route path={Routes.Logout} element={<Logout />} />
      <Route path={Routes.ForgottenPassword} element={<ForgottenPassword />} />
      <Route path={Routes.Register} element={<Register />} />
    </RouterRoutes>
  </Router>
);

export default Root;
