import React, { FC } from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import { IconifyIcon } from "../../../types/iconifyIcon.type";
import { useButtonEffects } from "../../../hooks/useButtonEffects";
import { rippleDefaultStyles } from "../../../theme/rippleDefaultStyles";

const StyledButton = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.foreground};
  background: ${({ theme }) => theme.washSuperLight};
  border: 0;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadiusR};
  position: relative;
  overflow: hidden;
  transition: background 0.2s ease-in-out, transform 0.4s ease-out;

  :hover {
    background: ${({ theme }) => theme.washLight};
  }

  :active {
    transform: scale(0.93);
    background: ${({ theme }) => theme.washMedium};
  }

  svg {
    font-size: 2.8rem;
    transform: none !important;
  }

  .ripple {
    ${rippleDefaultStyles};
    background: ${({ theme }) => theme.background};
    width: 120px;
    height: 120px;
  }
`;

export const IconButton: FC<Props> = ({ icon, label, className }) => {
  const { onMouseDown } = useButtonEffects({ rippleWidth: 120 });

  return (
    <StyledButton
      aria-label={label}
      onMouseDown={onMouseDown}
      title={label}
      className={className}
    >
      <Icon icon={icon} />
    </StyledButton>
  );
};

interface Props {
  icon: IconifyIcon;
  label: string;
  className?: string;
}
