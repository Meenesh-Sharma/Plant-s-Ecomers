
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Leaf } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function FeedbackSection() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setShowLoginDialog(true);
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${API}/reviews`, formData);

      alert(" Feedback submitted successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(" Failed to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white"></div>

      {/* Glow */}
      <div className="absolute top-[-80px] left-[20%] w-[250px] h-[250px] bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-80px] right-[20%] w-[250px] h-[250px] bg-green-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="mb-4">
            <span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-700 rounded-full shadow-sm">
              🌿 Feedback
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Share Your Experience
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Your feedback helps us grow and improve. Tell us how we can make your plant journey even better.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg border border-green-100 rounded-3xl shadow-xl p-8 md:p-12">
          <form
            className="grid md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
            />

            <Input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="md:col-span-2"
            />

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="md:col-span-2 h-32 resize-none"
            />

            {/* Submit */}
            <div className="md:col-span-2 flex justify-between items-center mt-4">
              {/* Brand */}
              <div className="hidden md:flex items-center gap-2 text-green-600 font-semibold">
                <Leaf className="w-5 h-5" />
                Urban Sprout
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                {loading ? "Sending..." : "Send Feedback 🌱"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/*  LOGIN DIALOG */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Login Required
            </DialogTitle>
          </DialogHeader>

          <p className="text-gray-600 mt-2">
            Please login first to submit your feedback.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Button
              onClick={() => {
                setShowLoginDialog(false);
                router.push("/login");
              }}
              className="bg-green-600 hover:bg-green-700"
            >
              Login
            </Button>

            <Button
              variant="outline"
              onClick={() => setShowLoginDialog(false)}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}