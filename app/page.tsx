import Header from "@/app/components/Header";
import HeroSection from "@/app/components/hero-section/HeroSection";
import Footer from "@/app/components/Footer";
import UpcomingEventsSection from "@/app/components/upcoming-events-section/UpcomingEventsSection";

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
