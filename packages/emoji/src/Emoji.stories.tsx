import React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { Story } from "@storybook/react";
import { Emoji } from "./Emoji";
import { ALL_NAMES } from "./constants/allNames";
import "./joypixels/joypixels-sprite-32.min.css";
import "./joypixels/joypixels-sprite-24.min.css";
import { ALL_EMOJIS } from "./constants/allEmojis";

export default {
  title: "Emoji",
  decorators: [withKnobs],
};

export const withPrimary: Story = () => {
  const emoji = select("Emoji", ALL_NAMES, "");
  const name = select(
    "Emoji name",
    Object.values(ALL_EMOJIS).map((item) => item?.name),
    "heart"
  );

  const size = select("Size", [24, 32], 24);

  return <Emoji emoji={emoji} size={size} name={name} />;
};
