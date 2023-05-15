import type { StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge";
import { Icon } from "../components/Icon";

type Story = StoryObj<typeof Badge>;

export default {
  title: "Component/Badge",
  component: Badge,
};

export const Default: Story = {
  render: (args) => <Badge {...args} />,
};

export const WithIcon: Story = {
  render: (args) => (
    <Badge {...args}>
      <Icon size="SMALL" iconName="ArrowBack" />
    </Badge>
  ),
};
