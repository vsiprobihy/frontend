"use client";

import { Icon } from "@/libs/components";
import { IconType } from "@/libs/enums";
import { useTranslations } from "next-intl";

export const ProfileMobileFormHeader = () => {
  const t = useTranslations();

  return (
    <div className="flex h-12 w-full items-center justify-between rounded-full border-2 border-solid border-dark bg-dark lg:w-7/12">
      <div className="h-11 w-5/6 rounded-full bg-white">
        <p className="flex h-full items-center justify-center font-medium uppercase leading-5">
          {t("profileForm.dataTitle.title")}
        </p>
      </div>
      <Icon
        name={IconType.DOWN}
        className="cursor-pointer pr-3 text-2xl text-white"
      />
    </div>
  );
};
