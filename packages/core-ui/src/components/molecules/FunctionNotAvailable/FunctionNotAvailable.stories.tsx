import React, { useState } from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";
import { FunctionNotAvailable } from "./FunctionNotAvailable";
import { ChangeLanguage } from "../../atoms/ChangeLanguage/ChangeLanguage";

export default {
  title: "molecules/FunctionNotAvailable",
  component: FunctionNotAvailable,
};

const StyledChangeLanguage = styled(ChangeLanguage)`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Primary: Story = () => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <>
      <StyledChangeLanguage />
      <button onClick={() => setActive(true)} type="button">
        Click me
      </button>
      <FunctionNotAvailable
        isActive={isActive}
        onClose={() => setActive(false)}
      />
    </>
  );
};
