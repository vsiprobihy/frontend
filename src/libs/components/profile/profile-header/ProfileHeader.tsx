"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Icon } from "../..";
import { IconType } from "@/libs/enums";
import { IconPhoto } from "../icon-photo/IconPhoto";

export const ProfileHeader = () => {
  const t = useTranslations();

  return (
    <div className="fluid-px mt-20 lg:mt-36 lg:px-32">
      <p className="mb-1 text-[clamp(1.5rem,2.2vw+0.9rem,3.5rem)] font-bold uppercase lg:mb-10">
        {t("profile.title")}
      </p>
      <div className="relative h-40 lg:h-[408px]">
        <Image
          src="/images/profile-header-banner.webp"
          layout="fill"
          className="rounded-3xl"
          alt="banner"
        />
        <IconPhoto
          classNameDiv="bg-grey-middle absolute right-2 top-2 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full lg:right-4 lg:top-4 lg:h-14 lg:w-14"
          classNameIcon="text-xs text-white lg:text-lg"
        />
      </div>
    </div>
  );
};
