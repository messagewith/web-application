import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";
import { Textarea } from "./Textarea";

export default {
  title: "atoms/Textarea",
};

const StyledTextarea = styled(Textarea)`
  width: 100%;
  max-width: 600px;
`;

export const Primary: Story = () => (
  <StyledTextarea label="Napisz wiadomość..." />
);
