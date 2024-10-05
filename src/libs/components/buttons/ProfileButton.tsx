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
          "ease h-12 w-12 overflow-hidden rounded-full border-2 border-orange-hot transition duration-300 group-hover:border-orange-interactive group-active:border-orange-interactive xl:h-14 xl:w-14",
          !isMobile && "z-10 -mr-3"
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
              "ease flex h-full w-full items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg transition duration-300 group-hover:bg-orange-interactive group-hover:text-white group-active:bg-orange-interactive group-active:text-white",
              isLightVariant
                ? "xl:bg-white"
                : "xl:bg-grey-dark xl:bg-opacity-70"
            )}
          >
            <Icon name={IconType.USER} className="text-3xl" />
          </b>
        )}
      </span>
      {!isMobile && (
        <span className="ease hidden w-32 rounded-r-full bg-orange-hot py-2 text-lg font-semibold uppercase text-white transition duration-300 group-hover:bg-orange-interactive group-active:bg-orange-interactive xl:block">
          {translatedText}
        </span>
      )}
    </button>
  );
};
