"use client";
import React, { useState, useCallback, useEffect } from "react";
import clsx from "clsx";
import * as Tabs from "@radix-ui/react-tabs";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import {
  authTokenCreate,
  authRegisterCreate,
} from "../../api-client/services.gen";
import { TokenObtainPair, Register } from "../../api-client/types.gen";
import { useRouter, useSearchParams } from "next/navigation";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./form/RegisterForm";
import CloseButton from "../CloseButton";

const AuthModal: React.FC = () => {
  const [value, setValue] = useState<"register" | "login">("login");
  const router = useRouter();
  const searchParams = useSearchParams();
  const showAuthModal = !!searchParams.get("showAuthModal");

  const handleTabChange = (newValue: "register" | "login") => {
    setValue(newValue);
  };

  const handleClose = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("showAuthModal");
    router.push(`?${params.toString()}`);
  }, [searchParams]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const {
    mutate: mutateLogin,
    status: loginStatus,
    data: loginData,
    error: loginError,
  } = useMutation<{ data?: { access: string } }, Error, TokenObtainPair>({
    // @ts-expect-error wrong types on backend
    mutationFn: async (tokenObtainPair: TokenObtainPair) => {
      const response = await authTokenCreate({
        body: tokenObtainPair,
      });

      if (response.response.status === 200) {
        // return response as typeof response & { data?: { access: string } };
        return response;
      } else {
        throw new Error(response.response.statusText);
      }
    },
    onSuccess: (data: { data?: { access: string } }) => {
      const token = data.data?.access;
      if (token) {
        Cookies.set("authToken", token, {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
        });
      }
      handleClose();
    },
    onError: (error) => {
      alert(`Login failed: ${error.message}`);
    },
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

      if (response.response.status === 201) {
        return response;
      } else {
        throw new Error(response.response.statusText);
      }
    },
    onSuccess: () => {
      const params = new URLSearchParams(searchParams);
      params.delete("showAuthModal");
      params.set("showSuccessModal", "true");
      router.push(`?${params.toString()}`);
    },
    onError: (error) => {
      alert(`Registration failed: ${error.message}`);
    },
  });

  // const token = Cookies.get("authToken");

  const onSubmitRegister = (data: Register) => {
    mutateRegister(data);
  };

  return (
    <Dialog open={showAuthModal} onOpenChange={handleClose}>
      <DialogPortal>
        <DialogOverlay
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={handleClose}
        />
        <DialogContent
          aria-describedby={undefined}
          className={clsx(
            "fixed inset-0 mx-auto mt-5 flex items-center justify-center rounded-lg bg-white p-6 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:transform",
            value === "register"
              ? "max-h-[675px] w-[340px] md:min-h-[693px] md:w-[443px] md:p-8"
              : "h-[675px] w-[340px] py-6 md:min-h-[693px] md:w-[443px] md:p-8"
          )}
        >
          <DialogClose asChild>
            <CloseButton
              onClick={() => handleClose()}
              className={clsx(
                "absolute right-[24px] top-[35px] md:right-[32px] md:top-[40px]"
              )}
            />
          </DialogClose>
          <DialogTitle>
            <VisuallyHidden>Authentication Modal</VisuallyHidden>
          </DialogTitle>
          <Tabs.Root
            className="flex h-full w-full flex-col"
            defaultValue="login"
          >
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
              <LoginForm onSubmit={onSubmitLogin} />
            </Tabs.Content>
            <Tabs.Content
              value="register"
              className="flex flex-grow items-center justify-center"
            >
              <RegisterForm onSubmit={onSubmitRegister} />
            </Tabs.Content>
          </Tabs.Root>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AuthModal;
