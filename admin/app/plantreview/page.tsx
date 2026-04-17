
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ReviewPage() {
 const [reviews, setReviews] = useState<any[]>([]);
const [plants, setPlants] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [plant, setPlant] = useState("");

  const [filterPlant, setFilterPlant] = useState("");

  const fetchPlants = async () => {
    try {
      const res = await axios.get(`${API}/api/plants`);
      console.log("PLANTS DATA:", res.data);
      setPlants(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Plant fetch error:", err);
      setPlants([]);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API}/api/Plantreviews`, {
        params:
          filterPlant && filterPlant !== "all"
            ? { plant: filterPlant }
            : {},
      });

      setReviews(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Review fetch error:", err);
      setReviews([]);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [filterPlant]);

  const handleSubmit = async () => {
    if (!name || !review || !plant) return alert("Fill all fields");

    try {
      await axios.post(`${API}/api/Plantreviews`, {
        name,
        review,
        plant,
      });

      setName("");
      setReview("");
      setPlant("");

      fetchReviews();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API}/api/Plantreviews/${id}`);
      fetchReviews();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">🌿 Customer Reviews</h1>
        <p className="text-gray-500">Manage reviews for your plants</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* FORM */}
        <Card className="lg:col-span-1 rounded-2xl shadow-lg border">
          <CardContent className="p-6 space-y-4">
            <Input
              placeholder="Customer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Textarea
              placeholder="Write review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            <Select value={plant} onValueChange={setPlant}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Plant" />
              </SelectTrigger>

              <SelectContent>
                {plants.map((p: any) => (
                  <SelectItem key={p._id} value={p._id}>
                    🌿 {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={handleSubmit}
            >
              Add Review
            </Button>
          </CardContent>
        </Card>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">All Reviews</h2>

            <Select onValueChange={setFilterPlant}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by plant" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {plants.map((p: any) => (
                  <SelectItem key={p._id} value={p._id}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {reviews.length === 0 ? (
              <p className="text-gray-400">No reviews yet</p>
            ) : (
              reviews.map((r: any) => (
                <Card key={r._id}>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-semibold">{r.name}</h3>
                    <p>{r.review}</p>
                    <p>🌿 {r.plant?.name || "Unknown"}</p>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(r._id)}
                    >
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}