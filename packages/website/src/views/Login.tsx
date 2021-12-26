import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, ChangeLanguage, Input, Logo } from "@messagewith/core-ui";
import { useTranslation } from "@messagewith/i18n";
import vector from "#assets/images/login_vector.svg";
import { Link, useNavigate } from "react-router-dom";
import { Emoji } from "@messagewith/emoji";
import ModifiedInDevelopment from "#components/modified/InDevelopment";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { login } from "#api";
import { Routes } from "#routes";
import { useLogin } from "#hooks/useLogin";

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  min-height: 820px;
`;

const StyledLeftWrapper = styled.div`
  width: 45%;
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 650px;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.washSuperLight};

  h1 {
    max-width: 600px;
    line-height: 1.5;
    margin-bottom: 40px;

    span {
      background: ${(props) => props.theme.primaryToTertiaryGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledCenterWrapper = styled.div``;

const StyledForm = styled.form``;

const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 10px;
`;

const StyledError = styled.span`
  color: ${({ theme }) => theme.error};
  margin-bottom: 15px;
  font-size: 1.4rem;
  display: block;
`;

const GlobalError = styled.span`
  color: ${({ theme }) => theme.error};
  margin-bottom: 40px;
  display: block;
`;

const StyledButton = styled(Button)`
  width: 100%;

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

const StyledSpacer = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.washLight};
  margin: 25px 0;
`;

const StyledChangeLanguage = styled(ChangeLanguage)`
  z-index: 99999999;
`;

const StyledBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.washSuperHeavy};
`;

const StyledMadeWithLove = styled.div``;

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

  const slogan = text("headings.slogan");

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
    <StyledWrapper>
      <StyledLeftWrapper>
        <StyledNavigation>
          <Logo />
          <StyledChangeLanguage />
        </StyledNavigation>

        <StyledCenterWrapper>
          {globalError && (
            <GlobalError>
              {text(`form.errors.global.${globalError}`)}
            </GlobalError>
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

            <StyledButton buttonType="social" socialType="github" type="button">
              {text("form.logInGithub")}
            </StyledButton>
            <StyledButton buttonType="social" socialType="google" type="button">
              {text("form.logInGoogle")}
            </StyledButton>
            <StyledButton
              buttonType="social"
              socialType="facebook"
              type="button"
            >
              {text("form.logInFacebook")}
            </StyledButton>
          </StyledForm>

          <StyledForgottenPassword to="/">
            {text("form.forgottenPassword")}
          </StyledForgottenPassword>

          <StyledSpacer />

          <StyledButton buttonType="tertiary">
            {text("form.register")}
          </StyledButton>
        </StyledCenterWrapper>

        <StyledBottomWrapper>
          <StyledMadeWithLove>
            Made with <Emoji name="red-heart" /> from{" "}
            <Emoji name="flag-poland" />
          </StyledMadeWithLove>
          <ModifiedInDevelopment />
        </StyledBottomWrapper>
      </StyledLeftWrapper>

      <StyledRightWrapper>
        {slogan && <h1 dangerouslySetInnerHTML={{ __html: slogan }} />}
        <img src={vector} alt="" />
      </StyledRightWrapper>
    </StyledWrapper>
  );
};

export default Login;
