import { Suspense } from "react";

import { HeroSection, UpcomingEventsSection } from "./components";
import { AuthModal, SuccessModal } from "~/components";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UpcomingEventsSection />
      <Suspense>
        <AuthModal />
        <SuccessModal />
      </Suspense>
    </main>
  );
}
