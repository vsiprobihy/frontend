"use client";

import Link from "next/link";

import clsx from "clsx";
import {
  useMobileDetect,
  useThemeByRoute,
  useUserInteraction,
} from "~/hooks/hooks";
import {
  linkValues,
  Logo,
  NavigationLink,
  NotificationButton,
  ProfileButton,
} from "~/components/components";
import { LanguageSwitcher } from "~/components/header/LanguageSwitcher";

export const Header: React.FC = () => {
  const isMobile = useMobileDetect();
  const { isLightTheme, pathname } = useThemeByRoute();

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
    <header className="fixed left-0 right-0 top-0 z-10 backdrop-blur-lg">
      <div
        className={clsx(
          "mx-auto flex w-full max-w-content-limit justify-between py-2 md:px-4 md:py-4 lg:px-16",
          isLightTheme ? "text-dark" : "text-white"
        )}
      >
        <Link
          href="/"
          aria-label="Go home"
          className={clsx(
            "inline-flex rounded-full px-3 shadow-sm backdrop-blur-lg md:px-6 lg:bg-black lg:bg-opacity-40",
            isLightTheme ? "lg:bg-white" : "lg:bg-black"
          )}
        >
          <Logo showIconOnMobile={false} />
        </Link>
        {!isMobile && (
          <nav
            className={clsx(
              "flex gap-x-6 rounded-full bg-opacity-40 p-2 uppercase shadow-sm backdrop-blur-lg",
              isLightTheme ? "lg:bg-white" : "lg:bg-black"
            )}
          >
            {linkValues.map((link, index) => (
              <NavigationLink
                key={index}
                href={link.url}
                label={link.name}
                isLightTheme={isLightTheme}
                pathname={pathname}
              />
            ))}
          </nav>
        )}
        <div
          className={clsx(
            "hidden-child inline-flex items-center gap-x-6 rounded-full px-2 backdrop-blur-lg lg:bg-opacity-40 lg:shadow-sm",
            isLightTheme ? "lg:bg-white" : "lg:bg-black"
          )}
        >
          <NotificationButton
            hasIndicator={hasNotification}
            onClick={handleNotificationAccess}
            isLightTheme={isLightTheme}
          />
          <ProfileButton
            translatedText={translatedText}
            userImage={userImage}
            isMobile={false}
            onClick={handleUserAccess}
            isLightVariant={isLightTheme}
          />
          <LanguageSwitcher
            language={language}
            toggleLanguage={handleToggleLanguage}
            isLightTheme={isLightTheme}
          />
        </div>
      </div>
    </header>
  );
};
