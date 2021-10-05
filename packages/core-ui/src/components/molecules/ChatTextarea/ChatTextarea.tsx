import React, { FC, useState } from "react";
import styled from "styled-components";
import emojiIcon from "@iconify/icons-ph/smiley";
import stickerIcon from "@iconify/icons-ph/sticker-duotone";
import imageIcon from "@iconify/icons-ph/image-square";
import anchorIcon from "@iconify/icons-ph/file-plus";
import Icon from "@iconify/react";
import { Emoji } from "@messagewith/emoji";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { AccountProfilePicture } from "../../atoms/AccountProfilePicture/AccountProfilePicture";
import { FunctionNotAvailable } from "../FunctionNotAvailable/FunctionNotAvailable";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 755px;
  align-items: center;
  position: relative;
`;

const StyledAccountProfilePicture = styled(AccountProfilePicture)`
  width: 45px;
  height: 45px;
  margin-right: 20px;
`;

const StyledTextareaWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 610px;
`;

const StyledTextarea = styled(Textarea)`
  width: 100%;
  padding-right: 125px;
  flex: 1;
`;

const StyledActionWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 10px;
  top: 10px;
`;

const StyledActionButton = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.washHeavy};
  font-size: 2.2rem;
  padding: 0;
  margin-right: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  :last-of-type {
    margin-right: 0;
  }

  :hover {
    color: ${(props) => props.theme.primary};
  }

  :active {
    transform: scale(0.9);
  }
`;

const StyledEmojiButton = styled.button`
  background: transparent;
  border: 0;
  padding-left: 30px;
  cursor: pointer;

  :active {
    transform: scale(0.9);
  }
`;

export const ChatTextarea: FC<Props> = () => {
  const [isActiveNA, setActiveNA] = useState(false);

  const onButtonClick = () => {
    setActiveNA(true);
  };

  return (
    <>
      <StyledWrapper>
        <StyledAccountProfilePicture
          picture="https://images.unsplash.com/photo-1606914707708-5180546f153d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80"
          name="Blondie Eustace"
        />
        <StyledTextareaWrapper>
          <StyledTextarea label="Napisz wiadomość..." />
          <StyledActionWrapper>
            <StyledActionButton aria-label="anchor" onClick={onButtonClick}>
              <Icon icon={anchorIcon} />
            </StyledActionButton>
            <StyledActionButton aria-label="image" onClick={onButtonClick}>
              <Icon icon={imageIcon} />
            </StyledActionButton>
            <StyledActionButton aria-label="sticker" onClick={onButtonClick}>
              <Icon icon={stickerIcon} />
            </StyledActionButton>
            <StyledActionButton aria-label="emoji" onClick={onButtonClick}>
              <Icon icon={emojiIcon} />
            </StyledActionButton>
          </StyledActionWrapper>
        </StyledTextareaWrapper>
        <StyledEmojiButton>
          <Emoji type="🥰" size={32} />
        </StyledEmojiButton>
      </StyledWrapper>
      <FunctionNotAvailable
        isActive={isActiveNA}
        onClose={() => setActiveNA(false)}
      />
    </>
  );
};

interface Props {}
