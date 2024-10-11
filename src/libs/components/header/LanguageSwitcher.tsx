import clsx from "clsx";

export enum Language {
  UA = "UA",
  EN = "EN",
}

interface LanguageSwitcherProps {
  language: Language;
  toggleLanguage: () => void;
  isLightVariant?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  toggleLanguage,
  isLightVariant,
}) => {
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
              ? {
                  "bg-dark text-white": language === lang,
                  "bg-white": language !== lang,
                }
              : {
                  "bg-white text-dark": language === lang,
                  "bg-black bg-opacity-20": language !== lang,
                }
          )}
          onClick={toggleLanguage}
          aria-label={`Switch to ${lang}`}
          aria-pressed={language === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
