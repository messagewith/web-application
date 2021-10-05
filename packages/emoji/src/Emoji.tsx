import React, { FC, useRef } from "react";
import styled, { css } from "styled-components";
import { EmojiType } from "./types/emojiType";
import "./joypixels/joypixels-sprite-32.min.css";
import "./joypixels/joypixels-sprite-24.min.css";
import { ALL_EMOJIS } from "./constants/allEmojis";

const StyledIcon = styled.span<{ $size: number }>`
  position: relative;

  ${({ $size }) =>
    $size === 24 &&
    css`
      width: 24px !important;
      height: 24px !important;
    `}
`;

export const Emoji: FC<Props> = ({ type, size = 24, className = "" }) => {
  const el = useRef<HTMLSpanElement>(null);

  const emoji = ALL_EMOJIS[type];
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

interface Props {
  type: EmojiType;
  size?: 24 | 32;
  className?: string;
}
