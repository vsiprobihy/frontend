import { NextPage } from "next";

import { CalendarFilterSection } from "./components/sections/filter";
import EventsCalendarSection from "@/app/calendar/components/sections/events/EventsCalendarSection";

const Calendar: NextPage = () => {
  return (
    <main>
      <CalendarFilterSection />
      <EventsCalendarSection />
    </main>
  );
};

export default Calendar;
