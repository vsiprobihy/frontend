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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const currentYear = new Date().getFullYear();

  return {
    title:
      typeof messages["metadata_title"] === "string"
        ? messages["metadata_title"]
        : "ВсіПробіги",
    description: `${typeof messages["metadata_description"] === "string" ? messages["metadata_description"] : "Всеукраїнський календар пробігів"} ${currentYear}`,
  };
}

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
      <head>
        <link
          rel="icon"
          href="./images/icon.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </head>
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
            <Suspense>
              <AuthProvider initialAuthState={false}>
                <Header />
                <MobileMenu />
                <AuthModal />
                <SuccessModal />
                {children}
                <Footer />
              </AuthProvider>
            </Suspense>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
