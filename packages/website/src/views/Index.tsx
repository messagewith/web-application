import React, { FC } from "react";
import { Redirect } from "react-router-dom";
import { Routes } from "../routes";

const Index: FC = () => {
  /* TODO */
  const isLogin = false;

  if (!isLogin) return <Redirect to={Routes.Login} />;

  return <></>;
};

export default Index;
