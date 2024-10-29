"use client";
import { useTranslations } from "next-intl";
import { NotFoundTemplate } from "../..";
import Link from "next/link";
import { AppRoute } from "@/libs/enums";

export const ArchiveOfStarts = () => {
  const t = useTranslations("notFoundProfileArchiveOfStarts");

  return (
    <div className="lg:flex lg:justify-end lg:pr-32">
      <div className="mb-[165px] mt-28 lg:w-7/12">
        <NotFoundTemplate
          heading={t("heading")}
          title={t("title")}
          description={t("description")}
          children={
            <Link
              href={AppRoute.CALENDAR}
              className="text-base font-medium text-orange-hot"
            >
              {t("calendar")}
            </Link>
          }
          isSmall={true}
        />
      </div>
    </div>
  );
};
