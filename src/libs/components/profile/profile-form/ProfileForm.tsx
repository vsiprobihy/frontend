"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button, CustomLabel, Icon } from "../..";
import { IconType } from "@/libs/enums";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-phone-number-input/style.css";
import createUserProfileValidationSchema from "@/libs/validation-schemas/user-profile-validation-schema";
import {
  createDaysOptions,
  createGenderOptions,
  createMonthOptions,
  createYearsOptions,
  tshirtSizesOptions,
} from "./FormData";
import { CustomRadioGroup } from "../../radio-group/CustomRadioGroup";
import CustomSelect from "../../select/CustomSelect";
import uaLabels from "react-phone-number-input/locale/ua";
import enLabels from "react-phone-number-input/locale/en";
import { UserProfile } from "@/libs/api-client";
import { getSplittedDateOfBirth } from "@/libs/helpers/getSplittedDateOfBirth";
import { useEffect } from "react";
import clsx from "clsx";
import LabelWithConditionalRequiredHighlight from "../../label/LabelWithConditionalRequiredHighlight";
import { ProfileFormError } from "./ProfileFormError";

type Props = {
  onSubmitProfileData: (profile: UserProfileFormValues) => void;
  user: UserProfile;
};

export type UserProfileFormValues = {
  first_name: string;
  last_name: string;
  gender?: string | null;
  year?: string;
  day?: string;
  month?: string;
  t_shirt_size?: string | null;
  country: string;
  city: string;
  phone_number?: string | null;
  sports_club: string;
  emergency_contact_name: string;
  emergency_contact_phone?: string | null;
  email: string;
};

