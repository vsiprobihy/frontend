"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthSubmitButton from "../AuthSubmitButton";
import AuthGoogleButton from "../AuthGoogleButton";
import CustomLabel from "../../Label";

interface IRegisterFormFields {
  email: string;
  password: string;
  password2: string;
}

interface RegisterFormProps {
  onSubmit: SubmitHandler<IRegisterFormFields>;
  isLoading: boolean;
  error: Error | null;
  data: { email?: string; password?: string; password2?: string } | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  // isLoading,
  // error,
  // data,
}) => {
  const { register, handleSubmit } = useForm<IRegisterFormFields>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full">
      <CustomLabel
        inputProps={{
          id: "email",
          type: "email",
          placeholder: "Електронна адреса",
          ...register("email", { required: true }),
        }}
        labelProps={{
          htmlFor: "email",
        }}
      >
        Email
      </CustomLabel>
      <CustomLabel
        inputProps={{
          id: "password",
          type: "password",
          placeholder: "Пароль",
          ...register("password", { required: true }),
        }}
        labelProps={{
          htmlFor: "password",
        }}
      >
        Пароль
      </CustomLabel>
      <CustomLabel
        inputProps={{
          id: "password2",
          type: "password",
          placeholder: "Підтвердження пароля",
          ...register("password2", { required: true }),
        }}
        labelProps={{
          htmlFor: "password2",
        }}
      >
        Підтвердження пароля
      </CustomLabel>
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
      {/* {isLoading && <p className="text-blue-500 mt-4">Registering...</p>}
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {data && <p className="text-green-500 mt-4">Registration successful!</p>} */}
    </form>
  );
};

export default RegisterForm;
