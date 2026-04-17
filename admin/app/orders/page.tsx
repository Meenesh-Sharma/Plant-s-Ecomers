
'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import axios from 'axios';

interface Order {
  id: string;
  customer: string;
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered';
  date: string;
  phone_number?: string;
  pin?: string;
  address: string;
  city: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;

  const [loading, setLoading] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [editStatus, setEditStatus] = useState<Order['status']>('Pending');

  // 🚀 Fetch Orders
  const fetchOrders = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders?page=${page}&limit=${limit}`
      );

      // 🔥 map backend → frontend format
      const formatted = res.data.orders.map((o: any) => ({
        id: o._id,
        customer: o.customer,
        total: o.total,
        status: o.status,
        date: new Date(o.createdAt).toLocaleDateString(),
        phone_number: o.phone_number,
        pin: o.pin,
        address: o.address,
        city: o.city,
      }));

      setOrders(formatted);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [page]);

  const handleView = (order: Order) => {
    setSelectedOrder(order);
    setEditStatus(order.status);
    setOpenDialog(true);
  };

  const handleSave = async () => {
    if (!selectedOrder) return;

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders/${selectedOrder.id}`,
        { status: editStatus }
      );

      fetchOrders(); // refresh
      setOpenDialog(false);
    } catch (error) {
      console.error(error);
    }
  };

  // ❌ Delete Order
  const handleDelete = async (order: Order) => {
    if (!confirm(`Delete order ${order.id}?`)) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders/${order.id}`
      );

      fetchOrders(); // refresh
    } catch (error) {
      console.error(error);
    }
  };

  const nextPage = () => {
    if (page < totalPages) setPage((p) => p + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">📦 Orders</h1>

      <Card>
        <CardContent>
          <ScrollArea className="max-h-[500px]">

            {loading ? (
              <p className="text-center py-10">Loading...</p>
            ) : (
              <table className="w-full table-auto border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">Order ID</th>
                    <th className="p-2 text-left">Customer</th>
                    <th className="p-2 text-left">Date</th>
                    <th className="p-2 text-left">Total</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-t hover:bg-gray-50">
                      <td className="p-2">{order.id}</td>
                      <td className="p-2">{order.customer}</td>
                      <td className="p-2">{order.date}</td>
                      <td className="p-2">₹ {order.total}</td>

                      <td className="p-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : order.status === 'Shipped'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td className="p-2 flex gap-2">
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => handleView(order)}
                        >
                          View
                        </Button>

                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleView(order)}
                        >
                          Update
                        </Button>

                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => handleDelete(order)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-4">
        <Button variant="outline" onClick={prevPage} disabled={page === 1}>
          <ArrowLeft className="mr-1 w-4 h-4" /> Prev
        </Button>

        {[...Array(totalPages)].map((_, idx) => (
          <Button
            key={idx}
            variant={page === idx + 1 ? 'default' : 'outline'}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </Button>
        ))}

        <Button variant="outline" onClick={nextPage} disabled={page === totalPages}>
          Next <ArrowRight className="ml-1 w-4 h-4" />
        </Button>
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-3">
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <p><strong>Customer:</strong> {selectedOrder.customer}</p>
              <p><strong>Date:</strong> {selectedOrder.date}</p>
              <p><strong>Total:</strong> ₹ {selectedOrder.total}</p>
              <p><strong>Number:</strong> {selectedOrder.phone_number}</p>
              <p><strong>Pin:</strong> {selectedOrder.pin}</p>
              <p><strong>Address:</strong> {selectedOrder.address}</p>
              <p><strong>City:</strong> {selectedOrder.city}</p>

              <Select value={editStatus} onValueChange={(v) => setEditStatus(v as Order['status'])}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  {['Pending', 'Shipped', 'Delivered'].map((status) => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <DialogFooter className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}