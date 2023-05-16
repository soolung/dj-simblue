import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Icon } from "../Icon";
import Text from "../Text";
import { DateType, getMonthDate, getNewDateObj } from "../../utils/date";
import { OptionPicker } from "./OptionPicker";

const days = ["일", "월", "화", " 수", "목", "금", "토"];

export const DatePicker = () => {
  const [selected, setSelected] = useState<DateType>(getNewDateObj(new Date()));
  const [selectedMonth, setSelectedMonth] = useState(getMonthDate(selected));
  const [isOpened, setIsOpened] = useState(false);
  const [clickedOption, setClickedOption] = useState<"month" | "year">("month");

  const moveSelectedMonth = (type: "last" | "next") => {
    if (type === "last") {
      if (selected.month > 1) setSelected({ ...selected, month: selected.month - 1 });
      else setSelected({ ...selected, year: selected.year - 1, month: 12 });
    }
    if (type === "next") {
      if (selected.month < 12) setSelected({ ...selected, month: selected.month + 1 });
      else setSelected({ ...selected, year: selected.year + 1, month: 1 });
    }
  };

  useEffect(() => {
    setSelectedMonth(getMonthDate(selected));
  }, [selected]);

  return (
    <>
      {isOpened && (
        <OptionPicker
          setClicked={setIsOpened}
          selected={selected}
          setSelected={setSelected}
          type={clickedOption}
        />
      )}
      <S.PickerStyle>
        <S.Head>
          <Icon
            onClick={() => moveSelectedMonth("last")}
            iconName="ArrowBack"
            style={{ cursor: "pointer" }}
          />
          <S.HeadNow>
            <S.HeadPicker
              onClick={() => {
                setIsOpened(true);
                setClickedOption("year");
              }}>
              <Text typo="LABEL_MEDIUM">{selected.year}년</Text>
              <Icon iconName="ArrowDown" />
            </S.HeadPicker>
            <S.HeadPicker
              onClick={() => {
                setIsOpened(true);
                setClickedOption("month");
              }}>
              <Text typo="LABEL_MEDIUM">{selected.month}월</Text>
              <Icon iconName="ArrowDown" />
            </S.HeadPicker>
          </S.HeadNow>
          <Icon
            onClick={() => moveSelectedMonth("next")}
            iconName="ArrowFront"
            style={{ cursor: "pointer" }}
          />
        </S.Head>
        <S.TableRows>
          {days.map((d) => (
            <S.HeadRow>
              <Text typo="PARAGRAPH_SMALL" textColor="GRAY_800">
                {d}
              </Text>
            </S.HeadRow>
          ))}
        </S.TableRows>
        {selectedMonth.date.map((w) => (
          <S.TableRows>
            {w.map((m) => (
              <S.TableRow
                onDragEnter={() => console.log(m)}
                onClick={() => setSelected(m)}
                isSelected={m.date === selected.date && m.month === selected.month}>
                <Text
                  typo="PARAGRAPH_SMALL"
                  textColor={
                    m.month !== selected.month
                      ? "GRAY_400"
                      : m.date === selected.date && m.month === selected.month
                      ? "MONO_WHITE"
                      : "MONO_BLACK"
                  }>
                  {m.date}
                </Text>
              </S.TableRow>
            ))}
          </S.TableRows>
        ))}
      </S.PickerStyle>
    </>
  );
};
