export const CALENDAR_FILTER_KEYS = [
  "competition_type",
  "distance_max",
  "distance_min",
  "dateFrom",
  "dateTo",
  "name",
  "page",
  "place",
] as const;

export type CalendarFilterKey = (typeof CALENDAR_FILTER_KEYS)[number];

export type CalendarFilterParams = {
  [key in CalendarFilterKey]?: string | string[];
};
