

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Home, Leaf, ShoppingCart, Star, Users, Bell, BookOpen } from "lucide-react";

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/dashboard`
        );
        setData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: Home, href: "/" },
    { name: "Plants", icon: Leaf, href: "/plants" },
    { name: "Orders", icon: ShoppingCart, href: "/orders" },
    { name: "Reviews", icon: Star, href: "/review" },
    { name: "Users", icon: Users, href: "/user" },
    { name: "Guide", icon: BookOpen, href: "/guide" },
    { name: "Notifications", icon: Bell, href: "/notifications" },
     { name: "Plant Reviews", icon: Star, href: "/plantreview" },
  ];

 const statsConfig = [
  {
    label: "Plants",
    value: data?.stats?.plants || 0,
    bg: "bg-green-100",
    text: "text-green-700",
  },
  {
    label: "Orders",
    value: data?.stats?.orders || 0,
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  {
    label: "Users",
    value: data?.stats?.users || 0,
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  {
    label: "Reviews",
    value: data?.stats?.reviews || 0,
    bg: "bg-pink-100",
    text: "text-pink-700",
  },
  {
    label: "Revenue",
    value: `₹ ${data?.stats?.revenue || 0}`,
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
];

  if (loading) return <p className="p-6">Loading dashboard...</p>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">

      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r p-4">
        <h2 className="text-2xl font-bold mb-4">🌿 Plant Admin</h2>
        {menuItems.map(({ name, icon: Icon, href }) => (
          <Link key={name} href={href} className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
            <Icon className="h-5 w-5 text-green-600" />
            {name}
          </Link>
        ))}
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 space-y-6">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {statsConfig.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-2xl p-4 shadow-sm hover:shadow-md transition`}
            >
              <p className="text-sm font-medium text-gray-600">
                {item.label}
              </p>

              <h2 className={`text-2xl font-bold mt-2 ${item.text}`}>
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">

          <Card>
            <CardHeader><CardTitle>Sales</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.chart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#16a34a" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Orders</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data.chart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="orders" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Recent Orders */}
          <Card>
            <CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader>
            <CardContent>
              {data.recentOrders.map((o: any) => (
                <div key={o._id} className="flex justify-between border-b py-2">
                  <span>{o.customer}</span>
                  <span>₹ {o.total}</span>
                  <span>{o.status}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Plants */}
          <Card>
            <CardHeader><CardTitle>Top Plants</CardTitle></CardHeader>
            <CardContent>
              {data.topPlants.map((p: any) => (
                <div key={p._id} className="flex justify-between py-2">
                  <span>{p._id}</span>
                  <span>{p.totalSold} sold</span>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>

      </main>
    </div>
  );
}