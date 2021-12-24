import React, { ChangeEventHandler, FC, MouseEventHandler } from "react";
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
    transform: scale(0.8) translateY(-220%);
    transform-origin: left top;
    color: ${({ theme }) => theme.washSuperHeavy};
  }
`;

export const Input: FC<Props> = ({
  className,
  type = "text",
  name,
  value,
  placeholder,
  onClick,
  onChange,
}) => (
  <StyledWrapper className={className}>
    <StyledInput
      placeholder=" "
      type={type}
      name={name}
      value={value}
      onClick={onClick}
      onChange={onChange}
    />
    <StyledText>{placeholder}</StyledText>
  </StyledWrapper>
);

interface Props {
  className?: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  name?: string;
  value?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
