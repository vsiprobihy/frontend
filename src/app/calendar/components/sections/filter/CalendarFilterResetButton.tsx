"use client";
import { useCalendarFilterParams } from "@/libs/hooks/calendar-filters/useCalendarFilterParams";
import { Button } from "~/components";

const text = `Скинути всі фільтри`;

//   TODO complete logic

export const CalendarFilterResetButton: React.FC = () => {
  const { resetCalendarFilterParams } = useCalendarFilterParams();
  const onClick = () => {
    //   TODO
    resetCalendarFilterParams();
  };

  return <Button onClick={onClick}>{text}</Button>;
};
