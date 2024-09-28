"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/hero-section/HeroSection";
import Footer from "@/app/components/footer/Footer";
import UpcomingEventsSection from "@/app/components/upcoming-events-section/UpcomingEventsSection";
import { client } from "./api-client";
import { BASE_URL } from "./utils/constants";

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
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <HeroSection />
      <UpcomingEventsSection />
      <Footer />
    </QueryClientProvider>
  );
}
