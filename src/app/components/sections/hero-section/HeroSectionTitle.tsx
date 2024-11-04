"use client";
import Image from "next/image";
import Link from "next/link";
import RunningStepImage from "~/images/running-step.webp";
import { Button } from "~/components";
import { useTranslations } from "next-intl";

export const HeroSectionTitle: React.FC = () => {
  const t = useTranslations("HeroSection");

  return (
    <>
      <h1 className={`flex flex-col text-white`}>
        <span className={`h1`}>{t("title.part1")}</span>
        <span
          className={`flex flex-row items-center gap-2.5 md:gap-6 xl:gap-12`}
        >
          <Image
            width={335}
            height={113}
            className="lg:max-h[3.5rem] fluid-badge min-h-[2rem] rounded-full xl:max-h-[7rem]"
            alt={`Running`}
            src={RunningStepImage}
          />
          <span className={`h1 w-min whitespace-nowrap`}>
            {t("title.part2")}
          </span>
        </span>
        <span
          className={`flex flex-col gap-2 md:flex-row md:items-center md:gap-6 xl:gap-12`}
        >
          <span className={`h1`}>{t("title.part3")}</span>
          <span className={`md:flex-1`}>
            <Link href={`/calendar`}>
              <Button size={"large"} fullWidth>
                {t("button")}
              </Button>
            </Link>
          </span>
        </span>
      </h1>
    </>
  );
};
