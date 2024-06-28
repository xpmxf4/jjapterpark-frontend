"use client";

import { useState } from "react";
import { useRecoilState } from "recoil";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "@emotion/styled";
import { format, isSameDay } from "date-fns";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const StyledCalendar = styled(Calendar)`
    &.react-calendar {
        border: none;
    }
    button {
        &.react-calendar__navigation__label {
            font-weight: bold;
        }
        &.react-calendar__navigation__arrow {
            color: #c8c8c8;
        }
        &.react-calendar__tile {
            :disabled {
                background-color: transparent;
                color: #ccc;
            }
        }
        &.react-calendar__navigation__label {
            flex-grow: 0 !important;
            width: 100px;
        }
    }
    abbr {
        text-decoration: none;
    }
    .react-calendar__month-view__weekdays {
        background-color: #f4f6f9;
        color: #666;
        border-radius: 14px;
        margin-bottom: 5px;
        height: 28px;
    }
    .react-calendar__tile--active {
        border-radius: 100%;
        background-color: #8e43e7;
        color: #fff;
    }
    .react-calendar__tile--active:enabled:focus {
        background-color: #8e43e7;
    }
    .react-calendar__tile:enabled:hover {
        background: white;
    }
    .react-calendar__tile--active:enabled:hover {
        background-color: #8e43e7;
    }
    .react-calendar__navigation {
        height: 20px;
        margin-top: 20px;
        justify-content: center;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
        background-color: transparent;
    }
`;

export default function Calander() {
    const [value, onChange] = useState<Value>(new Date(2024, 6, 20));

    const handleDateChange = (newDate: any) => {
        onChange(newDate);
        localStorage.setItem("selectedDate", newDate);
    };
    const availableDates = [new Date(2024, 6, 20), new Date(2024, 6, 21)];

    const tileDisabled = ({ date, view }: { date: any; view: any }) => {
        if (view === "month") {
            // 날짜가 선택 가능한 날짜 배열에 포함되지 않는 경우 비활성화
            return !availableDates.some((availableDate) => isSameDay(date, availableDate));
        }
        return false;
    };

    const formatMonthYear = (locale: any, date: any) => {
        return format(date, "yyyy. MM");
    };

    const formatShortWeekday = (locale: any, date: any) => {
        const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
        return weekdays[date.getDay()];
    };

    return (
        <div>
            <StyledCalendar
                next2Label={null} // 다음 해 버튼 비활성화
                prev2Label={null}
                formatMonthYear={formatMonthYear}
                locale="en-EN"
                onChange={handleDateChange}
                value={value}
                tileDisabled={tileDisabled}
                formatShortWeekday={formatShortWeekday}
            />
        </div>
    );
}
