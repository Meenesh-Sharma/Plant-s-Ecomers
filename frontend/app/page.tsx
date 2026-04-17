

import HeroSection from "./components/Hero";
import BenefitsSection from "./components/BenefitsSection";
import PopularPlantsSection from "./components/PopularPlantsSection";
import GetStartedSection from "./components/GetStartedSection";
import CareGuidesSection from "./components/CareGuidesSection";
import ReviewsSection from "./components/ReviewsSection";
import NewsletterSection from "./components/NewsletterSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-green-50 to-white"></div>

      <div className="absolute top-[10%] left-[-100px] w-[300px] h-[300px] bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-[40%] right-[-100px] w-[300px] h-[300px] bg-green-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-green-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative flex flex-col">

        <HeroSection />

        <BenefitsSection />

        <PopularPlantsSection />

        <GetStartedSection />

        <CareGuidesSection />

        <ReviewsSection />

        <NewsletterSection />

      </div>
    </main>
  );
}