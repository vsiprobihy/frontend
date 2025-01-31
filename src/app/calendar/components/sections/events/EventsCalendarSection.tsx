"use client";
import { EventCard, EventCardProps } from "~/components/event-card/EventCard";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, LoadingOrError, NotFoundTemplate } from "~/components";
import {
  userPublicEventFilterList,
  UserPublicEventFilterListData,
  UserPublicEventFilterListResponse,
} from "~/api-client";
// import { useCalendarFilterParams } from "@/libs/hooks/calendar-filters/useCalendarFilterParams";

const EventsCalendarSection: React.FC = () => {
  const [events, setEvents] = useState<EventCardProps[]>([]);
  const [page, setPage] = useState(1);

  /// TODO use filterParams variable instead of queryFilters
  // const { filterParams } = useCalendarFilterParams();

  const queryFilters: UserPublicEventFilterListData["query"] = {
    competition_type: undefined,
    distance_max: undefined,
    distance_min: undefined,
    dateFrom: undefined,
    dateTo: undefined,
    name: undefined,
    page: `${page}`,
    place: undefined,
  };

  const { data, isError, isLoading } =
    useQuery<UserPublicEventFilterListResponse>({
      queryKey: ["userPublicEventFilter", queryFilters],
      queryFn: async (): Promise<UserPublicEventFilterListResponse> => {
        const response = await userPublicEventFilterList({
          query: queryFilters,
        });
        if (response.data && response.response.status === 200) {
          return response.data;
        } else {
          throw new Error(response.response.statusText);
        }
      },

      // the following line enables query only when at least one filter is set
      // enabled: Object.values(queryFilters ?? {}).some(
      //   (value) => value !== "" && value !== undefined
      // ),
    });
  ///

  console.log(`data`, data);

  // TODO remove the dummy events
  // events.push(...dummyRunningEvents(100));
  console.log(`events`, events);

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

    const dateStart = event.dates[0];

    const month = dateStart.month();
    const year = dateStart.year();
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
  // Sort events by month and year
  eventsByMonths.sort((a, b) => {
    if (a.yearNumber === b.yearNumber) {
      return a.monthNumber - b.monthNumber;
    }
    return a.yearNumber - b.yearNumber;
  });

  // Pagination

  const totalPages = data?.pagination.num_pages;
  const currentPage = data?.pagination.current_page;
  const hasMorePages =
    typeof totalPages === "number" &&
    typeof currentPage === "number" &&
    currentPage < totalPages;

  const handleLoadMore = () => {
    console.log(`handleLoadMore`);
    console.log(`totalPages`, totalPages);
    console.log(`currentPage`, currentPage);
    if (hasMorePages) {
      setPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (data?.items.length) {
      const newEvents: EventCardProps[] = data.items.map((event) => ({
        dates: [dayjs(event.dateFrom)],
        competitionTypeIds: event.competitionType.map(
          (competitionType) => competitionType.id + ""
        ),
        id: event.id + "",
        image: undefined, // TODO pass image
        title: event.name,
        distanceTitles: event.distances.map((distance) => distance.name),
        isLiked: Math.random() >= 0.5,
        location: event.place,
        organizer: {
          name: event.organizer.organization,
          image: undefined, // TODO pass image
        },
      }));
      setEvents((prevEvents) => [...prevEvents, ...newEvents]);
    }
  }, [data]);

  // TODO instead of replacing the content, wrap it over...
  if (isLoading || isError) {
    return <LoadingOrError {...{ isError, isLoading }} />;
  }

  // TODO show placeholder if no events

  return (
    <div className={`px-2.5 py-12 lg:px-16 lg:py-20 xl:py-32`}>
      <div className={`mx-auto flex w-full max-w-content-limit flex-col gap-4`}>
        {/*TODO adjust not found element*/}
        {eventsByMonths.length === 0 ? (
          <NotFoundTemplate
            heading={"heading"}
            title={"title"}
            description={"description"}
          >
            children
          </NotFoundTemplate>
        ) : (
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
            {hasMorePages && (
              <div className={`flex flex-col md:items-center`}>
                <Button onClick={handleLoadMore}>Load More</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsCalendarSection;
