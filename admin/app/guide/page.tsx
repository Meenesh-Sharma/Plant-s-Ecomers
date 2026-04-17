
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import EmptyState from '../components/EmptyState';

import {
  Plus, Pencil, Trash, Droplets, Sun, Thermometer, Leaf, Scissors, Bug, Loader2, Search,
} from 'lucide-react';

interface CareTip {
  type: string;
  tip: string;
}

interface PlantCare {
  _id: string;
  plantType: string;
  plantName: string;
  care: CareTip[];
}
const API = process.env.NEXT_PUBLIC_API_BASE_URL;
const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'Indoor', label: 'Indoor' },
  { value: 'Outdoor', label: 'Outdoor' },
  { value: 'Water Plants', label: 'Water Plants' },
  { value: 'Fruit Plants', label: 'Fruit Plants' },
  { value: 'Home Decoration', label: 'Home Decoration' },
];

export default function GuidePage() {
  const [plants, setPlants] = useState<PlantCare[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingPlant, setEditingPlant] = useState<PlantCare | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [filteredPlants, setFilteredPlants] = useState<PlantCare[]>([]);

  const [form, setForm] = useState({
    plantType: '',
    plantName: '',
    care: [{ type: '', tip: '' }],
  });

  const handleSearch = () => {
    let filtered = plants;

    if (query) {
      filtered = filtered.filter((p) =>
        p.plantName.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category !== 'all') {
      filtered = filtered.filter((p) => p.plantType === category);
    }

    setFilteredPlants(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [query, category, plants]);

  const plantTypeColors: Record<string, string> = {
    Indoor: 'bg-green-100 text-green-700',
    Outdoor: 'bg-teal-100 text-teal-700',
    'Water Plants': 'bg-blue-100 text-blue-700',
    'Fruit Plants': 'bg-orange-100 text-orange-700',
    'Home Decoration': 'bg-purple-100 text-purple-700',
  };

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

  const fetchPlants = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/plant-care`);
      setPlants(res.data);
      setFilteredPlants(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  const openAddDialog = () => {
    setEditingPlant(null);
    setForm({
      plantType: '',
      plantName: '',
      care: [{ type: '', tip: '' }],
    });
    setOpenDialog(true);
  };

  const openEditDialog = (plant: PlantCare) => {
    setEditingPlant(plant);
    setForm({
      plantType: plant.plantType,
      plantName: plant.plantName,
      care: plant.care,
    });
    setOpenDialog(true);
  };

  const addCareField = () => {
    setForm({
      ...form,
      care: [...form.care, { type: '', tip: '' }],
    });
  };

  const removeCareField = (index: number) => {
    const updated = [...form.care];
    updated.splice(index, 1);
    setForm({ ...form, care: updated });
  };

  const updateCareField = (
    index: number,
    field: 'type' | 'tip',
    value: string
  ) => {
    const updated = [...form.care];
    updated[index][field] = value;
    setForm({ ...form, care: updated });
  };


  const handleSave = async () => {
    if (!form.plantName || !form.plantType) {
      alert('Fill required fields');
      return;
    }

    try {
      if (editingPlant) {
        await axios.put(`${API}/api/plant-care/${editingPlant._id}`, form);
      } else {
        await axios.post(`${API}/api/plant-care`, form);
      }

      fetchPlants();
      setOpenDialog(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this plant?')) return;

    try {
      await axios.delete(`${API}/api/plant-care/${id}`);
      fetchPlants();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">


        <h1 className="text-3xl font-bold text-green-700 whitespace-nowrap">
          🌿  Plant Care Guidence
        </h1>


        <div className="flex flex-col md:flex-row items-center gap-3 w-full lg:w-auto">

          <div className="relative w-full md:w-[250px]">
            <Search className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by plant name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-8"
            />
          </div>

          <Select onValueChange={setCategory} defaultValue={category}>
            <SelectTrigger className="w-[180px]">
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

          <Button onClick={handleSearch} disabled={loading}>
            {loading ? (
              <Loader2 className="animate-spin w-4 h-4 mr-2" />
            ) : (
              'Search'
            )}
          </Button>
        </div>


        <Button
          onClick={openAddDialog}
          className="bg-green-600 hover:bg-green-700 text-white whitespace-nowrap"
        >
          <Plus className="mr-1 w-4 h-4" /> Add Plant
        </Button>

      </div>
      {/* LOADING */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : filteredPlants.length === 0 ? (
        <EmptyState onAdd={openAddDialog} />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <Card key={plant._id} className="shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-2xl">
              <CardHeader className="flex justify-between">
                <CardTitle className="text-green-700">
                  {plant.plantName}
                </CardTitle>

                <span className={`text-xs px-3 py-1 rounded-full ${plantTypeColors[plant.plantType]}`}>
                  {plant.plantType}
                </span>
              </CardHeader>

              <CardContent>
                {plant.care.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 mb-3">
                    {getIcon(tip.type)}
                    <p className="text-sm text-gray-600">
                      <strong>{tip.type}:</strong> {tip.tip}
                    </p>
                  </div>
                ))}

                <div className="flex justify-end gap-2 mt-4">
                  <Button size="sm" variant="outline" onClick={() => openEditDialog(plant)}>
                    <Pencil size={14} className="mr-1" /> Edit
                  </Button>

                  <Button size="sm" variant="destructive" onClick={() => handleDelete(plant._id)}>
                    <Trash size={14} className="mr-1" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-h-[80vh] overflow-y-auto z-50">
          <DialogHeader>
            <DialogTitle>
              {editingPlant ? 'Edit Plant' : 'Add Plant'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">

            <Select
              value={form.plantType}
              onValueChange={(v) =>
                setForm({ ...form, plantType: v })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                {[
                  'All Categories',
                  'Home Decoration',
                  'Indoor',
                  'Outdoor',
                  'Water Plants',
                  'Fruit Plants',
                ].map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Plant Name"
              value={form.plantName}
              onChange={(e) =>
                setForm({ ...form, plantName: e.target.value })
              }
            />

            {form.care.map((item, index) => (
              <div key={index} className="border p-3 rounded-lg space-y-2">
                <Input
                  placeholder="Type (Watering, Pruning, Light...)"
                  value={item.type}
                  onChange={(e) =>
                    updateCareField(index, 'type', e.target.value)
                  }
                />

                <Textarea
                  placeholder="Tip description"
                  value={item.tip}
                  onChange={(e) =>
                    updateCareField(index, 'tip', e.target.value)
                  }
                />

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => removeCareField(index)}
                >
                  Remove
                </Button>
              </div>
            ))}

            <Button onClick={addCareField} variant="outline">
              + Add More Care Tips
            </Button>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>

            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={handleSave}
            >
              {editingPlant ? 'Update' : 'Add'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}