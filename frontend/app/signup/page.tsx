
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (openDialog) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [openDialog, router]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#])[A-Za-z0-9@#]{8,}$/;

    if (!name.trim()) return alert("Please enter your name");
    if (!emailRegex.test(email)) return alert("Invalid email");
    if (!phoneRegex.test(phone)) return alert("Invalid phone");
    if (!passwordRegex.test(password)) return alert("Weak password");
    if (password !== confirmPassword) return alert("Passwords do not match!");

    try {
      setLoading(true);

      const res = await axios.post(`${API_BASE_URL}/auth/signup`, {
        name,
        email,
        phone,
        password,
      });

      // store token (VERY IMPORTANT)
      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("authChanged"));
      setOpenDialog(true);
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-200 px-3 mt-17">
        <div className="flex w-full max-w-4xl shadow-xl rounded-3xl overflow-hidden">

          <div className="flex-1 bg-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
              Sign Up
            </h2>

            <form onSubmit={handleSignup} className="space-y-4">
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

              <Button type="submit" className="w-full bg-green-600" disabled={loading}>
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>
            </form>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-green-700 font-medium">
                Login
              </Link>
            </p>
          </div>

          
<div className="hidden md:flex flex-1 bg-green-600 p-10 flex-col justify-center items-center text-white">
              <Leaf className="w-16 h-16 mb-4" />
              <h2 className="text-3xl font-bold mb-2 text-center">
                Welcome to Urban Sprout
              </h2>
              <p className="text-center text-lg max-w-xs">
                Discover the joy of nurturing plants! 🌱
              </p>
            </div>

        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-green-600">
              Signup Successful 🎉
            </DialogTitle>
            <DialogDescription>
              Redirecting to your profile...
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}