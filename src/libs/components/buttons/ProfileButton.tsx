import Image from "next/image";
import clsx from "clsx";
import { Icon } from "~/components/components";
import { IconType } from "~/enums/enums";

interface ProfileButtonProps {
  translatedText: string;
  userImage?: string | null;
  isMobile?: boolean;
  onClick: () => void;
  isLightVariant?: boolean;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  translatedText,
  userImage,
  isMobile = false,
  onClick,
  isLightVariant,
}) => {
  return (
    <button
      onClick={onClick}
      className="group flex cursor-pointer items-center p-0"
    >
      <span
        className={clsx(
          "ease h-12 w-12 overflow-hidden rounded-full border-2 transition duration-300 group-hover:border-orange-interactive group-active:border-orange-interactive xl:h-14 xl:w-14",
          isMobile ? "border-white-opacity" : "z-10 -mr-3 border-orange-hot"
        )}
      >
        {userImage ? (
          <Image
            src={userImage}
            alt="Profile picture"
            width={64}
            height={64}
            priority
          />
        ) : (
          <b
            className={clsx(
              "ease bg-white-opacity flex h-full w-full items-center justify-center backdrop-blur-lg transition duration-300",
              isLightVariant
                ? "light-effect xl:bg-white"
                : "dark-effect xl:bg-grey-dark xl:bg-opacity-70"
            )}
          >
            <Icon name={IconType.USER} className="text-3xl" />
          </b>
        )}
      </span>
      {!isMobile && (
        <span className="ease hidden rounded-r-full bg-orange-hot px-6 py-2 text-lg font-semibold uppercase text-white transition duration-300 group-hover:bg-orange-interactive group-active:bg-orange-interactive xl:block">
          {translatedText}
        </span>
      )}
    </button>
  );
};
