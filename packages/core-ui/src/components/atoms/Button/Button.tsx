import React, { FC } from "react";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import googleIcon from "@iconify/icons-logos/google-icon";
import facebookIcon from "@iconify/icons-logos/facebook";
import githubIcon from "@iconify/icons-logos/github-icon";
import { useButtonEffects } from "../../../hooks/useButtonEffects";
import { rippleDefaultStyles } from "../../../theme/rippleDefaultStyles";

const StyledWrapper = styled.button<{
  $type: ButtonType;
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
  font-size: 1.6rem;
  font-weight: 500;

  :hover {
    background: ${({ theme }) => theme.primaryDark};
  }

  :active {
    transform: scale(0.95);
    background: ${({ theme }) => theme.primaryDark};
  }

  ${({ $type }) =>
    $type !== "primary" &&
    $type !== "confirm" &&
    css`
      height: 60px;
      font-size: 1.8rem;
      font-weight: 600;
      box-shadow: ${({ theme }) => theme.boxShadow};

      :active {
        box-shadow: ${({ theme }) => theme.boxShadowStronger};
      }
    `}

  ${({ $type }) =>
    ($type === "tertiary" || $type === "confirm") &&
    css`
      background: ${({ theme }) => theme.secondary};

      :hover {
        background: ${({ theme }) => theme.secondaryDark};
      }

      :active {
        background: ${({ theme }) => theme.secondaryDark};
      }
    `}
  
  ${({ $type }) =>
    $type === "social" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        margin-right: auto;
      }

      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.foreground};
      font-weight: 500;

      :hover {
        background: ${({ theme }) => theme.backgroundSecond};
      }

      :active {
        background: ${({ theme }) => theme.backgroundSecond};
        box-shadow: ${({ theme }) => theme.boxShadow};
      }

      .ripple {
        background: #dcdcdc !important;
      }
    `}
  
  ${({ $type }) =>
    $type === "confirm" &&
    css`
      height: 40px;
    `}
  
  .ripple {
    width: ${({ $type }) =>
      $type === "primary" || $type === "confirm" ? "130px" : "260px"};
    height: ${({ $type }) =>
      $type === "primary" || $type === "confirm" ? "130px" : "260px"};
    ${rippleDefaultStyles};
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
  onClick,
}) => {
  const { ...mouseEvents } = useButtonEffects({
    rippleWidth: type === "primary" || type === "confirm" ? 130 : undefined,
  });

  return (
    <StyledWrapper
      className={className as string}
      $type={type}
      onClick={onClick}
      {...mouseEvents}
    >
      {type === "social" && <StyledIcon icon={getIcon(socialType)} />}
      <span>{children}</span>
    </StyledWrapper>
  );
};

type ButtonType = "primary" | "secondary" | "tertiary" | "social" | "confirm";
type SocialType = "google" | "facebook" | "github";

interface Props {
  type?: ButtonType;
  className?: string;
  socialType?: SocialType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
