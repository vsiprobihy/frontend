
import { useTranslations } from "next-intl";

export const ProfileHeader = () => {
  const t = useTranslations();

  return (
    <div>
      <p>{t("profile.title")}</p>
    </div>
  );
};
