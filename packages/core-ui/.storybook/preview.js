import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";

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
      <div className="wrapper">
        <Story />
      </div>
    </ThemeProvider>
  ),
];
