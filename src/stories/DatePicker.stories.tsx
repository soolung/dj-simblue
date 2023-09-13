import type { StoryObj } from "@storybook/react";
import { DatePicker } from "../components/DatePicker";
import { useState } from 'react';

type Story = StoryObj<typeof DatePicker>;

export default {
  title: "Component/DatePicker",
  component: DatePicker,
};

export const Default: Story = {
  render: () => <DefaultDatePicker />,
};

const DefaultDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <DatePicker
      handleSelectedDate={setSelectedDate}
      handleEndDate={setEndDate}
    />
  );
}
