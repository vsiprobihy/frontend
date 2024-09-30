import { NextPage } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/footer/Footer";
import CalendarFilterSection from "@/app/calendar/components/sections/filter/CalendarFilterSection";

const Calendar: NextPage = () => {
  return (
    <div>
      <Header />
      <CalendarFilterSection />
      <Footer />
    </div>
  );
};

export default Calendar;
