import type { StoryObj } from "@storybook/react";
import { Dropdown } from "../components/Dropdown";
import { DropItem } from "../components/Dropdown/DropItem";
import { optionItem } from "../components/Dropdown/type";
import { useState } from "react";

const exampleOptions: optionItem[] = [
  {
    name: "전체",
    state: "ENABLED",
  },
  {
    name: "최신순",
    state: "ENABLED",
  },

  {
    name: "오래된순",
    state: "ENABLED",
  },
  {
    name: "좋아요순",
    state: "DISABLED",
  },
];

type Story = StoryObj<typeof Dropdown>;

export default {
  title: "Component/Dropdown",
  component: Dropdown,
};

export const Default: Story = {
  render: () => <DefaultSearch />,
};

const DefaultSearch = () => {
  const [selected, setSelected] = useState(exampleOptions[0]);
  const [isClicked, setIsClicked] = useState(false);

  const selectItem = (item: optionItem) => {
    setSelected(item);
    setIsClicked(false);
  };

  return (
    <div style={{ width: "23.5rem" }}>
      <Dropdown isClicked={isClicked} setIsClicked={setIsClicked} selectedItem={selected}>
        {exampleOptions
          .filter((i) => i.name !== selected.name)
          .map((o) => (
            <DropItem dropItem={o} onClick={() => selectItem(o)} />
          ))}
      </Dropdown>
    </div>
  );
};
