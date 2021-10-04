import React, { useState } from "react";
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

const useLoading = () => {
  const [isLoading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
  };

  return { isLoading, onClick };
};

export const Primary: Story = () => {
  const { isLoading, onClick } = useLoading();

  return (
    <Button type="primary" onClick={onClick} isLoading={isLoading}>
      Follow
    </Button>
  );
};

export const Secondary: Story = () => {
  const { isLoading, onClick } = useLoading();

  return (
    <StyledSecondaryButton
      type="secondary"
      isLoading={isLoading}
      onClick={onClick}
    >
      Log in
    </StyledSecondaryButton>
  );
};

export const Tertiary: Story = () => {
  const { isLoading, onClick } = useLoading();

  return (
    <StyledTertiaryButton
      type="tertiary"
      isLoading={isLoading}
      onClick={onClick}
    >
      Register
    </StyledTertiaryButton>
  );
};

export const withSocial: Story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoading, onClick } = useLoading();
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
      isLoading={isLoading}
      onClick={onClick}
    >
      Log in with {socialType}
    </StyledSocialButton>
  );
};

export const Confirm: Story = () => {
  const { isLoading, onClick } = useLoading();

  return (
    <Button type="confirm" onClick={onClick} isLoading={isLoading}>
      Ok, I'll be waiting
    </Button>
  );
};
