import React from "react";
import type { StoryObj } from "@storybook/react";
import { Search } from "../components/Inputs/Search";
import { SearchPerson } from "../components/Inputs/SearchPerson";

type Story = StoryObj<typeof Search>;

export default {
  title: "Inputs/Search",
  component: Search,
};

export const Default: Story = {
  render: (args) => <Search {...args} />,
};

export const Person: Story = {
  render: (args) => <SearchPerson {...args} />,
};
