

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Edit, User, Mail, Phone, MapPin, Package, IndianRupee } from "lucide-react";
import EmptyState from "../components/EmptyState";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"profile" | "orders">("profile");

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  const [orders, setOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  // FETCH PROFILE
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${API_BASE_URL}/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfile(res.data);
      } catch (err) {
        console.error("Profile error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // FETCH ORDERS
  useEffect(() => {
    if (activeTab !== "orders") return;

    const fetchOrders = async () => {
      try {
        setLoadingOrders(true);
        const token = localStorage.getItem("token");

        const res = await axios.get(`${API_BASE_URL}/orders/my-orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setOrders(res.data.orders);


      } catch (err) {
        console.error("Orders error:", err);
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, [activeTab]);

  // UPDATE PROFILE
  const handleUpdate = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.put(
        `${API_BASE_URL}/auth/users/${profile._id}`,
        profile,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setProfile(res.data);
    } catch (err) {
      console.error("Update error:", err);
    } finally {
      setLoading(false);
    }
  };

  // LOADING UI
  if (loading || !profile) {
    return (
      <div className="mt-20 text-center">
        <Loader2 className="animate-spin mx-auto" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10 mt-15">
      <Card className="shadow-xl border rounded-2xl p-4 md:p-6">

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>

          <TabsList className="grid grid-cols-2 md:grid-cols-2 lg:w-1/3 mx-auto mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
          </TabsList>

          {/* ---------------- PROFILE ---------------- */}
          <TabsContent value="profile">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-3xl font-bold">Profile Details</CardTitle>
              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Edit size={18} /> Edit
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                      <div>
                        <Label>Name</Label>
                        <Input
                          value={profile.name || ""}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label>Email</Label>
                        <Input
                          value={profile.email || ""}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label>Phone</Label>
                        <Input
                          value={profile.phone || ""}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label>Address</Label>
                        <Input
                          value={profile.address || ""}
                          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                        />
                      </div>

                      <Button className="w-full" onClick={handleUpdate}>
                        Update Profile
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>



                <Button
                  variant="destructive"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </Button>

              </div>

            </CardHeader>

            <Separator className="my-4" />

            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profile.avatar || ""} />
                  <AvatarFallback>{profile.name?.[0]}</AvatarFallback>
                </Avatar>

                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-semibold flex items-center gap-2">
                    <User size={22} /> {profile.name}
                  </h2>
                  <Badge variant="secondary" className="mt-2">
                    Verified User
                  </Badge>
                </div>
              </div>

              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <Mail size={20} /> {profile.email}
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} /> {profile.phone || "N/A"}
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} /> {profile.address || "N/A"}
                </div>
              </div>
            </CardContent>
          </TabsContent>

          {/* ---------------- ORDERS ---------------- */}
          <TabsContent value="orders">
            <CardTitle className="text-2xl font-semibold mb-4">
              Your Orders
            </CardTitle>

            {loadingOrders ? (
              <div className="text-center py-10">
                <Loader2 className="animate-spin mx-auto" />
              </div>
            ) : orders.length === 0 ? (
              <EmptyState onAdd={function (): void {
                throw new Error("Function not implemented.");
              }} />
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {orders.map((order) => (
                  <Card key={order._id} className="border p-4 rounded-xl shadow-md">
                    <div className="flex items-center justify-between">
                      <Badge>{order.status}</Badge>
                      <Package size={22} />
                    </div>

                    <div className="mt-3 space-y-3">
                      {order.items.map((item: any, index: number) => (
                        <div key={index} className="flex items-center gap-3 border-b pb-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 rounded-md object-cover"
                          />

                          <div className="flex-1">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">
                              {item.quantity} x ₹ {item.price}
                            </p>
                          </div>

                          <p className="font-semibold">
                            ₹ {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-lg mt-3 font-semibold">
                      <IndianRupee size={18} /> {order.total}
                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                      Order Date:{" "}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>

                    {order.status !== "Delivered" && (
                      <Button
                        variant="destructive"
                        className="w-full mt-4"
                        onClick={() =>
                          setOrders((prev) =>
                            prev.filter((o) => o._id !== order._id)
                          )
                        }
                      >
                        Cancel Order
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

        </Tabs>
      </Card>
    </div>
  );
}