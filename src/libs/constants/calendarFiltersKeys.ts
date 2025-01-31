export const CALENDAR_FILTER_KEYS = {
  COMPETITION_TYPE: "competition_type",
  DISTANCE_MAX: "distance_max",
  DISTANCE_MIN: "distance_min",
  DATE_FROM: "dateFrom",
  DATE_TO: "dateTo",
  NAME: "name",
  PAGE: "page",
  PLACE: "place",
} as const;

export type CalendarFilterKey = keyof typeof CALENDAR_FILTER_KEYS;
