"use client";

import { UpcomingEventsCarousel } from "./carousel/UpcomingEventsCarousel";
import { CustomLink, EventCard, EventCardProps } from "~/components";
import { useTranslations } from "next-intl";
import { dummyRunningEvent } from "~/placeholder-data/dummyRunningEvents";

const events: [EventCardProps, EventCardProps, EventCardProps] = [
  dummyRunningEvent(),
  dummyRunningEvent(),
  dummyRunningEvent(),
];

export const UpcomingEventsSection: React.FC = () => {
  const t = useTranslations("UpcomingEventsSection");

  return (
    <div className={`px-2.5 py-12 lg:px-16 lg:py-20 xl:py-32`}>
      <div className={`mx-auto flex w-full max-w-content-limit flex-col gap-4`}>
        <div className={`flex flex-row items-center justify-between gap-4`}>
          <h2 className={`h2`}>{t("title")}</h2>
          <div className={`block md:hidden`}>
            <CustomLink href={`/public`}>{t("link.short")}</CustomLink>
          </div>
          <div className={`hidden md:block`}>
            <CustomLink href={`/public`}>{t("link.full")}</CustomLink>
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
