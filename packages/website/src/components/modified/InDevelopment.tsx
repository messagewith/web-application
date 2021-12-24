import React from "react";
import { InDevelopment } from "@messagewith/core-ui";
import packageJson from "../../../package.json";

const ModifiedInDevelopment = () => (
  <InDevelopment githubLink="https://github.com/messagewith/messagewith">
    Early Alpha {packageJson.version}
  </InDevelopment>
);

export default ModifiedInDevelopment;
