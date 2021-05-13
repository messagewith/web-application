import React from "react";
import styled from "styled-components";
import { I18nProvider } from "@messagewith/i18n";
import ChangeLanguage from "./ChangeLanguage";

export default {
  title: "ChangeLanguage",
};

const StyledWrapper = styled.div`
  margin-top: 50px;
`;

export const Primary = () => (
  <I18nProvider>
    <StyledWrapper>
      <ChangeLanguage />
    </StyledWrapper>
  </I18nProvider>
);