export const ProfileForm: React.FC<Props> = ({ onSubmitProfileData, user }) => {
  const t = useTranslations();
  const locale = useLocale();
  const userProfileValidationSchema = createUserProfileValidationSchema(t);
  const genderOptions = createGenderOptions(t);
  const monthOptions = createMonthOptions(t);
  const daysOptions = createDaysOptions();
  const yearsOptions = createYearsOptions(1930, new Date().getFullYear());
  const phoneLabesLocal = locale === "en" ? enLabels : uaLabels;

  const defaultValues: UserProfileFormValues = {
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    gender: user.gender || null,
    t_shirt_size: user.t_shirt_size || "",
    country: user.country || "",
    city: user.city || "",
    phone_number: user.phone_number || "",
    sports_club: user.sports_club || "",
    emergency_contact_name: user.emergency_contact_name || "",
    emergency_contact_phone: user.emergency_contact_phone || "",
    ...getSplittedDateOfBirth(user?.date_of_birth),
    email: user.email || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    clearErrors,
    getValues,
    setValue,
    control,
    reset,
  } = useForm({
    resolver: yupResolver(userProfileValidationSchema),
    mode: "onBlur",
    defaultValues: defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [user]);

  return (
    <div className="lg:pr-32">
      <form
        onSubmit={handleSubmit(onSubmitProfileData)}
        className="mx-auto w-full"
        noValidate
      >
        <div className="lg:flex lg:justify-end">
          <div className="fluid-px w-full bg-white py-4 lg:w-7/12 lg:rounded-3xl lg:py-8">
            <p className="mb-6 hidden lg:block lg:text-4xl lg:font-semibold lg:uppercase">
              {t("profileForm.dataTitle.title")}
            </p>
            <p className="font-semibold uppercase leading-5 lg:text-[clamp(1rem,2.2vw+0.9rem,1.4rem)] lg:leading-7">
              {t("profileForm.dataTitle.personal")}
            </p>

            <div className="mb-8 mt-6">
              <div className="mb-6">
                <CustomLabel
                  inputProps={{
                    placeholder: t("profileForm.placeholders.name"),
                    id: "firstName",
                    type: "text",
                    ...register("first_name"),
                    className: clsx(
                      "bg-grey-light !h-12  lg:w-[455px] xl:w-[481px]",
                      {
                        "bg-white": !!getValues("first_name"),
                      }
                    ),
                    onChange: () => {
                      clearErrors("first_name");
                    },
                  }}
                  labelProps={{ htmlFor: "firstName" }}
                >
                  <LabelWithConditionalRequiredHighlight
                    text={t("profileForm.labels.firstName")}
                    requiredField={true}
                    condition={!!getValues("first_name")}
                  />
                </CustomLabel>
                <ProfileFormError message={errors.first_name?.message} />
              </div>

              <div className="mb-6">
                <CustomLabel
                  inputProps={{
                    className: clsx(
                      "bg-grey-light !h-12  lg:w-[455px] xl:w-[481px]",
                      {
                        "bg-white": !!getValues("last_name"),
                      }
                    ),
                    placeholder: t("profileForm.placeholders.lastName"),
                    id: "lastName",
                    type: "text",
                    ...register("last_name"),
                    onChange: () => {
                      clearErrors("last_name");
                    },
                  }}
                  labelProps={{ htmlFor: "lastName" }}
                >
                  <LabelWithConditionalRequiredHighlight
                    text={t("profileForm.labels.lastName")}
                    requiredField={true}
                    condition={!!getValues("last_name")}
                  />
                </CustomLabel>
                <ProfileFormError message={errors.last_name?.message} />
              </div>

              <div className="mb-6">
                <CustomRadioGroup
                  label={t("profileForm.labels.sex")}
                  options={genderOptions}
                  value={getValues("gender") as string}
                  onChange={(value: string) => setValue("gender", value)}
                  error={errors.gender?.message}
                  register={register("gender")}
                />
              </div>

              <p className="mb-2 text-[14px] font-medium leading-4 text-dark">
                {t("profileForm.labels.birth")}
              </p>
              <div className="mb-6 flex flex-col gap-2 lg:flex-row">
                <CustomSelect
                  name="day"
                  placeholder={t("profileForm.placeholders.day")}
                  items={daysOptions}
                  control={control}
                  triggerClassName="w-[92px]"
                  downIconClassname="opacity-0"
                />

                <CustomSelect
                  name="month"
                  placeholder={t("profileForm.placeholders.month")}
                  items={monthOptions}
                  control={control}
                  triggerClassName="w-[157px]"
                />

                <CustomSelect
                  name="year"
                  placeholder={t("profileForm.placeholders.year")}
                  items={yearsOptions}
                  control={control}
                  triggerClassName="w-[157px]"
                />
              </div>

              <CustomSelect
                name="t_shirt_size"
                label={t("profileForm.labels.size")}
                placeholder={t("profileForm.placeholders.size")}
                items={tshirtSizesOptions}
                control={control}
                triggerClassName="w-[158px]"
              />
            </div>

            <p className="mb-6 font-semibold uppercase leading-5 lg:text-[clamp(1rem,2.2vw+0.9rem,1.4rem)] lg:leading-7">
              {t("profileForm.dataTitle.contact")}
            </p>
            <div className="mb-8 mt-6">
              <div className="mb-6">
                <CustomLabel
                  inputProps={{
                    className: clsx(
                      "bg-grey-light !h-12  lg:w-[455px] xl:w-[481px]",
                      {
                        "bg-white": !!getValues("country"),
                      }
                    ),
                    placeholder: t("profileForm.placeholders.country"),
                    id: "country",
                    type: "text",
                    ...register("country"),
                    onChange: () => {
                      clearErrors("country");
                    },
                  }}
                  labelProps={{ htmlFor: "country" }}
                >
                  <LabelWithConditionalRequiredHighlight
                    text={t("profileForm.labels.country")}
                    requiredField={true}
                    condition={!!getValues("country")}
                  />
                </CustomLabel>
                <ProfileFormError message={errors.country?.message} />
              </div>

              <div className="mb-6">
                <div className="mb-6">
                  <CustomLabel
                    inputProps={{
                      className: clsx(
                        "bg-grey-light !h-12  lg:w-[455px] xl:w-[481px]",
                        {
                          "bg-white": !!getValues("city"),
                        }
                      ),
                      placeholder: t("profileForm.placeholders.city"),
                      id: "city",
                      type: "text",
                      ...register("city"),
                      onChange: () => {
                        clearErrors("city");
                      },
                    }}
                    labelProps={{ htmlFor: "city" }}
                  >
                    <LabelWithConditionalRequiredHighlight
                      text={t("profileForm.labels.city")}
                      requiredField={true}
                      condition={!!getValues("city")}
                    />
                  </CustomLabel>
                  <ProfileFormError message={errors.city?.message} />
                </div>
              </div>

              <div className="mb-6">
                <CustomLabel
                  inputProps={{
                    className: clsx(
                      "bg-grey-light !h-12 lg:w-[455px] xl:w-[481px]",
                      {
                        "bg-white": !!getValues("email"),
                      }
                    ),
                    placeholder: t("profileForm.placeholders.email"),
                    id: "email",
                    type: "email",
                    readOnly: true,
                    ...register("email"),
                    value: defaultValues.email,
                  }}
                  labelProps={{ htmlFor: "email" }}
                >
                  <LabelWithConditionalRequiredHighlight
                    text={t("profileForm.labels.email")}
                    requiredField={true}
                    condition={!!getValues("email")}
                  />
                </CustomLabel>
              </div>

              <p className="mb-2 text-[14px] font-medium leading-4 text-dark">
                {t("profileForm.labels.phone")}
              </p>
              <PhoneInputWithCountry
                placeholder={t("profileForm.placeholders.phone")}
                name="phone_number"
                control={control}
                labels={phoneLabesLocal}
                defaultCountry="UA"
                className="h-[51px] w-full gap-2 lg:w-[455px] xl:w-[481px]"
                numberInputProps={{
                  className: clsx(
                    "py-[22px] lg:w-[338px] px-4 placeholder:text-grey-light-middle hover:border-grey-light-middle bg-grey-light !h-12 focus:outline-none rounded-xl border border-grey-light-dark",
                    { "bg-white": !!getValues("phone_number") }
                  ),
                }}
              />
              <ProfileFormError message={errors.phone_number?.message} />
            </div>

            <div className="mb-6 flex items-center gap-3">
              <p className="font-semibold uppercase leading-5 lg:text-[clamp(1rem,2.2vw+0.9rem,1.4rem)] lg:leading-7">
                {t("profileForm.dataTitle.club")}
              </p>
              <Icon
                name={IconType.HINT}
                className="hidden py-[3px] lg:block lg:cursor-pointer lg:px-[3px] lg:text-lg lg:text-dark"
              />
            </div>

            <div className="mb-8 mt-6">
              <CustomLabel
                inputProps={{
                  className: clsx(
                    "bg-grey-light !h-12 lg:w-[455px] xl:w-[481px]",
                    {
                      "bg-white": !!getValues("sports_club"),
                    }
                  ),
                  placeholder: t("profileForm.placeholders.name"),
                  id: "clubName",
                  type: "text",
                  ...register("sports_club"),
                  onChange: () => {
                    clearErrors("sports_club");
                  },
                }}
                labelProps={{ htmlFor: "clubName" }}
              >
                <LabelWithConditionalRequiredHighlight
                  text={t("profileForm.labels.clubName")}
                  requiredField={true}
                  condition={!!getValues("sports_club")}
                />
              </CustomLabel>
              <ProfileFormError message={errors.sports_club?.message} />
            </div>

            <p className="mb-6 font-semibold uppercase leading-5 lg:text-[clamp(1rem,2.2vw+0.9rem,1.4rem)] lg:leading-7">
              {t("profileForm.dataTitle.contactPerson")}
            </p>

            <div className="mb-8 mt-6">
              <CustomLabel
                inputProps={{
                  className: clsx(
                    "bg-grey-light !h-12  lg:w-[455px] xl:w-[481px]",
                    {
                      "bg-white": !!getValues("emergency_contact_name"),
                    }
                  ),
                  placeholder: t("profileForm.placeholders.name"),
                  id: "contactPerson",
                  type: "text",
                  ...register("emergency_contact_name"),
                  onChange: () => {
                    clearErrors("emergency_contact_name");
                  },
                }}
                labelProps={{ htmlFor: "contactPerson" }}
              >
                <LabelWithConditionalRequiredHighlight
                  text={t("profileForm.labels.firstName")}
                  requiredField={true}
                  condition={!!getValues("emergency_contact_name")}
                />
              </CustomLabel>
              <ProfileFormError
                message={errors.emergency_contact_name?.message}
              />
            </div>

            <p className="mb-2 text-[14px] font-medium leading-4 text-dark">
              {t("profileForm.labels.phone")}
            </p>
            <PhoneInputWithCountry
              placeholder={t("profileForm.placeholders.phone")}
              name="emergency_contact_phone"
              control={control}
              labels={phoneLabesLocal}
              defaultCountry="UA"
              className={clsx("h-12 w-full gap-2 lg:w-[455px] xl:w-[481px]", {
                "bg-white": !!getValues("emergency_contact_phone"),
              })}
              numberInputProps={{
                className: clsx(
                  "py-[22px] lg:w-[338px] px-4 placeholder:text-grey-light-middle hover:border-grey-light-middle bg-grey-light !h-12 focus:outline-none rounded-xl border border-grey-light-dark",
                  { "bg-white": !!getValues("emergency_contact_phone") }
                ),
              }}
            />
          </div>
        </div>

        <div className="fluid-px mt-8 lg:mt-6 lg:flex lg:justify-end lg:px-0">
          <div className="lg:w-96">
            <Button
              type="submit"
              size={"middle"}
              disabled={!isDirty || !isValid}
              fullWidth
            >
              {t("profileForm.button")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
