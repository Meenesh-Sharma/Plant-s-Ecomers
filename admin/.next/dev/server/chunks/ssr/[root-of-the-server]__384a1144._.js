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
"[project]/app/orders/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from '@/components/ui/dialog';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// // import axios from 'axios';
// interface Order {
//   id: string;
//   customer: string;
//   total: number;
//   status: 'Pending' | 'Shipped' | 'Delivered';
//   date: string;
//   phone_number?: string;  // add this
//   pin?: string;
//   address:string;
//   city:string;
// }
// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(3); // dummy
//   const limit = 5;
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
//   const [editStatus, setEditStatus] = useState<Order['status']>('Pending');
//   useEffect(() => {
//     // 🟢 Dummy orders data
//     const dummyOrders: Order[] = [
//       { id: 'ORD-1001', customer: 'Priya Sharma', total: 45, status: 'Pending', date: '2025-11-01', phone_number:'2343434343', pin:'343430', city:'Agra1', address:'malla pautha 1' },
//       { id: 'ORD-1002', customer: 'Amit Verma', total: 90, status: 'Shipped', date: '2025-11-03', phone_number:'2343434323', pin:'343434', city:'Agra1', address:'malla pautha 2' },
//       { id: 'ORD-1003', customer: 'Rina Das', total: 30, status: 'Delivered', date: '2025-11-06', phone_number:'2343434143', pin:'343432', city:'Agra1', address:'malla pautha 3' },
//       { id: 'ORD-1004', customer: 'Rohit Singh', total: 60, status: 'Pending', date: '2025-11-08', phone_number:'2343434303', pin:'343433', city:'Agra1', address:'malla pautha 4' },
//       { id: 'ORD-1005', customer: 'Anita Kapoor', total: 75, status: 'Shipped', date: '2025-11-10', phone_number:'2343434300', pin:'343435', city:'Agra1', address:'malla pautha 5' },
//     ];
//     setOrders(dummyOrders);
//     // 🟢 Replace with API call
//     // const token = localStorage.getItem('token');
//     // axios.get(`/api/orders?page=${page}&limit=${limit}`, { headers: { Authorization: `Bearer ${token}` } })
//     //   .then(res => {
//     //     setOrders(res.data.orders);
//     //     setTotalPages(res.data.totalPages);
//     //   });
//   }, [page]);
//   const handleView = (order: Order) => {
//     setSelectedOrder(order);
//     setEditStatus(order.status);
//     setOpenDialog(true);
//   };
//   const handleSave = () => {
//     if (!selectedOrder) return;
//     setOrders((prev) =>
//       prev.map((o) => (o.id === selectedOrder.id ? { ...o, status: editStatus } : o))
//     );
//     setOpenDialog(false);
//     // 🟢 Replace with API call
//     // axios.put(`/api/orders/${selectedOrder.id}`, { status: editStatus }, { withCredentials: true })
//     //   .then(res => console.log('Updated', res.data))
//   };
//   const handleDelete = (order: Order) => {
//     if (confirm(`Are you sure you want to delete order ${order.id}?`)) {
//       setOrders((prev) => prev.filter((o) => o.id !== order.id));
//       // 🟢 Replace with API call
//       // axios.delete(`/api/orders/${order.id}`, { withCredentials: true })
//     }
//   };
//   const nextPage = () => { if (page < totalPages) setPage(p => p + 1); };
//   const prevPage = () => { if (page > 1) setPage(p => p - 1); };
//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold mb-4">📦 Orders</h1>
//       <Card>
//         <CardContent>
//           <ScrollArea className="max-h-[500px]">
//             <table className="w-full table-auto border-collapse">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-2 text-left">Order ID</th>
//                   <th className="p-2 text-left">Customer</th>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">Total</th>
//                   <th className="p-2 text-left">Status</th>
//                   <th className="p-2 text-left">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order.id} className="border-t hover:bg-gray-50">
//                     <td className="p-2">{order.id}</td>
//                     <td className="p-2">{order.customer}</td>
//                     <td className="p-2">{order.date}</td>
//                     <td className="p-2">₹ {order.total}</td>
//                     <td className="p-2">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
//                         order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
//                         'bg-green-100 text-green-800'
//                       }`}>
//                         {order.status}
//                       </span>
//                     </td>
//                     <td className="p-2 flex gap-2">
//                       <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => handleView(order)}>View</Button>
//                       <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => handleView(order)}>Update</Button>
//                       <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white" onClick={() => handleDelete(order)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </ScrollArea>
//         </CardContent>
//       </Card>
//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-3 mt-4">
//         <Button variant="outline" onClick={prevPage} disabled={page === 1}>
//           <ArrowLeft className="mr-1 w-4 h-4" /> Prev
//         </Button>
//         {[...Array(totalPages)].map((_, idx) => (
//           <Button key={idx} variant={page === idx + 1 ? 'default' : 'outline'} onClick={() => setPage(idx + 1)}>
//             {idx + 1}
//           </Button>
//         ))}
//         <Button variant="outline" onClick={nextPage} disabled={page === totalPages}>
//           Next <ArrowRight className="ml-1 w-4 h-4" />
//         </Button>
//       </div>
//       {/* View / Update Dialog */}
//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent className="sm:max-w-[400px]">
//           <DialogHeader>
//             <DialogTitle>Order Details</DialogTitle>
//           </DialogHeader>
//           {selectedOrder && (
//             <div className="space-y-3">
//               <p><strong>Order ID:</strong> {selectedOrder.id}</p>
//               <p><strong>Customer:</strong> {selectedOrder.customer}</p>
//               <p><strong>Date:</strong> {selectedOrder.date}</p>
//               <p><strong>Total:</strong> ₹ {selectedOrder.total}</p>
//               <p><strong>Number:</strong>  {selectedOrder.phone_number}</p>
//               <p><strong>Pin:</strong>  {selectedOrder.pin}</p>
//               <p><strong>Address:</strong>  {selectedOrder.address}</p>
//               <p><strong>City:</strong>  {selectedOrder.city}</p>
//               <Select value={editStatus} onValueChange={(v) => setEditStatus(v as Order['status'])}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select Status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {['Pending', 'Shipped', 'Delivered'].map((status) => (
//                     <SelectItem key={status} value={status}>{status}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           )}
//           <DialogFooter className="mt-4 flex justify-end gap-2">
//             <Button variant="outline" onClick={() => setOpenDialog(false)}>Cancel</Button>
//             <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleSave}>Save</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
}),
"[project]/app/orders/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/orders/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__384a1144._.js.map