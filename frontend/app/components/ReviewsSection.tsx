



"use client";

import { useRef, useState, useEffect } from "react";
import axios from "axios";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Review {
  _id: string;
  name: string;
  message: string;
}

export default function ReviewsCarousel() {
  const API =
    process.env.NEXT_PUBLIC_API_BASE_URL;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

 
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${API}/reviews/accepted`);
        setReviews(res.data);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };

    fetchReviews();
  }, [API]);


  const updateButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.firstChild
      ? (scrollRef.current.firstChild as HTMLElement).clientWidth + 24
      : 0;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => updateButtons();
    container.addEventListener("scroll", handleScroll);
    updateButtons();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);



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
              🌿 Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Real stories from plant lovers who transformed their homes
            into green, vibrant spaces with us.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar space-x-6 pb-4 snap-x snap-mandatory"
          >
            {reviews.length === 0 ? (
              <p className="text-gray-500 mx-auto">
                No reviews available
              </p>
            ) : (
              reviews.map((review) => {
                const initials = review.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("");

                return (
                  <Card
                    key={review._id}
                    className="flex-shrink-0 snap-start w-[280px] md:w-[320px] bg-white/70 backdrop-blur-lg border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <CardContent className="p-6 flex flex-col h-full">

                      {/* Quote Icon */}
                      <Quote className="text-green-300 mb-4" />

                      {/* Message */}
                      <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-5">
                        {review.message}
                      </p>

                      {/* User */}
                      <div className="flex items-center gap-3 mt-auto">

                        {/* Avatar */}
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-semibold">
                          {initials}
                        </div>

                        {/* Name */}
                        <p className="font-semibold text-gray-900 text-sm">
                          {review.name}
                        </p>
                      </div>

                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>

          {/* LEFT */}
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-lg border border-green-100 p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <ChevronLeft className="w-5 h-5 text-green-600" />
            </button>
          )}

          {/* RIGHT */}
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-lg border border-green-100 p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <ChevronRight className="w-5 h-5 text-green-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}