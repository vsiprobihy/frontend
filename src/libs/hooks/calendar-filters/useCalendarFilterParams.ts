import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  CALENDAR_FILTER_KEYS,
  CalendarFilterKey,
  CalendarFilterParams,
} from "~/constants/calendarFiltersKeys";

export const useCalendarFilterParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getFilterParams = useCallback((): CalendarFilterParams => {
    const params: CalendarFilterParams = {};

    searchParams.forEach((value, key) => {
      if (key in CALENDAR_FILTER_KEYS) {
        const filterParamKey = key as CalendarFilterKey;
        const existingParam = params[filterParamKey];
        if (existingParam) {
          params[filterParamKey] = Array.isArray(existingParam)
            ? [...existingParam, value]
            : [existingParam, value];
        } else {
          params[filterParamKey] = value;
        }
      }
    });

    return params;
  }, [searchParams]);

  const setCalendarFilterParams = useCallback(
    (
      updateState: (prevState: CalendarFilterParams) => CalendarFilterParams
    ) => {
      const prevState = getFilterParams();
      const updatedParams = updateState(prevState);

      const newSearchParams = new URLSearchParams();

      Object.entries(updatedParams).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => newSearchParams.append(key, v));
        } else if (value) {
          newSearchParams.append(key, value);
        }
      });

      router.replace(`${pathname}?${newSearchParams.toString()}`);
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
