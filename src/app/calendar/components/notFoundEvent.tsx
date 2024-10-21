"use client";
import { NotFoundTemplate } from "~/components";
import { useTranslations } from "next-intl";

export const NotFoundEvent: React.FC = () => {
  const t = useTranslations("notFoundEvent");

  return (
    <NotFoundTemplate
      heading={t("heading")}
      title={t("title")}
      description={t("description")}
    />
  );
};
