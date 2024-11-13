"use client";

import { UpcomingEventsCarousel } from "./carousel/UpcomingEventsCarousel";
import { CustomLink, EventCard } from "~/components";
import PlaceholderImage from "~/images/placeholder.webp";
import { useQuery } from "@tanstack/react-query";
import { upcomingEventsList } from "~/api-client/services.gen";
import clsx from "clsx";
import { AppRoute } from "~/enums";
import { useTranslations } from "next-intl";
import { UpcomingEventsListResponse } from "~/api-client/types.gen";

export const UpcomingEventsSection: React.FC = () => {
  const t = useTranslations("UpcomingEventsSection");
  const { data } = useQuery<UpcomingEventsListResponse>({
    queryKey: ["mainList", {}],
    queryFn: async (): Promise<UpcomingEventsListResponse> => {
      const response = await upcomingEventsList();
      if (response.data && response.response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.response.statusText);
      }
    },
  });

  const renderCustomLink = (text: string, display: string) => (
    <div className={clsx(display)}>
      <CustomLink href={AppRoute.CALENDAR}>{text}</CustomLink>
    </div>
  );

  const events =
    data?.events?.map((event) => ({
      id: event.id,
      name: event.name,
      dateFrom: event.date_from,
      dateTo: event.date_to,
      place: event.place,
      competitionType: event.competition_type,
      photos: { src: event.photos || PlaceholderImage, alt: event.name || "" },
      distances: event.distances,
    })) || [];

  const renderEventCards = () =>
    events.map((event, i) => (
      <li
        key={i}
        className={clsx(
          "min-w-96 flex-1 md:w-[49%] xl:w-[32.4%] xl:flex-none",
          i == events.length - 1 && "lg:hidden xl:block xl:flex-1"
        )}
      >
        <EventCard {...event} isLiked={i == events.length - 2} />
      </li>
    ));

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
