import React, { FC } from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "@messagewith/i18n";
import sentIcon from "@iconify/icons-ph/check-bold";
import Icon from "@iconify/react";
import { parseMessage } from "../../../utils/parseMessage";
import { getMessageTime } from "../../../utils/getMessageTime";
import { AccountProfilePicture } from "../../atoms/AccountProfilePicture/AccountProfilePicture";

const StyledWrapper = styled.div``;

const StyledTime = styled.span<{ $isFriend: boolean }>`
  font-family: "Inconsolata", monospace;
  margin: 0 0 8px auto;
  display: block;
  text-align: right;
  color: ${(props) => props.theme.washHeavy};

  ${({ $isFriend }) =>
    $isFriend &&
    css`
      margin: 0 0 0 10px;
      text-align: left;
    `}
`;

const StyledMessage = styled.div<{ $isFriend: boolean }>`
  font-size: 1.8rem;
  background: ${(props) => props.theme.myMessage};
  padding: 15px 20px;
  border-radius: 10px 0 10px 10px;
  line-height: 1.5;
  width: 365px;

  ${({ $isFriend }) =>
    $isFriend &&
    css`
      background: ${(props) => props.theme.foreground};
      border-radius: 10px 10px 10px 0;
      color: ${(props) => props.theme.background};
    `}
`;

const StyledBottomWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const StyledReadCircleWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: auto;
`;

const StyledReadCircle = styled.span<{ $isRead: boolean; $isSent: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: ${(props) => props.theme.background};
  z-index: 2;
  border: 1px solid ${(props) => props.theme.washMedium};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.background};
  font-size: 1.4rem;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

  ${({ $isSent }) =>
    $isSent &&
    css`
      border: 1px solid ${(props) => props.theme.primary};
      background: ${(props) => props.theme.washLight};
      color: ${(props) => props.theme.primary};
    `}

  ${({ $isRead }) =>
    $isRead &&
    css`
      transform: scale(0);
    `};
`;

const StyledProfilePicture = styled(AccountProfilePicture)`
  width: 20px;
  height: 20px;
`;

export const ChatMessage: FC<Props> = ({
  profilePicture,
  content,
  time,
  isFriend,
  isRead,
  shouldDisplayStatus,
  isSent,
}) => {
  const { isoCode, text } = useTranslation();
  const message = parseMessage(content);

  const messageTime = getMessageTime(time, isoCode, text);

  return (
    <StyledWrapper>
      {!isFriend && (
        <StyledTime $isFriend={!!isFriend}>{messageTime}</StyledTime>
      )}
      <StyledMessage
        dangerouslySetInnerHTML={{ __html: message }}
        $isFriend={!!isFriend}
      />
      <StyledBottomWrapper>
        {isFriend && (
          <>
            <StyledProfilePicture picture={profilePicture} name="" />
            <StyledTime $isFriend={isFriend}>{messageTime}</StyledTime>
          </>
        )}
        {!isFriend && shouldDisplayStatus && (
          <StyledReadCircleWrapper>
            <StyledReadCircle $isRead={!!isRead} $isSent={!!isSent}>
              <Icon icon={sentIcon} />
            </StyledReadCircle>
            <StyledProfilePicture picture={profilePicture} name="" />
          </StyledReadCircleWrapper>
        )}
      </StyledBottomWrapper>
    </StyledWrapper>
  );
};

interface Props {
  profilePicture: string;
  content: string;
  time: number;
  isFriend?: boolean;
  isRead?: boolean;
  isSent?: boolean;
  shouldDisplayStatus?: boolean;
}
