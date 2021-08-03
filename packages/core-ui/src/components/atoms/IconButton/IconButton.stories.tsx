import React from "react";
import { Story } from "@storybook/react";
import settingsIcon from '@iconify/icons-ph/gear-bold';
import { IconButton } from "./IconButton";

export default {
  title: "atoms/IconButton",
};

export const Primary: Story = () => <IconButton icon={settingsIcon} label="settings" />;