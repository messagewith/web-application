import { useState } from "react";

interface Options {
  rippleWidth?: number;
}

export const useButtonEffects = ({ rippleWidth = 260 }: Options = {}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    document.addEventListener("mouseup", () => setIsPressed(false));

    const span = document.createElement("span");
    const rects = e.currentTarget.getBoundingClientRect();

    const halfRippleWidth = rippleWidth / 2;

    const left = e.clientX - rects.left - halfRippleWidth;
    const top = e.clientY - rects.top - halfRippleWidth;
    span.classList.add("ripple");

    span.style.left = `${left}px`;
    span.style.top = `${top}px`;

    e.currentTarget.appendChild(span);

    setTimeout(() => span.remove(), 600);

    return () => {
      document.removeEventListener("mouseup", () => setIsPressed(false));
    };
  };

  return {
    isPressed,
    onMouseDown,
  };
};
