import React from "react";
import { SsamblueLogo, SimblueLogo } from "../components/Logo";
import { StoryObj } from "@storybook/react";

type Story = StoryObj<typeof SimblueLogo>;
type SsamStory = StoryObj<typeof SsamblueLogo>;

export default {
  title: "Component/Logo",
  component: SimblueLogo,
};

export const Simblue: Story = {
  render: (args) => <SimblueLogo {...args} />,
};

export const SsamBlue: SsamStory = {
  render: (args) => <SsamblueLogo {...args} />,
};
