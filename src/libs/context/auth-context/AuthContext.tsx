"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode } from "react";
import Cookies from "js-cookie";
import {
  authTokenRefreshCreate,
  client,
  TokenRefresh,
} from "@/libs/api-client";
import { useMutation } from "@tanstack/react-query";

interface AuthContextType {
  isAuthenticatedUser: boolean;
  setIsAuthenticatedUser: (isAuthenticated: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{
  children: ReactNode;
  initialAuthState: boolean;
}> = ({ children, initialAuthState }) => {
  const [isAuthenticatedUser, setIsAuthenticatedUser] =
    useState(initialAuthState);

  const router = useRouter();
  const searchParams = useSearchParams();

  const { mutate } = useMutation<{ data?: TokenRefresh }, Error, TokenRefresh>({
    mutationFn: async (refreshToken: { refresh: string }) => {
      const response = await authTokenRefreshCreate({
        body: refreshToken,
      });
      if (response.response.status === 200) {
        return response;
      } else {
        throw new Error(response.response.statusText);
      }
    },
    onSuccess: (data: { data?: TokenRefresh }) => {
      const token = data.data?.access;
      const refreshToken = data.data?.refresh;
      if (token && refreshToken) {
        Cookies.set("authToken", token, {
          expires: 1,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
        });
        Cookies.set("refreshToken", refreshToken, {
          expires: 1,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
        });
      }
    },
    onError: () => {
      Cookies.remove("authToken");
      Cookies.remove("refreshToken");
      setIsAuthenticatedUser(false);
      const params = new URLSearchParams(searchParams);
      params.set("showAuthModal", "true");
      router.push(`?${params.toString()}`);
    },
  });

  client.interceptors.response.use((response) => {
    if (response.status === 401) {
      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        mutate({ refresh: refreshToken });
      }
    }
    return response;
  });

  return (
    <AuthContext.Provider
      value={{ isAuthenticatedUser, setIsAuthenticatedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
