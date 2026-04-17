
"use client";

import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star, ShoppingBag, MessageSquare, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PlantDetailPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [plant, setPlant] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPlant = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/plants/${slug}`);
      setPlant(res.data);
    } catch (err) {
      console.error("Plant fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API}/Plantreviews`, {
        params: { plant: slug },
      });
      setReviews(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Review fetch error:", err);
      setReviews([]);
    }
  };

  useEffect(() => {
    if (!slug) return;

    fetchPlant();
    fetchReviews();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
        Loading plant...
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
        🌱 Plant not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-10 mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        <Card className="shadow-xl rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={plant.img}
            alt={plant.name}
            className="w-full h-80 md:h-[28rem] object-cover"
          />
        </Card>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {plant.name}
            </h1>

            <div className="flex items-center gap-2 mb-3 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400" />
              ))}
              <span className="text-gray-500 text-sm">
                ({reviews.length} reviews)
              </span>
            </div>

            <p className="text-green-600 font-bold text-2xl md:text-3xl mb-6">
              ₹ {plant.price}
            </p>

            <Button
              className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 w-full md:w-auto mb-6"
              onClick={() =>
                addToCart({
                  id: plant._id,
                  name: plant.name,
                  price: plant.price,
                  image: plant.img,
                  slug: plant._id,
                })
              }
            >
              <ShoppingBag className="w-5 h-5" /> Add to Cart
            </Button>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{plant.description}</p>
            </div>

            {/* 🌱 CARE */}
            {plant.care && (
              <div>
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Care Instructions
                </h2>
                <p className="text-gray-600">{plant.care}</p>
              </div>
            )}
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 mt-4">
                <MessageSquare className="w-5 h-5" />
                View Customer Reviews
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  Customer Reviews
                </DialogTitle>
              </DialogHeader>

              <ScrollArea className="max-h-96 mt-4">
                <div className="space-y-4">

                  {reviews.length === 0 ? (
                    <p className="text-gray-400 text-center py-6">
                      No reviews for {plant.name}
                    </p>
                  ) : (
                    reviews.map((r: any) => (
                      <Card key={r._id} className="p-4">
                        <CardHeader>
                          <CardTitle>{r.name}</CardTitle>
                        </CardHeader>

                        <CardContent>
                          <p className="text-gray-700">{r.review}</p>

                          {/* 🌿 PLANT NAME */}
                          <p className="text-green-600 text-sm mt-2">
                            🌿 {r.plant?.name}
                          </p>
                        </CardContent>
                      </Card>
                    ))
                  )}

                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}