"use client";
import Image from "next/image";
import RunningStepImage from "~/images/running-step.webp";
import { Button } from "~/components/components";

const titleTextArray: [string, string, string] = [
  `Всеукраїнський`,
  `календар`,
  `пробігів`,
];

const buttonText = `Календар`;

export const HeroSectionTitle: React.FC = () => {
  const onCalendarButtonClick = () => {
    // TODO link to Calendar
  };

  return (
    <div>
      <h1 className={`flex flex-col text-white`}>
        <span className={`h1`}>{titleTextArray[0]}</span>
        <span
          className={`flex flex-row items-center gap-2.5 md:gap-6 xl:gap-12`}
        >
          <span className={`flex-1`}>
            <Image
              width={335}
              height={113}
              className="h-[2.875rem] w-full rounded-full md:h-[4.5rem] xl:h-[7.125rem]"
              alt={`Running`}
              src={RunningStepImage}
            />
          </span>
          <span className={`h1 w-min whitespace-nowrap`}>
            {titleTextArray[1]}
          </span>
        </span>

        <span
          className={`flex flex-col gap-2 md:flex-row md:items-center md:gap-6 xl:gap-12`}
        >
          <span className={`h1`}>{titleTextArray[2]}</span>
          <span className={`md:flex-1`}>
            <Button size={"large"} fullWidth onClick={onCalendarButtonClick}>
              {buttonText}
            </Button>
          </span>
        </span>
      </h1>
    </div>
  );
};
