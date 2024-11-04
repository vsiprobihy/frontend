"use client";

import { Button, NotFoundTemplate } from "~/components";
import { useRouter } from "next/navigation";
import { AppRoute } from "~/enums";
import { useTranslations } from "next-intl";

export const NotFoundContent: React.FC = () => {
  const t = useTranslations("notFoundPage");
  const router = useRouter();

  const onCalendarButtonClick = () => {
    router.push(AppRoute.CALENDAR);
  };

  return (
    <NotFoundTemplate
      heading="404"
      title={t("title")}
      description={t("description")}
      isLage
    >
      <Button size="middle" fullWidth onClick={onCalendarButtonClick}>
        {t("button")}
      </Button>
    </NotFoundTemplate>
  );
};
