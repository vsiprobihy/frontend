"use client";

import { UpcomingEventsCarousel } from "./carousel/UpcomingEventsCarousel";
import PlaceholderImage from "~/images/placeholder.webp";
import { EventCard } from "./carousel/EventCard";
import { CustomLink } from "~/components";
import { useQuery } from "@tanstack/react-query";
import { upcomingEventsList } from "~/api-client/services.gen";

const titleText = `Найближчі заходи`;
const linkText = { full: `Дивитися всі забіги`, short: `Всі` };

// because of the lack of backend types, we need to define the Event type
type Event = {
  photos: string;
  name: string;
  competition_type: string;
  place: string;
  date_from: string;
  date_to: string;
  distances: { name: string }[];
};

type UpcomingEventsListResponse = {
  events: Event[];
};

export const UpcomingEventsSection: React.FC = () => {
  const { data } = useQuery<UpcomingEventsListResponse>({
    queryKey: ["mainList", {}],
    queryFn: async (): Promise<UpcomingEventsListResponse> => {
      const response = await upcomingEventsList();
      if (response.data && response.response.status === 200) {
        // @ts-expect-error lack of backend types
        return response.data;
      } else {
        throw new Error(response.response.statusText);
      }
    },
  });

  const events =
    data?.events
      .map((event) => ({
        photos: { src: event.photos || PlaceholderImage, alt: event.name },
        name: event.name,
        date_from: event.date_from,
        date_to: event.date_to,
        competition_type: event.competition_type,
        place: event.place,
        distances: event.distances,
      }))
      .slice(-3) || [];

  return (
    <div className={`px-2.5 py-12 lg:px-16 lg:py-20 xl:py-32`}>
      <div className={`mx-auto flex w-full max-w-content-limit flex-col gap-4`}>
        <div className={`flex flex-row items-center justify-between gap-4`}>
          <h2 className={`h2`}>{titleText}</h2>
          <div className={`block md:hidden`}>
            <CustomLink href={`/`}>{linkText.short}</CustomLink>
          </div>
          <div className={`hidden md:block`}>
            <CustomLink href={`/`}>{linkText.full}</CustomLink>
          </div>
        </div>
        <div className={`md:hidden`}>
          <UpcomingEventsCarousel
            elements={events.map((event) => ({ event }))}
          />
        </div>
        <div className={`hidden md:block`}>
          <div className={`flex flex-row gap-4`}>
            {events.map((event, i) => (
              <div key={i} className={`flex-1`}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
