import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export default createGlobalStyle`
  ${normalize};
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    color: #1f1f1f;
  }

  button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }

`;
