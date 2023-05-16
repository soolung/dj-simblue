import React from "react";
import { DateType } from "../../../utils/date";
import { MonthPicker } from "./Month";
import { YearPicker } from "./Year";

type OptionProps = {
  selected: DateType;
  setSelected: React.Dispatch<React.SetStateAction<DateType>>;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  type: "month" | "year";
};

export const OptionPicker = ({
  selected,
  setSelected,
  setClicked,
  type = "month",
}: OptionProps) => {
  return type === "month" ? (
    <MonthPicker selected={selected} setSelected={setSelected} setClicked={setClicked} />
  ) : (
    <YearPicker selected={selected} setSelected={setSelected} setClicked={setClicked} />
  );
};
