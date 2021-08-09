import React from "react";
import { ChatUser } from "./ChatUser";

export default {
  title: "molecules/ChatUser",
};

export const Primary = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ChatUser
        user={{
          name: "Martyna Janiszewska",
          isActive: true,
          profilePicture:
            "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        }}
        latestMessage={{
          content: "Jesteś tam czy nie?",
          count: 6,
          time: new Date().getTime() - 2 * 60 * 60 * 1000,
        }}
      />
      <ChatUser
        user={{
          name: "Gabriela Krajewska",
          isActive: false,
          profilePicture:
            "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
        }}
        latestMessage={{
          content: "Dziwne, nigdy nic takiego miejsca nie miało",
          count: 0,
          time: new Date().getTime() - 3 * 60 * 60 * 1000,
        }}
        isActive
      />
    </div>
  );
};
