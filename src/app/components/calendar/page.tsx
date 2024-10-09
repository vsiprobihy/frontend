import { NextPage } from "next";
import { Header, Footer } from "~/components";
import { CalendarFilterSection } from "../calendar/components/sections/filter";
import { Suspense } from "react";

const Calendar: NextPage = () => {
  return (
    <Suspense>
      <Header />
      <CalendarFilterSection />
      <Footer />
    </Suspense>
  );
};

export default Calendar;
