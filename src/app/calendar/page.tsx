import { NextPage } from "next";
import { NotFoundEvent } from "./components";

const Calendar: NextPage = () => (
  <main>
    <div className="bg-dark pb-5 pt-32 text-center text-3xl text-white">
      <p>Calendar</p>
    </div>
    <div className="fluid-px py-8">
      <div className="mx-auto flex w-full max-w-content-limit flex-col gap-4">
        <NotFoundEvent />
      </div>
    </div>
  </main>
);

export default Calendar;
