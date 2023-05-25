import React from "react";
import type { StoryObj } from "@storybook/react";
import { Icon } from "../components/Icon";

type Story = StoryObj<typeof Icon>;

export default {
  title: "Component/Icon",
  component: Icon,
};

export const Default: Story = {
  render: (args) => <Icon {...args} />,
};
