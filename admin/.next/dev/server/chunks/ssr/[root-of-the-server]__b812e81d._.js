module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/user/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // 'use client';
// // import React, { useEffect, useState } from 'react';
// // import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { User, Edit2, Trash, Mail, UserCheck, UserX } from 'lucide-react';
// // import Link from 'next/link';
// // // import axios from 'axios';
// // interface UserType {
// //   id: string;
// //   name: string;
// //   email: string;
// //   role: 'admin' | 'user';
// // }
// // export default function UsersPage() {
// //   const [users, setUsers] = useState<UserType[]>([]);
// //   const [search, setSearch] = useState('');
// //   useEffect(() => {
// //     // 🟢 Dummy users
// //     const dummyUsers: UserType[] = [
// //       { id: 'U-201', name: 'Priya Sharma', email: 'priya@example.com', role: 'user' },
// //       { id: 'U-202', name: 'Amit Verma', email: 'amit@example.com', role: 'user' },
// //       { id: 'U-203', name: 'kp User', email: 'admin@example.com', role: 'user' },
// //     ];
// //     setUsers(dummyUsers);
// //     // 🔹 Replace with real API call
// //     // axios.get('/api/users').then(res => setUsers(res.data));
// //   }, []);
// //   const handleDelete = (id: string) => {
// //     if (!confirm('Are you sure you want to delete this user?')) return;
// //     setUsers(prev => prev.filter(u => u.id !== id));
// //     // axios.delete(`/api/users/${id}`);
// //   };
// //   const filteredUsers = users.filter(
// //     u =>
// //       u.name.toLowerCase().includes(search.toLowerCase()) ||
// //       u.email.toLowerCase().includes(search.toLowerCase())
// //   );
// //   return (
// //     <div className="p-6 space-y-6">
// //       <h1 className="text-2xl font-bold mb-4">Users</h1>
// //       {/* Search */}
// //       <Input
// //         placeholder="Search by name or email..."
// //         value={search}
// //         onChange={e => setSearch(e.target.value)}
// //         className="mb-4"
// //       />
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {filteredUsers.map(user => (
// //           <Card key={user.id} className="hover:shadow-md transition">
// //             <CardHeader>
// //               <CardTitle className="flex items-center gap-2">
// //                 <User size={20} /> {user.name}
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent className="space-y-2">
// //               <p className="flex items-center gap-1"><Mail size={14} /> {user.email}</p>
// //               <p className="flex items-center gap-1">
// //                 {user.role === 'admin' ? <UserCheck size={14} /> : <UserX size={14} />} {user.role}
// //               </p>
// //               <div className="flex justify-end gap-2 mt-3">
// //                 <Link href={`/user/${user.id}`}>
// //                   <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
// //                     <Edit2 size={14} className="mr-1" /> View
// //                   </Button>
// //                 </Link>
// //                 <Button
// //                   size="sm"
// //                   className="bg-red-600 hover:bg-red-700 text-white"
// //                   onClick={() => handleDelete(user.id)}
// //                 >
// //                   <Trash size={14} className="mr-1" /> Delete
// //                 </Button>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { User, Edit2, Trash, Mail, UserCheck, UserX } from "lucide-react";
// import Link from "next/link";
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// interface UserType {
//   _id: string;
//   name: string;
//   email: string;
//   role: "admin" | "user";
// }
// export default function UsersPage() {
//   const [users, setUsers] = useState<UserType[]>([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);
//   // 🔹 Fetch all users (ADMIN)
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(`${API_BASE_URL}/users`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setUsers(res.data);
//       } catch (error) {
//         console.error("Error fetching users", error);
//         // 🟢 fallback dummy data (optional)
//         setUsers([
//           {
//             _id: "U-201",
//             name: "Priya Sharma",
//             email: "priya@example.com",
//             role: "user",
//           },
//           {
//             _id: "U-202",
//             name: "Amit Verma",
//             email: "amit@example.com",
//             role: "user",
//           },
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);
//   // 🔴 Delete user (ADMIN)
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this user?")) return;
//     try {
//       await axios.delete(`${API_BASE_URL}/user/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       setUsers(prev => prev.filter(user => user._id !== id));
//     } catch (error) {
//       alert("Failed to delete user");
//     }
//   };
//   // 🔍 Search filter
//   const filteredUsers = users.filter(
//     user =>
//       user.name.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase())
//   );
//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Users</h1>
//       {/* Search */}
//       <Input
//         placeholder="Search by name or email..."
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//         className="max-w-md"
//       />
//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredUsers.map(user => (
//             <Card key={user._id} className="hover:shadow-md transition">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <User size={18} /> {user.name}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <p className="flex items-center gap-1 text-sm">
//                   <Mail size={14} /> {user.email}
//                 </p>
//                 <p className="flex items-center gap-1 text-sm capitalize">
//                   {user.role === "admin" ? (
//                     <UserCheck size={14} />
//                   ) : (
//                     <UserX size={14} />
//                   )}
//                   {user.role}
//                 </p>
//                 <div className="flex justify-end gap-2 mt-3">
//                   <Link href={`/admin/users/${user._id}`}>
//                     <Button size="sm" variant="outline">
//                       <Edit2 size={14} className="mr-1" /> View
//                     </Button>
//                   </Link>
//                   <Button
//                     size="sm"
//                     className="bg-red-600 hover:bg-red-700 text-white"
//                     onClick={() => handleDelete(user._id)}
//                   >
//                     <Trash size={14} className="mr-1" /> Delete
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
}),
"[project]/app/user/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/user/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b812e81d._.js.map