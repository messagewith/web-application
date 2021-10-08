import React from "react";
import { Story } from "@storybook/react";
import { Logo } from "./Logo";

export default {
  title: "atoms/Logo",
  component: Logo,
};

export const Primary: Story = () => <Logo />;

export const OnlyIcon: Story = () => <Logo onlyIcon />;
