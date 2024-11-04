import { usePathname } from "next/navigation";
import { AppRoute } from "~/enums";

export const useColorVariant = () => {
  const pathname = usePathname();

  // TODO: Add other routes if necessary
  const lightVariantRoutes = [
    AppRoute.ABOUT,
    AppRoute.NOT_FOUND,
    AppRoute.EVENT,
  ];

  const isLightVariant = lightVariantRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return { isLightVariant, pathname };
};
