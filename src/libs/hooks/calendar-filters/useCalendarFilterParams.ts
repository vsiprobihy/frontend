import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  CALENDAR_FILTER_KEYS,
  CalendarFilterKey,
} from "@/libs/constants/calendarFiltersKeys";
import { useCallback } from "react";

export type CalendarFilterParams = {
  [key in (typeof CALENDAR_FILTER_KEYS)[CalendarFilterKey]]?: string | string[];
};

export const useCalendarFilterParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getFilterParams = useCallback((): CalendarFilterParams => {
    const params: CalendarFilterParams = {};

    searchParams.forEach((value, key) => {
      const existingParam = params[key as keyof CalendarFilterParams];

      if (existingParam) {
        params[key as keyof CalendarFilterParams] = Array.isArray(existingParam)
          ? [...(existingParam as string[]), value]
          : [existingParam as string, value];
      } else {
        params[key as keyof CalendarFilterParams] = value;
      }
    });

    return params;
  }, [searchParams]);

  const setCalendarFilterParams = useCallback(
    (update: (prevState: CalendarFilterParams) => CalendarFilterParams) => {
      const prevState = getFilterParams();
      const updatedParams = update(prevState);

      const searchParams = new URLSearchParams();

      Object.entries(updatedParams).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => searchParams.append(key, v));
        } else if (value) {
          searchParams.append(key, value);
        }
      });

      router.push(`${pathname}?${searchParams.toString()}`);
    },
    [router, pathname, getFilterParams]
  );

  const resetCalendarFilterParams = useCallback(() => {
    router.replace(pathname);
  }, [router, pathname]);

  return {
    filterParams: getFilterParams(),
    resetCalendarFilterParams,
    setCalendarFilterParams,
  };
};
