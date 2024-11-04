"use client";

import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";
import {
  useColorVariant,
  useUserInteraction,
  useResponsiveDevice,
} from "~/hooks";
import {
  Logo,
  NavigationLink,
  HeaderNotificationButton,
  ProfileButton,
  getLinkValues,
} from "~/components";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AppRoute } from "~/enums";

import LogoSrOnlyImage from "~/images/logo.png";
import { AuthModal, SuccessModal } from "~/components";
import { Suspense } from "react";
import { useTranslations } from "next-intl";

export const Header: React.FC = () => {
  const isResponsiveDevice = useResponsiveDevice();
  const { isLightVariant, pathname } = useColorVariant();
  const dropShadow = isLightVariant
    ? "drop-shadow-[0_1px_1px_rgba(255,255,255,0.45)]"
    : "drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]";

  const { hasNotification, userImage, handleNotificationAccess } =
    useUserInteraction();

  const t = useTranslations("Navigation");
  const linkValues = getLinkValues(t);

  return (
    <header className="fluid-px fixed left-0 right-0 top-0 z-10 backdrop-blur-lg">
      <div
        className={clsx(
          "mx-auto flex w-full max-w-content-limit justify-between py-4 md:py-2 lg:py-4",
          isLightVariant ? "text-dark" : "text-white"
        )}
      >
        <Link
          href={AppRoute.ROOT}
          aria-label="Go home"
          className={clsx(
            "inline-flex w-[17.5rem] rounded-full text-center backdrop-blur-lg md:px-6 md:py-3 lg:bg-opacity-40 lg:shadow-sm",
            isLightVariant ? "lg:bg-white" : "lg:bg-black"
          )}
        >
          <Image
            src={LogoSrOnlyImage}
            alt="Vsi Probihy logo"
            className="sr-only"
          />
          <Logo className={isResponsiveDevice ? dropShadow : ""} />
        </Link>
        {!isResponsiveDevice && (
          <nav
            className={clsx(
              "hidden gap-x-6 rounded-full bg-opacity-40 p-2 uppercase shadow-sm backdrop-blur-lg md:flex xl:ml-28",
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
            "hidden-child relative inline-flex items-center gap-x-6 rounded-full px-2 backdrop-blur-lg lg:bg-opacity-40 lg:shadow-sm",
            isLightVariant ? "lg:bg-white" : "lg:bg-black"
          )}
        >
          <HeaderNotificationButton
            hasIndicator={hasNotification}
            onClick={handleNotificationAccess}
            isLightVariant={isLightVariant}
          />
          <ProfileButton
            userImage={userImage}
            isResponsiveDevice={false}
            isLightVariant={isLightVariant}
          />
          <LanguageSwitcher isLightVariant={isLightVariant} />
        </div>
      </div>
      <Suspense>
        <AuthModal />
        <SuccessModal />
      </Suspense>
    </header>
  );
};
