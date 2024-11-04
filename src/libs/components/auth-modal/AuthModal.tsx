"use client";
import Cookies from "js-cookie";
import clsx from "clsx";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  authLoginCreate,
  AuthLoginCreateResponse,
  authRegisterCreate,
  Login,
  Register,
} from "~/api-client";
import { CloseButton } from "~/components";
import { useIsMobile } from "~/hooks";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./form/RegisterForm";
import LoginImage from "~/images/login.webp";
import RegisterImage from "~/images/registration.webp";
import { useAuth } from "~/context";
import { useTranslations } from "next-intl";
import { AppRoute } from "@/libs/enums";

export const AuthModal: React.FC = () => {
  const [value, setValue] = useState<"register" | "login">("login");
  const [rememberMe, setRememberMe] = useState(false);

  const t = useTranslations("AuthModal");

  const router = useRouter();
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  const showAuthModal = !!searchParams.get("showAuthModal");

  const { setIsAuthenticatedUser } = useAuth();

  const handleTabChange = (newValue: "register" | "login") => {
    setValue(newValue);
  };

  const handleClose = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("showAuthModal");
    router.push(`?${params.toString()}`);
  }, [searchParams, router]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const { mutate: mutateLogin } = useMutation<
    { data?: AuthLoginCreateResponse },
    Error,
    Login
  >({
    mutationFn: async (tokenObtainPair: Login) => {
      const response = await authLoginCreate({
        body: tokenObtainPair,
      });
      console.log(response)

      if (response.response.status === 200) {
        return response;
      } else {
        throw new Error(response.response.statusText);
      }
    },
    onSuccess: (data: { data?: AuthLoginCreateResponse }) => {
      const token = data.data?.access_token.value;
      if (token) {
        Cookies.set("authToken", token, {
          expires: rememberMe ? 7 : 1,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
        });
        setIsAuthenticatedUser(true);
      }
      
      handleClose();
    },
    onError: (error) => {
      alert(t("loginFailed", { error: error.message }));
    },
  });

  const onSubmitLogin = (data: Login) => {
    mutateLogin(data);
  };

  const { mutate: mutateRegister } = useMutation<unknown, Error, Register>({
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
      setIsAuthenticatedUser(true);
      router.push(AppRoute.PROFILE);
    },
    onError: (error) => {
      alert(t("registrationFailed", { error: error.message }));
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
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={handleClose}
        />

        <DialogContent
          aria-describedby={undefined}
          className={clsx(
            "fixed inset-0 z-50 mx-auto mt-5 flex items-center justify-between rounded-lg bg-white p-6 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:transform",
            value === "register"
              ? "max-h-[675px] w-[340px] md:min-h-[760px] md:w-[854px] md:py-0 md:pl-0 md:pr-8"
              : "h-[675px] w-[340px] py-6 md:min-h-[693px] md:w-[854px] md:py-0 md:pl-0 md:pr-8"
          )}
        >
          <DialogClose asChild>
            <CloseButton
              onClick={() => {
                handleClose();
              }}
              className={clsx(
                "absolute right-[24px] top-[33px] z-10 md:right-[32px] md:top-[40px]"
              )}
            />
          </DialogClose>
          {!isMobile && (
            <div className="hidden h-full md:flex md:w-1/2">
              <Image
                src={value === "register" ? RegisterImage : LoginImage}
                alt="Auth Modal"
                className="h-full w-full rounded-l-lg object-cover"
              />
            </div>
          )}
          <div className="h-full w-full md:w-1/2 md:pb-8 md:pl-8 md:pt-8">
            <DialogTitle>
              <VisuallyHidden>Authentication Modal</VisuallyHidden>
            </DialogTitle>
            <Tabs.Root
              className="flex h-full w-full flex-col"
              defaultValue="login"
            >
              <Tabs.List className="relative mb-4 inline-flex justify-start">
                <Tabs.Trigger
                  value="login"
                  onClick={() => handleTabChange("login")}
                  className="rounded-[50px] text-xl font-semibold uppercase data-[state=active]:absolute data-[state=active]:left-1 data-[state=active]:top-1 data-[state=active]:h-[40px] data-[state=inactive]:h-[48px] data-[state=active]:w-[83px] data-[state=inactive]:w-[254px] data-[state=active]:bg-dark data-[state=inactive]:bg-grey-light data-[state=active]:px-5 data-[state=inactive]:pl-6 data-[state=inactive]:text-start data-[state=active]:text-white data-[state=inactive]:text-dark md:text-2xl md:data-[state=active]:h-[45px] md:data-[state=inactive]:h-[53px] md:data-[state=active]:w-[118px] md:data-[state=inactive]:w-[301px] md:data-[state=active]:px-6 md:data-[state=inactive]:px-6"
                >
                  {t("loginTab")}
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="register"
                  onClick={() => handleTabChange("register")}
                  className="rounded-[50px] text-xl font-semibold uppercase data-[state=active]:absolute data-[state=active]:right-[42px] data-[state=active]:top-1 data-[state=active]:h-[40px] data-[state=inactive]:h-[48px] data-[state=active]:w-[161px] data-[state=inactive]:w-[254px] data-[state=active]:bg-dark data-[state=inactive]:bg-grey-light data-[state=active]:px-5 data-[state=inactive]:pr-5 data-[state=inactive]:text-end data-[state=active]:text-white data-[state=inactive]:text-dark md:text-2xl md:data-[state=active]:right-[84px] md:data-[state=active]:h-[45px] md:data-[state=inactive]:h-[53px] md:data-[state=active]:w-[185px] md:data-[state=inactive]:w-[306px] md:data-[state=active]:px-5 md:data-[state=inactive]:pr-4"
                >
                  {t("registerTab")}
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content
                value="login"
                className="flex flex-grow items-center justify-center"
              >
                <LoginForm
                  onSubmit={onSubmitLogin}
                  setRememberMe={setRememberMe}
                />
              </Tabs.Content>
              <Tabs.Content
                value="register"
                className="flex flex-grow items-center justify-center"
              >
                <RegisterForm onSubmit={onSubmitRegister} />
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
