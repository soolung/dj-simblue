import React from "react";
import type { StoryObj } from "@storybook/react";
import { Table } from "../components/Table";

type Story = StoryObj<typeof Table>;

export default {
  title: "Component/Table",
  component: Table,
};

export const Default: Story = {
  render: () => <Table />,
};
