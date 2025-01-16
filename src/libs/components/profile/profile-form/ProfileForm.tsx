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
import {
  UserProfile,
  authProfileList,
  authProfilePartialUpdate,
} from "@/libs/api-client";
import { getSplittedDateOfBirth } from "@/libs/helpers/getSplittedDateOfBirth";
import { useEffect } from "react";
import clsx from "clsx";
import LabelWithConditionalRequiredHighlight from "../../label/LabelWithConditionalRequiredHighlight";
import { ProfileFormError } from "./ProfileFormError";
import {
  SnakeToCamel,
  snakeToCamelCase,
} from "@/libs/helpers/snakeToCamelCase";
import { camelToSnake } from "@/libs/helpers/camelToCase";
import cyrillicToTranslit from "cyrillic-to-translit-js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type UserProfileFormValues = {
  firstName: string;
  lastName: string;
  gender?: string | null;
  year?: string;
  day?: string;
  month?: string;
  tShirtSize?: string | null;
  country: string;
  city: string;
  phoneNumber?: string | null;
  sportsClub: string;
  emergencyContactName: string;
  emergencyContactPhone?: string | null;
  email: string;
};

export const ProfileForm = () => {
  const t = useTranslations();
  const locale = useLocale();
  const queryClient = useQueryClient();
  const userProfileValidationSchema = createUserProfileValidationSchema(t);
  const genderOptions = createGenderOptions(t);
  const monthOptions = createMonthOptions(t);
  const daysOptions = createDaysOptions();
  const yearsOptions = createYearsOptions(1930, new Date().getFullYear());
  const phoneLabesLocal = locale === "en" ? enLabels : uaLabels;

  const { data: user } = useQuery<SnakeToCamel<UserProfile>>({
    queryKey: ["userProfile"],
    queryFn: async (): Promise<UserProfile> => {
      const response = await authProfileList();
      if (response.data && response.response.status === 200) {
        return snakeToCamelCase(response.data);
      } else {
        throw new Error(response.response.statusText);
      }
    },
  });

  const defaultValues: UserProfileFormValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    gender: user?.gender || null,
    tShirtSize: user?.tShirtSize || "",
    country: user?.country || "",
    city: user?.city || "",
    phoneNumber: user?.phoneNumber || "",
    sportsClub: user?.sportsClub || "",
    emergencyContactName: user?.emergencyContactName || "",
    emergencyContactPhone: user?.emergencyContactPhone || "",
    ...getSplittedDateOfBirth(user?.dateOfBirth),
    email: user?.email || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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

  const { mutate: mutateProfileUpdate } = useMutation<
    { data?: UserProfile },
    Error,
    UserProfile
  >({
    mutationFn: async (userProfileData: UserProfile) => {
      const response = await authProfilePartialUpdate({
        body: userProfileData,
      });

      if (response.response.status === 200) {
        return response;
      } else {
        throw new Error(response.response.statusText);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      alert(t("updateFailed", { error: error.message }));
    },
  });

  const handleSubmitProfile = (formData: UserProfileFormValues) => {
    const { year, month, day, lastName, firstName } = formData;
    let dateOfBirth: Date | string | undefined;

    if (year && month && day) {
      const dob = new Date(Date.UTC(+year, +month - 1, +day));
      dateOfBirth = dob.toISOString().split("T")[0];
    }

    const userData = {
      date_of_birth: dateOfBirth,
      first_name_eng: cyrillicToTranslit({ preset: "uk" }).transform(firstName),
      last_name_eng: cyrillicToTranslit({ preset: "uk" }).transform(lastName),
      ...formData,
    };

    const snakeCaseUserData = camelToSnake(userData);

    mutateProfileUpdate(snakeCaseUserData);
  };

  return (
    <div className="lg:pr-32">
      <form
        onSubmit={handleSubmit(handleSubmitProfile)}
        className="mx-auto mb-20 w-full"
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
                    ...register("firstName"),
                    className: clsx(
                      "bg-grey-light !h-12  lg:w-[28rem] xl:w-[30rem]",
                      {
                        "bg-white": !!getValues("firstName"),
                      }
                    ),
                    onChange: () => {
                      clearErrors("firstName");
                    },
                  }}
                  labelProps={{ htmlFor: "firstName" }}
                >
                  <LabelWithConditionalRequiredHighlight
                    text={t("profileForm.labels.firstName")}
                    requiredField={true}
                    condition={!!getValues("firstName")}
                  />
                </CustomLabel>
                <ProfileFormError message={errors.firstName?.message} />
              </div>

              <div className="mb-6">
                <CustomLabel
                  inputProps={{
                    className: clsx(
                      "bg-grey-light !h-12 lg:w-[28rem] xl:w-[30rem]",
                      {
                        "bg-white": !!getValues("lastName"),
                      }
                    ),
                    placeholder: t("profileForm.placeholders.lastName"),
                    id: "lastName",
                    type: "text",
                    ...register("lastName"),
                    onChange: () => {
                      clearErrors("lastName");
                    },
                  }}
                  labelProps={{ htmlFor: "lastName" }}
                >
                  <LabelWithConditionalRequiredHighlight
                    text={t("profileForm.labels.lastName")}
                    requiredField={true}
                    condition={!!getValues("lastName")}
                  />
                </CustomLabel>
                <ProfileFormError message={errors.lastName?.message} />
              </div>

              <div className="mb-6">
                <CustomRadioGroup
                  label={t("profileForm.labels.sex")}
                  options={genderOptions}
                  value={getValues("gender") as string}
                  onChange={(value: string) => {
                    setValue("gender", value, { shouldValidate: true });
                  }}
                  error={errors.gender?.message}
                />
              </div>

              <p className="mb-2 text-sm font-medium leading-4 text-dark">
                {t("profileForm.labels.birth")}
              </p>
              <div className="mb-6 flex flex-col gap-2 lg:flex-row">
                <CustomSelect
                  name="day"
                  placeholder={t("profileForm.placeholders.day")}
                  items={daysOptions}
                  control={control}
                  triggerClassName="w-24"
                  downIconClassname="opacity-0"
                />

                <CustomSelect
                  name="month"
                  placeholder={t("profileForm.placeholders.month")}
                  items={monthOptions}
                  control={control}
                  triggerClassName="w-40"
                />

                <CustomSelect
                  name="year"
                  placeholder={t("profileForm.placeholders.year")}
                  items={yearsOptions}
                  control={control}
                  triggerClassName="w-40"
                />
              </div>

              <CustomSelect
                name="tShirtSize"
                label={t("profileForm.labels.size")}
                placeholder={t("profileForm.placeholders.size")}
                items={tshirtSizesOptions}
                control={control}
                triggerClassName="w-40"
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
                      "bg-grey-light !h-12 lg:w-[28rem] xl:w-[30rem]",
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
                        "bg-grey-light !h-12 lg:w-[28rem] xl:w-[30rem]",
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
                      "bg-grey-light !h-12 lg:w-[28rem] xl:w-[30rem]",
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

              <p className="mb-2 text-sm font-medium leading-4 text-dark">
                {t("profileForm.labels.phone")}
              </p>
              <PhoneInputWithCountry
                placeholder={t("profileForm.placeholders.phone")}
                name="phone_number"
                control={control}
                labels={phoneLabesLocal}
                defaultCountry="UA"
                className="h-12 w-full gap-2 lg:w-[28rem] xl:w-[30rem]"
                numberInputProps={{
                  className: clsx(
                    "py-6 lg:w-[21rem] px-4 placeholder:text-grey-light-middle hover:border-grey-light-middle bg-grey-light !h-12 focus:outline-none rounded-xl border border-grey-light-dark",
                    { "bg-white": !!getValues("phoneNumber") }
                  ),
                }}
              />
              <ProfileFormError message={errors.phoneNumber?.message} />
            </div>

            <div className="mb-6 flex items-center gap-3">
              <p className="font-semibold uppercase leading-5 lg:text-[clamp(1rem,2.2vw+0.9rem,1.4rem)] lg:leading-7">
                {t("profileForm.dataTitle.club")}
              </p>
              <Icon
                name={IconType.HINT}
                className="hidden py-1 lg:block lg:cursor-pointer lg:px-1 lg:text-lg lg:text-dark"
              />
            </div>

            <div className="mb-8 mt-6">
              <CustomLabel
                inputProps={{
                  className: clsx(
                    "bg-grey-light !h-12 lg:w-[28rem] xl:w-[30rem]",
                    {
                      "bg-white": !!getValues("sportsClub"),
                    }
                  ),
                  placeholder: t("profileForm.placeholders.name"),
                  id: "clubName",
                  type: "text",
                  ...register("sportsClub"),
                  onChange: () => {
                    clearErrors("sportsClub");
                  },
                }}
                labelProps={{ htmlFor: "clubName" }}
              >
                <LabelWithConditionalRequiredHighlight
                  text={t("profileForm.labels.clubName")}
                  requiredField={true}
                  condition={!!getValues("sportsClub")}
                />
              </CustomLabel>
              <ProfileFormError message={errors.sportsClub?.message} />
            </div>

            <p className="mb-6 font-semibold uppercase leading-5 lg:text-[clamp(1rem,2.2vw+0.9rem,1.4rem)] lg:leading-7">
              {t("profileForm.dataTitle.contactPerson")}
            </p>

            <div className="mb-8 mt-6">
              <CustomLabel
                inputProps={{
                  className: clsx(
                    "bg-grey-light !h-12 lg:w-[28rem] xl:w-[30rem]",
                    {
                      "bg-white": !!getValues("emergencyContactName"),
                    }
                  ),
                  placeholder: t("profileForm.placeholders.name"),
                  id: "contactPerson",
                  type: "text",
                  ...register("emergencyContactName"),
                  onChange: () => {
                    clearErrors("emergencyContactName");
                  },
                }}
                labelProps={{ htmlFor: "contactPerson" }}
              >
                <LabelWithConditionalRequiredHighlight
                  text={t("profileForm.labels.firstName")}
                  requiredField={true}
                  condition={!!getValues("emergencyContactName")}
                />
              </CustomLabel>
              <ProfileFormError
                message={errors.emergencyContactName?.message}
              />
            </div>

            <p className="mb-2 text-sm font-medium leading-4 text-dark">
              {t("profileForm.labels.phone")}
            </p>
            <PhoneInputWithCountry
              placeholder={t("profileForm.placeholders.phone")}
              name="emergency_contact_phone"
              control={control}
              labels={phoneLabesLocal}
              defaultCountry="UA"
              className={clsx("h-12 w-full gap-2 lg:w-[28rem] xl:w-[30rem]", {
                "bg-white": !!getValues("emergencyContactPhone"),
              })}
              numberInputProps={{
                className: clsx(
                  "py-6 lg:w-[21rem] px-4 placeholder:text-grey-light-middle hover:border-grey-light-middle bg-grey-light !h-12 focus:outline-none rounded-xl border border-grey-light-dark",
                  { "bg-white": !!getValues("emergencyContactPhone") }
                ),
              }}
            />
          </div>
        </div>

        <div className="fluid-px mt-8 lg:mt-6 lg:flex lg:justify-end lg:px-0">
          <div className="lg:w-96">
            <Button type="submit" size={"middle"} disabled={!isValid} fullWidth>
              {t("profileForm.button")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
