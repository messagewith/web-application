import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { Input } from "./Input";

export default {
  title: "atoms/Input",
  component: Input,
};

const StyledInput = styled(Input)`
  width: 410px;
`;

export const Primary: Story = () => {
  const isError = boolean("is error", false);
  const isRequired = boolean("is required", false);

  return (
    <StyledInput
      type="text"
      placeholder="E-mail"
      isError={isError}
      required={isRequired}
    />
  );
};
