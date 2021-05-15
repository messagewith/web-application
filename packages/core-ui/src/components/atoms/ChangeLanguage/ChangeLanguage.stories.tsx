import React from "react";
import styled from "styled-components";
import { ChangeLanguage } from "./ChangeLanguage";

export default {
  title: "atoms/ChangeLanguage",
};

const StyledWrapper = styled.div`
  margin-top: 50px;
`;

export const Primary = () => (
  <StyledWrapper>
    <ChangeLanguage />
  </StyledWrapper>
);
