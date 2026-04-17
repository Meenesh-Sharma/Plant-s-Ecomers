
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Edit2, Trash, Mail, UserCheck, UserX } from "lucide-react";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface UserType {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

export default function UsersPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      setLoading(true);

      if (!API_BASE_URL) {
        throw new Error("API URL not found in .env");
      }

      const res = await axios.get(`${API_BASE_URL}/api/auth/users`);

      setUsers(res.data);
    } catch (error: any) {
      console.error("Fetch error:", error.response?.data || error.message);
      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

const handleDelete = async (id: string) => {
  const confirmDelete = confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;

  try {
    if (!API_BASE_URL) {
      throw new Error("API URL not found");
    }

    await axios.delete(`${API_BASE_URL}/api/auth/users/${id}`);

    setUsers(prev => prev.filter(user => user._id !== id));
  } catch (error: any) {
    console.error("Delete error:", error.response?.data || error.message);
    alert("Failed to delete user");
  }
};
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Users</h1>

      {/* 🔍 Search */}
      <Input
        placeholder="Search by name or email..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="max-w-md"
      />

      {/* ⏳ Loading */}
      {loading ? (
        <p>Loading users...</p>
      ) : filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map(user => (
            <Card key={user._id} className="hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User size={18} /> {user.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <p className="flex items-center gap-1 text-sm">
                  <Mail size={14} /> {user.email}
                </p>

                <p className="flex items-center gap-1 text-sm capitalize">
                  {user.role === "admin" ? (
                    <UserCheck size={14} />
                  ) : (
                    <UserX size={14} />
                  )}
                  {user.role}
                </p>

                <div className="flex justify-end gap-2 mt-3">
                  <Link href={`/user/${user._id}`}>
                    <Button size="sm" variant="outline">
                      <Edit2 size={14} className="mr-1" /> View
                    </Button>
                  </Link>

                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => handleDelete(user._id)}
                  >
                    <Trash size={14} className="mr-1" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}