import React, { FC, useEffect, useRef } from "react";
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

  const { category, name, htmlEntity, unicode } = ALL_EMOJIS[type];

  const test = "\u{1f600}";

  function emojiUnicode(string: string) {
    let comp: any;

    if (string.length === 1) {
      comp = string.charCodeAt(0);
    }
    comp =
      (string.charCodeAt(0) - 0xd800) * 0x400 +
      (string.charCodeAt(1) - 0xdc00) +
      0x10000;
    if (comp < 0) {
      comp = string.charCodeAt(0);
    }
    return (comp as number).toString(16);
  }

  useEffect(() => {
    const regexExp =
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
    if (el?.current?.textContent != null) {
      console.log(emojiUnicode(el.current.textContent));
    }
  }, [el]);

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
