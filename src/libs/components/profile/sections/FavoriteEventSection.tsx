"use client";
import { useTranslations } from "next-intl";
import { NotFoundFavorites } from "./not-found-favorites/NotFoundFavorites";
import { AppRoute } from "@/libs/enums";
import Link from "next/link";

export const FavoriteEventSection = () => {
  const t = useTranslations("NotFoundProfileFavorites");

  return (
    <div className="lg:flex lg:justify-end lg:pr-32">
      <div className="mb-[183px] mt-28 lg:mt-16 lg:w-7/12">
        <NotFoundFavorites
          title={t("message")}
          description={t("calendarMessage")}
        >
          <Link
            href={AppRoute.CALENDAR}
            className="text-base font-medium leading-7 text-orange-hot"
          >
            {t("calendar")}
          </Link>
        </NotFoundFavorites>
      </div>
    </div>
  );
};
