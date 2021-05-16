import { EmojiType } from "./emojiType";

export type EmojiInformation = {
  [type in EmojiType]?: {
    name: EmojiType;
    unicode: string;
    category:
      | "people"
      | "nature"
      | "food"
      | "activity"
      | "travel"
      | "objects"
      | "symbols"
      | "flags"
      | "diversity";
    htmlEntity: string;
  };
};
