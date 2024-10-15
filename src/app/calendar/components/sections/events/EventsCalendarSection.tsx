"use client";
import { EventCard, EventCardProps } from "~/components/event-card/EventCard";
import { newEventsArray } from "~/placeholder-data/placeholderEvents";
import dayjs from "dayjs";

const randomEvents = newEventsArray(10);

const EventsCalendarSection: React.FC = () => {
  const events = randomEvents.sort((a, b) => a.date.diff(b.date));
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
