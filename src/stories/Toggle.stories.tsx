import type { StoryObj } from "@storybook/react";
import { Toggle } from "../components/Inputs/Toggle";

type Story = StoryObj<typeof Toggle>;

export default {
  title: "Inputs/Toggle",
  component: Toggle,
};

export const Default: Story = {
  render: (args) => <Toggle {...args} />,
};
