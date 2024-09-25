"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthSubmitButton from "../../AuthSubmitButton";
import AuthGoogleButton from "../../AuthGoogleButton";

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
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-normal text-black">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
          placeholder="Електронна адреса"
          className="border-grey-grey-light mt-1 block h-[64px] w-full rounded-xl border px-4 py-[22px] placeholder:text-grey-light-middle hover:border-grey-light-middle focus:border-grey-light-middle focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-normal text-black"
        >
          Пароль
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true })}
          placeholder="Пароль"
          className="border-grey-grey-light mt-1 block h-[64px] w-full rounded-xl border px-4 py-[22px] placeholder:text-grey-light-middle hover:border-grey-light-middle focus:border-grey-light-middle focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password2"
          className="block text-sm font-normal text-black"
        >
          Підтвердження пароля
        </label>
        <input
          id="password2"
          type="password"
          {...register("password2", { required: true })}
          placeholder="Підтвердження пароля"
          className="border-grey-grey-light mt-1 block h-[64px] w-full rounded-xl border px-4 py-[22px] placeholder:text-grey-light-middle hover:border-grey-light-middle focus:border-grey-light-middle focus:outline-none"
        />
      </div>
      <p className="mt-4 text-sm font-normal text-black">
        Заповнюючи форму реєстрації, ви автоматично приймаєте умови{" "}
        <a href="#" className="text-sm font-normal text-orange-hot underline">
          Договору оферти
        </a>
      </p>

      <div className="mt-6 flex w-full flex-col items-center">
        <AuthSubmitButton text="Зареєструватися" />
        <p className="mb-4 mt-4 text-center text-sm text-black">Або</p>
        <AuthGoogleButton text="Google" />
      </div>
      {/* {isLoading && <p className="text-blue-500 mt-4">Registering...</p>}
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {data && <p className="text-green-500 mt-4">Registration successful!</p>} */}
    </form>
  );
};

export default RegisterForm;
