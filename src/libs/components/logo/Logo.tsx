import clsx from "clsx";
import { IconType } from "~/enums";
import { Icon } from "~/components";

interface LogoProps {
  isLarge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isLarge = false }) => (
  <figure
    className={clsx("m-0 inline-flex content-center py-3", {
      "scale-150": isLarge,
    })}
  >
    <Icon name={IconType.CACTUS} className="mr-1 text-3xl md:text-4xl" />
    <figcaption className="flex flex-row items-center">
      <span className="self-end text-2xl font-semibold italic md:text-3xl">
        ВСІ
      </span>
      <span className="ml-2 skew-x-[-10deg] transform rounded-lg bg-yellow px-3 py-0.5 text-2xl font-semibold italic text-dark md:text-3xl">
        Пробіги
      </span>
    </figcaption>
  </figure>
);
