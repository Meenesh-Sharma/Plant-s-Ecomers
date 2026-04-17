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
"[project]/app/guide/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // 'use client';
// // import React, { useEffect, useState } from 'react';
// // import {
// //   Card,
// //   CardHeader,
// //   CardTitle,
// //   CardContent,
// // } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogFooter,
// // } from '@/components/ui/dialog';
// // import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
// // import { Input } from '@/components/ui/input';
// // import {
// //   Select,
// //   SelectTrigger,
// //   SelectValue,
// //   SelectContent,
// //   SelectItem,
// // } from '@/components/ui/select';
// // import { Textarea } from '@/components/ui/textarea';
// // import {
// //   Plus,
// //   Pencil,
// //   Trash,
// //   Droplets,
// //   Sun,
// //   Thermometer,
// //   Leaf,
// //   Scissors,
// //   Bug,
// // } from 'lucide-react';
// // /* ================= TYPES ================= */
// // interface CareTip {
// //   type: string;
// //   tip: string;
// // }
// // interface PlantCare {
// //   _id: string;
// //   plantType: string;
// //   plantName: string;
// //   care: CareTip[];
// // }
// // /* ================= COMPONENT ================= */
// // export default function GuidePage() {
// //   const [plants, setPlants] = useState<PlantCare[]>([]);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [editingPlant, setEditingPlant] = useState<PlantCare | null>(null);
// //   const [form, setForm] = useState({
// //     plantType: '',
// //     plantName: '',
// //     care: [{ type: '', tip: '' }],
// //   });
// //   /* ================= COLORS ================= */
// //   const plantTypeColors: Record<string, string> = {
// //     Indoor: 'bg-green-100 text-green-700',
// //     Outdoor: 'bg-teal-100 text-teal-700',
// //     'Water Plants': 'bg-blue-100 text-blue-700',
// //     'Fruit Plants': 'bg-orange-100 text-orange-700',
// //     'Home Decoration': 'bg-purple-100 text-purple-700',
// //   };
// //   /* ================= ICONS ================= */
// //   const getIcon = (type: string) => {
// //     switch (type.toLowerCase()) {
// //       case 'watering':
// //         return <Droplets className="text-blue-500 w-5 h-5" />;
// //       case 'light':
// //         return <Sun className="text-yellow-500 w-5 h-5" />;
// //       case 'temperature':
// //         return <Thermometer className="text-red-400 w-5 h-5" />;
// //       case 'soil':
// //         return <Leaf className="text-green-500 w-5 h-5" />;
// //       case 'pruning':
// //         return <Scissors className="text-gray-500 w-5 h-5" />;
// //       case 'pest control':
// //         return <Bug className="text-amber-600 w-5 h-5" />;
// //       default:
// //         return <Leaf className="text-green-500 w-5 h-5" />;
// //     }
// //   };
// //   /* ================= DUMMY DATA ================= */
// //   useEffect(() => {
// //     const dummy: PlantCare[] = [
// //       {
// //         _id: '1',
// //         plantType: 'Indoor',
// //         plantName: 'Money Plant',
// //         care: [
// //           { type: 'Watering', tip: 'Water every 7–10 days' },
// //           { type: 'Light', tip: 'Bright indirect sunlight' },
// //           { type: 'Soil', tip: 'Well-draining soil' },
// //         ],
// //       },
// //     ];
// //     setPlants(dummy);
// //   }, []);
// //   /* ================= FORM HANDLERS ================= */
// //   const openAddDialog = () => {
// //     setEditingPlant(null);
// //     setForm({
// //       plantType: '',
// //       plantName: '',
// //       care: [{ type: '', tip: '' }],
// //     });
// //     setOpenDialog(true);
// //   };
// //   const openEditDialog = (plant: PlantCare) => {
// //     setEditingPlant(plant);
// //     setForm({
// //       plantType: plant.plantType,
// //       plantName: plant.plantName,
// //       care: plant.care,
// //     });
// //     setOpenDialog(true);
// //   };
// //   /* 🔥 MULTIPLE CARE HANDLERS */
// //   const addCareField = () => {
// //     setForm({
// //       ...form,
// //       care: [...form.care, { type: '', tip: '' }],
// //     });
// //   };
// //   const removeCareField = (index: number) => {
// //     const updated = [...form.care];
// //     updated.splice(index, 1);
// //     setForm({ ...form, care: updated });
// //   };
// //   const updateCareField = (
// //     index: number,
// //     field: 'type' | 'tip',
// //     value: string
// //   ) => {
// //     const updated = [...form.care];
// //     updated[index][field] = value;
// //     setForm({ ...form, care: updated });
// //   };
// //   /* ================= SAVE ================= */
// //   const handleSave = () => {
// //     if (!form.plantName || !form.plantType) {
// //       alert('Fill required fields');
// //       return;
// //     }
// //     if (editingPlant) {
// //       setPlants((prev) =>
// //         prev.map((p) =>
// //           p._id === editingPlant._id ? { ...p, ...form } : p
// //         )
// //       );
// //     } else {
// //       const newPlant: PlantCare = {
// //         _id: Math.random().toString(),
// //         ...form,
// //       };
// //       setPlants((prev) => [...prev, newPlant]);
// //     }
// //     setOpenDialog(false);
// //   };
// //   const handleDelete = (id: string) => {
// //     if (!confirm('Delete this plant?')) return;
// //     setPlants((prev) => prev.filter((p) => p._id !== id));
// //   };
// //   /* ================= UI ================= */
// //   return (
// //     <div className="p-6 space-y-6">
// //       {/* HEADER */}
// //       <div className="flex justify-between items-center">
// //         <h1 className="text-3xl font-bold text-green-700">
// //           🌿 Admin Plant Care
// //         </h1>
// //         <Button
// //           onClick={openAddDialog}
// //           className="bg-green-600 hover:bg-green-700 text-white"
// //         >
// //           <Plus className="mr-1 w-4 h-4" /> Add Plant
// //         </Button>
// //       </div>
// //       {/* CARDS */}
// //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {plants.map((plant) => (
// //           <Card
// //             key={plant._id}
// //             className="shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-2xl"
// //           >
// //             <CardHeader className="flex justify-between">
// //               <CardTitle className="text-green-700">
// //                 {plant.plantName}
// //               </CardTitle>
// //               <span
// //                 className={`text-xs px-3 py-1 rounded-full ${
// //                   plantTypeColors[plant.plantType]
// //                 }`}
// //               >
// //                 {plant.plantType}
// //               </span>
// //             </CardHeader>
// //             <CardContent>
// //               {plant.care.map((tip, i) => (
// //                 <div key={i} className="flex gap-3 mb-3">
// //                   {getIcon(tip.type)}
// //                   <p className="text-sm text-gray-600">
// //                     <strong>{tip.type}:</strong> {tip.tip}
// //                   </p>
// //                 </div>
// //               ))}
// //               <div className="flex justify-end gap-2 mt-4">
// //                 <Button
// //                   size="sm"
// //                   variant="outline"
// //                   onClick={() => openEditDialog(plant)}
// //                 >
// //                   <Pencil size={14} className="mr-1" /> Edit
// //                 </Button>
// //                 <Button
// //                   size="sm"
// //                   variant="destructive"
// //                   onClick={() => handleDelete(plant._id)}
// //                 >
// //                   <Trash size={14} className="mr-1" /> Delete
// //                 </Button>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>
// //       {/* DIALOG */}
// //       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
// //         <DialogContent className="max-h-[80vh] overflow-y-auto">
// //           <DialogHeader>
// //             <DialogTitle>
// //               {editingPlant ? 'Edit Plant' : 'Add Plant'}
// //             </DialogTitle>
// //           </DialogHeader>
// //           <div className="space-y-4">
// //             <Select
// //               value={form.plantType}
// //               onValueChange={(v) =>
// //                 setForm({ ...form, plantType: v })
// //               }
// //             >
// //               <SelectTrigger>
// //                 <SelectValue placeholder="Select Type" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 {[
// //                   'Indoor',
// //                   'Outdoor',
// //                   'Water Plants',
// //                   'Fruit Plants',
// //                   'All Categories',
// //                   'Home Decoration'
// //                 ].map((type) => (
// //                   <SelectItem key={type} value={type}>
// //                     {type}
// //                   </SelectItem>
// //                 ))}
// //               </SelectContent>
// //             </Select>
// //             <Input
// //               placeholder="Plant Name"
// //               value={form.plantName}
// //               onChange={(e) =>
// //                 setForm({ ...form, plantName: e.target.value })
// //               }
// //             />
// //             {/* 🔥 MULTIPLE CARE INPUT */}
// //             {form.care.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="border p-3 rounded-lg space-y-2"
// //               >
// //                 <Input
// //                   placeholder="Type (Watering, Light...)"
// //                   value={item.type}
// //                   onChange={(e) =>
// //                     updateCareField(index, 'type', e.target.value)
// //                   }
// //                 />
// //                 <Textarea
// //                   placeholder="Tip description"
// //                   value={item.tip}
// //                   onChange={(e) =>
// //                     updateCareField(index, 'tip', e.target.value)
// //                   }
// //                 />
// //                 <Button
// //                   size="sm"
// //                   variant="destructive"
// //                   onClick={() => removeCareField(index)}
// //                 >
// //                   Remove
// //                 </Button>
// //               </div>
// //             ))}
// //             <Button onClick={addCareField} variant="outline">
// //               + Add More Care Tips
// //             </Button>
// //           </div>
// //           <DialogFooter>
// //             <Button variant="outline" onClick={() => setOpenDialog(false)}>
// //               Cancel
// //             </Button>
// //             <Button
// //               className="bg-green-600 hover:bg-green-700 text-white"
// //               onClick={handleSave}
// //             >
// //               {editingPlant ? 'Update' : 'Add'}
// //             </Button>
// //           </DialogFooter>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // }
// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   Plus,
//   Pencil,
//   Trash,
//   Droplets,
//   Sun,
//   Thermometer,
//   Leaf,
//   Scissors,
//   Bug,
//   Loader2,
//   Search,
// } from 'lucide-react';
// /* ================= TYPES ================= */
// interface CareTip {
//   type: string;
//   tip: string;
// }
// interface PlantCare {
//   _id: string;
//   plantType: string;
//   plantName: string;
//   care: CareTip[];
// }
// /* ================= API ================= */
// const API = process.env.NEXT_PUBLIC_API_BASE_URL;
// /* ================= COMPONENT ================= */
// export default function GuidePage() {
//   const [plants, setPlants] = useState<PlantCare[]>([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [editingPlant, setEditingPlant] = useState<PlantCare | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [query, setQuery] = useState('');
//   const [form, setForm] = useState({
//     plantType: '',
//     plantName: '',
//     care: [{ type: '', tip: '' }],
//   });
//   /* ================= COLORS ================= */
//   const plantTypeColors: Record<string, string> = {
//     Indoor: 'bg-green-100 text-green-700',
//     Outdoor: 'bg-teal-100 text-teal-700',
//     'Water Plants': 'bg-blue-100 text-blue-700',
//     'Fruit Plants': 'bg-orange-100 text-orange-700',
//     'Home Decoration': 'bg-purple-100 text-purple-700',
//   };
//   /* ================= ICONS ================= */
//   const getIcon = (type: string) => {
//     switch (type.toLowerCase()) {
//       case 'watering':
//         return <Droplets className="text-blue-500 w-5 h-5" />;
//       case 'light':
//         return <Sun className="text-yellow-500 w-5 h-5" />;
//       case 'temperature':
//         return <Thermometer className="text-red-400 w-5 h-5" />;
//       case 'soil':
//         return <Leaf className="text-green-500 w-5 h-5" />;
//       case 'pruning':
//         return <Scissors className="text-gray-500 w-5 h-5" />;
//       case 'pest control':
//         return <Bug className="text-amber-600 w-5 h-5" />;
//       default:
//         return <Leaf className="text-green-500 w-5 h-5" />;
//     }
//   };
//   /* ================= FETCH DATA ================= */
//   const fetchPlants = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${API}/plant-care`);
//       setPlants(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchPlants();
//   }, []);
//   /* ================= FORM HANDLERS ================= */
//   const openAddDialog = () => {
//     setEditingPlant(null);
//     setForm({
//       plantType: '',
//       plantName: '',
//       care: [{ type: '', tip: '' }],
//     });
//     setOpenDialog(true);
//   };
//   const openEditDialog = (plant: PlantCare) => {
//     setEditingPlant(plant);
//     setForm({
//       plantType: plant.plantType,
//       plantName: plant.plantName,
//       care: plant.care,
//     });
//     setOpenDialog(true);
//   };
//   const addCareField = () => {
//     setForm({
//       ...form,
//       care: [...form.care, { type: '', tip: '' }],
//     });
//   };
//   const removeCareField = (index: number) => {
//     const updated = [...form.care];
//     updated.splice(index, 1);
//     setForm({ ...form, care: updated });
//   };
//   const updateCareField = (
//     index: number,
//     field: 'type' | 'tip',
//     value: string
//   ) => {
//     const updated = [...form.care];
//     updated[index][field] = value;
//     setForm({ ...form, care: updated });
//   };
//   /* ================= SAVE ================= */
//   const handleSave = async () => {
//     if (!form.plantName || !form.plantType) {
//       alert('Fill required fields');
//       return;
//     }
//     try {
//       if (editingPlant) {
//         await axios.put(
//           `${API}/plant-care/${editingPlant._id}`,
//           form
//         );
//       } else {
//         await axios.post(`${API}/plant-care`, form);
//       }
//       fetchPlants();
//       setOpenDialog(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   /* ================= DELETE ================= */
//   const handleDelete = async (id: string) => {
//     if (!confirm('Delete this plant?')) return;
//     try {
//       await axios.delete(`${API}/plant-care/${id}`);
//       fetchPlants();
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   function setCategory(value: string): void {
//     throw new Error('Function not implemented.');
//   }
//   function setQuery(value: string): void {
//     throw new Error('Function not implemented.');
//   }
//   /* ================= UI ================= */
//   return (
//     <div className="p-6 space-y-6">
//       {/* HEADER */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-green-700">
//           🌿 Admin Plant Care
//         </h1>
//          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
//         <div className="relative w-full md:w-1/3">
//           <Search className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
//           <Input
//             placeholder="Search by plant name..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="pl-8"
//           />
//         </div>
//         <Select onValueChange={setCategory} defaultValue={category}>
//           <SelectTrigger className="w-[200px]">
//             <SelectValue placeholder="Select Category" />
//           </SelectTrigger>
//           <SelectContent>
//             {categories.map((cat) => (
//               <SelectItem key={cat.value} value={cat.value}>
//                 {cat.label}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         <Button onClick={fetchPlants} disabled={loading}>
//           {loading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : 'Search'}
//         </Button>
//       </div>
//         <Button
//           onClick={openAddDialog}
//           className="bg-green-600 hover:bg-green-700 text-white"
//         >
//           <Plus className="mr-1 w-4 h-4" /> Add Plant
//         </Button>
//       </div>
//       {/* LOADING */}
//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {plants.map((plant) => (
//             <Card
//               key={plant._id}
//               className="shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-2xl"
//             >
//               <CardHeader className="flex justify-between">
//                 <CardTitle className="text-green-700">
//                   {plant.plantName}
//                 </CardTitle>
//                 <span
//                   className={`text-xs px-3 py-1 rounded-full ${
//                     plantTypeColors[plant.plantType]
//                   }`}
//                 >
//                   {plant.plantType}
//                 </span>
//               </CardHeader>
//               <CardContent>
//                 {plant.care.map((tip, i) => (
//                   <div key={i} className="flex gap-3 mb-3">
//                     {getIcon(tip.type)}
//                     <p className="text-sm text-gray-600">
//                       <strong>{tip.type}:</strong> {tip.tip}
//                     </p>
//                   </div>
//                 ))}
//                 <div className="flex justify-end gap-2 mt-4">
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     onClick={() => openEditDialog(plant)}
//                   >
//                     <Pencil size={14} className="mr-1" /> Edit
//                   </Button>
//                   <Button
//                     size="sm"
//                     variant="destructive"
//                     onClick={() => handleDelete(plant._id)}
//                   >
//                     <Trash size={14} className="mr-1" /> Delete
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//       {/* DIALOG */}
//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent className="max-h-[80vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>
//               {editingPlant ? 'Edit Plant' : 'Add Plant'}
//             </DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4">
//             <Select
//               value={form.plantType}
//               onValueChange={(v) =>
//                 setForm({ ...form, plantType: v })
//               }
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 {['All Categories',
//                  'Home Decoration',
//                   'Indoor',
//                   'Outdoor',
//                   'Water Plants',
//                   'Fruit Plants'
//                 ].map((type) => (
//                   <SelectItem key={type} value={type}>
//                     {type}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <Input
//               placeholder="Plant Name"
//               value={form.plantName}
//               onChange={(e) =>
//                 setForm({ ...form, plantName: e.target.value })
//               }
//             />
//             {form.care.map((item, index) => (
//               <div key={index} className="border p-3 rounded-lg space-y-2">
//                 <Input
//                   placeholder="Type (Watering, Pruning, Light...)"
//                   value={item.type}
//                   onChange={(e) =>
//                     updateCareField(index, 'type', e.target.value)
//                   }
//                 />
//                 <Textarea
//                   placeholder="Tip description"
//                   value={item.tip}
//                   onChange={(e) =>
//                     updateCareField(index, 'tip', e.target.value)
//                   }
//                 />
//                 <Button
//                   size="sm"
//                   variant="destructive"
//                   onClick={() => removeCareField(index)}
//                 >
//                   Remove
//                 </Button>
//               </div>
//             ))}
//             <Button onClick={addCareField} variant="outline">
//               + Add More Care Tips
//             </Button>
//           </div>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setOpenDialog(false)}>
//               Cancel
//             </Button>
//             <Button
//               className="bg-green-600 hover:bg-green-700 text-white"
//               onClick={handleSave}
//             >
//               {editingPlant ? 'Update' : 'Add'}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
}),
"[project]/app/guide/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/guide/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b9aca00e._.js.map