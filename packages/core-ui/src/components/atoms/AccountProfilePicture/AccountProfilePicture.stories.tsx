import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { AccountProfilePicture } from "./AccountProfilePicture";

export default {
  title: "atoms/AccountProfilePicture",
};

export const Primary = () => {
  const isActive = boolean("is user active", false);

  return (
    <AccountProfilePicture
      picture="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      name="Julian Wan"
      isActive={isActive}
    />
  );
};
