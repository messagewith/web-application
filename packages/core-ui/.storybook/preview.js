import { ThemeProvider } from "styled-components";
import { I18nProvider } from "@messagewith/i18n";
import "@messagewith/emoji/lib/joypixels/joypixels-sprite-24.min.css";
import "@messagewith/emoji/lib/joypixels/joypixels-sprite-32.min.css";
import { theme } from "../src/theme/theme";
import { GlobalStyles } from "../src/theme/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="wrapper">
        <I18nProvider>
          <Story />
        </I18nProvider>
      </div>
    </ThemeProvider>
  ),
];
