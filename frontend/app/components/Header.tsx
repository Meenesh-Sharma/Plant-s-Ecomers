
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, Leaf, User as UserIcon, LogOut } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth(); 

    window.addEventListener("authChanged", checkAuth);

    return () => window.removeEventListener("authChanged", checkAuth);
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // instant UI update
    window.location.href = "/login"; // redirect
  };

  return (
    <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 shadow-md py-4 px-6 md:px-12 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Leaf className="text-green-950 w-8 h-8" />
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Urban Sprout
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">

          <Link href="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/shop" className="relative group">
            Shop
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/care-guide" className="relative group">
            Care Guides
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">

          {/* Cart */}
          <Link href="/cart">
            <Button variant="outline" className="relative">
              <ShoppingBag />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Auth UI */}
          <div className="hidden md:flex items-center space-x-2">
            {isLoggedIn ? (
              <>
                <Link href="/profile">
                  <Button className="bg-green-600 flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    Profile
                  </Button>
                </Link>

                <Button variant="ghost" onClick={handleLogout}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-gray-900 text-white">Register</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-6 space-y-4">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link href="/care-guide" onClick={() => setMobileMenuOpen(false)}>Care Guides</Link>

          <hr />

          {isLoggedIn ? (
            <>
              <Link href="/profile">
                <Button className="w-full bg-green-600">My Profile</Button>
              </Link>
              <Button className="w-full" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button className="w-full">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button className="w-full bg-gray-900 text-white">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}