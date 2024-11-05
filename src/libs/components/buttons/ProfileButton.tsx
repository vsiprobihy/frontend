"use client";

import Image from "next/image";
import clsx from "clsx";
import { Icon, ProfileMenu } from "~/components";
import { IconType } from "~/enums";
import { useAuthContext } from "~/context";
import { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useClickOutside } from "~/hooks";
import { useTranslations } from "next-intl";

interface ProfileButtonProps {
  userImage?: string | null;
  isResponsiveDevice?: boolean;
  isLightVariant?: boolean;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  userImage,
  isResponsiveDevice = false,
  isLightVariant,
}) => {
  const t = useTranslations("ProfileButton");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticatedUser, setIsAuthenticatedUser } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translatedText = isAuthenticatedUser ? t("profile") : t("login");

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleProfileMenu = () => setIsMenuOpen((prevState) => !prevState);

  const openAuthModal = () => {
    const params = new URLSearchParams(searchParams);
    params.set("showAuthModal", "true");
    router.push(`?${params.toString()}`);
  };

  const handleUserAccess = () => {
    const action = isAuthenticatedUser ? toggleProfileMenu : openAuthModal;
    action();
  };

  const handleLogout = () => {
    Cookies.remove("authToken");
    setIsAuthenticatedUser(false);
    setIsMenuOpen(false);
  };

  useClickOutside(menuRef, () => setIsMenuOpen(false), buttonRef);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleUserAccess}
        className="group flex cursor-pointer items-center p-0"
      >
        <span
          className={clsx(
            "h-12 w-12 overflow-hidden rounded-full border-2 border-orange-hot transition duration-300 group-hover:border-orange-interactive group-active:border-orange-interactive xl:h-14 xl:w-14",
            !isResponsiveDevice && "z-10 -mr-3"
          )}
        >
          {userImage ? (
            <Image
              src={userImage}
              alt="Profile picture"
              width={64}
              height={64}
              priority
            />
          ) : (
            <b
              className={clsx(
                "flex h-full w-full items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg transition duration-300 group-hover:bg-orange-interactive group-hover:text-white group-active:bg-orange-interactive group-active:text-white",
                isLightVariant
                  ? "xl:bg-white"
                  : "xl:bg-grey-dark xl:bg-opacity-70"
              )}
            >
              <Icon name={IconType.USER} className="text-3xl" />
            </b>
          )}
        </span>
        {!isResponsiveDevice && (
          <span className="hidden w-32 rounded-r-full bg-orange-hot py-2 text-lg font-semibold uppercase text-white transition duration-300 group-hover:bg-orange-interactive group-active:bg-orange-interactive xl:block">
            {translatedText}
          </span>
        )}
      </button>

      {isMenuOpen && (
        <ProfileMenu
          ref={menuRef}
          userImage={userImage}
          userName={t("userName")}
          isResponsiveDevice={isResponsiveDevice}
          onLogout={handleLogout}
        />
      )}
    </>
  );
};
