import React from "react";
import type { StoryObj } from "@storybook/react";
import { DatePicker } from "../components/DatePicker";

type Story = StoryObj<typeof DatePicker>;

export default {
  title: "Component/DatePicker",
  component: DatePicker,
};

export const Default: Story = {
  render: () => <DatePicker />,
};
