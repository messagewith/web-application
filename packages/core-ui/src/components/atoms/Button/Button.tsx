import React, { FC } from "react";
import styled, { css, keyframes } from "styled-components";
import Icon, { IconifyIcon } from "@iconify/react";
import googleIcon from "@iconify/icons-logos/google-icon";
import facebookIcon from "@iconify/icons-logos/facebook";
import githubIcon from "@iconify/icons-logos/github-icon";
import { useButtonEffects } from "./useButtonEffects";

const rippleAnimation = keyframes`
  0% {
    opacity: 0.6;
    transform: scale(0);
  }
  
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const StyledWrapper = styled.button<{
  $type: ButtonType | "social";
  $isPressed: boolean;
}>`
  height: 35px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadiusR};
  cursor: pointer;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  transition: background 0.2s ease-in-out, transform 0.4s ease-out,
    box-shadow 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  padding: 6px 20px;

  :hover {
    background: ${({ theme }) => theme.primaryDark};
  }

  ${({ $isPressed }) =>
    $isPressed &&
    css`
      transform: scale(0.95);
      background: ${({ theme }) => theme.primaryDark};
    `}

  ${({ $type, $isPressed }) =>
    $type !== "primary" &&
    css`
      height: 60px;
      font-size: 1.8rem;
      font-weight: 500;
      box-shadow: ${({ theme }) =>
        !$isPressed ? theme.boxShadow : theme.boxShadowStronger};
    `}
  
  ${({ $type, $isPressed }) =>
    $type === "tertiary" &&
    css`
      background: ${({ theme }) =>
        !$isPressed ? theme.secondary : theme.secondaryDark};

      :hover {
        background: ${({ theme }) => theme.secondaryDark};
      }
    `}
  
  ${({ $type, $isPressed }) =>
    $type === "social" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        margin-right: auto;
      }

      background: ${({ theme }) =>
        $isPressed ? theme.backgroundSecond : theme.background};
      color: ${({ theme }) => theme.foreground};

      :hover {
        background: ${({ theme }) => theme.backgroundSecond};
      }

      box-shadow: ${({ theme }) =>
        !$isPressed ? theme.boxShadow : theme.boxShadow};

      .ripple {
        background: #dcdcdc !important;
      }
    `}
  
  .ripple {
    width: ${({ $type }) => ($type === "primary" ? "130px" : "260px")};
    height: ${({ $type }) => ($type === "primary" ? "130px" : "260px")};
    position: absolute;
    background: #fff;
    border-radius: 50%;
    transform: scale(0);
    pointer-events: none;
    opacity: 0;
    animation: ${rippleAnimation} 0.6s ease-out;
    transform-origin: center center;
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: auto;
  font-size: 2.5rem;
`;

const getIcon = (socialType?: SocialType): typeof facebookIcon => {
  switch (socialType) {
    case "facebook":
      return facebookIcon;
    case "github":
      return githubIcon;
    case "google":
      return googleIcon;
    default:
      return githubIcon;
  }
};

export const Button: FC<Props> = ({
  children,
  className,
  type = "primary",
  socialType = "github",
}) => {
  const { isPressed, ...mouseEvents } = useButtonEffects({
    rippleWidth: type === "primary" ? 130 : undefined,
  });

  return (
    <StyledWrapper
      className={className as string}
      $type={type}
      $isPressed={isPressed}
      {...mouseEvents}
    >
      {type === "social" && <StyledIcon icon={getIcon(socialType)} />}
      <span>{children}</span>
    </StyledWrapper>
  );
};

type ButtonType = "primary" | "secondary" | "tertiary" | "social";
type SocialType = "google" | "facebook" | "github";

interface Props {
  type?: ButtonType;
  className?: string;
  socialType?: SocialType;
}
