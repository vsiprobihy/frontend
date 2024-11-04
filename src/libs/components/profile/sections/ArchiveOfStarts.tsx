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
          description={
            <div className="flex flex-col items-center justify-center gap-1 lg:flex-row">
              <span className="text-grey">{t("description")}</span>
              <Link
                href={AppRoute.CALENDAR}
                className="text-base font-medium text-orange-hot"
              >
                {t("calendar")}
              </Link>
            </div>
          }
          isSmall={true}
        />
      </div>
    </div>
  );
};
