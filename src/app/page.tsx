"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { client } from "./api-client";
import { useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../libs/utils/constants";
import Cookies from "js-cookie";

import {
  HeroSection,
  UpcomingEventsSection,
  AuthModal,
  SuccessModal,
} from "./components/components";
import { Header, Footer } from "@/libs/components/components";
client.setConfig({
  baseUrl: BASE_URL,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
});

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) {
      // TODO: redirect to login page
      // router.push("/");
    }
  }, [router]);

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <Header />
        </Suspense>
        <HeroSection />
        <UpcomingEventsSection />
        <Footer />
        <Suspense>
          <AuthModal />
          <SuccessModal />
        </Suspense>
      </QueryClientProvider>
    </main>
  );
}
