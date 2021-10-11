import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "../routes";
import Index from "./Index";
import Login from "./Login";

const Root = () => (
  <Router>
    <Route path={Routes.Index} component={Index} />
    <Route path={Routes.Login} exact component={Login} />
  </Router>
);

export default Root;
