"use client";

import CustomLink from "@/app/components/CustomLink";
import UpcomingEventsCarousel from "@/app/components/upcoming-events-section/carousel/UpcomingEventsCarousel";
import PlaceholderImage from "@/public/images/placeholder.webp";
import dayjs from "dayjs";
import EventCard, {
  EventCardProps,
} from "@/app/components/upcoming-events-section/carousel/EventCard";

const titleText = `Найближчі заходи`;
const linkText = { full: `Дивитися всі забіги`, short: `Всі` };

const newEvent = () => ({
  image: { src: PlaceholderImage, alt: "Event" },
  title: "Event",
  date: dayjs("2022-01-01", "YYYY-MM-DD"),
  category: "Category",
  location: "Lorem ipsum dolor sit amet",
  distanceTitles: ["5 km", "10 km", "21 km", "42 km"],
});

const events: [EventCardProps, EventCardProps, EventCardProps] = [
  newEvent(),
  newEvent(),
  newEvent(),
];

const UpcomingEventsSection: React.FC = () => {
  return (
    <div className={`px-2.5 py-12 lg:px-16 lg:py-20 xl:py-32`}>
      <div className={`max-w-content-limit mx-auto flex w-full flex-col gap-4`}>
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

export default UpcomingEventsSection;
