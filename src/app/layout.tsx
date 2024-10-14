import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import {
  AuthModal,
  Footer,
  Header,
  MobileMenu,
  SuccessModal,
} from "~/components";
import { Suspense } from "react";
import { ReactQueryProvider } from "~/utils/reactQueryProvider";
import { AuthProvider } from "~/context";
import { getLocale, getMessages } from "next-intl/server";

const manropeVariable = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope-variable",
  weight: "100 700",
});

const manropeRegular = localFont({
  src: "./fonts/Manrope-Regular.ttf",
  variable: "--font-manrope-regular",
  weight: "400",
});

const manropeBold = localFont({
  src: "./fonts/Manrope-Bold.ttf",
  variable: "--font-manrope-bold",
  weight: "700",
});

// TODO Adjust Metadata

export const metadata: Metadata = {
  title: "Vsi Probihy",
  description: "Платформа для аматорських забігів",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={clsx(
          "bg-grey-light antialiased",
          manropeVariable.variable,
          manropeRegular.variable,
          manropeBold.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <AuthProvider initialAuthState={false}>
              <Suspense>
                <Header />
                <MobileMenu />
                <AuthModal />
                <SuccessModal />
              </Suspense>
              {children}
              <Footer />
            </AuthProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
