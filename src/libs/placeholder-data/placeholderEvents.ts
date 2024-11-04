import PlaceholderImage from "~/images/placeholder.webp";
import { EventCardProps } from "~/components/event-card/EventCard";
import dayjs from "dayjs";

const randomDate = (): dayjs.Dayjs => {
  const start = dayjs();
  const end = start.add(1, "year");
  const randomTimestamp =
    start.valueOf() + Math.random() * (end.valueOf() - start.valueOf());
  return dayjs(randomTimestamp);
};

export const newEvent: () => EventCardProps = () => ({
  image:
    Math.random() > 0.2 ? { src: PlaceholderImage, alt: "Event" } : undefined,
  title: "Event",
  date: randomDate(),
  activityType: {
    id: `0`,
    children: `Activity Type`,
  },
  location: "Lorem ipsum dolor sit amet",
  distanceTitles: ["5 km", "10 km", "21 km", "42 km"],
});

export const newEventsArray = (length: number): EventCardProps[] => {
  const events = [];
  for (let i = 0; i < length; i++) {
    events.push(newEvent());
  }
  return events;
};
