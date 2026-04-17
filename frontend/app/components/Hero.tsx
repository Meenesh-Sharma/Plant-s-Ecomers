

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-white"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-green-400 rounded-full blur-3xl opacity-30"></div>

      <div className="relative container mx-auto px-6 py-20 md:py-32 text-center">
        
        {/* Tagline Badge */}
        <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-green-700 bg-green-100 rounded-full shadow-sm">
          🌿 1000+ Happy Plant Lovers
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Build Your Own{" "}
          <span className="text-green-600">Urban Jungle</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover hand-picked indoor plants that transform your space.
          Easy care guides, fast delivery, and a thriving green lifestyle —
          all in one place.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/shop">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Shop Plants 🌱
            </Button>
          </Link>

          <Link href="/care-guide">
            <Button
              variant="outline"
              className="px-8 py-4 text-lg rounded-full border-green-600 text-green-700 hover:bg-green-100 transition-all duration-300"
            >
              Learn Plant Care
            </Button>
          </Link>
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 flex justify-center gap-10 text-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-500 text-sm">Plants Available</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">10k+</h3>
            <p className="text-gray-500 text-sm">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">4.9★</h3>
            <p className="text-gray-500 text-sm">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}