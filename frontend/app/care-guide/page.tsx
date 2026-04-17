
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Loader2,
  Droplets,
  Sun,
  Thermometer,
  Leaf,
  Scissors,
  Bug,
  Search,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';


interface CareTip {
  _id?: string;
  type: string;
  tip: string;
}

interface PlantCare {
  _id: string;
  plantName: string;
  plantType: string;
  care: CareTip[];
}


const API = process.env.NEXT_PUBLIC_API_BASE_URL;


const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'Indoor', label: 'Indoor' },
  { value: 'Outdoor', label: 'Outdoor' },
  { value: 'Water Plants', label: 'Water Plant' },
  { value: 'Fruit Plants', label: 'Fruit Plant' },
  { value: 'Home Decoration', label: 'Home Decoration' },
];

export default function CareGuidePage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [plants, setPlants] = useState<PlantCare[]>([]);
  const [loading, setLoading] = useState(false);


  const plantTypeColors: Record<string, string> = {
  Indoor: 'bg-green-100 text-green-700',
  Outdoor: 'bg-teal-100 text-teal-700',
  'Water Plants': 'bg-blue-100 text-blue-700',
  'Fruit Plants': 'bg-orange-100 text-orange-700',
  'Home Decoration': 'bg-purple-100 text-purple-700',
};

  const fetchPlants = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/plant-care`);

      let data = res.data;

      if (query) {
        data = data.filter((p: PlantCare) =>
          p.plantName.toLowerCase().includes(query.toLowerCase())
        );
      }

      if (category !== 'all') {
        data = data.filter(
          (p: PlantCare) => p.plantType === category
        );
      }

      setPlants(data);
    } catch (err) {
      console.error('Error fetching plant care data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

 

 const iconClass = "w-4 h-4 flex-shrink-0 mt-0.5";

const getIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'watering':
      return <Droplets className={`${iconClass} text-blue-500`} />;
    case 'light':
      return <Sun className={`${iconClass} text-yellow-500`} />;
    case 'temperature':
      return <Thermometer className={`${iconClass} text-red-400`} />;
    case 'soil':
      return <Leaf className={`${iconClass} text-green-500`} />;
    case 'pruning':
      return <Scissors className={`${iconClass} text-gray-500`} />;
    case 'pest control':
      return <Bug className={`${iconClass} text-amber-600`} />;
    default:
      return <Leaf className={`${iconClass} text-green-500`} />;
  }
};


  return (
    <main className="container mx-auto px-6 py-12 mt-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-green-700">
        🌿 Plant Care Guide
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by plant name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-8"
          />
        </div>

        <Select onValueChange={setCategory} defaultValue={category}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={fetchPlants} disabled={loading}>
          {loading ? (
            <Loader2 className="animate-spin w-4 h-4 mr-2" />
          ) : (
            'Search'
          )}
        </Button>
      </div>

      <Separator className="my-6" />

      {/* Results */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4 animate-pulse">
              <Skeleton className="h-6 w-32 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </Card>
          ))}
        </div>
      ) : plants.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          No plants found. Try another name or category.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <Card
              key={plant._id}
              className="shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-2xl"
            >
              <CardHeader className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2">
                <CardTitle className="text-green-700">
                  {plant.plantName}
                </CardTitle>
                <Badge className={`capitalize ${plantTypeColors[plant.plantType] || 'bg-gray-100 text-gray-700'
  }`}
>
                  {plant.plantType}
                </Badge>
              </CardHeader>

              <CardContent>
                {plant.care.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 mb-3">
                    {getIcon(tip.type)}
                    <p className="text-gray-600 text-sm">
                      <strong>{tip.type}:</strong> {tip.tip}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}