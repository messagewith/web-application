import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";
import { ChangeLanguage } from "./ChangeLanguage";

export default {
  title: "atoms/ChangeLanguage",
  component: ChangeLanguage,
};

const StyledWrapper = styled.div`
  margin-top: 50px;
`;

export const Primary: Story = () => (
  <StyledWrapper>
    <ChangeLanguage />
  </StyledWrapper>
);
