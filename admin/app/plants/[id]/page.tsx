
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { Plant, PlantType } from '../../type';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
import { PencilIcon, Trash2Icon } from 'lucide-react';

const API = process.env.NEXT_PUBLIC_API_BASE_URL!;

export default function PlantDetailPage() {
  const router = useRouter();
  const params = useParams();
  const plantId = params.id;

  const [plant, setPlant] = useState<any>(null);

  // Popup states
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  //  Fetch plant from API
  useEffect(() => {
    fetchPlant();
  }, [plantId]);

  const fetchPlant = async () => {
    try {
      const res = await axios.get(`${API}/api/plants/${plantId}`);
      setPlant(res.data);
    } catch (error) {
      console.error('Error fetching plant', error);
    }
  };

  //  Update plant
  const handleUpdate = async () => {
    try {
      await axios.put(`${API}/api/plants/${plant._id}`, {
        name: plant.name,
        price: plant.price,
        img: plant.img,
        description: plant.description,
        care: plant.care,
        type: plant.type,
      });

      setShowSuccessDialog(true);
    } catch (error) {
      console.error('Update failed', error);
    }
  };

  //  Delete plant
  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/api/plants/${plant._id}`);
      router.push('/plants');
    } catch (error) {
      console.error('Delete failed', error);
    }
  };

  // Loading state
  if (!plant) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto">
      <Card className="shadow-lg">
        {/* Header */}
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <CardTitle className="text-2xl font-bold text-center sm:text-left">
            Plant Details
          </CardTitle>
          <div className="flex gap-3">
            <Button
              onClick={handleUpdate}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <PencilIcon size={16} /> Update
            </Button>
            <Button
              variant="destructive"
              onClick={() => setShowDeleteDialog(true)}
              className="flex items-center gap-2"
            >
              <Trash2Icon size={16} /> Delete
            </Button>
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div>
            <img
              src={plant.img}
              alt={plant.name}
              className="w-64 h-64 shadow"
            />
          </div>

          {/* Details */}
          <div className="space-y-3">
            <Input
              type="text"
              value={plant.name}
              onChange={(e) => setPlant({ ...plant, name: e.target.value })}
              placeholder="Name"
            />
            <Input
              type="number"
              value={plant.price}
              onChange={(e) =>
                setPlant({ ...plant, price: Number(e.target.value) })
              }
              placeholder="Price"
            />
            <Input
              type="text"
              value={plant.img}
              onChange={(e) => setPlant({ ...plant, img: e.target.value })}
              placeholder="Image URL"
            />
            <Input
              type="text"
              value={plant.description}
              onChange={(e) =>
                setPlant({ ...plant, description: e.target.value })
              }
              placeholder="Description"
            />
            <Input
              type="text"
              value={plant.care}
              onChange={(e) => setPlant({ ...plant, care: e.target.value })}
              placeholder="Care"
            />
            <select
              value={plant.type}
              onChange={(e) =>
                setPlant({ ...plant, type: e.target.value as PlantType })
              }
              className="border p-2 rounded w-full"
            >
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="regular tree">Regular Tree</option>
              <option value="fruit tree">Fruit Tree</option>
               <option value="Home Decorations ">Home Decorations</option>
              <option value="All Categories">All Categories</option>
              
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Successful</DialogTitle>
          </DialogHeader>
          <p>Your plant details have been updated successfully!</p>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ⚠️ Delete Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <p>
            This action cannot be undone. The plant will be permanently deleted.
          </p>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                handleDelete();
                setShowDeleteDialog(false);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}