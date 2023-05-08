import type { StoryObj } from "@storybook/react";
import { Checkbox } from "../components/Inputs/Checkbox";

type Story = StoryObj<typeof Checkbox>;

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
};

export const Default: Story = {
  render: () => <Checkbox />,
};
