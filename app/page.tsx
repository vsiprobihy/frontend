"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/hero-section/HeroSection";
import Footer from "@/app/components/footer/Footer";
import UpcomingEventsSection from "@/app/components/upcoming-events-section/UpcomingEventsSection";
import { client } from "./api-client";

client.setConfig({
  baseUrl: "http://185.65.244.112:8000/",
});

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
