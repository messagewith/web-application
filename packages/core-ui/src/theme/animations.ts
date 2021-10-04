import { keyframes } from "styled-components";

export const loadingAnimation = keyframes`
  0% {
    transform: rotate(0) translate(-50%, -50%);
  }
  
  100% {
    transform: rotate(360deg) translate(-50%, -50%);
  }
`;
