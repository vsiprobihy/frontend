"use client";

import React, { useState } from "react";
import clsx from "clsx";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckIcon } from "@radix-ui/react-icons";
import AuthSubmitButton from "../AuthSubmitButton";
import AuthGoogleButton from "../AuthGoogleButton";
import CustomLabel from "../../Label";

interface ILoginFormFields {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: SubmitHandler<ILoginFormFields>;
  isLoading: boolean;
  error: Error | null;
  data: Record<string, unknown>;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  // isLoading,
  // error,
  // data,
}) => {
  const { register, handleSubmit } = useForm<ILoginFormFields>();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
      <div className="mb-6 flex items-center">
        <Checkbox.Root
          className={clsx(
            "bg-grey-grey-light flex h-5 w-5 items-center justify-center rounded hover:bg-grey-light-middle focus:outline-none active:bg-dark",
            isChecked ? "bg-dark" : "bg-grey-grey-light"
          )}
          id="c1"
          checked={isChecked}
          onCheckedChange={handleCheckboxChange}
        >
          <Checkbox.Indicator>
            <CheckIcon className="text-white" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <div className="flex w-full items-center justify-between">
          <label className="pl-2 text-sm font-normal text-black" htmlFor="c1">
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
      {/* {isLoading && <p className="text-blue-500 mb-4">Logging in...</p>}
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {data && <p className="text-green-500 mt-4">Login successful!</p>} */}
    </form>
  );
};

export default LoginForm;
