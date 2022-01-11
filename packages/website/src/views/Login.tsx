import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input } from "@messagewith/core-ui";
import { useTranslation } from "@messagewith/i18n";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { login } from "#api";
import { Routes } from "#routes";
import { useLogin } from "#hooks/useLogin";
import LoginTemplate, {
  GlobalError,
  StyledError,
  StyledSpacer,
} from "#templates/LoginTemplate";

const StyledForm = styled.form``;

const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  text-decoration: none;

  :first-of-type {
    margin-top: 5px;
  }

  :nth-of-type(2) {
    margin-top: 30px;
  }

  :nth-of-type(3),
  :nth-of-type(4) {
    margin-top: 10px;
  }
`;

const StyledForgottenPassword = styled(Link)`
  display: block;
  color: ${(props) => props.theme.primary};
  text-align: right;
  margin-top: 25px;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const { text } = useTranslation();
  const navigate = useNavigate();
  const { isLogin, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isFormLoading, setFormLoading] = useState<boolean>(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isFunctionNotAvailableActive, setFunctionNotAvailableActive] =
    useState<boolean>(false);

  const handleFormSubmit: SubmitHandler<IFormInput> = (data) => {
    setFormLoading(true);
    setGlobalError(null);

    axios
      .post(
        login,
        {
          ...data,
        },
        { withCredentials: true }
      )
      .then(() => {
        navigate(Routes.Index);
      })
      .catch((e) => {
        if (!e.response) {
          setGlobalError("connection");
          return;
        }

        if (e.response.status === 401) {
          setGlobalError("unauthorized");
          return;
        }

        setGlobalError("unknown");
      })
      .finally(() => {
        setFormLoading(false);
      });
  };

  useEffect(() => {
    if (isLogin) {
      navigate(Routes.Index);
    }
  }, [isLogin, navigate]);

  if (isLoading) return <></>;

  return (
    <LoginTemplate
      isFunctionNotAvailableActive={isFunctionNotAvailableActive}
      setFunctionNotAvailableActive={setFunctionNotAvailableActive}
    >
      {globalError && (
        <GlobalError>{text(`form.errors.global.${globalError}`)}</GlobalError>
      )}

      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <StyledInput
          type="email"
          placeholder={text("form.email")}
          isError={!!errors.email}
          {...register("email", { required: true })}
        />
        {errors.email && (
          <StyledError>
            {errors.email.type === "required" &&
              text("form.errors.email.required")}
          </StyledError>
        )}

        <StyledInput
          type="password"
          placeholder={text("form.password")}
          isError={!!errors.password}
          {...register("password", { required: true })}
        />
        {errors.password && (
          <StyledError>
            {errors.password.type === "required" &&
              text("form.errors.password.required")}
          </StyledError>
        )}

        <StyledButton
          buttonType="secondary"
          type="submit"
          isLoading={isFormLoading}
        >
          {text("form.logIn")}
        </StyledButton>

        <StyledButton
          buttonType="social"
          socialType="github"
          type="button"
          onClick={() => setFunctionNotAvailableActive(true)}
        >
          {text("form.logInGithub")}
        </StyledButton>
        <StyledButton
          buttonType="social"
          socialType="google"
          type="button"
          onClick={() => setFunctionNotAvailableActive(true)}
        >
          {text("form.logInGoogle")}
        </StyledButton>
        <StyledButton
          buttonType="social"
          socialType="facebook"
          type="button"
          onClick={() => setFunctionNotAvailableActive(true)}
        >
          {text("form.logInFacebook")}
        </StyledButton>
      </StyledForm>

      <StyledForgottenPassword to={Routes.ForgottenPassword}>
        {text("form.forgottenPassword")}
      </StyledForgottenPassword>

      <StyledSpacer />

      <StyledButton
        buttonType="tertiary"
        forwardedAs={Link}
        to={Routes.Register}
      >
        {text("form.register")}
      </StyledButton>
    </LoginTemplate>
  );
};

export default Login;
