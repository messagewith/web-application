import React from "react";
import { Story } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { Navigation } from "./Navigation";

export default {
  title: "molecules/Navigation",
  component: Navigation,
};

export const Primary: Story = () => {
  const messages = number("New messages", 2);
  const notifications = number("Notifications", 2);

  return <Navigation newMessages={messages} notifications={notifications} />;
};
