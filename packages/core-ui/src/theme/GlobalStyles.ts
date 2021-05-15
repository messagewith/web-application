import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
  }

  button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }

  *:focus {
      border: 1px dashed ${({ theme }) => theme.washMedium};
      outline: none;
  }
`;
