import React, { FC } from "react";
import Icon from "@iconify/react";
import logoIcon from "@iconify/icons-ph/chats-circle-fill";
import styled from "styled-components";

const StyledWrapper = styled.div<{ $color?: string }>`
  color: ${({ theme, $color }) => $color || theme.foreground};
  font-size: 1.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)<{ $isBig: boolean }>`
  font-size: ${({ $isBig }) => ($isBig ? "4rem" : "5rem")};
  margin-right: 22px;
`;

export const Logo: FC<Props> = ({ onlyIcon, color }) => (
  <StyledWrapper $color={color}>
    <StyledIcon icon={logoIcon} $isBig={!onlyIcon} />
    {!onlyIcon && "messagewith.io"}
  </StyledWrapper>
);

interface Props {
  onlyIcon?: boolean;
  color?: string;
}
