import { css, keyframes } from "styled-components";

const rippleAnimation = keyframes`
  0% {
    opacity: 0.6;
    transform: scale(0);
  }
  
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

export const rippleDefaultStyles = css`
  position: absolute;
  background: #fff;
  border-radius: 50%;
  transform: scale(0);
  pointer-events: none;
  opacity: 0;
  animation: ${rippleAnimation} 0.6s ease-out;
  transform-origin: center center;
`;
