import clsx from "clsx";
import Link from "next/link";
import { AppRoute } from "~/enums/route/app-route";

interface NavigationLinkProps {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
  isLightTheme?: boolean;
  pathname?: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  label,
  variant = "desktop",
  isLightTheme,
  pathname,
}) => {
  const effect = isLightTheme ? "light-effect" : "dark-effect";

  const isActive = pathname === href;

  const activeClasses = isActive
    ? isLightTheme
      ? "bg-dark text-white bg-opacity-1"
      : "bg-white text-dark"
    : `bg-white bg-opacity-20 ${effect}`;

  const commonClasses =
    "transition duration-300 ease rounded-full font-semibold shadow";

  const desktopClasses = `backdrop-blur-lg px-4 py-2.5 text-lg ${activeClasses}`;

  const mobileOuterClasses =
    "flex items-center bg-black bg-opacity-40 backdrop-blur-lg rounded-full p-1 flex-1";

  const mobileInnerClasses = `flex flex-1 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-lg px-1 py-3.5 text-sm uppercase ${effect}`;

  return (
    <Link
      href={href}
      className={clsx(
        commonClasses,
        variant === "desktop" ? desktopClasses : mobileOuterClasses
      )}
    >
      {variant === "mobile" ? (
        <span className={mobileInnerClasses}>{label}</span>
      ) : (
        label
      )}
    </Link>
  );
};

export const linkValues = [
  { name: "Календар", url: AppRoute.CALENDAR },
  { name: "Про нас", url: AppRoute.ABOUT },
];
