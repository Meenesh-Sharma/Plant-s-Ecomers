'use client';

import { Button } from '@/components/ui/button';
import { Leaf, Sprout, Plus } from 'lucide-react';

interface Props {
  onAdd: () => void;
}

export default function EmptyState({ onAdd }: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      
      {/* Icon Section */}
      <div className="bg-green-100 p-6 rounded-full mb-6 shadow-sm">
        <Sprout className="w-12 h-12 text-green-600" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        No Plants Added Yet 🌱
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-6">
        Start building your plant care guide by adding your first plant. 
        Track watering, sunlight, and more easily.
      </p>

    

      {/* Optional Decorative Icons */}
      <div className="flex gap-4 mt-10 opacity-30">
        <Leaf className="w-6 h-6 text-green-500" />
        <Leaf className="w-5 h-5 text-green-400" />
        <Leaf className="w-4 h-4 text-green-300" />
      </div>
    </div>
  );
}