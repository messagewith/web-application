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

const Root = () => (
  <Router>
    <RouterRoutes>
      <Route path={Routes.Index} element={<Index />} />
      <Route path={Routes.Login} element={<Login />} />
    </RouterRoutes>
  </Router>
);

export default Root;
