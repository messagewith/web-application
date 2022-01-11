import React, { forwardRef, HTMLProps } from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.label`
  display: block;
  position: relative;
  height: 55px;
`;

const StyledInput = styled.input<{ $isError?: boolean }>`
  padding: 15px 30px;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadiusR};
  background: ${({ theme }) => theme.washLight};
  outline: none;
  font-size: 1.8rem;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;

  ${({ $isError }) =>
    $isError &&
    css`
      background: ${({ theme }) => theme.errorBackground};
      color: ${({ theme }) => theme.error};
    `}
`;

const StyledText = styled.span<{ $isError?: boolean }>`
  position: absolute;
  font-size: 1.8rem;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.2s ease-out, color 0.2s ease-out;
  pointer-events: none;

  ${({ $isError }) =>
    $isError &&
    css`
      color: ${({ theme }) => theme.error}!important;
    `}

  ${StyledInput}:focus ~ &, ${StyledInput}:not(:placeholder-shown) ~ & {
    transform: scale(0.8) translateY(-220%);
    transform-origin: left top;
    color: ${({ theme }) => theme.washSuperHeavy};
  }
`;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, placeholder, isError, required, ...props }, ref) => (
    <StyledWrapper className={className}>
      <StyledInput
        placeholder=" "
        ref={ref}
        $isError={isError}
        required={required}
        {...(props as never)}
      />
      <StyledText $isError={isError}>
        {required ? "*" : undefined}
        {placeholder}
      </StyledText>
    </StyledWrapper>
  )
);

interface Props extends HTMLProps<HTMLInputElement> {
  type?: "text" | "password" | "email";
  isError?: boolean;
  required?: boolean;
}
