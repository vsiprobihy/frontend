"use client";

import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";
import {
  useMobileDetect,
  useColorVariant,
  useUserInteraction,
} from "~/hooks/hooks";
import {
  linkValues,
  Logo,
  NavigationLink,
  NotificationButton,
  ProfileButton,
} from "~/components/components";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AppRoute } from "~/enums/enums";

import LogoSrOnlyImage from "~/images/logo.png";

export const Header: React.FC = () => {
  const isMobile = useMobileDetect();
  const { isLightVariant, pathname } = useColorVariant();

  const {
    language,
    translatedText,
    hasNotification,
    userImage,
    handleToggleLanguage,
    handleUserAccess,
    handleNotificationAccess,
  } = useUserInteraction();

  return (
    <header className="fixed left-0 right-0 top-0 z-10 mx-auto backdrop-blur-lg">
      <div
        className={clsx(
          "flex w-full max-w-content-limit justify-between py-1 md:px-2 md:py-2 lg:px-16 lg:py-4",
          isLightVariant ? "text-dark" : "text-white"
        )}
      >
        <Link
          href={AppRoute.ROOT}
          aria-label="Go home"
          className={clsx(
            "inline-flex rounded-full px-3 backdrop-blur-lg md:px-6 lg:bg-black lg:bg-opacity-40 lg:shadow-sm",
            isLightVariant ? "lg:bg-white" : "lg:bg-black"
          )}
        >
          <Image
            src={LogoSrOnlyImage}
            alt="Vsi Probihy logo"
            className="sr-only"
          />
          <Logo showIconOnMobile={false} />
        </Link>
        {!isMobile && (
          <nav
            className={clsx(
              "flex gap-x-6 rounded-full bg-opacity-40 p-2 uppercase shadow-sm backdrop-blur-lg xl:ml-28",
              isLightVariant ? "bg-white" : "bg-black"
            )}
          >
            {linkValues.map((link, index) => (
              <NavigationLink
                key={index}
                href={link.url}
                label={link.name}
                isLightVariant={isLightVariant}
                pathname={pathname}
              />
            ))}
          </nav>
        )}
        <div
          className={clsx(
            "hidden-child inline-flex items-center gap-x-6 rounded-full px-2 backdrop-blur-lg lg:bg-opacity-40 lg:shadow-sm",
            isLightVariant ? "lg:bg-white" : "lg:bg-black"
          )}
        >
          <NotificationButton
            hasIndicator={hasNotification}
            onClick={handleNotificationAccess}
            isLightVariant={isLightVariant}
          />
          <ProfileButton
            translatedText={translatedText}
            userImage={userImage}
            isMobile={false}
            onClick={handleUserAccess}
            isLightVariant={isLightVariant}
          />
          <LanguageSwitcher
            language={language}
            toggleLanguage={handleToggleLanguage}
            isLightVariant={isLightVariant}
          />
        </div>
      </div>
    </header>
  );
};
