"use client";

import { EventHeader } from "./_components/eventHeader/EventHeader";
import { EventSummary } from "./_components/eventSummary/EventSummary";
import { EventDetails } from "./_components/eventDetails/EventDetails";

const page = () => (
  <div className="m-auto mt-20 w-full max-w-[1174px] border-grey-light-middle p-[10px] ~mb-10/40">
    <EventHeader />
    <EventSummary />
    <EventDetails />
  </div>
);

export default page;
