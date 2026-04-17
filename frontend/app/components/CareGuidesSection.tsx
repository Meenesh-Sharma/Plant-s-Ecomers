
'use client';

import { Leaf, Droplets, Sun, Bug } from "lucide-react";
import Link from "next/link";

/* ================= CARD ================= */

const GuideCard = ({ title, description, icon }: any) => {
  return (
    <div className="group flex-none w-[280px] md:w-full bg-white/70 backdrop-blur-lg border border-green-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-5 group-hover:bg-green-600 group-hover:text-white transition-all">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Link */}
      <Link
        href="/care-guide"
        className="text-sm font-semibold text-green-600 flex items-center gap-1 group-hover:gap-2 transition-all"
      >
        Read Guide <Leaf className="w-4 h-4" />
      </Link>
    </div>
  );
};

/* ================= SECTION ================= */

export default function CareGuidesSection() {

  const guides = [
    {
      title: "Watering Basics",
      description: "Learn when and how much to water your plants to avoid overwatering or dryness.",
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: "Lighting Guide",
      description: "Understand sunlight needs and place your plants in the perfect spot.",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      title: "Pest Control",
      description: "Protect your plants with safe, natural pest control methods.",
      icon: <Bug className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-15">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[20%] w-[250px] h-[250px] bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-80px] right-[20%] w-[250px] h-[250px] bg-green-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          
          {/* Badge */}
          <div className="mb-4">
            <span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-700 rounded-full shadow-sm">
              🌿 Plant Knowledge
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Care Guides for Every Plant
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg leading-relaxed">
            From watering to sunlight and pest control — explore simple,
            expert-backed guides to keep your plants healthy and thriving.
          </p>
        </div>

        {/* Cards */}
        <div className="flex overflow-x-auto no-scrollbar space-x-6 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-x-0">
          {guides.map((guide, index) => (
            <GuideCard
              key={index}
              title={guide.title}
              description={guide.description}
              icon={guide.icon}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <Link href="/care-guide">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              Explore All Guides 🌱
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}