"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/hero-section/HeroSection";
import Footer from "@/app/components/footer/Footer";
import UpcomingEventsSection from "@/app/components/upcoming-events-section/UpcomingEventsSection";

import { client } from "./api-client";
import { BASE_URL } from "./utils/constants";
import AuthModal from "./components/auth-modal/AuthModal";
import SuccessModal from "./components/success-modal/SuccessModal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
client.setConfig({
  baseUrl: BASE_URL,
});

// TODO: add auth token to every request
//client.interceptors.request(() => { })

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
    <QueryClientProvider client={queryClient}>
      <Header />
      <HeroSection />
      <UpcomingEventsSection />
      <Footer />
      <AuthModal />
      <SuccessModal />
    </QueryClientProvider>
  );
}
