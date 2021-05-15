import { ThemeProvider } from "styled-components";
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
        <Story />
      </div>
    </ThemeProvider>
  ),
];
