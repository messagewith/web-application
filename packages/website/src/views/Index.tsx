import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "#routes";

const Index: FC = () => {
  const navigate = useNavigate();

  /* TODO */
  const isLogin = false;

  useEffect(() => {
    if (!isLogin) {
      navigate(Routes.Login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Index;
