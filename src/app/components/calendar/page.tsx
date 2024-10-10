import { NextPage } from "next";

import { CalendarFilterSection } from "../calendar/components/sections/filter";

const Calendar: NextPage = () => {
  return (
    <main>
      <CalendarFilterSection />
    </main>
  );
};

export default Calendar;
