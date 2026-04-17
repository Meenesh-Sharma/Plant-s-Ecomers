
'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
Tabs,
TabsList,
TabsTrigger,
TabsContent,
} from "@/components/ui/tabs";
import {
Mail,
UserCheck,
UserX,
Edit2,
Trash,
Calendar
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface UserType {
_id: string;
name: string;
email: string;
role: 'admin' | 'customer';
}

interface OrderType {
_id: string;
createdAt: string;
total: number;
status: string;
items: {
name: string;
quantity: number;
}[];
}

export default function UserDetailPage() {
const params = useParams();
const router = useRouter();
const userId = params?.id;

const [user, setUser] = useState<UserType | null>(null);
const [orders, setOrders] = useState<OrderType[]>([]);
const [openEditDialog, setOpenEditDialog] = useState(false);
const [editForm, setEditForm] = useState({
name: '',
email: ''
});

if (!userId || Array.isArray(userId)) {
return <div className="p-6 text-red-600">Invalid user ID</div>;
}

useEffect(() => {
const fetchData = async () => {
try {
const userRes = await axios.get(`${API_BASE_URL}/api/auth/users/${userId}`);
setUser(userRes.data);
setEditForm({
name: userRes.data.name,
email: userRes.data.email
});

    const orderRes = await axios.get(
      `${API_BASE_URL}/api/orders/user/${userId}`
    );
    setOrders(orderRes.data);

  } catch (error: any) {
    console.error(error.response?.data || error.message);
    alert("Failed to fetch user data");
  }
};

fetchData();


}, [userId]);

const handleDeleteUser = async () => {
if (!user) return;
if (!confirm('Are you sure you want to delete this user?')) return;


try {
  await axios.delete(`${API_BASE_URL}/api/users/${user._id}`);
  router.push('/admin/user');
} catch (error: any) {
  console.error(error.response?.data || error.message);
  alert("Delete failed");
}

};

const handleCancelOrder = async (orderId: string) => {
if (!confirm('Are you sure you want to cancel this order?')) return;


try {
  await axios.put(`${API_BASE_URL}/api/orders/${orderId}/cancel`);

  setOrders(prev =>
    prev.map(o =>
      o._id === orderId ? { ...o, status: 'Cancelled' } : o
    )
  );
} catch (error: any) {
  console.error(error.response?.data || error.message);
  alert("Cancel failed");
}


};

const handleSaveEdit = async () => {
if (!editForm.name || !editForm.email) {
return alert('Fill all fields');
}

try {
  const res = await axios.put(
    `${API_BASE_URL}/api/users/${user?._id}`,
    editForm
  );

  setUser(res.data);
  setOpenEditDialog(false);
} catch (error: any) {
  console.error(error.response?.data || error.message);
  alert("Update failed");
}


};

if (!user) return <div className="p-6 text-gray-600">User not found.</div>;

return ( <div className="p-6 max-w-6xl mx-auto"> <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>


  <Tabs defaultValue="details" className="w-full">
    <TabsList className="grid grid-cols-2 w-full mb-6">
      <TabsTrigger value="details">User Details</TabsTrigger>
      <TabsTrigger value="orders">Orders</TabsTrigger>
    </TabsList>

    <TabsContent value="details">
      <Card className="shadow-lg rounded-2xl border w-80">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            {user.role === 'admin' ? (
              <UserCheck className="text-green-600" />
            ) : (
              <UserX className="text-red-600" />
            )}
            {user.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="flex items-center gap-2 text-gray-600">
            <Mail size={16} /> {user.email}
          </p>
          <div className="flex gap-3 pt-4">
            <Button onClick={() => setOpenEditDialog(true)}>
              <Edit2 size={14} /> Edit
            </Button>

            <Button variant="destructive" onClick={handleDeleteUser}>
              <Trash size={14} /> Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="orders">
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {orders.map((order) => {
            const status = order.status?.toLowerCase();

            return (
              <Card key={order._id} className="shadow-md hover:shadow-xl transition rounded-xl">
                <CardHeader>
                  <CardTitle className="text-sm text-gray-500">
                  Products:
                  </CardTitle>
                   <div>
                    {order.items?.map((item, index) => (
                      <p key={index} className="text-xs text-gray-500">
                        {item.name} (x{item.quantity})
                      </p>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={14} />
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>

                  <p className="font-semibold">
                    Total: ₹{order.total}
                  </p>

                  <p className="text-sm">
                    Status:{" "}
                    <span
                      className={
                        status === "pending"
                          ? "text-yellow-600"
                          : status === "shipped"
                          ? "text-blue-600"
                          : status === "delivered"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {order.status}
                    </span>
                  </p>
                  {status !== "cancelled" && status !== "delivered" && (
                    <Button
                      className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => handleCancelOrder(order._id)}
                    >
                      Cancel Order
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </TabsContent>
  </Tabs>

  <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit User</DialogTitle>
      </DialogHeader>

      <Input
        value={editForm.name}
        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
      />

      <Input
        value={editForm.email}
        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
      />

      <DialogFooter>
        <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
        <Button onClick={handleSaveEdit}>Save</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</div>


);
}
