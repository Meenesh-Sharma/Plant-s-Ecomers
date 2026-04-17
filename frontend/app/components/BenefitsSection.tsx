
"use client";

import FeatureCard from "./FeatureCard";
import { Wind, Smile, Hand, Sun } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden py-12 ">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[20%] w-[250px] h-[250px] bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-80px] right-[20%] w-[250px] h-[250px] bg-green-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative container mx-auto px-6">
        
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-700 rounded-full shadow-sm">
            🌿 Benefits of Green Living
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Why You’ll Love Plants
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Plants do more than decorate — they transform your lifestyle,
          improve health, and bring peace into your space.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Wind}
            title="Cleaner Air"
            description="Plants naturally filter toxins and improve indoor air quality for healthier living."
          />
          <FeatureCard
            icon={Smile}
            title="Stress Relief"
            description="Greenery reduces anxiety, boosts mood, and improves mental clarity."
          />
          <FeatureCard
            icon={Hand}
            title="Easy Care"
            description="Low-maintenance plants perfect for beginners and busy lifestyles."
          />
          <FeatureCard
            icon={Sun}
            title="Beautiful Spaces"
            description="Elevate your home decor with vibrant, natural aesthetics."
          />
        </div>
      </div>
    </section>
  );
}