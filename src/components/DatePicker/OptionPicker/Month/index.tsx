import React, { useState } from "react";
import * as S from "../../style";
import Text from "../../../Text";
import { Icon } from "../../../Icon";
import { DateType } from "../../../../utils/date";

type OptionProps = {
  selected: DateType;
  setSelected: React.Dispatch<React.SetStateAction<DateType>>;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const MonthPicker = ({ selected, setSelected, setClicked }: OptionProps) => {
  const [date, setDate] = useState(selected);

  const moveDate = (angle: "last" | "next") => {
    if (angle === "last") setDate({ ...date, year: date.year - 1 });
    else setDate({ ...date, year: date.year + 1 });
  };

  const select = (item: number) => {
    setSelected({ ...selected, month: item, year: date.year });
    setClicked(false);
  };

  return (
    <S.PickerStyle style={{ zIndex: "4" }}>
      <S.Head>
        <Icon onClick={() => moveDate("last")} iconName="ArrowBack" style={{ cursor: "pointer" }} />
        <S.HeadNow>
          <S.HeadPicker>
            <Text typo="LABEL_MEDIUM">{date.year}년</Text>
          </S.HeadPicker>
        </S.HeadNow>
        <Icon
          onClick={() => moveDate("next")}
          iconName="ArrowFront"
          style={{ cursor: "pointer" }}
        />
      </S.Head>
      <S.Rows>
        {months.map((m) => (
          <S.Row onClick={() => select(m)} isSelected={m === selected.month}>
            <Text typo="LABEL_SMALL" textColor={m === selected.month ? "MONO_WHITE" : "MONO_BLACK"}>
              {m}월
            </Text>
          </S.Row>
        ))}
      </S.Rows>
    </S.PickerStyle>
  );
};
