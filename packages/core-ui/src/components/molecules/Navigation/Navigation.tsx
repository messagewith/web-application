import React, { FC } from "react";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import houseIcon from "@iconify/icons-ph/house";
import videoIcon from "@iconify/icons-ph/monitor-play";
import chatIcon from "@iconify/icons-ph/chats-circle";
import userIcon from "@iconify/icons-ph/user-circle";
import groupIcon from "@iconify/icons-la/users";
import notificationsIcon from "@iconify/icons-ph/bell";
import settingsIcon from "@iconify/icons-ph/gear";
import logOutIcon from "@iconify/icons-ic/round-log-out";
import { Logo } from "../../atoms/Logo/Logo";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100px;
  background: ${(props) => props.theme.primaryToTertiaryGradient};
  position: fixed;
  left: 0;
  top: 0;
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavigationBottomItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationCenterItems = styled(NavigationBottomItems)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NavigationItem = styled.button<{ $isActive?: boolean }>`
  font-size: 3.8rem;
  background: transparent;
  padding: 5px;
  margin: 0 0 15px 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  position: relative;

  :last-of-type {
    margin-bottom: 0;
  }

  svg {
    color: #fff;
    opacity: 0.6;
    transition: opacity 0.2s ease-in-out;
  }

  :hover svg {
    opacity: 0.9;
  }

  :active {
    transform: scale(0.9);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: rgba(255, 255, 255, 0.1);
      cursor: default;

      :hover svg {
        opacity: 1;
      }

      :active {
        transform: scale(1);
      }

      svg {
        opacity: 1;
      }
    `}
`;

const StyledNavigationItemNotificationsCount = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.tertiaryDark};
  color: ${(props) => props.theme.background};
  border-radius: 50%;
  position: absolute;
  right: 5px;
  top: 5px;

  span {
    font-size: 1.1rem;
  }
`;

const Navigation: FC<Props> = ({ newMessages, notifications }) => {
  const displayCount = (count: number): string =>
    count > 99 ? "<span>+99</span>" : count.toString();

  return (
    <StyledWrapper>
      <Logo color="#fff" onlyIcon />
      <NavigationCenterItems>
        <NavigationItem>
          <Icon icon={houseIcon} />
        </NavigationItem>
        <NavigationItem>
          <Icon icon={videoIcon} />
        </NavigationItem>
        <NavigationItem $isActive>
          <Icon icon={chatIcon} />
          {newMessages && (
            <StyledNavigationItemNotificationsCount
              dangerouslySetInnerHTML={{ __html: displayCount(newMessages) }}
            />
          )}
        </NavigationItem>
        <NavigationItem>
          <Icon icon={userIcon} />
        </NavigationItem>
        <NavigationItem>
          <Icon icon={groupIcon} />
        </NavigationItem>
      </NavigationCenterItems>

      <NavigationBottomItems>
        <NavigationItem>
          <Icon icon={notificationsIcon} />
          {notifications && (
            <StyledNavigationItemNotificationsCount
              dangerouslySetInnerHTML={{ __html: displayCount(notifications) }}
            />
          )}
        </NavigationItem>
        <NavigationItem>
          <Icon icon={settingsIcon} />
        </NavigationItem>
        <NavigationItem>
          <Icon icon={logOutIcon} />
        </NavigationItem>
      </NavigationBottomItems>
    </StyledWrapper>
  );
};

interface Props {
  newMessages?: number;
  notifications?: number;
}

export default Navigation;
