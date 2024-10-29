"use client";

import { useTranslations } from "next-intl";
import { ProfileMobileFormHeader } from "./profile-mobile-form-header/ProfileMobileFormHeader";
import { Button, CustomLabel } from "../..";

export const ProfileForm = () => {
  const t = useTranslations();

  return (
    <div className="lg:pr-32">
      <div className="fluid-px mb-4 lg:hidden">
        <ProfileMobileFormHeader />
      </div>

      <div className="lg:flex lg:justify-end">
        <div className="fluid-px w-full bg-white py-4 lg:w-7/12 lg:rounded-3xl">
          <p className="mb-6 hidden lg:block lg:text-4xl lg:font-semibold lg:uppercase">
            {t("profileForm.dataTitle.title")}
          </p>
          <p className="font-semibold uppercase leading-5 lg:text-[clamp(1rem,2.2vw+0.9rem,1.4rem)]">
            {t("profileForm.dataTitle.personal")}
          </p>

          <CustomLabel children={"Email"} />
        </div>
      </div>

      <div className="fluid-px mt-8 lg:mt-6 lg:flex lg:justify-end lg:px-0">
        <div className="lg:w-96">
          <Button
            size={"middle"}
            children={t("profileForm.button")}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};
