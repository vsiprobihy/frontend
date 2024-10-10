"use client";
import { Button } from "~/components";
import {
  CalendarFilterActivityType,
  CalendarFilterInputs,
  CalendarFilterResetButton,
  EventsCounter,
  CalendarFilterDistance,
} from "./index";

import { useQuery } from "@tanstack/react-query";

import { calendarFilterList } from "~/api-client/services.gen";
import {
  CalendarFilterListData,
  CalendarFilterListResponse,
} from "~/api-client/types.gen";
import { useState } from "react";

const text = {
  title: `Календар`,
  addEvent: `Зареєструвати ваш захід на сайті`,
};

export interface FiltersState {
  page: number;
  competition_type: string;
  name: string;
  month: number | "";
  year: number | "";
  place: string;
  distance_min: number | "";
  distance_max: number | "";
}

export const CalendarFilterSection: React.FC = () => {
  const [queryData, setQueryData] = useState<CalendarFilterListData["query"]>({
    competition_type: "",
    distance_max: undefined,
    distance_min: undefined,
    month: undefined,
    name: "",
    page: "1",
    place: "",
    year: undefined,
  });

  const { data } = useQuery<CalendarFilterListResponse>({
    queryKey: ["calendarFilterList", queryData],
    queryFn: async () => {
      const response = await calendarFilterList({ query: queryData });
      if (response.data && response.response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.response.statusText);
      }
    },
    enabled: Object.values(queryData ?? {}).some(
      (value) => value !== "" && value !== undefined
    ),
  });

  const handleFilterChange = (
    newFilters: Partial<CalendarFilterListData["query"]>
  ) => {
    setQueryData((prev) => ({ ...prev, ...newFilters }));
  };

  console.log(data);

  return (
    <div
      className={`flex h-screen flex-col justify-end bg-dark px-2.5 pb-8 pt-2.5 md:justify-center md:p-8 xl:p-16`}
    >
      <div
        className={`mx-auto flex w-full max-w-content-limit flex-col gap-8 md:flex md:flex-col md:gap-16`}
      >
        <div
          className={`flex flex-col gap-5 md:flex-row md:items-center md:justify-between`}
        >
          {/*  Title & Add Event Button*/}
          <h1 className={`h1 text-white`}>{text.title}</h1>
          <Button onClick={() => {}}>{text.addEvent}</Button>
        </div>
        <div
          className={`flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:gap-16`}
        >
          {/*  Filter Tags & Filter Inputs*/}
          <div className={`flex flex-col gap-6`}>
            <CalendarFilterActivityType onChange={handleFilterChange} />
            <CalendarFilterDistance onChange={handleFilterChange} />
          </div>
          <div className={`lg:col-span-2`}>
            <CalendarFilterInputs onChange={handleFilterChange} />
          </div>
        </div>
        <div
          className={`flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between`}
        >
          <EventsCounter />
          <CalendarFilterResetButton />
        </div>
      </div>
    </div>
  );
};
