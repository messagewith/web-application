import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

const StyledWrapper = styled.label`
  position: relative;
  display: block;
  border-bottom: 1px solid ${(props) => props.theme.washLight};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 10px;
  height: 45px;
  resize: none;
  outline: none;
  color: ${(props) => props.theme.washHeavy};
  transition: 0.2s color ease-in-out;
  font-size: 1.6rem;

  :not(:placeholder-shown) {
    color: ${(props) => props.theme.foreground};
  }
`;

const StyledLabel = styled.span`
  color: ${(props) => props.theme.washHeavy};
  position: absolute;
  left: 10px;
  top: 10px;
  pointer-events: none;
  transform-origin: left center;
  transition: 0.2s transform ease-in-out, opacity 0.2s ease-in-out;

  ${StyledTextarea}:not(:placeholder-shown) ~ & {
    transform: scale(0.6);
    opacity: 0;
  }
`;

export const Textarea: FC<Props> = ({
  label,
  value,
  setValue,
  onChange: onChangeProp,
  className,
}) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue?.(e.target.value);
    onChangeProp?.(e);
  };

  return (
    <StyledWrapper className={className}>
      <StyledTextarea placeholder=" " value={value} onChange={onChange} />
      <StyledLabel>{label}</StyledLabel>
    </StyledWrapper>
  );
};

interface Props {
  label?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
}
