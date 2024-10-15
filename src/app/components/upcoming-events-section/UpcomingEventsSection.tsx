"use client";

import { UpcomingEventsCarousel } from "./carousel/UpcomingEventsCarousel";
import dayjs from "dayjs";
import { CustomLink, EventCard, EventCardProps } from "~/components";
import clsx from "clsx";
import { AppRoute } from "~/enums";
import { useTranslations } from "next-intl";

export const UpcomingEventsSection: React.FC = () => {
  const t = useTranslations("UpcomingEventsSection");

  const createEvent = (id: number): EventCardProps => ({
    id,
    image: { src: "", alt: "Event" },
    title: "Event",
    date: dayjs("2022-01-01", "YYYY-MM-DD"),
    category: "Category",
    location: "Lorem ipsum dolor sit amet",
    distanceTitles: ["5 km", "10 km", "21 km", "42 km"],
  });

  const events = Array(3)
    .fill(null)
    .map((_, index) => createEvent(index + 1));

  const renderCustomLink = (text: string, display: string) => (
    <div className={clsx(display)}>
      <CustomLink href={AppRoute.CALENDAR}>{text}</CustomLink>
    </div>
  );

  const renderEventCards = () =>
    events.map((event, i) => (
      <div
        key={i}
        className={clsx(
          "min-w-96 flex-1 md:w-[49%] xl:flex-none 2xl:w-[32.6%]",
          i === events.length - 1 && "lg:hidden xl:block xl:flex-1"
        )}
      >
        <EventCard {...event} />
      </div>
    ));

  return (
    <div className="fluid-px py-12 lg:py-20 xl:py-32">
      <div className="mx-auto flex w-full max-w-content-limit flex-col gap-4">
        <div className="flex flex-row items-center justify-between gap-4">
          <h2 className="h2">{t("title")}</h2>
          {renderCustomLink(t("link.short"), "block md:hidden")}
          {renderCustomLink(t("link.full"), "hidden md:block")}
        </div>
        <div className="md:hidden">
          <UpcomingEventsCarousel
            elements={events.map((event) => ({ event }))}
          />
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row flex-wrap gap-4">
            {renderEventCards()}
          </div>
        </div>
      </div>
    </div>
  );
};
