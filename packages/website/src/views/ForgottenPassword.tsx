import React, { FormEventHandler, useState } from "react";
import LoginTemplate, { StyledSpacer } from "#templates/LoginTemplate";
import { Button, Input } from "@messagewith/core-ui";
import { useTranslation } from "@messagewith/i18n";
import styled from "styled-components";
import arrowLeftIcon from "@iconify/icons-ph/arrow-left-bold";
import { Link } from "react-router-dom";
import { Routes } from "#routes";

const StyledHeadline = styled.h1`
  font-size: 2.4rem;
  margin: 0 0 10px;
`;

const StyledDescription = styled.p`
  margin: 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.washSuperHeavy};
`;

const StyledForm = styled.form`
  margin-top: 30px;
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const StyledSendButton = styled(Button)`
  width: 100%;
  margin-top: 16px;
`;

const StyledBackButton = styled(Button)`
  width: 100%;
  text-decoration: none;
`;

const ForgottenPassword = () => {
  const { text } = useTranslation();
  const [isFunctionNotAvailableActive, setFunctionNotAvailableActive] =
    useState<boolean>(false);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setFunctionNotAvailableActive(true);
  };

  return (
    <LoginTemplate
      isFunctionNotAvailableActive={isFunctionNotAvailableActive}
      setFunctionNotAvailableActive={setFunctionNotAvailableActive}
    >
      <StyledHeadline>{text("form.forgottenPasswordTitle")}</StyledHeadline>
      <StyledDescription>
        {text("form.forgottenPasswordDescription")}
      </StyledDescription>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput placeholder={text("form.emailOrNickname")} />
        <StyledSendButton buttonType="secondary">
          {text("form.sendMail")}
        </StyledSendButton>
      </StyledForm>

      <StyledSpacer />

      <StyledBackButton
        forwardedAs={Link}
        to={Routes.Login}
        buttonType="tertiary"
        icon={arrowLeftIcon}
      >
        {text("form.backToLoginPage")}
      </StyledBackButton>
    </LoginTemplate>
  );
};

export default ForgottenPassword;
