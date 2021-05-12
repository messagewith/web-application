import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

export default {
  title: "Input",
};

const StyledInput = styled(Input)`
  width: 410px;
`;

export const Primary = () => <StyledInput type="text" />;
