import React from "react";
import { Story } from "@storybook/react";
import { ChatTextarea } from "./ChatTextarea";

export default {
  title: "molecules/ChatTextarea",
  component: ChatTextarea,
};

export const Primary: Story = () => <ChatTextarea />;
