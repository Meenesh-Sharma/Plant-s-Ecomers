
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

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });

      // store token (CRITICAL)
      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("authChanged"));
      setOpenDialog(true);
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-200 p-4">
        <div className="flex w-full max-w-2xl shadow-xl rounded-3xl overflow-hidden">

          <div className="flex-1 bg-white p-10">
            <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
              Login
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <Button type="submit" className="w-full bg-green-600" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-green-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>

          <div className="hidden md:flex flex-1 bg-green-600 p-10 flex-col justify-center items-center text-white">
             <Leaf className="w-16 h-16 mb-4" />
             <h2 className="text-3xl font-bold mb-2 text-center">
               Welcome Back 🌱
             </h2>
             <p className="text-center text-lg max-w-xs">
               Log in to continue your plant journey. Manage your garden, track
               growth, and explore new care tips.
             </p>
           </div>

        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-green-600">
              Login Successful 🎉
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