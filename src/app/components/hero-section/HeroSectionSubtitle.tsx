"use client";
import { IconType } from "~/enums";
import { Icon } from "~/components";
import { useTranslations } from "next-intl";

export const HeroSectionSubtitle: React.FC = () => {
  const t = useTranslations("HeroSection");

  return (
    <div
      className={`grid grid-cols-[auto,1fr] items-center gap-2.5 rounded-[16rem] bg-grey-dark p-3 text-white lg:p-4`}
    >
      <div className={`relative size-10 rounded-full bg-white`}>
        <div
          className={`absolute inset-0 m-auto inline h-min w-min text-2xl text-dark`}
        >
          <Icon name={IconType.INFO} className="text-xl text-dark" />
        </div>
      </div>
      <h3 className={`h3`}>{t("subtitle")}</h3>
    </div>
  );
};
