"use client";
import { EventCard, EventCardProps } from "~/components/event-card/EventCard";
import dayjs from "dayjs";
import { useState } from "react";
import { calendarFilterList, CalendarFilterListData } from "~/api-client";
import { useQuery } from "@tanstack/react-query";
import { LoadingOrError } from "~/components";

const currentMonth = dayjs().month() + 1;
const currentYear = dayjs().year();

const EventsCalendarSection: React.FC = () => {
  const [queryFilters, setQueryFilters] = useState<
    CalendarFilterListData["query"]
  >({
    competition_type: undefined,
    distance_max: undefined,
    distance_min: undefined,
    month: currentMonth,
    year: currentYear,
    name: undefined,
    page: undefined,
    place: undefined,
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["calendarFilteredEvents", queryFilters],
    queryFn: async () => {
      const response = await calendarFilterList({ query: queryFilters });
      console.log(`queryFn`);
      console.log(response.response);
      if (response.data && response.response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.response.statusText);
      }
    },
    enabled: Object.values(queryFilters ?? {}).some(
      (value) => value !== "" && value !== undefined
    ),
  });

  if (isLoading || isError) {
    return <LoadingOrError {...{ isError, isLoading }} />;
  }

  const events: EventCardProps[] = [];

  const eventsByMonths: {
    events: EventCardProps[];
    monthNumber: number;
    yearNumber: number;
  }[] = [];

  events.forEach((event) => {
    // get month and year of event
    // check if `eventsByMonths` already has an entry for this month
    // if it does, add the event to the entry
    // if it doesn't, create a new entry for this month

    const month = event.date.month();
    const year = event.date.year();
    const eventsOfMonth = eventsByMonths.find((entry) => {
      return entry.monthNumber === month && entry.yearNumber === year;
    });
    if (eventsOfMonth) {
      eventsOfMonth.events.push(event);
    } else {
      eventsByMonths.push({
        events: [event],
        monthNumber: month,
        yearNumber: year,
      });
    }
  });

  // TODO show placeholder if no events

  return (
    <div className={`px-2.5 py-12 lg:px-16 lg:py-20 xl:py-32`}>
      <div className={`mx-auto flex w-full max-w-content-limit flex-col gap-4`}>
        <div className={`gap flex flex-col gap-6 md:gap-8`}>
          {eventsByMonths.map((eventsGroup) => (
            <div
              key={`${eventsGroup.monthNumber}-${eventsGroup.yearNumber}`}
              className={`flex flex-col gap-4 md:gap-6`}
            >
              <div
                className={`w-full rounded-lg bg-grey-light-dark px-4 py-2 text-base font-semibold uppercase text-dark md:text-xl`}
              >
                {dayjs()
                  .month(eventsGroup.monthNumber)
                  .year(eventsGroup.yearNumber)
                  .format("MMMM YYYY")}
              </div>
              <div
                className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3`}
              >
                {eventsGroup.events.map((event, i) => (
                  // TODO change to event id
                  <EventCard key={i} {...event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCalendarSection;
