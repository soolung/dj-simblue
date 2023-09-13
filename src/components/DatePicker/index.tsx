import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Icon } from "../Icon";
import Text from "../Text";
import { DateType, fromDate, getMonthDate, toDate } from "../../utils/date";
import { OptionPicker } from "./OptionPicker";

const days = ["일", "월", "화", " 수", "목", "금", "토"];

interface DatePickerProps {
  handleSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  handleEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const DatePicker = ({ handleSelectedDate, handleEndDate }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<DateType>(fromDate(new Date()));
  const [endDate, setEndDate] = useState<DateType | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(getMonthDate(selectedDate));
  const [isPickerOpened, setIsPickerOpened] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [clickedOption, setClickedOption] = useState<"month" | "year">("month");

  useEffect(() => {
    handleSelectedDate(toDate(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    handleEndDate(endDate && toDate(endDate));
  }, [endDate])

  const moveSelectedMonth = (type: "last" | "next") => {
    if (type === "last") {
      if (selectedDate.month > 1) setSelectedDate({ ...selectedDate, month: selectedDate.month - 1 });
      else setSelectedDate({ ...selectedDate, year: selectedDate.year - 1, month: 12 });
    }
    if (type === "next") {
      if (selectedDate.month < 12) setSelectedDate({ ...selectedDate, month: selectedDate.month + 1 });
      else setSelectedDate({ ...selectedDate, year: selectedDate.year + 1, month: 1 });
    }
    setEndDate(null);
    setSelectedDate({ ...selectedDate, date: 1 });
  };

  const selectDate = (item: DateType) => {
    if (
      item.date === selectedDate.date &&
      item.month === selectedDate.month &&
      item.year === selectedDate.year
    ) {
      setSelectedDate(item);
      setEndDate(null);
    } else if (endDate === null) {
      if (item.date < selectedDate.date && item.month > selectedDate.month) setEndDate(item);
      else if (item.date < selectedDate.date || item.month < selectedDate.month) {
        setEndDate(selectedDate);
        setSelectedDate(item);
      } else setEndDate(item);
    } else {
      setSelectedDate(item);
      setEndDate(null);
    }
  };

  const getStateOfDate = (date: DateType) => {
    if (endDate !== null) {
      if (date.date === selectedDate.date && date.month === selectedDate.month) return "START";
      else if (date.date === endDate?.date && date.month === endDate?.month) return "END";
      else if (
        date.date > selectedDate.date &&
        date.date < endDate?.date &&
        date.month === selectedDate.month
      )
        return "ELEMENT";
      else if (endDate.month > selectedDate.month) {
        if (date.date > selectedDate.date && date.month === selectedDate.month) return "ELEMENT";
        else if (date.date < endDate.date && date.month === endDate.month) return "ELEMENT";
      }
    } else if (date.date === selectedDate.date && date.month === selectedDate.month) return "POINT";
    else return "NONE";
  };

  useEffect(() => {
    setSelectedMonth(getMonthDate(selectedDate));
  }, [selectedDate]);

  return (
    <S.Container>
      <Text
        onClick={() => setIsPickerOpened((prev) => !prev)}
        typo="PARAGRAPH_SMALL"
        textColor="GRAY_700">
        {selectedDate.year}.{selectedDate.month}.{selectedDate.date}
        {endDate && ` ~ ${endDate.year}.${endDate.month}.${endDate.date}`}
      </Text>
      {isPickerOpened && (
        <>
          {isOpened && (
            <OptionPicker
              setClicked={setIsOpened}
              selected={selectedDate}
              setSelected={setSelectedDate}
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
                  <Text typo="LABEL_MEDIUM">{selectedDate.year}년</Text>
                  <Icon iconName="ArrowDown" />
                </S.HeadPicker>
                <S.HeadPicker
                  onClick={() => {
                    setIsOpened(true);
                    setClickedOption("month");
                  }}>
                  <Text typo="LABEL_MEDIUM">{selectedDate.month}월</Text>
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
                            : m.month !== selectedDate.month
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
      )}
    </S.Container>
  );
};

export default DatePicker;
