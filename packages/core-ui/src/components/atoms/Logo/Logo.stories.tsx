import React from "react";
import { Logo } from "./Logo";

export default {
  title: "atoms/Logo",
};

export const Primary = () => <Logo />;

export const OnlyIcon = () => <Logo onlyIcon />;
