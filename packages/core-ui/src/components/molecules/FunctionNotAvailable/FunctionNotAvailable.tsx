import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "@messagewith/i18n";
import { CSSTransition } from "react-transition-group";
import { Button } from "../../atoms/Button/Button";

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.4s ease-in-out;
  pointer-events: none;

  &.enter {
    background: rgba(0, 0, 0, 0);
  }

  &.enter-done {
    pointer-events: all;
  }

  &.enter-active {
    background: rgba(0, 0, 0, 0.25);
    pointer-events: all;
  }

  &.exit-active {
    background: rgba(0, 0, 0, 0);
  }
`;

const StyledAlert = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 35px 55px;
  border-radius: ${({ theme }) => theme.borderRadiusR};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-out;

  ${StyledWrapper}.enter & {
    transform: scale(0) translateY(150%) rotateX(-90deg);
    opacity: 0;
  }

  ${StyledWrapper}.enter-active & {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  ${StyledWrapper}.exit-active & {
    transform: scale(0) translateY(-150%) rotateX(90deg);
    opacity: 0;
  }
`;

const StyledHeadline = styled.h3`
  margin: 0 0 10px 0;
  font-size: 2.4rem;
  font-weight: 600;

  span {
    background: ${({ theme }) => theme.primaryToTertiaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StyledParagraph = styled.p`
  margin: 0 0 20px 0;
  font-size: 1.8rem;
`;

const StyledButton = styled(Button)``;

export const FunctionNotAvailable: FC<Props> = ({
  isActive,
  onClose,
  className,
}) => {
  const { text } = useTranslation();

  return (
    <CSSTransition in={isActive} timeout={400} unmountOnExit>
      <StyledWrapper className={className}>
        <StyledAlert role="alert">
          <StyledHeadline
            dangerouslySetInnerHTML={{
              __html: text("errors.notAvailableYet.headline") as string,
            }}
          />
          <StyledParagraph>
            {text("errors.notAvailableYet.paragraph")}
          </StyledParagraph>
          <StyledButton type="confirm" onClick={onClose}>
            {text("errors.notAvailableYet.confirm")}
          </StyledButton>
        </StyledAlert>
      </StyledWrapper>
    </CSSTransition>
  );
};

interface Props {
  isActive: boolean;
  onClose: () => void;
  className?: string;
}
