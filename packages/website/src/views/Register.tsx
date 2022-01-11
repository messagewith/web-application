import React, { FC, useEffect, useState } from "react";
import LoginTemplate, { StyledSpacer } from "#templates/LoginTemplate";
import { Button, Input } from "@messagewith/core-ui";
import { useTranslation } from "@messagewith/i18n";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Routes } from "#routes";
import { Icon } from "@iconify/react";
import xIcon from "@iconify/icons-ph/x-circle-duotone";
import checkIcon from "@iconify/icons-ph/check-circle-duotone";
import minusIcon from "@iconify/icons-ph/minus-bold";
import {
  checkPasswordRequirements,
  PasswordRequirements,
} from "@messagewith/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";

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
  width: 100%;
`;

const StyledFormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledSplitInput = styled(Input)`
  width: 49%;
`;

const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledPasswordRequirementsWrapper = styled.div`
  margin-top: 12px;
`;

const StyledPasswordRequirement = styled.div<{
  $isSatisfy?: boolean;
  $startedWriting: boolean;
}>`
  color: ${({ theme, $isSatisfy, $startedWriting }) =>
    !$startedWriting
      ? theme.washSuperHeavy
      : $isSatisfy
      ? theme.success
      : theme.error};
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  transition: color 0.2s ease-in-out;
  font-size: 1.4rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const StyledSendButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

const StyledBackButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const StyledRequirementIconWrapper = styled.div`
  font-size: 1.8rem;
  margin-right: 5px;
  display: grid;
  justify-items: center;

  div {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const RequirementIcon: FC<{ isSatisfy: boolean; startedWriting: boolean }> = ({
  isSatisfy,
  startedWriting,
}) => (
  <StyledRequirementIconWrapper>
    <motion.div
      initial={{ scale: 0 }}
      animate={startedWriting ? (!isSatisfy ? { scale: 1 } : { scale: 0 }) : {}}
    >
      <Icon icon={xIcon} />
    </motion.div>
    <motion.div
      initial={{ scale: 0 }}
      animate={
        startedWriting
          ? !isSatisfy && startedWriting
            ? { scale: 0 }
            : { scale: 1 }
          : {}
      }
    >
      <Icon icon={checkIcon} />
    </motion.div>
    <motion.div
      initial={{ scale: 0 }}
      animate={!startedWriting ? { scale: 1 } : { scale: 0 }}
    >
      <Icon icon={minusIcon} />
    </motion.div>
  </StyledRequirementIconWrapper>
);

const Register = () => {
  const { text } = useTranslation();
  const { register, handleSubmit, watch } = useForm();
  const watchPassword = watch("password");
  const [passwordRequirements, setPasswordRequirements] =
    useState<PasswordRequirements>(checkPasswordRequirements(""));
  const [isFunctionNotAvailableActive, setFunctionNotAvailableActive] =
    useState<boolean>(false);

  const onSubmit: SubmitHandler<any> = () => {
    setFunctionNotAvailableActive(true);
  };

  useEffect(() => {
    setPasswordRequirements(checkPasswordRequirements(watchPassword || ""));
  }, [watchPassword]);

  const startedWriting = !!watchPassword;

  return (
    <LoginTemplate
      isFunctionNotAvailableActive={isFunctionNotAvailableActive}
      setFunctionNotAvailableActive={setFunctionNotAvailableActive}
    >
      <StyledHeadline>{text("form.registerTitle")}</StyledHeadline>
      <StyledDescription>{text("form.registerDescription")}</StyledDescription>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormRow>
          <StyledSplitInput placeholder={text("form.firstName")} required />
          <StyledSplitInput placeholder={text("form.middleName")} />
        </StyledFormRow>
        <StyledInput placeholder={text("form.lastName")} required />
        <StyledInput placeholder={text("form.email")} required />
        <StyledInput
          placeholder={text("form.password")}
          required
          type="password"
          isError={
            watchPassword &&
            Object.values(passwordRequirements).some((val) => !val)
          }
          {...register("password", { required: true })}
        />
        <StyledPasswordRequirementsWrapper>
          <StyledPasswordRequirement
            $isSatisfy={passwordRequirements.length}
            $startedWriting={startedWriting}
          >
            <RequirementIcon
              isSatisfy={passwordRequirements.length}
              startedWriting={startedWriting}
            />
            {text("form.passwordRequirements.length")}
          </StyledPasswordRequirement>
          <StyledPasswordRequirement
            $isSatisfy={passwordRequirements.uppercaseLowercase}
            $startedWriting={startedWriting}
          >
            <RequirementIcon
              isSatisfy={passwordRequirements.uppercaseLowercase}
              startedWriting={startedWriting}
            />

            {text("form.passwordRequirements.uppercaseLowercase")}
          </StyledPasswordRequirement>
          <StyledPasswordRequirement
            $isSatisfy={passwordRequirements.lettersNumbers}
            $startedWriting={startedWriting}
          >
            <RequirementIcon
              isSatisfy={passwordRequirements.lettersNumbers}
              startedWriting={startedWriting}
            />
            {text("form.passwordRequirements.lettersNumbers")}
          </StyledPasswordRequirement>
          <StyledPasswordRequirement
            $isSatisfy={passwordRequirements.specialCharacter}
            $startedWriting={startedWriting}
          >
            <RequirementIcon
              isSatisfy={passwordRequirements.specialCharacter}
              startedWriting={startedWriting}
            />
            {text("form.passwordRequirements.specialCharacter")}
          </StyledPasswordRequirement>
        </StyledPasswordRequirementsWrapper>

        <StyledSendButton buttonType="secondary">
          {text("form.register")}
        </StyledSendButton>
      </StyledForm>

      <StyledSpacer />

      <StyledBackButton
        forwardedAs={Link}
        to={Routes.Login}
        buttonType="tertiary"
      >
        {text("form.logIn")}
      </StyledBackButton>
    </LoginTemplate>
  );
};

export default Register;
