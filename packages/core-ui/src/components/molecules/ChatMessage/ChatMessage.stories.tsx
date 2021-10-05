import React from "react";
import { boolean, date, text } from "@storybook/addon-knobs";
import { Story } from "@storybook/react";
import { ChatMessage } from "./ChatMessage";

export default {
  title: "molecules/ChatMessage",
};

export const Primary: Story = () => {
  const currentDate = date("Send date");
  const content = text(
    "Content",
    "Jasne! Nie ma sprawy, czekam.\n Chciałam się tylko zapytać, czy masz ochotę wyjść ze mną i Kacprem jutro o 13:00 do kina ❤️😘"
  );
  const isFriend = boolean("Friend", false);
  const shouldDisplayStatus = boolean("Display status", false);
  const isRead = boolean("Is read", false);
  const isSent = boolean("Is sent", false);

  return (
    <ChatMessage
      profilePicture="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      time={currentDate}
      content={content}
      isFriend={isFriend}
      shouldDisplayStatus={shouldDisplayStatus}
      isRead={isRead}
      isSent={isSent}
    />
  );
};
