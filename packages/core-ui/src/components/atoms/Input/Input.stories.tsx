import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "atoms/Input",
  component: Input,
};

const StyledInput = styled(Input)`
  width: 410px;
`;

export const Primary: Story = () => <StyledInput type="text" />;
