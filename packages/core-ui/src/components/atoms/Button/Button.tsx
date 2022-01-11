import React, { FC, HTMLProps, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import googleIcon from "@iconify/icons-logos/google-icon";
import facebookIcon from "@iconify/icons-logos/facebook";
import githubIcon from "@iconify/icons-logos/github-icon";
import loadingIcon from "@iconify/icons-bx/bx-loader-alt";
import { useButtonEffects } from "../../../hooks/useButtonEffects";
import { rippleDefaultStyles } from "../../../theme/rippleDefaultStyles";
import { loadingAnimation } from "../../../theme/animations";

const StyledWrapper = styled.button<{
  $type: ButtonType;
  $isLoading: boolean;
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
  display: flex;
  align-items: center;
  justify-content: center;

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
  
  ${({ $isLoading, $type }) => {
    const allStyles = `cursor: default;`;

    if (!$isLoading) return css``;

    if ($type === "primary" || $type === "secondary")
      return css`
        ${allStyles};

        :hover {
          background: ${({ theme }) => theme.primary};
        }

        :active {
          transform: scale(1);
          background: ${({ theme }) => theme.primary};
          box-shadow: unset;
        }
      `;

    if ($type === "tertiary" || $type === "confirm")
      return css`
        ${allStyles};

        :hover {
          background: ${({ theme }) => theme.secondary};
        }

        :active {
          transform: scale(1);
          background: ${({ theme }) => theme.secondary};
          box-shadow: ${({ theme }) => theme.boxShadow};
        }
      `;

    if ($type === "social")
      return css`
        ${allStyles};

        :hover {
          background: ${({ theme }) => theme.background};
        }

        :active {
          transform: scale(1);
          background: ${({ theme }) => theme.background};
        }
      `;

    return css``;
  }}
  
  .ripple {
    width: ${({ $type }) =>
      $type === "primary" || $type === "confirm" ? "130px" : "260px"};
    height: ${({ $type }) =>
      $type === "primary" || $type === "confirm" ? "130px" : "260px"};
    ${rippleDefaultStyles};
  }
`;

const StyledInnerWrapper = styled.div<{
  $isLoading: boolean;
  $isSocial: boolean;
}>`
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ $isSocial }) =>
    $isSocial &&
    css`
      span {
        margin-right: auto;
      }
    `}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      opacity: 0;
      transform: scale(0.6);
      pointer-events: none;
    `}
`;

const StyledIcon = styled(Icon)<{ $iconPosition: "left" | "right" }>`
  font-size: 2.2rem;
  margin: ${({ $iconPosition }) =>
    $iconPosition === "left" ? "0 10px 0 0" : "0 0 0 10px"};
`;

const StyledSocialIcon = styled(Icon)`
  margin-right: auto;
  font-size: 2.5rem;
`;

const StyledLoadingIcon = styled(Icon)`
  stroke: #fff !important;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%) !important;
  z-index: 10;
  display: block;
  transform-origin: top left;
  animation: 1s ${loadingAnimation} linear infinite;
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
  buttonType = "primary",
  socialType = "github",
  onClick,
  onMouseDown: onMouseDownProp,
  isLoading = false,
  iconPosition = "left",
  icon,
  ...props
}) => {
  const { onMouseDown } = useButtonEffects({
    rippleWidth:
      buttonType === "primary" || buttonType === "confirm" ? 130 : undefined,
  });

  const handleOnMouseDown: MouseEventHandler<HTMLButtonElement> = (e) => {
    onMouseDown(e);
    onMouseDownProp?.(e);
  };

  return (
    <StyledWrapper
      className={className as string}
      $type={buttonType}
      onClick={!isLoading ? onClick : undefined}
      $isLoading={isLoading}
      onMouseDown={!isLoading ? handleOnMouseDown : undefined}
      {...(props as never)}
    >
      <StyledInnerWrapper
        $isLoading={isLoading}
        $isSocial={buttonType === "social"}
      >
        {buttonType === "social" && (
          <StyledSocialIcon icon={getIcon(socialType)} />
        )}
        {icon && iconPosition === "left" && (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <StyledIcon icon={icon} $iconPosition={iconPosition} />
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <StyledIcon icon={icon} $iconPosition={iconPosition} />
        )}
      </StyledInnerWrapper>
      {isLoading && <StyledLoadingIcon icon={loadingIcon} />}
    </StyledWrapper>
  );
};

type ButtonType = "primary" | "secondary" | "tertiary" | "social" | "confirm";
type SocialType = "google" | "facebook" | "github";

interface Props extends HTMLProps<HTMLButtonElement> {
  buttonType?: ButtonType;
  className?: string;
  socialType?: SocialType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  icon?: any;
  iconPosition?: "left" | "right";
}
