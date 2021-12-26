import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "#routes";
import { useLogin } from "#hooks/useLogin";
import axios from "axios";
import { logout } from "#api";

const Logout: FC = () => {
  const navigate = useNavigate();
  const { isLoading, isLogin } = useLogin();

  useEffect(() => {
    if (!isLoading && !isLogin) {
      navigate(Routes.Login);
    } else if (!isLoading && isLogin) {
      axios
        .get(logout, { withCredentials: true })
        .then(() => navigate(Routes.Login));
    }
  }, [isLogin, navigate, isLoading]);

  return <></>;
};

export default Logout;
