import React from "react";
import { InDevelopment } from "./InDevelopment";

export default {
  title: "atoms/InDevelopment",
};

export const Primary = () => (
  <InDevelopment githubLink="https://github.com/messagewith/messagewith">
    Early Alpha 0.1.12
  </InDevelopment>
);
