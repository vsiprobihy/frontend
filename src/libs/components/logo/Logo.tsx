import clsx from "clsx";
import { IconType } from "~/enums";
import { Icon } from "~/components";
import { useTranslations } from "next-intl";

interface LogoProps {
  isLarge?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ isLarge = false, className }) => {
  const t = useTranslations("Logo");

  return (
    <figure
      className={clsx("m-0 inline-flex content-center", {
        "scale-150": isLarge,
      })}
    >
      <Icon
        name={IconType.CACTUS}
        className={clsx("mr-1 text-3xl md:text-4xl", className)}
      />
      <figcaption className="flex flex-row items-center">
        <span
          className={clsx(
            "self-end text-2xl font-semibold italic md:text-3xl",
            className
          )}
        >
          {t("all")}
        </span>
        <span className="ml-2 skew-x-[-10deg] transform rounded-lg bg-yellow px-3 py-0.5 text-2xl font-semibold italic text-dark md:text-3xl">
          {t("races")}
        </span>
      </figcaption>
    </figure>
  );
};
