import { EmojiType } from "./emojiType";
import { EmojiName } from "./emojiName";

export type EmojiInformation = {
  [type in EmojiName]: EmojiType;
};
