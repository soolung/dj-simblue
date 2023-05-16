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

export const YearPicker = ({ selected, setSelected, setClicked }: OptionProps) => {
  const [date, setDate] = useState(selected);
  const [years, setYears] = useState([
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
  ]);

  const moveDate = (angle: "last" | "next") => {
    if (angle === "last") setYears(years.map((y) => y - 12));
    else setYears(years.map((y) => y + 12));
  };

  const select = (item: number) => {
    setSelected({ ...selected, year: item });
    setClicked(false);
  };

  return (
    <S.PickerStyle style={{ zIndex: "4" }}>
      <S.Head>
        <Icon onClick={() => moveDate("last")} iconName="ArrowBack" style={{ cursor: "pointer" }} />
        <S.HeadNow>
          <S.HeadPicker>
            <Text typo="LABEL_MEDIUM">
              {years[0]}년 ~ {years[11]}년
            </Text>
          </S.HeadPicker>
        </S.HeadNow>
        <Icon
          onClick={() => moveDate("next")}
          iconName="ArrowFront"
          style={{ cursor: "pointer" }}
        />
      </S.Head>
      <S.Rows>
        {years.map((m) => (
          <S.Row onClick={() => select(m)} isSelected={m === selected.year}>
            <Text typo="LABEL_SMALL" textColor={m === selected.year ? "MONO_WHITE" : "MONO_BLACK"}>
              {m}
            </Text>
          </S.Row>
        ))}
      </S.Rows>
    </S.PickerStyle>
  );
};
