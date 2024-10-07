"use client";

import { IconType } from "~/enums";
import Image from "next/image";
import DesignedByImage from "~/images/designed-by.webp";
import { FooterContacts } from "./FooterContacts";
import { FooterSocialMediaButton } from "./FooterSocialMediaButton";
import { Icon, Logo } from "~/components";
import { usePathname } from "next/navigation";

const copyRightText = `© 2015-2022 ВсеПробеги | Угода користувача і політика конфіденційності`;

const emailValue = `info@vseprobegi.org`;
const emailText = `Електронна пошта`;
const phoneNumberText = `Телефон`;
const phoneNumberValue = `+38 050 441 30 70`;
const footerText = `місце зустрічі всіх бігунів.`;

const socialMediaLinks = [
  {
    icon: IconType.FACEBOOK,
    url: `/`,
  },
  {
    icon: IconType.LINKEDIN,
    url: `/`,
  },
  {
    icon: IconType.VIBER,
    url: `/`,
  },
  {
    icon: IconType.TELEGRAM,
    url: `/`,
  },
];

export const Footer: React.FC = () => {
  const pathname = usePathname();

  if (pathname.includes("404")) {
    return null;
  }

  return (
    <footer
      className={`flex w-full flex-col bg-dark md:flex-row md:justify-end md:pl-8 lg:pl-16`}
    >
      <div
        className={`w-full lg:flex lg:max-w-content-limit-1/2 lg:flex-col lg:justify-end`}
      >
        <div
          className={`flex flex-col justify-center gap-[2.5rem] px-4 py-12 pb-[4.5rem] md:pl-0 md:pr-8`}
        >
          <div className={`flex flex-col gap-2 text-white`}>
            <Logo />
            <p className={`text-base font-medium md:text-2xl`}>{footerText}</p>
          </div>
          <div className={`flex flex-row flex-wrap gap-2`}>
            {socialMediaLinks.map(({ icon, url }, index) => (
              <FooterSocialMediaButton icon={icon} url={url} key={index} />
            ))}
          </div>
          <div className={`flex flex-col gap-6`}>
            <FooterContacts
              title={emailText}
              value={emailValue}
              url={`mailto:${emailValue}`}
            />
            <FooterContacts
              title={phoneNumberText}
              value={phoneNumberValue}
              url={`tel:${phoneNumberValue}`}
            />
          </div>
          <p className={`text-[0.875rem] text-grey-light-middle`}>
            {copyRightText}
          </p>
        </div>
      </div>
      <div className={`relative z-0 w-full md:max-w-[50vw]`}>
        <div
          className={`absolute inset-x-0 z-20 mx-auto flex -translate-y-1/2 items-center justify-center md:inset-y-0 md:right-auto md:my-auto md:h-auto md:-translate-x-1/2 md:translate-y-0`}
        >
          <div className={`h-[5.5rem] w-[5.5rem] rounded-full bg-dark p-3`}>
            <div
              className={`flex h-full w-full items-center justify-center rounded-full border border-white bg-dark`}
            >
              <Icon name={IconType.CACTUS} className="text-4xl text-white" />
            </div>
          </div>
        </div>
        <div className={`relative w-full flex-1 pb-[66%] md:h-full md:pb-0`}>
          <Image
            className={`absolute inset-0 z-0 h-full w-full`}
            src={DesignedByImage}
            alt={"Running"}
          />
        </div>
      </div>
    </footer>
  );
};
