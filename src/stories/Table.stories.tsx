import React from "react";
import type { StoryObj } from "@storybook/react";
import Table, { HeadType, TableItem, TableRow } from "../components/Table";
import Text from "../components/Text";

type Story = StoryObj<typeof Table>;

export default {
  title: "Component/Table",
  component: Table,
};

const example: HeadType[] = [
  {
    name: "학번",
    size: "small",
  },
  {
    name: "이름",
    size: "small",
  },
  {
    name: "이동 장소",
    size: "small",
  },
];

const sampleData = {
  list: [
    {
      number: 3203,
      name: "김혜린",
      place: "데이터네트워크실",
    },
    {
      number: 3203,
      name: "김혜린",
      place: "데이터네트워크실",
    },
    {
      number: 3203,
      name: "김혜린",
      place: "데이터네트워크실",
    },
  ],
};

export const Default: Story = {
  render: (args) => (
    <Table {...args} headTitle={example}>
      {sampleData.list.map((s) => (
        <TableRow>
          <TableItem>
            <Text typo="PARAGRAPH_SMALL" children={s.number} />
          </TableItem>
          <TableItem>
            <Text typo="PARAGRAPH_SMALL" children={s.name} />
          </TableItem>
          <TableItem>
            <Text typo="PARAGRAPH_SMALL" children={s.place} />
          </TableItem>
        </TableRow>
      ))}
    </Table>
  ),
};
