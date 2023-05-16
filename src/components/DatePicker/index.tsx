import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Icon } from "../Icon";
import Text from "../Text";
import { DateType, getMonthDate, getNewDateObj } from "../../utils/date";
import { OptionPicker } from "./OptionPicker";

const days = ["일", "월", "화", " 수", "목", "금", "토"];

export const DatePicker = () => {
  const [selected, setSelected] = useState<DateType>(getNewDateObj(new Date()));
  const [endDate, setEndDate] = useState<DateType | null>(null);
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
    setEndDate(null);
    setSelected({ ...selected, date: 1 });
  };

  const selectDate = (item: DateType) => {
    if (
      item.date === selected.date &&
      item.month === selected.month &&
      item.year === selected.year
    ) {
      setSelected(item);
      setEndDate(null);
    } else if (endDate === null) {
      if (item.date < selected.date && item.month > selected.month) setEndDate(item);
      else if (item.date < selected.date || item.month < selected.month) {
        setEndDate(selected);
        setSelected(item);
      } else setEndDate(item);
    } else {
      setSelected(item);
      setEndDate(null);
    }
  };

  const getStateOfDate = (date: DateType) => {
    if (endDate !== null) {
      if (date.date === selected.date && date.month === selected.month) return "START";
      else if (date.date === endDate?.date && date.month === endDate?.month) return "END";
      else if (
        date.date > selected.date &&
        date.date < endDate?.date &&
        date.month === selected.month
      )
        return "ELEMENT";
      else if (endDate.month > selected.month) {
        if (date.date > selected.date && date.month === selected.month) return "ELEMENT";
        else if (date.date < endDate.date && date.month === endDate.month) return "ELEMENT";
      }
    } else if (date.date === selected.date && date.month === selected.month) return "POINT";
    else return "NONE";
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
              <S.RowBox state={getStateOfDate(m)}>
                <S.TableRow
                  onDragEnter={() => console.log(m)}
                  onClick={() => selectDate(m)}
                  state={getStateOfDate(m)}>
                  <Text
                    typo="PARAGRAPH_SMALL"
                    textColor={
                      getStateOfDate(m) === "START" ||
                      getStateOfDate(m) === "END" ||
                      getStateOfDate(m) === "POINT"
                        ? "MONO_WHITE"
                        : m.month !== selected.month
                        ? "GRAY_400"
                        : "MONO_BLACK"
                    }>
                    {m.date}
                  </Text>
                </S.TableRow>
              </S.RowBox>
            ))}
          </S.TableRows>
        ))}
      </S.PickerStyle>
    </>
  );
};
