import type { StoryObj } from "@storybook/react";
import { TextInput } from "../components/Inputs/TextInput/TextInput";
import { Icon } from "../components/Icon";

type Story = StoryObj<typeof TextInput>;

export default {
  title: "Component/Inputs",
  component: TextInput,
};

export const Text: Story = {
  render: (args) => (
    <div style={{ width: "calc(100% - 32px)" }}>
      <TextInput {...args} />
    </div>
  ),
};

export const TextWithIcon: Story = {
  render: (args) => (
    <div style={{ width: "calc(100% - 32px)" }}>
      <TextInput {...args}>
        <Icon iconName="User" />
      </TextInput>
    </div>
  ),
};
