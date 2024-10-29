"use client";
import clsx from "clsx";
import Image from "next/image";
import { IconType, ProfileSections } from "@/libs/enums";
import { Icon } from "../..";
import { ProfileCardButton } from "../../buttons/ProfileCardButton";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { ProfileButtons } from "./ProfileButtonsData";

export const ProfileCard = () => {
  const t = useTranslations("profileCard");
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSection = searchParams.get("profileSection");

  const handleOpenProfilePage = (value: ProfileSections) => {
    const params = new URLSearchParams(searchParams);
    params.set("profileSection", value);
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="relative flex w-full flex-col justify-center rounded-3xl bg-dark px-4 py-4 lg:w-[clamp(320px,10vw+200px,390px)]">
      <Icon
        name={IconType.EDIT}
        className="absolute right-5 top-5 cursor-pointer text-2xl text-white"
      />

      <div className="mb-10 flex flex-col items-center justify-center gap-5">
        <div className="relative h-36 w-36">
          <Image
            src="/images/user-profile-card-image.webp"
            alt="user"
            className="pos rounded-full"
            fill
          />
        </div>

        {/*//Todo change name to real user data */}
        <p className="text-2xl font-semibold text-white">
          Колодяженський Андрій
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        {ProfileButtons.map((button) => (
          <ProfileCardButton
            key={button.id}
            icon={button.icon}
            title={t(button.titleKey)}
            onClick={() => handleOpenProfilePage(button.section)}
            className={clsx(
              currentSection === button.section
                ? "bg-white text-dark"
                : "bg-grey-dark text-white"
            )}
          />
        ))}
      </div>
    </div>
  );
};
