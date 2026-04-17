
'use client';

import { useState, useEffect } from 'react';
import { Plant, PlantType } from '../type';
import Link from 'next/link';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { PlusIcon } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function PlantsPage() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [newPlant, setNewPlant] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [plantsPerPage, setPlantsPerPage] = useState(12);

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 640) {
      setPlantsPerPage(4);   // mobile
    } else if (width < 768) {
      setPlantsPerPage(6);   // small tablet
    } else if (width < 1024) {
      setPlantsPerPage(8);   // tablet
    } else if (width < 1280) {
      setPlantsPerPage(12);  // laptop
    } else {
      setPlantsPerPage(16);  // large screen
    }
  };

  handleResize(); // run once
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  //  FETCH PLANTS FROM BACKEND
  const fetchPlants = async () => {
    try {
      const res = await axios.get(`${API}/api/plants`);
      setPlants(res.data);
    } catch (err) {
      console.error("Error fetching plants", err);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  // Pagination
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = plants.slice(indexOfFirstPlant, indexOfLastPlant);
  const totalPages = Math.ceil(plants.length / plantsPerPage);

  // ADD PLANT (API CALL)
  const handleAdd = async () => {
    try {
      if (!newPlant.name || !newPlant.price || !newPlant.type) return;

      const formData = new FormData();
      formData.append('name', newPlant.name);
      formData.append('price', String(newPlant.price));
      formData.append('type', newPlant.type);
      formData.append('description', newPlant.description || '');
      formData.append('care', newPlant.care || '');

      if (newPlant.file) {
        formData.append('image', newPlant.file); // 👈 IMPORTANT
      }

      await axios.post(`${API}/api/plants`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setNewPlant({});
      setShowSuccessDialog(true);
      fetchPlants(); // refresh list

    } catch (error) {
      console.error("Add failed", error);
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Plants</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button><PlusIcon size={16}/> Add Plant</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Plant</DialogTitle>
            </DialogHeader>

            <div className="space-y-3">

              <Input placeholder="Name"
                value={newPlant.name || ''}
                onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
              />

              <Input type="number" placeholder="Price"
                value={newPlant.price || ''}
                onChange={(e) => setNewPlant({ ...newPlant, price: e.target.value })}
              />

              {/* Image Upload */}
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setNewPlant({
                      ...newPlant,
                      file,
                      img: URL.createObjectURL(file),
                    });
                  }
                }}
              />

              {newPlant.img && (
                <img src={newPlant.img} className="h-40 w-full object-cover rounded"/>
              )}

              <Input placeholder="Description"
                value={newPlant.description || ''}
                onChange={(e) => setNewPlant({ ...newPlant, description: e.target.value })}
              />

              <Input placeholder="Care"
                value={newPlant.care || ''}
                onChange={(e) => setNewPlant({ ...newPlant, care: e.target.value })}
              />

              <Select
                onValueChange={(value) => setNewPlant({ ...newPlant, type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="indoor">Indoor</SelectItem>
                  <SelectItem value="outdoor">Outdoor</SelectItem>
                  <SelectItem value="regular tree">Regular Tree</SelectItem>
                  <SelectItem value="fruit tree">Fruit Plant</SelectItem>
                  <SelectItem value="water plant">Water Plant</SelectItem>
                  <SelectItem value="home decoration">Home Decoration</SelectItem>
             
                </SelectContent>
              </Select>

              <Button onClick={handleAdd}>Add Plant</Button>

            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {currentPlants.map((plant: any) => (
          <Link key={plant._id} href={`/plants/${plant._id}`}>
            <Card className="hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>{plant.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={plant.img} className="w-64 h-64 sm:h-48 rounded mb-2"/>
                <hr />
                <p className="font-semibold">₹{plant.price}</p>
                <p className="text-sm text-gray-500 capitalize">{plant.type}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => setCurrentPage(p => Math.max(p-1,1))}/>
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={currentPage === i+1}
                  onClick={() => setCurrentPage(i+1)}
                >
                  {i+1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext onClick={() => setCurrentPage(p => Math.min(p+1,totalPages))}/>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* SUCCESS */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> Plant Added</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}