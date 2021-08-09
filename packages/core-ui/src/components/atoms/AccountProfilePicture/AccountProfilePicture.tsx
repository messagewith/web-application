import React, { FC } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 60px;
  height: 60px;
  position: relative;

  span {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.available};
    border-radius: 50%;
  }
`;

const StyledPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const AccountProfilePicture: FC<Props> = ({
  picture,
  name,
  className,
  isActive,
}) => (
  <StyledWrapper className={className}>
    <StyledPicture src={picture} alt={name} />
    {isActive && <span />}
  </StyledWrapper>
);

interface Props {
  picture: string;
  name: string;
  isActive?: boolean;
  className?: string;
}
