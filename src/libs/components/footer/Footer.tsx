"use client";

import { AppRoute, IconType } from "~/enums";
import Image from "next/image";
import DesignedByImage from "~/images/success-registration.webp";
import { FooterContacts } from "./FooterContacts";
import { FooterSocialMediaButton } from "./FooterSocialMediaButton";
import { Icon, Logo } from "~/components";
import { usePathname } from "next/navigation";
import { useResponsiveDevice } from "~/hooks";
import clsx from "clsx";
import Link from "next/link";
import { useTranslations } from "next-intl";

const emailValue = `info@vseprobegi.org`;
const phoneNumberValue = `+38 050 441 30 70`;
const designedByLink =
  "https://deciduous-stingray-297.notion.site/Andrii-Kolodiazhenskyi-b6357f5eb91243c6bb43d37cfa59e61f";

const socialMediaLinks = [
  {
    icon: IconType.INSTAGRAM,
    url: `/`,
  },
  {
    icon: IconType.FACEBOOK,
    url: `https://www.facebook.com/vsiprobihy.org`,
  },
  {
    icon: IconType.TELEGRAM,
    url: `https://t.me/vsiprobihy`,
  },
];

export const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const isResponsiveDevice = useResponsiveDevice();

  if (pathname === AppRoute.NOT_FOUND) {
    return null;
  }

  return (
    <footer
      className={clsx(
        "fluid-pl flex w-full flex-col bg-dark md:flex-row md:justify-end md:pb-0",
        { "pb-16": isResponsiveDevice }
      )}
    >
      <div
        className={`w-full lg:flex lg:max-w-content-limit-1/2 lg:flex-col lg:justify-end`}
      >
        <div
          className={`flex flex-col justify-center gap-[2.5rem] px-4 py-12 pb-[4.5rem] md:pl-0 md:pr-8`}
        >
          <div className={`flex flex-col gap-2 text-white`}>
            <Link href={AppRoute.ROOT}>
              <Logo />
            </Link>
            <p className={`text-base font-medium md:text-2xl`}>
              {t("footerText")}
            </p>
          </div>
          <div className={`flex flex-row flex-wrap gap-x-6`}>
            {socialMediaLinks.map(({ icon, url }, index) => (
              <FooterSocialMediaButton icon={icon} url={url} key={index} />
            ))}
          </div>
          <div className={`flex flex-col gap-6`}>
            <FooterContacts
              title="E-mail"
              value={emailValue}
              url={`mailto:${emailValue}`}
            />
            <FooterContacts
              title={t("phoneNumberText")}
              value={phoneNumberValue}
              url={`tel:${phoneNumberValue}`}
            />
          </div>
          <p className="text-[0.875rem] text-grey-light-middle">
            {t("copyRightText", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
      <div className={`relative z-0 w-full md:max-w-[50vw]`}>
        <div
          className={`absolute inset-x-0 z-20 mx-auto flex -translate-y-1/2 items-center justify-center md:inset-y-0 md:right-auto md:my-auto md:h-auto md:-translate-x-1/2 md:translate-y-0`}
        >
          <div
            className={`size-20 rounded-full bg-dark p-3 md:size-24 lg:size-32 2xl:size-36`}
          >
            <div
              className={`flex h-full w-full items-center justify-center rounded-full border border-white bg-dark`}
            >
              <Icon
                name={IconType.CACTUS}
                className="text-4xl text-white lg:text-5xl 2xl:text-6xl"
              />
            </div>
          </div>
        </div>
        <div
          className={`relative -ml-2.5 w-full flex-1 pb-[66%] md:ml-0 md:h-full md:pb-0`}
        >
          <Image
            className={`absolute inset-0 z-0 h-full w-full object-[center_0] grayscale sm:object-[calc(50%_+_10rem)_center] 2xl:object-top`}
            src={DesignedByImage}
            alt={"Running"}
          />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={designedByLink}
            className={clsx(
              "absolute bottom-3 right-0 flex scale-[0.65] transform items-center rounded-lg bg-black px-4 py-1 uppercase md:scale-[0.85] lg:right-3 xl:scale-100",
              { "md:bottom-20": isResponsiveDevice }
            )}
          >
            <span className="text-xs text-white">Designed by</span>
            <span className="ml-2 font-bold text-yellow">Kolodiazhenskyi</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
