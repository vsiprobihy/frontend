import { usePathname } from "next/navigation";
import { AppRoute } from "~/enums/enums";

export const useColorVariant = () => {
  const pathname = usePathname();

  // TODO: Add other routes if necessary
  const lightVariantRoutes = [AppRoute.ABOUT, AppRoute.NOT_FOUND];

  const isLightVariant = lightVariantRoutes.includes(pathname as AppRoute);

  return { isLightVariant, pathname };
};
