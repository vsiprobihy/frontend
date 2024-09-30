"use client";
import Button from "@/app/components/buttons/Button";
import CalendarFilterActivityType from "@/app/calendar/components/sections/filter/CalendarFilterActivityType";
import CalendarFilterInputs from "@/app/calendar/components/sections/filter/CalendarFilterInputs";
import CalendarFilterResetButton from "@/app/calendar/components/sections/filter/CalendarFilterResetButton";
import EventsCounter from "@/app/calendar/components/sections/filter/EventsCounter";
import CalendarFilterDistance from "@/app/calendar/components/sections/filter/CalendarFilterDistance";

const text = {
  title: `Календар`,
  addEvent: `Зареєструвати ваш захід на сайті`,
};

const CalendarFilterSection: React.FC = () => {
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
            <CalendarFilterActivityType />
            <CalendarFilterDistance />
          </div>
          <div className={`lg:col-span-2`}>
            <CalendarFilterInputs />
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

export default CalendarFilterSection;
