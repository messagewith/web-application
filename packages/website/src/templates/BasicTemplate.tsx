import React, { FC } from "react";
import { I18nProvider } from "@messagewith/i18n";
import { theme } from "@messagewith/core-ui";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";

const BasicTemplate: FC = ({ children }) => (
  <I18nProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </I18nProvider>
);

export default BasicTemplate;
