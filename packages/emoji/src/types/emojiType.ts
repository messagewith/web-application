import { EmojiName } from "./emojiName";

export interface EmojiType {
  name: EmojiName;
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
}
