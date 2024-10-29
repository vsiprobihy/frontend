"use client";
import Link from "next/link";
import { NotFoundTemplate } from "../..";
import { AppRoute } from "@/libs/enums";
import { useTranslations } from "next-intl";

export const RegistartionsSection = () => {
  const t = useTranslations("notFoundProfileRegistartion");

  return (
    <div className="lg:flex lg:justify-end lg:pr-32">
      <div className="lg:mt-18 mb-[165px] mt-28 lg:w-7/12">
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
