"use client";
import React, { useState } from "react";
import clsx from "clsx";
import * as Tabs from "@radix-ui/react-tabs";
import {
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
// import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import {
  authTokenCreate,
  authRegisterCreate,
} from "../../api-client/services.gen";
import { TokenObtainPair, Register } from "../../api-client/types.gen";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./form/RegisterForm";
import CloseButton from "../CloseButton";

interface AuthModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, setOpen, onClose }) => {
  const [value, setValue] = useState<string>("login");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  const {
    mutate: mutateLogin,
    status: loginStatus,
    data: loginData,
    error: loginError,
  } = useMutation<{ data?: TokenObtainPair }, Error, TokenObtainPair>({
    mutationFn: async (tokenObtainPair: TokenObtainPair) => {
      const response = await authTokenCreate({
        body: tokenObtainPair,
      });
      if (response.response.status === 200) {
        return response;
      } else {
        throw new Error(response.response.statusText);
      }
    },
    //To Do add token to cookies

    // onSuccess: (data: { data: TokenObtainPair }) => {
    //   const token = data.data?.access;
    //   if (token) {
    //     Cookies.set("authToken", token, {
    //       expires: 7,
    //       secure: process.env.NODE_ENV === "production",
    //       sameSite: "Strict",
    //     });
    //   }
    // },
  });

  const onSubmitLogin = (data: TokenObtainPair) => {
    mutateLogin(data);
  };

  const {
    mutate: mutateRegister,
    status: registerStatus,
    data: registerData,
    error: registerError,
  } = useMutation<unknown, Error, Register>({
    mutationFn: async (data: Register) => {
      const response = await authRegisterCreate({ body: data });
      if (response.response.status === 200) {
        return response;
      } else {
        throw new Error(response.response.statusText);
      }
    },
  });

  const onSubmitRegister = (data: Register) => {
    mutateRegister(data);
  };

  if (!open) return null;
  const isLoginLoading = loginStatus === "pending";
  const isRegisterLoading = registerStatus === "pending";

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
      onClose();
    }
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <DialogContent
      className={clsx(
        "fixed inset-0 mx-auto mt-5 flex items-center justify-center rounded-lg bg-white p-6 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:transform",
        "",
        value === "register"
          ? "min-h-[calc(100vh-50px)] w-[340px] md:min-h-[693px] md:w-[443px] md:p-8"
          : "max-h-[552px] w-[340px] py-6 md:min-h-[543px] md:w-[443px] md:px-8 md:py-4"
      )}
      onKeyDown={handleKeyDown}
    >
      <DialogClose asChild>
        <CloseButton
          onClick={handleClose}
          className={clsx(
            "absolute right-[24px] top-[35px] md:right-[32px]",
            value === "register" ? "md:top-[40px]" : "md:top-[23px]"
          )}
        />
      </DialogClose>
      <DialogTitle>
        <VisuallyHidden>Authentication Modal</VisuallyHidden>
      </DialogTitle>
      <Tabs.Root className="flex h-full w-full flex-col" defaultValue="login">
        <div style={{ width: "fit-content" }}>
          <Tabs.List className="relative mb-4 inline-flex justify-center">
            <Tabs.Trigger
              value="login"
              onClick={() => handleTabChange("login")}
              className="rounded-[50px] text-xl font-semibold uppercase data-[state=active]:absolute data-[state=active]:left-1 data-[state=active]:top-1 data-[state=active]:h-[40px] data-[state=inactive]:h-[48px] data-[state=active]:w-[83px] data-[state=inactive]:w-[254px] data-[state=active]:bg-dark data-[state=inactive]:bg-grey-light data-[state=active]:px-5 data-[state=inactive]:pl-6 data-[state=inactive]:text-start data-[state=active]:text-white data-[state=inactive]:text-dark md:text-2xl md:data-[state=active]:h-[45px] md:data-[state=inactive]:h-[53px] md:data-[state=active]:w-[113px] md:data-[state=inactive]:w-[301px] md:data-[state=active]:px-7 md:data-[state=inactive]:pl-7"
            >
              Вхід
            </Tabs.Trigger>
            <Tabs.Trigger
              value="register"
              onClick={() => handleTabChange("register")}
              className="rounded-[50px] text-xl font-semibold uppercase data-[state=active]:absolute data-[state=active]:right-1 data-[state=active]:top-1 data-[state=active]:h-[40px] data-[state=inactive]:h-[48px] data-[state=active]:w-[161px] data-[state=inactive]:w-[254px] data-[state=active]:bg-dark data-[state=inactive]:bg-grey-light data-[state=active]:px-5 data-[state=inactive]:pr-5 data-[state=inactive]:text-end data-[state=active]:text-white data-[state=inactive]:text-dark md:text-2xl md:data-[state=active]:h-[45px] md:data-[state=inactive]:h-[53px] md:data-[state=active]:w-[185px] md:data-[state=inactive]:w-[306px] md:data-[state=active]:px-5 md:data-[state=inactive]:pr-4"
            >
              Реєстрація
            </Tabs.Trigger>
          </Tabs.List>
        </div>
        <Tabs.Content
          value="login"
          className="flex flex-grow items-center justify-center"
        >
          <LoginForm
            onSubmit={onSubmitLogin}
            isLoading={isLoginLoading}
            error={loginError}
            data={loginData ?? {}}
          />
        </Tabs.Content>
        <Tabs.Content
          value="register"
          className="flex flex-grow items-center justify-center"
        >
          <RegisterForm
            onSubmit={onSubmitRegister}
            isLoading={isRegisterLoading}
            error={registerError}
            data={registerData ?? {}}
          />
        </Tabs.Content>
      </Tabs.Root>
    </DialogContent>
  );
};

export default AuthModal;
