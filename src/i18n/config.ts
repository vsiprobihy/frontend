export type Locale = (typeof locales)[number];

export const locales = ["uk", "en"] as const;
export const defaultLocale: Locale = "uk";
