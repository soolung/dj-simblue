import type { StoryObj } from "@storybook/react";
import { Icon } from "../components/Icon";
import { iconNames } from "../utils/stories";
import styled from "@emotion/styled";
import Text from "../components/Text";
import typo from "../theme/typo";

type Story = StoryObj<typeof Icon>;

export default {
  title: "Component/Icon",
  component: Icon,
};

export const Default: Story = {
  render: (args) => <Icon {...args} />,
};

const IconList = styled.div`
  display: flex;
  gap: 20px;
`;

export const List = () => (
  <>
    <Text typo={typo.LABEL.MEDIUM}>{iconNames.length} icons</Text>
    <IconList>
      {iconNames.map((name) => (
        <Icon iconName={name} size="LARGE" />
      ))}
    </IconList>
  </>
);
