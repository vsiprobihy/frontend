import Header from "@/app/components/Header";
import HeroSection from "@/app/components/sections/hero-section/HeroSection";
import Footer from "@/app/components/footer/Footer";
import UpcomingEventsSection from "@/app/components/sections/upcoming-events-section/UpcomingEventsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <UpcomingEventsSection />
      <Footer />
    </div>
  );
}
