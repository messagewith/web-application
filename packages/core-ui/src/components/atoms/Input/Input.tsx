import React, { FC } from "react";
import styled from "styled-components";

const StyledWrapper = styled.label`
  display: block;
  position: relative;
  height: 55px;
`;

const StyledInput = styled.input`
  padding: 15px 30px;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadiusR};
  background: ${({ theme }) => theme.washLight};
  outline: none;
  font-size: 1.8rem;
`;

const StyledText = styled.span`
  position: absolute;
  font-size: 1.8rem;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.2s ease-out, color 0.2s ease-out;
  pointer-events: none;

  ${StyledInput}:focus ~ &, ${StyledInput}:not(:placeholder-shown) ~ & {
    transform: scale(0.8) translateY(-180%);
    transform-origin: left top;
    color: ${({ theme }) => theme.washSuperHeavy};
  }
`;

export const Input: FC<Props> = ({ className, type = "text" }) => (
  <StyledWrapper className={className}>
    <StyledInput name="email" placeholder=" " type={type} />
    <StyledText>E-mail</StyledText>
  </StyledWrapper>
);

interface Props {
  className?: string;
  type?: "text" | "password" | "email";
}
