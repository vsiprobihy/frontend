"use client";

import clsx from "clsx";
import { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "~/locale";

export enum Language {
  UA = "uk",
  EN = "en",
}

interface LanguageSwitcherProps {
  isLightVariant?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  isLightVariant,
}) => {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [language, setLanguage] = useState<Language>(locale as Language);

  const handleToggleLanguage = () => {
    const newLanguage = language === Language.UA ? Language.EN : Language.UA;
    startTransition(() => {
      setUserLocale(newLanguage as Locale);
    });
    setLanguage(newLanguage);
  };

  return (
    <div
      className={clsx(
        "flex h-10 w-28 cursor-pointer items-center rounded-full bg-opacity-40 px-1 shadow-sm",
        isLightVariant ? "bg-white" : "bg-black"
      )}
    >
      {Object.values(Language).map((lang) => (
        <button
          key={lang}
          className={clsx(
            "duration-600 flex h-8 w-1/2 items-center justify-center rounded-full outline-none transition-all",
            isLightVariant
              ? language === lang
                ? "bg-dark text-white"
                : "bg-white"
              : language === lang
                ? "bg-white text-dark"
                : "bg-black bg-opacity-20"
          )}
          onClick={handleToggleLanguage}
          aria-label={`Switch to ${lang}`}
          aria-pressed={language === lang}
          disabled={isPending}
        >
          {lang === Language.UA ? "UA" : "EN"}
        </button>
      ))}
    </div>
  );
};
