"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthSubmitButton from "../AuthSubmitButton";
import AuthGoogleButton from "../AuthGoogleButton";
import CustomLabel from "../../Label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Невірний формат email")
    .required("Електронна адреса обов'язкова"),
  password: yup
    .string()
    .min(6, "Пароль повинен містити принаймні 6 символів")
    .required("Пароль обов'язковий"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Паролі не співпадають") // Заміна null на undefined
    .required("Підтвердження пароля обов'язково"),
});

interface IRegisterFormFields {
  email: string;
  password: string;
  password2: string;
}

interface RegisterFormProps {
  onSubmit: SubmitHandler<IRegisterFormFields>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
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
        inputProps={{
          id: "password",
          type: "password",
          placeholder: "Пароль",
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
        Пароль
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
          placeholder: "Підтвердження пароля",
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
        Підтвердження пароля
      </CustomLabel>
      {errors.password2 && (
        <p className="mb-4 block text-sm font-medium text-red">
          {errors.password2.message}
        </p>
      )}
      <p className="mt-4 text-sm font-normal text-black">
        Заповнюючи форму реєстрації, ви автоматично приймаєте умови{" "}
        <a href="#" className="text-sm font-normal text-orange-hot underline">
          Договору оферти
        </a>
      </p>
      <div className="mt-6 flex w-full flex-col items-center">
        <AuthSubmitButton>Зареєструватися</AuthSubmitButton>
        <p className="mb-4 mt-4 text-center text-sm text-black">Або</p>
        <AuthGoogleButton>Google</AuthGoogleButton>
      </div>
    </form>
  );
};

export default RegisterForm;
