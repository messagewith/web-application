import React from "react";
import { Story } from "@storybook/react";
import { InDevelopment } from "./InDevelopment";

export default {
  title: "atoms/InDevelopment",
  component: InDevelopment,
};

export const Primary: Story = () => (
  <InDevelopment githubLink="https://github.com/messagewith/messagewith">
    Early Alpha 0.1.12
  </InDevelopment>
);
