import React, { FC } from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import githubIcon from "@iconify/icons-logos/github-icon";

const StyledWrapper = styled.a`
  display: flex;
  color: inherit;
  text-decoration: none;
  align-items: center;
  font-family: "Inconsolata", monospace;
`;

const StyledVersionWrapper = styled.div`
  padding: 5px 8px;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadiusR};
`;

const StyledIcon = styled(Icon)`
  margin-right: 10px;
  font-size: 2rem;
  path {
    fill: ${({ theme }) => theme.tertiary}!important;
  }
`;

export const InDevelopment: FC<Props> = ({ children, githubLink }) => (
  <StyledWrapper href={githubLink}>
    <StyledIcon icon={githubIcon} />
    <StyledVersionWrapper>{children}</StyledVersionWrapper>
  </StyledWrapper>
);

interface Props {
  githubLink: string;
}
