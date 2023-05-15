import { StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

type Story = StoryObj<typeof Button>;

export default {
  title: "Component/Button",
  component: Button,
};

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Icon size="SMALL" iconName="ArrowBack" color="MONO_WHITE" />
    </Button>
  ),
};
