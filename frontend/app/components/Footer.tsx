
'use client';

import { Facebook, Twitter, Instagram, Linkedin, Leaf } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white pt-20 pb-10">

      {/* Glow */}
      <div className="absolute top-[-80px] left-[20%] w-[250px] h-[250px] bg-green-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-[-80px] right-[20%] w-[250px] h-[250px] bg-green-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-green-500 w-7 h-7" />
              <span className="text-2xl font-bold">Urban Sprout</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Bringing nature closer to your home with hand-picked indoor plants
              and expert care guidance.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-600 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/shop" className="hover:text-white transition">All Plants</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">Indoor Plants</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">Outdoor Plants</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">Succulents</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Learn</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/care-guide" className="hover:text-white transition">Care Guides</Link></li>
              <li><Link href="/care-guide" className="hover:text-white transition">Plant Tips</Link></li>
              <li><Link href="/care-guide" className="hover:text-white transition">Beginner Guide</Link></li>
              <li><Link href="/care-guide" className="hover:text-white transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-white transition">Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <p>© {new Date().getFullYear()} Urban Sprout. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Cookies</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}