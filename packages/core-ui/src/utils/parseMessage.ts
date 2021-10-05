import { isCharEmoji, ALL_EMOJIS } from "@messagewith/emoji";

export const parseMessage = (content: string): string => {
  let message = "";

  [...content].forEach((char) => {
    if (char === "\n") {
      message += "<br>";
      return;
    }

    if (isCharEmoji(char)) {
      const emoji = ALL_EMOJIS[char];
      if (!emoji) {
        message += char;
        return;
      }

      const { category, unicode } = emoji;

      message += `<span class="joypixels joypixels-24-${category} ${unicode}">${char}</span>`;
      return;
    }

    message += char;
  });

  return message;
};
