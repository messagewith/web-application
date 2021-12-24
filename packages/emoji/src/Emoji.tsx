import React, { FC, useRef } from "react";
import styled, { css } from "styled-components";
import { EmojiType } from "./types/emojiType";
import { EmojiName } from "./types/emojiName";
import { ALL_EMOJIS } from "./constants/allEmojis";
import { getEmoji } from "./utils/getEmoji";

const StyledIcon = styled.span<{ $size: number }>`
  position: relative;

  ${({ $size }) =>
    $size === 24 &&
    css`
      width: 24px !important;
      height: 24px !important;
    `}
`;

export const Emoji: FC<Props> = ({
  size = 24,
  className = "",
  name,
  emoji: emojiProp,
}) => {
  const el = useRef<HTMLSpanElement>(null);

  let emoji: EmojiType | undefined;

  if (name) {
    emoji = getEmoji(name);
  } else if (emojiProp) {
    emoji = ALL_EMOJIS[emojiProp];
  }

  if (!emoji) return <></>;

  const { category, htmlEntity, unicode } = emoji;

  return (
    <StyledIcon
      $size={size}
      className={`${className} joypixels joypixels-${size}-${category} ${unicode}`}
      dangerouslySetInnerHTML={{ __html: htmlEntity }}
      title="name"
      ref={el}
    />
  );
};

type Props = {
  emoji?: EmojiName;
  name?: string;
  size?: 24 | 32;
  className?: string;
};
