import React from "react";
import { Story } from "@storybook/react";
import styled from "styled-components";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Button } from "./Button";

export default {
  title: "atoms/Button",
  decorators: [withKnobs],
};

const StyledSecondaryButton = styled(Button)`
  width: 410px;
`;

const StyledTertiaryButton = styled(Button)`
  width: 410px;
`;

const StyledSocialButton = styled(Button)`
  width: 410px;
`;

export const Primary: Story = () => <Button type="primary">Follow</Button>;

export const Secondary: Story = () => (
  <StyledSecondaryButton type="secondary">Log in</StyledSecondaryButton>
);

export const Tertiary: Story = () => (
  <StyledTertiaryButton type="tertiary">Register</StyledTertiaryButton>
);

export const withSocial: Story = () => {
  const socialType = select(
    "Social Type",
    ["Facebook", "Github", "Google"],
    "Github"
  );

  return (
    <StyledSocialButton
      type="social"
      socialType={
        socialType.toLocaleLowerCase() as "facebook" | "github" | "google"
      }
    >
      Log in with {socialType}
    </StyledSocialButton>
  );
};

export const Confirm = () => (
  <Button type="confirm">Ok, I'll be waiting</Button>
);
