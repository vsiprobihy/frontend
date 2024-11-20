"use client";

import clsx from "clsx";
import Image from "next/image";
import { AppRoute, IconType, ProfileSections } from "@/libs/enums";
import { Icon } from "../..";
import { ProfileCardButton } from "../../buttons/ProfileCardButton";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ProfileButtons } from "./ProfileButtonsData";
import { UserProfile, authProfileList } from "@/libs/api-client";
import {
  SnakeToCamel,
  snakeToCamelCase,
} from "@/libs/helpers/snakeToCamelCase";
import { useQuery } from "@tanstack/react-query";

export const ProfileCard = () => {
  const t = useTranslations("profileCard");
  const router = useRouter();
  const pathname = usePathname();

  const currentSection = pathname.split("/").pop();

  const handleOpenProfilePage = (section: ProfileSections) => {
    router.push(`${AppRoute.PROFILE}/${section}`);
  };

  const { data: user } = useQuery<SnakeToCamel<UserProfile>>({
    queryKey: ["userProfile"],
    queryFn: async (): Promise<UserProfile> => {
      const response = await authProfileList();
      if (response.data && response.response.status === 200) {
        return snakeToCamelCase(response.data);
      } else {
        throw new Error(response.response.statusText);
      }
    },
  });

  return (
    <div className="relative flex w-full flex-col justify-center rounded-3xl bg-dark px-4 py-4 lg:w-[clamp(20rem,10vw+12.5rem,24.3rem)]">
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

        <div className="flex flex-col items-center justify-center">
          {user?.firstName && user?.lastName && (
            <p className="text-2xl font-semibold text-white">
              {`${user?.firstName} ${user?.lastName}`}
            </p>
          )}
          {user?.lastNameEng && (
            <p className="text-base font-normal text-grey-light-dark">{`${user?.firstNameEng} ${user?.lastNameEng}`}</p>
          )}
        </div>
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
