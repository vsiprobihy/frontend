import clsx from "clsx";
import { IconType } from "~/enums/enums";
import { Icon } from "~/components/components";

interface NotificationButtonProps {
  hasIndicator?: boolean;
  onClick: () => void;
  isLightTheme?: boolean;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({
  hasIndicator,
  onClick,
  isLightTheme,
}) => (
  <button
    onClick={onClick}
    className={clsx(
      "ease relative my-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-20 shadow backdrop-blur-lg transition duration-300",
      isLightTheme ? "light-effect" : "dark-effect"
    )}
  >
    <Icon name={IconType.BELL} className="text-2xl" />
    {hasIndicator && (
      <div className="absolute right-0 top-1 h-2.5 w-2.5 rounded-full bg-red"></div>
    )}
  </button>
);
