
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

import { ShoppingBag, Search, SlidersHorizontal, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "../context/CartContext";
import EmptyState from "../components/EmptyState";

export default function ShopPage() {
  const [plants, setPlants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [tempPriceRange, setTempPriceRange] = useState<[number, number]>([0, 10000]);
  const [tempTypes, setTempTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const [plantTypes, setPlantTypes] = useState<string[]>([]);

  const { addToCart } = useCart();

  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

 
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API}/plants`);
        setPlants(res.data);
      } catch (err) {
        console.error("Error fetching plants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  // FILTER LOGIC
  const filteredPlants = plants.filter((p) => {
    const matchSearch = p.name?.toLowerCase().includes(search.toLowerCase());

    const matchPrice =
      !priceRange ||
      (p.price >= priceRange[0] && p.price <= priceRange[1]);

    const type = p.type?.toLowerCase() || "";
    const matchType =
      plantTypes.length === 0 || plantTypes.includes(type);

    return matchSearch && matchPrice && matchType;
  });

  const toggleTempType = (type: string) => {
    setTempTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="container mx-auto px-6 py-12 mt-15">
      {/* Search */}
      <div className="relative max-w-lg mx-auto mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search plants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 pl-12 pr-12 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-inner"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="w-5 h-5 text-gray-500" />
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <Card className="mb-6 w-full md:w-3/4 lg:w-1/2 mx-auto shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-gray-700">
                Price: ₹{tempPriceRange[0]} - ₹{tempPriceRange[1]}
              </Label>
              <Slider
                min={0}
                max={10000}
                step={1}
                value={tempPriceRange}
                onValueChange={(val) => setTempPriceRange(val as [number, number])}
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-gray-700">Plant Type</Label>
              <div className="space-y-2 mt-2">
                {['All Categories', 'Indoor', 'Outdoor', 'Water Plants', 'Fruit Plants', 'Home Decoration'].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={tempTypes.includes(type)}
                      onCheckedChange={() => toggleTempType(type)}
                    />
                    <Label htmlFor={type} className="capitalize flex items-center space-x-1">
                      <Leaf className="w-4 h-4 text-green-600" />
                      <span>{type}</span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                onClick={() => {
                  setPriceRange(tempPriceRange);
                  setPlantTypes(tempTypes);
                  setShowFilters(false);
                }}
              >
                Apply Filters
              </Button>
              <Button
                className="flex-1"
                variant="outline"
                onClick={() => {
                  setPriceRange(null);
                  setPlantTypes([]);
                  setTempTypes([]);
                  setTempPriceRange([0, 10000]);
                }}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Plants Grid */}
      {loading ? (
        <p className="text-center text-gray-500 mt-6">
          Loading plants...
        </p>
      ) : filteredPlants.length > 0 ? (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {filteredPlants.map((plant) => (
    <div
      key={plant._id}
      className="bg-green-200 rounded-3xl overflow-hidden shadow-xl group transform hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      <Link href={`/shop/${plant._id}`}>
        <img
          src={plant.img}
          alt={plant.name}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
        />
      </Link>

      <hr />

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-grow">
        <div>
          <h3 className="text-xl font-semibold mb-1">{plant.name}</h3>
          <p className="text-gray-600 text-sm">{plant.description}</p>
          <span className="text-green-600 font-bold mt-2 block">
            ₹ {plant.price}
          </span>
        </div>

        {/* BUTTON FIXED AT BOTTOM */}
        <Button
          className="mt-auto w-full bg-green-500 text-white hover:bg-green-600 flex items-center justify-center space-x-2"
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
          <ShoppingBag className="w-5 h-5" />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  ))}
</div>
      ) : (
  <EmptyState onAdd={function (): void {
              throw new Error("Function not implemented.");
            } } />
)}
    </div>
  );
}