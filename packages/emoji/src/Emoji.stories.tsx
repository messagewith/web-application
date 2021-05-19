import React from "react";
import { Emoji } from "./Emoji";
import { select, withKnobs } from "@storybook/addon-knobs";
import { ALL_NAMES } from "./constants/allNames";

export default {
  title: "Emoji",
  decorators: [withKnobs],
};

export const withPrimary = () => {
  const type = select("Emoji", ALL_NAMES, "😀");
  const size = select("Size", [24, 32], 24);

  return <Emoji type={type} size={size} />;
};
