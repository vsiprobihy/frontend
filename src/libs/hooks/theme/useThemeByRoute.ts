import { usePathname } from "next/navigation";
import { AppRoute } from "~/enums/enums";

export const useThemeByRoute = () => {
  const pathname = usePathname();

  const lightThemeRoutes = [AppRoute.ABOUT, AppRoute.NOT_FOUND];

  const isLightVariant = lightThemeRoutes.includes(pathname as AppRoute);

  return { isLightTheme: isLightVariant, pathname };
};
