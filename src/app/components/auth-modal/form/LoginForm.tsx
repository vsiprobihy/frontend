"use client";

import React, { useState } from "react";
import clsx from "clsx";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Icon } from "@/libs/components/components";
import { IconType } from "@/libs/enums/enums";
import { CustomLabel } from "@/libs/components/label/CustomLabel";
import AuthSubmitButton from "../AuthSubmitButton";
import AuthGoogleButton from "../AuthGoogleButton";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Невірний формат email")
    .required("Електронна адреса обов'язкова"),
  password: yup
    .string()
    .min(6, "Пароль повинен містити принаймні 6 символів")
    .required("Пароль обов'язковий"),
});

interface ILoginFormFields {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: ILoginFormFields) => void;
  setRememberMe: (value: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, setRememberMe }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ILoginFormFields>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    setRememberMe(newValue);
  };

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
          placeholder: "Електронна адреса",
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
        className={clsx(errors.password ? "mb-1" : "")}
        inputProps={{
          id: "password",
          type: "password",
          placeholder: "Пароль",
          ...register("password", { required: true }),
          className: errors.email ? "border-red" : "",
          onChange: () => {
            clearErrors("password");
          },
        }}
        labelProps={{
          htmlFor: "password",
        }}
      >
        Пароль
      </CustomLabel>
      {errors.password && (
        <p className="mb-4 text-sm font-medium text-red">
          {errors.password.message}
        </p>
      )}

      <div className="mb-6 flex items-center">
        <Checkbox.Root
          className={clsx(
            "flex h-5 w-5 items-center justify-center rounded bg-grey-light-dark hover:bg-grey-light-middle focus:outline-none active:bg-dark",
            isChecked ? "bg-dark" : "bg-grey-light-dark"
          )}
          id="rememberMe"
          checked={isChecked}
          onCheckedChange={handleCheckboxChange}
        >
          <Checkbox.Indicator>
            <Icon name={IconType.CHECK} className="text-white" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <div className="flex w-full items-center justify-between">
          <label
            className="pl-2 text-sm font-normal text-black"
            htmlFor="rememberMe"
          >
            Запам&apos;ятати мене
          </label>
          <a href="#" className="text-sm font-normal text-orange-hot">
            Забули пароль?
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col items-center">
        <AuthSubmitButton>Увійти</AuthSubmitButton>
        <p className="mb-4 mt-4 text-center text-sm text-black">Або</p>
        <AuthGoogleButton>Google</AuthGoogleButton>
      </div>
    </form>
  );
};

export default LoginForm;
