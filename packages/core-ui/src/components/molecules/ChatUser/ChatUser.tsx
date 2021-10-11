import React, { FC } from "react";
import styled, { css } from "styled-components";
import { AccountProfilePicture } from "../../atoms/AccountProfilePicture/AccountProfilePicture";

const StyledWrapper = styled.div<{ $isActive?: boolean }>`
  display: flex;
  width: 420px;
  border-radius: ${({ theme }) => theme.borderRadiusXL};
  padding: 20px;
  align-items: center;
  position: relative;
  height: 100px;
  cursor: pointer;
  transition: 0.1s background ease-in-out;

  :hover {
    background: ${({ theme }) => theme.washSuperLight};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${({ theme }) => theme.washLight};

      :hover {
        background: ${({ theme }) => theme.washLight};
        cursor: default;
      }
    `}

  > div {
    display: flex;
    flex-direction: column;

    :nth-of-type(2) {
      margin-left: 20px;
    }

    :nth-of-type(3) {
      margin-left: auto;
      height: 90%;
      justify-content: space-between;
    }
  }
`;

const StyledName = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 3px;
`;

const StyledMessage = styled.span<{ $isNotReaded: boolean }>`
  color: ${({ theme }) => theme.washHeavy};
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ $isNotReaded }) =>
    $isNotReaded &&
    css`
      color: ${({ theme }) => theme.foreground};
    `}
`;

const StyledTime = styled.span<{ $isNotReaded: boolean }>`
  font-family: "Inconsolata", monospace;
  font-weight: 500;
  color: ${({ theme }) => theme.washHeavy};
  line-height: 1;

  ${({ $isNotReaded }) =>
    $isNotReaded &&
    css`
      color: ${({ theme }) => theme.foreground};
    `}
`;

const StyledCount = styled.div`
  width: 22px;
  height: 22px;
  background: ${({ theme }) => theme.washLight};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadiusR};
  font-size: 1.4rem;
  margin-left: auto;
`;

export const ChatUser: FC<Props> = ({
  user,
  latestMessage,
  isActive,
  className,
}) => {
  const isNotReaded = latestMessage.count > 0;

  return (
    <StyledWrapper $isActive={isActive} className={className}>
      <AccountProfilePicture picture={user.profilePicture} name={user.name} />
      <div>
        <StyledName>{user.name}</StyledName>
        <StyledMessage $isNotReaded={isNotReaded}>
          {latestMessage.content}
        </StyledMessage>
      </div>
      <div>
        <StyledTime $isNotReaded={isNotReaded}>
          {new Intl.DateTimeFormat("pl-PL", {
            hour: "numeric",
            minute: "numeric",
          }).format(latestMessage.time)}
        </StyledTime>
        {isNotReaded && <StyledCount>{latestMessage.count}</StyledCount>}
      </div>
    </StyledWrapper>
  );
};

interface Props {
  user: {
    profilePicture: string;
    name: string;
    isActive: boolean;
  };
  latestMessage: {
    count: number;
    content: string;
    time: number;
  };
  isActive?: boolean;
  className?: string;
}
