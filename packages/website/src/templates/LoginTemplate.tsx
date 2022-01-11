import React, { FC, useEffect } from "react";
import styled from "styled-components";
import {
  ChangeLanguage,
  FunctionNotAvailable,
  Logo,
} from "@messagewith/core-ui";
import { useTranslation } from "@messagewith/i18n";
import { Emoji } from "@messagewith/emoji";
import ModifiedInDevelopment from "#components/modified/InDevelopment";
import vector from "#assets/images/login_vector.svg";
import { Routes } from "#routes";
import { useLogin } from "#hooks/useLogin";
import { useNavigate } from "react-router-dom";

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

const LoginTemplate: FC<{
  isFunctionNotAvailableActive: boolean;
  setFunctionNotAvailableActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  children,
  isFunctionNotAvailableActive,
  setFunctionNotAvailableActive,
}) => {
  const { text } = useTranslation();
  const { isLogin, isLoading } = useLogin();
  const navigate = useNavigate();
  const slogan = text("headings.slogan");

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

        <StyledCenterWrapper>{children}</StyledCenterWrapper>

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

      <FunctionNotAvailable
        isActive={isFunctionNotAvailableActive}
        onClose={() => setFunctionNotAvailableActive(false)}
      />
    </StyledWrapper>
  );
};

export const StyledSpacer = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.washLight};
  margin: 25px 0;
`;

export const StyledError = styled.span`
  color: ${({ theme }) => theme.error};
  margin-bottom: 15px;
  font-size: 1.4rem;
  display: block;
`;

export const GlobalError = styled.span`
  color: ${({ theme }) => theme.error};
  margin-bottom: 40px;
  display: block;
`;

export default LoginTemplate;
