

"use client";

import Link from "next/link";
import { Leaf, Package, Sparkles } from "lucide-react";

export default function GetStartedSection() {
  const steps = [
    {
      id: "01",
      title: "Choose Your Plant",
      description: "Browse a curated collection of healthy indoor plants suited for your space.",
      icon: Leaf,
    },
    {
      id: "02",
      title: "Pick Pot & Setup",
      description: "Select the perfect pot and soil combination for optimal plant growth.",
      icon: Package,
    },
    {
      id: "03",
      title: "Enjoy & Grow",
      description: "Get your plant delivered and start your green lifestyle effortlessly.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-green-50"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[15%] w-[250px] h-[250px] bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-80px] right-[15%] w-[250px] h-[250px] bg-green-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative container mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="mb-4">
          <span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-700 rounded-full shadow-sm">
            🌿 Simple Process
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Start Your Plant Journey
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Getting started is easy. Follow these simple steps and transform your space into a green paradise.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="group relative bg-white/70 backdrop-blur-lg border border-green-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Step Number */}
                <span className="absolute top-4 right-4 text-sm font-bold text-green-200">
                  {step.id}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6 mx-auto group-hover:scale-110 transition">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-6">
          <Link href="/shop">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              Get Started Now 🌱
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}