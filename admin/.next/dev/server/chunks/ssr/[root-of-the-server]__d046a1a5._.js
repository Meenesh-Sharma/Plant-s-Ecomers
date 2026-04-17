module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // // "use client";
// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   Card,
// // //   CardHeader,
// // //   CardTitle,
// // //   CardContent,
// // // } from "@/components/ui/card";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // import { Avatar } from "@/components/ui/avatar";
// // // import {
// // //   LineChart,
// // //   Line,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   ResponsiveContainer,
// // //   BarChart,
// // //   Bar,
// // //   CartesianGrid,
// // //   Legend,
// // // } from "recharts";
// // // import {
// // //   Menu,
// // //   Bell,
// // //   Box,
// // //   Users,
// // //   ShoppingCart,
// // //   Leaf,
// // //   Star,
// // //   BarChart2,
// // //   LogOut,
// // //   Settings,
// // // } from "lucide-react";
// // // // NOTE: axios usage commented where API calls would be made.
// // // // import axios from 'axios';
// // // // Dummy data for graphs (replace with API data)
// // // const salesData = [
// // //   { month: "Jan", sales: 400 },
// // //   { month: "Feb", sales: 600 },
// // //   { month: "Mar", sales: 800 },
// // //   { month: "Apr", sales: 700 },
// // //   { month: "May", sales: 1200 },
// // //   { month: "Jun", sales: 900 },
// // //   { month: "Jul", sales: 1400 },
// // //   { month: "Aug", sales: 1000 },
// // //   { month: "Sep", sales: 1100 },
// // //   { month: "Oct", sales: 1500 },
// // //   { month: "Nov", sales: 1700 },
// // //   { month: "Dec", sales: 2000 },
// // // ];
// // // const ordersDummy = [
// // //   { id: "ORD-1001", customer: "Priya", total: 45, status: "Pending", date: "2025-11-01" },
// // //   { id: "ORD-1002", customer: "Amit", total: 90, status: "Shipped", date: "2025-11-03" },
// // //   { id: "ORD-1003", customer: "Rina", total: 30, status: "Delivered", date: "2025-11-06" },
// // // ];
// // // const plantsDummy = [
// // //   { id: "P-101", name: "Monstera Deliciosa", price: 45, stock: 12 },
// // //   { id: "P-102", name: "Fiddle Leaf Fig", price: 60, stock: 5 },
// // //   { id: "P-103", name: "Snake Plant", price: 20, stock: 30 },
// // // ];
// // // const usersDummy = [
// // //   { id: "U-201", name: "Priya Sharma", email: "priya@example.com", role: "customer" },
// // //   { id: "U-202", name: "Amit Verma", email: "amit@example.com", role: "customer" },
// // //   { id: "U-203", name: "Admin", email: "admin@example.com", role: "admin" },
// // // ];
// // // export default function AdminDashboard() {
// // //   const [activePage, setActivePage] = useState<string>("dashboard");
// // //   const [search, setSearch] = useState("");
// // //   const [orders, setOrders] = useState(ordersDummy);
// // //   const [plants, setPlants] = useState(plantsDummy);
// // //   const [users, setUsers] = useState(usersDummy);
// // //   const [notifications, setNotifications] = useState([
// // //     { id: 1, text: "Low stock alert: Fiddle Leaf Fig" },
// // //     { id: 2, text: "New review on Monstera Deliciosa" },
// // //   ]);
// // //   useEffect(() => {
// // //     // Example API call to fetch dashboard counts and data
// // //     // const token = localStorage.getItem('token');
// // //     // axios.get('/api/admin/dashboard', { headers: { Authorization: `Bearer ${token}` } })
// // //     //   .then(res => {
// // //     //     setOrders(res.data.orders);
// // //     //     setPlants(res.data.plants);
// // //     //     setUsers(res.data.users);
// // //     //   })
// // //     //   .catch(err => console.error(err));
// // //   }, []);
// // //   const handleNavClick = (page: string) => {
// // //     setActivePage(page);
// // //   };
// // //   const filteredOrders = orders.filter((o) => o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase()));
// // //   const filteredPlants = plants.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
// // //   const filteredUsers = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));
// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <div className="max-w-[1400px] mx-auto px-4 py-6">
// // //         <div className="flex items-center justify-between mb-6">
// // //           <h1 className="text-2xl md:text-3xl font-bold">Urban Plant's Admin</h1>
// // //           <div className="flex items-center gap-3">
// // //             <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search orders, plants, users..." />
// // //             <Button variant="ghost" size="sm">
// // //               <Bell className="w-4 h-4" />
// // //             </Button>
// // //             <Avatar>
// // //               <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">A</div>
// // //             </Avatar>
// // //           </div>
// // //         </div>
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// // //           {/* Sidebar */}
// // //           <aside className="col-span-1">
// // //             <Card className="sticky top-6">
// // //               <CardContent>
// // //                 <nav className="space-y-1">
// // //                   <NavItem icon={<BarChart2 className="w-4 h-4 mr-2" />} label="Dashboard" active={activePage === "dashboard"} onClick={() => handleNavClick("dashboard")} />
// // //                   <NavItem icon={<Leaf className="w-4 h-4 mr-2" />} label="Plants" active={activePage === "plants"} onClick={() => handleNavClick("plants")} />
// // //                   <NavItem icon={<ShoppingCart className="w-4 h-4 mr-2" />} label="Orders" active={activePage === "orders"} onClick={() => handleNavClick("orders")} />
// // //                   <NavItem icon={<Star className="w-4 h-4 mr-2" />} label="Reviews" active={activePage === "reviews"} onClick={() => handleNavClick("reviews")} />
// // //                   <NavItem icon={<Users className="w-4 h-4 mr-2" />} label="Users" active={activePage === "users"} onClick={() => handleNavClick("users")} />
// // //                   <NavItem icon={<Menu className="w-4 h-4 mr-2" />} label="Guide" active={activePage === "guide"} onClick={() => handleNavClick("guide")} />
// // //                   <NavItem icon={<Bell className="w-4 h-4 mr-2" />} label={`Notifications (${notifications.length})`} active={activePage === "notifications"} onClick={() => handleNavClick("notifications")} />
// // //                   <div className="mt-4 border-t pt-3">
// // //                     <Button variant="ghost" className="w-full justify-start" onClick={() => { /* TODO: logout logic */ }}>
// // //                       <LogOut className="w-4 h-4 mr-2" /> Logout
// // //                     </Button>
// // //                     <Button variant="ghost" className="w-full justify-start mt-2">
// // //                       <Settings className="w-4 h-4 mr-2" /> Settings
// // //                     </Button>
// // //                   </div>
// // //                 </nav>
// // //               </CardContent>
// // //             </Card>
// // //             <Card className="mt-4">
// // //               <CardHeader>
// // //                 <CardTitle>Quick Actions</CardTitle>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <div className="flex flex-col gap-2">
// // //                   <Button onClick={() => handleNavClick("plants")}>Add Plant</Button>
// // //                   <Button variant="outline" onClick={() => handleNavClick("orders")}>View Orders</Button>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </aside>
// // //           {/* Main content */}
// // //           <main className="col-span-1 md:col-span-3">
// // //             {activePage === "dashboard" && (
// // //               <div className="space-y-6">
// // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // //                   <StatCard title="Total Sales" value={`₹ ${salesData.reduce((s, d) => s + d.sales, 0)}`} />
// // //                   <StatCard title="Orders" value={orders.length.toString()} />
// // //                   <StatCard title="Active Users" value={users.length.toString()} />
// // //                 </div>
// // //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// // //                   <Card>
// // //                     <CardHeader>
// // //                       <CardTitle>Monthly Sales</CardTitle>
// // //                     </CardHeader>
// // //                     <CardContent style={{ height: 300 }}>
// // //                       <ResponsiveContainer width="100%" height="100%">
// // //                         <LineChart data={salesData}>
// // //                           <XAxis dataKey="month" />
// // //                           <YAxis />
// // //                           <Tooltip />
// // //                           <Line type="monotone" dataKey="sales" stroke="#22c55e" strokeWidth={3} />
// // //                         </LineChart>
// // //                       </ResponsiveContainer>
// // //                     </CardContent>
// // //                   </Card>
// // //                   <Card>
// // //                     <CardHeader>
// // //                       <CardTitle>Orders Overview</CardTitle>
// // //                     </CardHeader>
// // //                     <CardContent style={{ height: 300 }}>
// // //                       <ResponsiveContainer width="100%" height="100%">
// // //                         <BarChart data={salesData}>
// // //                           <CartesianGrid strokeDasharray="3 3" />
// // //                           <XAxis dataKey="month" />
// // //                           <YAxis />
// // //                           <Tooltip />
// // //                           <Legend />
// // //                           <Bar dataKey="sales" />
// // //                         </BarChart>
// // //                       </ResponsiveContainer>
// // //                     </CardContent>
// // //                   </Card>
// // //                 </div>
// // //                 <Card>
// // //                   <CardHeader>
// // //                     <CardTitle>Recent Orders</CardTitle>
// // //                   </CardHeader>
// // //                   <CardContent>
// // //                     <ScrollArea className="max-h-64">
// // //                       <table className="w-full table-auto">
// // //                         <thead>
// // //                           <tr className="text-left">
// // //                             <th className="py-2">Order</th>
// // //                             <th className="py-2">Customer</th>
// // //                             <th className="py-2">Date</th>
// // //                             <th className="py-2">Total</th>
// // //                             <th className="py-2">Status</th>
// // //                           </tr>
// // //                         </thead>
// // //                         <tbody>
// // //                           {orders.map((o) => (
// // //                             <tr key={o.id} className="border-t">
// // //                               <td className="py-2">{o.id}</td>
// // //                               <td className="py-2">{o.customer}</td>
// // //                               <td className="py-2">{o.date}</td>
// // //                               <td className="py-2">₹ {o.total}</td>
// // //                               <td className="py-2">{o.status}</td>
// // //                             </tr>
// // //                           ))}
// // //                         </tbody>
// // //                       </table>
// // //                     </ScrollArea>
// // //                   </CardContent>
// // //                 </Card>
// // //               </div>
// // //             )}
// // //             {activePage === "plants" && (
// // //               <div className="space-y-4">
// // //                 <div className="flex items-center justify-between">
// // //                   <h2 className="text-xl font-semibold">Plants</h2>
// // //                   <Button onClick={() => { /* open add plant modal */ }}>+ Add Plant</Button>
// // //                 </div>
// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // //                   {filteredPlants.map((p) => (
// // //                     <Card key={p.id}>
// // //                       <CardHeader>
// // //                         <CardTitle>{p.name}</CardTitle>
// // //                       </CardHeader>
// // //                       <CardContent>
// // //                         <p>Price: ₹ {p.price}</p>
// // //                         <p>Stock: {p.stock}</p>
// // //                         <div className="mt-3 flex gap-2">
// // //                           <Button variant="ghost" onClick={() => { /* TODO: open edit plant */ }}>Edit</Button>
// // //                           <Button variant="destructive" onClick={() => { /* TODO: delete plant API call */ }}>Delete</Button>
// // //                         </div>
// // //                       </CardContent>
// // //                     </Card>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}
// // //             {activePage === "orders" && (
// // //               <div className="space-y-4">
// // //                 <h2 className="text-xl font-semibold">Orders</h2>
// // //                 <Card>
// // //                   <CardContent>
// // //                     <table className="w-full table-auto">
// // //                       <thead>
// // //                         <tr>
// // //                           <th>Order</th>
// // //                           <th>Customer</th>
// // //                           <th>Date</th>
// // //                           <th>Total</th>
// // //                           <th>Status</th>
// // //                           <th>Action</th>
// // //                         </tr>
// // //                       </thead>
// // //                       <tbody>
// // //                         {filteredOrders.map((o) => (
// // //                           <tr key={o.id} className="border-t">
// // //                             <td className="py-2">{o.id}</td>
// // //                             <td className="py-2">{o.customer}</td>
// // //                             <td className="py-2">{o.date}</td>
// // //                             <td className="py-2">₹ {o.total}</td>
// // //                             <td className="py-2">{o.status}</td>
// // //                             <td className="py-2">
// // //                               <Button size="sm" onClick={() => { /* TODO: open order detail */ }}>View</Button>
// // //                             </td>
// // //                           </tr>
// // //                         ))}
// // //                       </tbody>
// // //                     </table>
// // //                   </CardContent>
// // //                 </Card>
// // //               </div>
// // //             )}
// // //             {activePage === "reviews" && (
// // //               <div>
// // //                 <h2 className="text-xl font-semibold">Reviews</h2>
// // //                 {/* TODO: replace with real reviews from API */}
// // //                 <Card className="mt-4">
// // //                   <CardContent>
// // //                     <p>No reviews to show (dummy state)</p>
// // //                   </CardContent>
// // //                 </Card>
// // //               </div>
// // //             )}
// // //             {activePage === "users" && (
// // //               <div>
// // //                 <div className="flex items-center justify-between">
// // //                   <h2 className="text-xl font-semibold">Users</h2>
// // //                 </div>
// // //                 <Card className="mt-4">
// // //                   <CardContent>
// // //                     <table className="w-full">
// // //                       <thead>
// // //                         <tr>
// // //                           <th>Name</th>
// // //                           <th>Email</th>
// // //                           <th>Role</th>
// // //                           <th>Action</th>
// // //                         </tr>
// // //                       </thead>
// // //                       <tbody>
// // //                         {filteredUsers.map((u) => (
// // //                           <tr key={u.id} className="border-t">
// // //                             <td className="py-2">{u.name}</td>
// // //                             <td className="py-2">{u.email}</td>
// // //                             <td className="py-2">{u.role}</td>
// // //                             <td className="py-2">
// // //                               <Button size="sm" onClick={() => { /* TODO: edit user */ }}>Edit</Button>
// // //                             </td>
// // //                           </tr>
// // //                         ))}
// // //                       </tbody>
// // //                     </table>
// // //                   </CardContent>
// // //                 </Card>
// // //               </div>
// // //             )}
// // //             {activePage === "guide" && (
// // //               <div>
// // //                 <h2 className="text-xl font-semibold">Guide</h2>
// // //                 <Card className="mt-4">
// // //                   <CardContent>
// // //                     <p>Write admin guides here. You can put markdown or WYSIWYG editor to manage content.</p>
// // //                     {/* TODO: integrate rich text editor and fetch/save guide content via API. */}
// // //                   </CardContent>
// // //                 </Card>
// // //               </div>
// // //             )}
// // //             {activePage === "notifications" && (
// // //               <div>
// // //                 <h2 className="text-xl font-semibold">Notifications</h2>
// // //                 <div className="mt-4 grid gap-2">
// // //                   {notifications.map((n) => (
// // //                     <Card key={n.id}>
// // //                       <CardContent>
// // //                         <div className="flex items-center justify-between">
// // //                           <p>{n.text}</p>
// // //                           <div className="flex gap-2">
// // //                             <Button size="sm" onClick={() => { /* TODO: mark as read */ }}>Mark read</Button>
// // //                             <Button size="sm" variant="ghost" onClick={() => { /* TODO: delete notification */ }}>Delete</Button>
// // //                           </div>
// // //                         </div>
// // //                       </CardContent>
// // //                     </Card>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </main>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
// // //   return (
// // //     <button onClick={onClick} className={`w-full flex items-center p-2 rounded-md ${active ? "bg-green-50 text-green-700" : "hover:bg-gray-100"}`}>
// // //       <span className="mr-2">{icon}</span>
// // //       <span className="flex-1 text-sm">{label}</span>
// // //     </button>
// // //   );
// // // }
// // // function StatCard({ title, value }: { title: string; value: string }) {
// // //   return (
// // //     <Card>
// // //       <CardContent>
// // //         <div className="flex items-center justify-between">
// // //           <div>
// // //             <p className="text-sm text-muted-foreground">{title}</p>
// // //             <p className="text-2xl font-semibold">{value}</p>
// // //           </div>
// // //           <div className="p-3 bg-green-100 rounded-2xl">
// // //             <Box className="w-6 h-6 text-green-700" />
// // //           </div>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // }
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
// import { Home, Leaf, ShoppingCart, Star, Users, Bell, BookOpen } from "lucide-react";
// // Dummy chart data — replace with API data later
// const salesData = [
//   { name: "Jan", sales: 2400, orders: 15 },
//   { name: "Feb", sales: 1398, orders: 12 },
//   { name: "Mar", sales: 9800, orders: 30 },
//   { name: "Apr", sales: 3908, orders: 25 },
//   { name: "May", sales: 4800, orders: 28 },
//   { name: "Jun", sales: 3800, orders: 20 },
// ];
// export default function AdminDashboard() {
//   const [reportData, setReportData] = useState([]);
//   useEffect(() => {
//     // Example API call (commented until backend ready)
//     // axios.get("/api/admin/report", { withCredentials: true })
//     //   .then(res => setReportData(res.data))
//     //   .catch(err => console.error(err));
//   }, []);
//   const menuItems = [
//     { name: "Dashboard", icon: Home, href: "/" },
//     { name: "Plants", icon: Leaf, href: "/plants" },
//     { name: "Orders", icon: ShoppingCart, href: "/orders" },
//     { name: "Reviews", icon: Star, href: "/review" },
//     { name: "Users", icon: Users, href: "/user" },
//     { name: "Guide", icon: BookOpen, href: "/guide" },
//     { name: "Notifications", icon: Bell, href: "/notifications" },
//   ];
//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-full md:w-64 bg-white border-r p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
//         <h2 className="text-2xl font-bold mb-4">🌿 Plant Admin</h2>
//         <nav className="flex md:flex-col gap-2">
//           {menuItems.map(({ name, icon: Icon, href }) => (
//             <Link key={name} href={href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 transition">
//               <Icon className="h-5 w-5 text-green-600" />
//               <span>{name}</span>
//             </Link>
//           ))}
//         </nav>
//       </aside>
//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         <h1 className="text-3xl font-semibold mb-6">Admin Dashboard Overview</h1>
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Total Plants</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-3xl font-bold text-green-600">128</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Orders</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-3xl font-bold text-blue-600">52</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Users</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-3xl font-bold text-yellow-600">324</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Reviews</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-3xl font-bold text-purple-600">89</p>
//             </CardContent>
//           </Card>
//         </div>
//         {/* Chart Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Monthly Sales</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={salesData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="sales" fill="#16a34a" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Orders Trend</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={salesData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="orders" stroke="#2563eb" strokeWidth={3} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// }
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
// import { Home, Leaf, ShoppingCart, Star, Users, Bell, BookOpen } from "lucide-react";
// export default function AdminDashboard() {
//   const [stats, setStats] = useState({
//     plants: 0,
//     orders: 0,
//     users: 0,
//     reviews: 0,
//   });
//   const [chartData, setChartData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard`,
//           { withCredentials: true }
//         );
//         setStats(res.data.stats);
//         setChartData(res.data.chart);
//       } catch (error) {
//         console.error("Dashboard API error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDashboard();
//   }, []);
//   const menuItems = [
//     { name: "Dashboard", icon: Home, href: "/" },
//     { name: "Plants", icon: Leaf, href: "/plants" },
//     { name: "Orders", icon: ShoppingCart, href: "/orders" },
//     { name: "Reviews", icon: Star, href: "/review" },
//     { name: "Users", icon: Users, href: "/user" },
//     { name: "Guide", icon: BookOpen, href: "/guide" },
//     { name: "Notifications", icon: Bell, href: "/notifications" },
//   ];
//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-full md:w-64 bg-white border-r p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
//         <h2 className="text-2xl font-bold mb-4">🌿 Plant Admin</h2>
//         <nav className="flex md:flex-col gap-2">
//           {menuItems.map(({ name, icon: Icon, href }) => (
//             <Link key={name} href={href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 transition">
//               <Icon className="h-5 w-5 text-green-600" />
//               <span>{name}</span>
//             </Link>
//           ))}
//         </nav>
//       </aside>
//       {/* Main */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         <h1 className="text-3xl font-semibold mb-6">Admin Dashboard Overview</h1>
//         {/* Loading */}
//         {loading ? (
//           <p className="text-center text-gray-500">Loading dashboard...</p>
//         ) : (
//           <>
//             {/* Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//               <Card>
//                 <CardHeader><CardTitle>Total Plants</CardTitle></CardHeader>
//                 <CardContent>
//                   <p className="text-3xl font-bold text-green-600">{stats.plants}</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader><CardTitle>Orders</CardTitle></CardHeader>
//                 <CardContent>
//                   <p className="text-3xl font-bold text-blue-600">{stats.orders}</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader><CardTitle>Users</CardTitle></CardHeader>
//                 <CardContent>
//                   <p className="text-3xl font-bold text-yellow-600">{stats.users}</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader><CardTitle>Reviews</CardTitle></CardHeader>
//                 <CardContent>
//                   <p className="text-3xl font-bold text-purple-600">{stats.reviews}</p>
//                 </CardContent>
//               </Card>
//             </div>
//             {/* Charts */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Monthly Sales</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={chartData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Bar dataKey="sales" fill="#16a34a" radius={[4, 4, 0, 0]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Orders Trend</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={chartData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line type="monotone" dataKey="orders" stroke="#2563eb" strokeWidth={3} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// }
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
// import { Home, Leaf, ShoppingCart, Star, Users, Bell, BookOpen } from "lucide-react";
// export default function AdminDashboard() {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard`
//         );
//         setData(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDashboard();
//   }, []);
//   const menuItems = [
//     { name: "Dashboard", icon: Home, href: "/" },
//     { name: "Plants", icon: Leaf, href: "/plants" },
//     { name: "Orders", icon: ShoppingCart, href: "/orders" },
//     { name: "Reviews", icon: Star, href: "/review" },
//     { name: "Users", icon: Users, href: "/user" },
//     { name: "Guide", icon: BookOpen, href: "/guide" },
//     { name: "Notifications", icon: Bell, href: "/notifications" },
//   ];
//   if (loading) return <p className="p-6">Loading dashboard...</p>;
//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-full md:w-64 bg-white border-r p-4">
//         <h2 className="text-2xl font-bold mb-4">🌿 Plant Admin</h2>
//         {menuItems.map(({ name, icon: Icon, href }) => (
//           <Link key={name} href={href} className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
//             <Icon className="h-5 w-5 text-green-600" />
//             {name}
//           </Link>
//         ))}
//       </aside>
//       {/* Main */}
//       <main className="flex-1 p-6 space-y-6">
//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//           <Card><CardContent><p>Total Plants</p><h2>{data.stats.plants}</h2></CardContent></Card>
//           <Card><CardContent><p>Orders</p><h2>{data.stats.orders}</h2></CardContent></Card>
//           <Card><CardContent><p>Users</p><h2>{data.stats.users}</h2></CardContent></Card>
//           <Card><CardContent><p>Reviews</p><h2>{data.stats.reviews}</h2></CardContent></Card>
//           <Card><CardContent><p>Revenue</p><h2>₹ {data.stats.revenue}</h2></CardContent></Card>
//         </div>
//         {/* Charts */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <Card>
//             <CardHeader><CardTitle>Sales</CardTitle></CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={data.chart}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="sales" fill="#16a34a" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader><CardTitle>Orders</CardTitle></CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={data.chart}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line dataKey="orders" stroke="#2563eb" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </div>
//         {/* Bottom Section */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Recent Orders */}
//           <Card>
//             <CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader>
//             <CardContent>
//               {data.recentOrders.map((o: any) => (
//                 <div key={o._id} className="flex justify-between border-b py-2">
//                   <span>{o.customer}</span>
//                   <span>₹ {o.total}</span>
//                   <span>{o.status}</span>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//           {/* Top Plants */}
//           <Card>
//             <CardHeader><CardTitle>Top Plants</CardTitle></CardHeader>
//             <CardContent>
//               {data.topPlants.map((p: any) => (
//                 <div key={p._id} className="flex justify-between py-2">
//                   <span>{p._id}</span>
//                   <span>{p.totalSold} sold</span>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// }
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d046a1a5._.js.map