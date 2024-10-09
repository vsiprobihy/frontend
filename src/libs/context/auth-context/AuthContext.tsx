"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

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
