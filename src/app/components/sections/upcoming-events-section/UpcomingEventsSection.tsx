"use client";

import { UpcomingEventsCarousel } from "./carousel/UpcomingEventsCarousel";
import { EventCard, EventCardProps } from "~/components/event-card/EventCard";
import { CustomLink } from "~/components";
import { newEvent } from "~/placeholder-data/placeholderEvents";
import { UpcomingEventsCarousel } from "./carousel/UpcomingEventsCarousel";
import dayjs from "dayjs";
import { CustomLink, EventCard, EventCardProps } from "~/components";
import clsx from "clsx";
import { AppRoute } from "~/enums";
import { useTranslations } from "next-intl";


const events: [EventCardProps, EventCardProps, EventCardProps] = [
  newEvent(),
  newEvent(),
  newEvent(),
];

export const UpcomingEventsSection: React.FC = () => {
  const t = useTranslations("UpcomingEventsSection");



  return (
    <div className={`px-2.5 py-12 lg:px-16 lg:py-20 xl:py-32`}>
      <div className={`mx-auto flex w-full max-w-content-limit flex-col gap-4`}>
        <div className={`flex flex-row items-center justify-between gap-4`}>
          <h2 className={`h2`}>{titleText}</h2>
          <div className={`block md:hidden`}>
            <CustomLink href={`/public`}>{linkText.short}</CustomLink>
          </div>
          <div className={`hidden md:block`}>
            <CustomLink href={`/public`}>{linkText.full}</CustomLink>
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

  return (
    <div className="fluid-px py-12 lg:py-20 xl:py-32">
      <div className="mx-auto flex w-full max-w-content-limit flex-col gap-4">
        <div className="flex flex-row items-center justify-between gap-4">
          <h2 className="h2">{t("title")}</h2>
          {renderCustomLink(t("link.short"), "block md:hidden")}
          {renderCustomLink(t("link.full"), "hidden md:block")}
        </div>
        <div className="lg:hidden">
          <UpcomingEventsCarousel
            elements={events.map((event) => ({ event }))}
          />
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-row flex-wrap gap-4">
            {renderEventCards()}
          </ul>
        </div>
      </div>
    </div>
  );
};
