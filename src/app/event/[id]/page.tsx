"use client";

import { EventHeader } from "./_components/event-header/EventHeader";
import { EventSummary } from "./_components/event-summary/EventSummary";
import { EventDetails } from "./_components/event-details/EventDetails";

interface Event {
  params: { id: string };
}

const Event: React.FC<Event> = () => {
  return (
    <div className="m-auto mt-20 w-full max-w-[1174px] border-grey-light-middle p-[10px] ~mb-10/40">
      <EventHeader />
      <EventSummary />
      <EventDetails />
    </div>
  );
};

export default Event;
