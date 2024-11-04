"use client";

import React from "react";
import * as yup from "yup";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthSubmitButton from "../AuthSubmitButton";
import AuthGoogleButton from "../AuthGoogleButton";
import { CustomLabel } from "@/libs/components/label/CustomLabel";
import { useTranslations } from "next-intl";

interface IRegisterFormFields {
  email: string;
  password: string;
  password2: string;
}

interface RegisterFormProps {
  onSubmit: SubmitHandler<IRegisterFormFields>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const t = useTranslations("AuthForm");

  const registerSchema = yup.object().shape({
    email: yup.string().email(t("invalidEmail")).required(t("requiredEmail")),
    password: yup
      .string()
      .min(6, t("invalidPassword"))
      .required(t("requiredPassword")),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), undefined], t("passwordsMismatch"))
      .required(t("requiredPassword2")),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<IRegisterFormFields>({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full"
      noValidate
    >
      <CustomLabel
        className={clsx(errors.email ? "mb-1" : "")}
        inputProps={{
          id: "email",
          type: "email",
          placeholder: t("emailPlaceholder"),
          ...register("email", { required: true }),
          className: errors.email ? "border-red" : "",
          onChange: () => {
            clearErrors("email");
          },
        }}
        labelProps={{
          htmlFor: "email",
        }}
      >
        Email
      </CustomLabel>
      {errors.email && (
        <p className="mb-4 block text-sm font-medium text-red">
          {errors.email.message}
        </p>
      )}
      <CustomLabel
        inputProps={{
          id: "password",
          type: "password",
          placeholder: t("passwordPlaceholder"),
          ...register("password", { required: true }),
          className: errors.password ? "border-red" : "",
          onChange: () => {
            clearErrors("password");
          },
        }}
        labelProps={{
          htmlFor: "password",
        }}
      >
        {t("passwordLabel")}
      </CustomLabel>
      {errors.password && (
        <p className="mb-4 block text-sm font-medium text-red">
          {errors.password.message}
        </p>
      )}
      <CustomLabel
        inputProps={{
          id: "password2",
          type: "password",
          placeholder: t("password2Placeholder"),
          ...register("password2", { required: true }),
          className: errors.password2 ? "border-red" : "",
          onChange: () => {
            clearErrors("password2");
          },
        }}
        labelProps={{
          htmlFor: "password2",
        }}
      >
        {t("password2Label")}
      </CustomLabel>
      {errors.password2 && (
        <p className="mb-4 block text-sm font-medium text-red">
          {errors.password2.message}
        </p>
      )}
      <p className="mt-4 text-sm font-normal text-black">
        {t("termsText")}{" "}
        <a href="#" className="text-sm font-normal text-orange-hot underline">
          {t("termsLink")}
        </a>
      </p>
      <div className="mt-6 flex w-full flex-col items-center">
        <AuthSubmitButton>{t("registerButton")}</AuthSubmitButton>
        <p className="mb-4 mt-4 text-center text-sm text-black">{t("or")}</p>
        <AuthGoogleButton>Google</AuthGoogleButton>
      </div>
    </form>
  );
};

export default RegisterForm;
