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
"[project]/app/plants/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client';
// import { useState, useEffect } from 'react';
// import { Plant, PlantType } from '../type';
// import { plants as initialPlants } from '../';
// import Link from 'next/link';
// import axios from 'axios';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
// import { PlusIcon } from 'lucide-react';
// export default function PlantsPage() {
//   const [plants, setPlants] = useState<Plant[]>(initialPlants);
//   const [newPlant, setNewPlant] = useState<Partial<Plant>>({});
//   // Example: Fetch plants from API in the future
//   /*
//   useEffect(() => {
//     axios.get('/api/plants').then(res => setPlants(res.data));
//   }, []);
//   */
//   const handleAdd = async () => {
//     if (!newPlant.name || !newPlant.price || !newPlant.type) return alert('Fill all required fields');
//     const plant: Plant = {
//       id: (plants.length + 1).toString(),
//       name: newPlant.name,
//       price: Number(newPlant.price),
//       img: newPlant.img || 'https://placehold.co/800x600',
//       description: newPlant.description || '',
//       care: newPlant.care || '',
//       type: newPlant.type as PlantType,
//     };
//     setPlants([...plants, plant]);
//     setNewPlant({});
//     // Example: Add plant via API in future
//     /*
//     try {
//       await axios.post('/api/plants', plant);
//     } catch (error) {
//       console.error('Failed to add plant', error);
//     }
//     */
//   };
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Plants</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         {plants.map((plant) => (
//           <Link key={plant.id} href={`/plants/${plant.id}`}>
//             <Card className="cursor-pointer hover:shadow-lg">
//               <CardHeader>
//                 <CardTitle>{plant.name}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <img src={plant.img} alt={plant.name} className="w-full h-40 object-cover rounded mb-2" />
//                 <p>${plant.price}</p>
//                 <p className="text-sm text-gray-500">{plant.type}</p>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//       <h2 className="text-xl font-semibold mb-2">Add New Plant</h2>
//       <div className="space-y-2">
//         <Input
//           placeholder="Name"
//           value={newPlant.name || ''}
//           onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
//         />
//         <Input
//           type="number"
//           placeholder="Price"
//           value={newPlant.price || ''}
//           onChange={(e) => setNewPlant({ ...newPlant, price: Number(e.target.value) })}
//         />
//         <Input
//           placeholder="Image URL"
//           value={newPlant.img || ''}
//           onChange={(e) => setNewPlant({ ...newPlant, img: e.target.value })}
//         />
//         <Input
//           placeholder="Description"
//           value={newPlant.description || ''}
//           onChange={(e) => setNewPlant({ ...newPlant, description: e.target.value })}
//         />
//         <Input
//           placeholder="Care"
//           value={newPlant.care || ''}
//           onChange={(e) => setNewPlant({ ...newPlant, care: e.target.value })}
//         />
//         <Select
//           onValueChange={(value) => setNewPlant({ ...newPlant, type: value as PlantType })}
//           value={newPlant.type || ''}
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Select Type" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="indoor">Indoor</SelectItem>
//             <SelectItem value="outdoor">Outdoor</SelectItem>
//             <SelectItem value="regular tree">Regular Tree</SelectItem>
//             <SelectItem value="fruit tree">Fruit Tree</SelectItem>
//           </SelectContent>
//         </Select>
//         <Button onClick={handleAdd} className="flex items-center gap-2">
//           <PlusIcon size={16} /> Add Plant
//         </Button>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useState, useEffect } from 'react';
// import { Plant, PlantType } from '../type';
// import { plants as initialPlants } from '../data';
// import Link from 'next/link';
// import axios from 'axios';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
// import { PlusIcon, XIcon } from 'lucide-react';
// import { Pagination } from '@/components/ui/pagination';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// export default function PlantsPage() {
//     const [plants, setPlants] = useState<Plant[]>(initialPlants);
//     const [newPlant, setNewPlant] = useState<Partial<Plant>>({});
//     const [currentPage, setCurrentPage] = useState(1);
//     const plantsPerPage = 12;
//     // Calculate pagination
//     const indexOfLastPlant = currentPage * plantsPerPage;
//     const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
//     const currentPlants = plants.slice(indexOfFirstPlant, indexOfLastPlant);
//     const totalPages = Math.ceil(plants.length / plantsPerPage);
//     // Example: Fetch plants from API in the future
//     /*
//     useEffect(() => {
//       axios.get('/api/plants').then(res => setPlants(res.data));
//     }, []);
//     */
//     const handleAdd = async () => {
//         if (!newPlant.name || !newPlant.price || !newPlant.type) return alert('Fill all required fields');
//         const plant: Plant = {
//             id: (plants.length + 1).toString(),
//             name: newPlant.name,
//             price: Number(newPlant.price),
//             img: newPlant.img || 'https://placehold.co/800x600',
//             description: newPlant.description || '',
//             care: newPlant.care || '',
//             type: newPlant.type as PlantType,
//         };
//         setPlants([...plants, plant]);
//         setNewPlant({});
//         setCurrentPage(1);
//         // Example: Add plant via API in future
//         /*
//         try {
//           await axios.post('/api/plants', plant);
//         } catch (error) {
//           console.error('Failed to add plant', error);
//         }
//         */
//     };
//     return (
//         <div className="p-4 md:p-6 max-w-7xl mx-auto">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-2xl md:text-3xl font-bold">Plants</h1>
//                 {/* Add Plant Modal Trigger */}
//                 <Dialog>
//                     <DialogTrigger asChild>
//                         <Button className="flex items-center gap-2">
//                             <PlusIcon size={16} /> Add New Plant
//                         </Button>
//                     </DialogTrigger>
//                     <DialogContent className="sm:max-w-lg">
//                         <DialogHeader>
//                             <DialogTitle>Add New Plant</DialogTitle>
//                         </DialogHeader>
//                         <div className="space-y-3 mt-2">
//                             <Input
//                                 placeholder="Name"
//                                 value={newPlant.name || ''}
//                                 onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
//                             />
//                             <Input
//                                 type="number"
//                                 placeholder="Price"
//                                 value={newPlant.price || ''}
//                                 onChange={(e) => setNewPlant({ ...newPlant, price: Number(e.target.value) })}
//                             />
//                             {/* File Upload */}
//                             <div>
//                                 <label className="block text-sm font-medium mb-1">Upload Image</label>
//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={(e) => {
//                                         if (e.target.files && e.target.files[0]) {
//                                             const file = e.target.files[0];
//                                             setNewPlant({ ...newPlant, file, img: URL.createObjectURL(file) });
//                                         }
//                                     }}
//                                     className="block w-full text-sm text-gray-600"
//                                 />
//                                 {/* Preview */}
//                                 {newPlant.img && (
//                                     <img
//                                         src={newPlant.img}
//                                         alt="Preview"
//                                         className="mt-2 w-full h-40 object-cover rounded"
//                                     />
//                                 )}
//                             </div>
//                             <Input
//                                 placeholder="Description"
//                                 value={newPlant.description || ''}
//                                 onChange={(e) => setNewPlant({ ...newPlant, description: e.target.value })}
//                             />
//                             <Input
//                                 placeholder="Care"
//                                 value={newPlant.care || ''}
//                                 onChange={(e) => setNewPlant({ ...newPlant, care: e.target.value })}
//                             />
//                             <Select
//                                 onValueChange={(value) => setNewPlant({ ...newPlant, type: value as PlantType })}
//                                 value={newPlant.type || ''}
//                             >
//                                 <SelectTrigger>
//                                     <SelectValue placeholder="Select Type" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="indoor">Indoor</SelectItem>
//                                     <SelectItem value="outdoor">Outdoor</SelectItem>
//                                     <SelectItem value="regular tree">Regular Tree</SelectItem>
//                                     <SelectItem value="fruit tree">Fruit Tree</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                             <Button onClick={handleAdd} className="w-full flex justify-center items-center gap-2">
//                                 <PlusIcon size={16} /> Add Plant
//                             </Button>
//                         </div>
//                     </DialogContent>
//                 </Dialog>
//             </div>
//             {/* Plants Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
//                 {currentPlants.map((plant) => (
//                     <Link key={plant.id} href={`/plants/${plant.id}`}>
//                         <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200">
//                             <CardHeader>
//                                 <CardTitle className="truncate">{plant.name}</CardTitle>
//                             </CardHeader>
//                             <CardContent className="flex flex-col items-center">
//                                 <img
//                                     src={plant.img}
//                                     alt={plant.name}
//                                     className="w-full h-40 sm:h-48 object-cover rounded mb-2"
//                                 />
//                                 <p className="font-semibold">${plant.price}</p>
//                                 <p className="text-sm text-gray-500 capitalize">{plant.type}</p>
//                             </CardContent>
//                         </Card>
//                     </Link>
//                 ))}
//             </div>
//             {/* Pagination */}
//             {totalPages > 1 && (
//                 <div className="flex justify-center mb-6">
//                     <Pagination
//                         currentPage={currentPage}
//                         totalPages={totalPages}
//                         onPageChange={(page) => setCurrentPage(page)}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// }
}),
"[project]/app/plants/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/plants/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dbf249f6._.js.map