import React from "react";
import { DateType } from "../../../utils/date";
import { MonthPicker } from "./Month";
import { YearPicker } from "./Year";
import * as S from "../style";

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
  return (
    <S.PickerStyle style={{ zIndex: "4" }}>
      {type === "month" ? (
        <MonthPicker selected={selected} setSelected={setSelected} setClicked={setClicked} />
      ) : (
        <YearPicker selected={selected} setSelected={setSelected} setClicked={setClicked} />
      )}
    </S.PickerStyle>
  );
};
