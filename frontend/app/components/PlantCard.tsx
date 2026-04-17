
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

interface PlantCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

export default function PlantCard({ id, name, price, image, slug }: PlantCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-green-200 rounded-2xl overflow-hidden shadow-lg group flex-none w-60 transform hover:shadow-xl transition-all duration-300">
      
      <Link href={`/shop/${slug}`}>
   
        <div className="w-full h-40 flex items-center justify-center bg-white">
          <img
            src={image}
            alt={name}
            className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-all duration-500"
          />
        </div>
      </Link>
<hr />
      <div className="p-3">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>

        <span className="text-green-600 font-bold mt-1 block">
          ₹{price.toFixed(2)}
        </span>

        <Button
          onClick={() => addToCart({ id, name, price, image, slug })}
          className="mt-2 w-full bg-green-500 text-white py-1.5 rounded-full text-sm font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-1 shadow-sm"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add</span>
        </Button>
      </div>
    </div>
  );
}