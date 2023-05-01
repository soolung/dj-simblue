import type { StoryObj } from "@storybook/react";
import { TextInput } from "../components/Inputs/TextInput/TextInput";
import { iconNames } from "../utils/stories";

type Story = StoryObj<typeof TextInput>;

export default {
  title: "Inputs/TextInput",
  component: TextInput,
  argTypes: {
    icon: { control: "select", options: iconNames },
  },
};

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "calc(100% - 32px)" }}>
      <TextInput {...args} />
    </div>
  ),
};
