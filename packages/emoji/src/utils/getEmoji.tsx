import { ALL_EMOJIS } from "../constants/allEmojis";
import { EmojiType } from "../types/emojiType";

export const getEmoji = (id: string): EmojiType | undefined =>
  Object.values(ALL_EMOJIS).find((item) => item.name === id);
