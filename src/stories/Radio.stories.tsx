import React from "react";
import type { StoryObj } from "@storybook/react";
import { Radio } from "../components/Inputs/Radio";

type Story = StoryObj<typeof Radio>;

export default {
  title: "Inputs/Radio",
  component: Radio,
};

export const Default: Story = {
  render: () => <Radio />,
};
