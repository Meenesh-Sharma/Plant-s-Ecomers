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
"[project]/app/plantreview/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // "use client";
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import {
// //     Select,
// //     SelectContent,
// //     SelectItem,
// //     SelectTrigger,
// //     SelectValue,
// // } from "@/components/ui/select";
// // const API = process.env.NEXT_PUBLIC_API_BASE_URL;
// // export default function ReviewPage() {
// //     const [reviews, setReviews] = useState([]);
// //     const [plants, setPlants] = useState<any[]>([]);
// //     const [name, setName] = useState("");
// //     const [review, setReview] = useState("");
// //     const [plant, setPlant] = useState("");
// //     const [filterPlant, setFilterPlant] = useState("");
// //     const fetchPlants = async () => {
// //         const res = await axios.get(`${API}/api/plants`);
// //         console.log("PLANTS DATA:", res.data);
// //         setPlants(Array.isArray(res.data) ? res.data : []);
// //     };
// //     const fetchReviews = async () => {
// //         const res = await axios.get(`${API}/api/Plantreviews`, {
// //             params: filterPlant && filterPlant !== "all" ? { plant: filterPlant } : {},
// //         });
// //         setReviews(res.data);
// //     };
// //     useEffect(() => {
// //         fetchPlants();
// //     }, []);
// //     useEffect(() => {
// //         fetchReviews();
// //     }, [filterPlant]);
// //     const handleSubmit = async () => {
// //         if (!name || !review || !plant) return alert("Fill all fields");
// //         await axios.post(`${API}/api/reviews`, {
// //             name,
// //             review,
// //             plant,
// //         });
// //         setName("");
// //         setReview("");
// //         setPlant("");
// //         fetchReviews();
// //     };
// //     const handleDelete = async (id: string) => {
// //         await axios.delete(`${API}/api/reviews/${id}`);
// //         fetchReviews();
// //     };
// //     return (
// //         <div className="min-h-screen bg-gray-50 p-6">
// //             {/* HEADER */}
// //             <div className="mb-6">
// //                 <h1 className="text-3xl font-bold">🌿 Customer Reviews</h1>
// //                 <p className="text-gray-500">Manage reviews for your plants</p>
// //             </div>
// //             {/* TOP SECTION */}
// //             <div className="grid lg:grid-cols-3 gap-6">
// //                 {/* FORM */}
// //                 <Card className="lg:col-span-1 rounded-2xl shadow-lg border">
// //                     <CardContent className="p-6 space-y-4">
// //                         <h2 className="text-xl font-semibold">Add Review</h2>
// //                         <Input
// //                             placeholder="Customer Name"
// //                             value={name}
// //                             onChange={(e) => setName(e.target.value)}
// //                         />
// //                         <Textarea
// //                             placeholder="Write review..."
// //                             value={review}
// //                             onChange={(e) => setReview(e.target.value)}
// //                         />
// //                         <Select
// //                             value={plant}
// //                             onValueChange={(value) => setPlant(value)}
// //                         >
// //                             <SelectTrigger className="w-full">
// //                                 <SelectValue placeholder="Select Plant" />
// //                             </SelectTrigger>
// //                             <SelectContent>
// //                                 {plants.map((p: any) => (
// //                                     <SelectItem key={p._id} value={p._id}>
// //                                         🌿 {p.name}
// //                                     </SelectItem>
// //                                 ))}
// //                             </SelectContent>
// //                         </Select>
// //                         <Button className="w-full bg-green-600 hover:bg-green-700"
// //                             onClick={handleSubmit}>
// //                             Add Review
// //                         </Button>
// //                     </CardContent>
// //                 </Card>
// //                 {/* RIGHT SIDE */}
// //                 <div className="lg:col-span-2 space-y-4">
// //                     {/* FILTER */}
// //                     <div className="flex justify-between items-center">
// //                         <h2 className="text-xl font-semibold">All Reviews</h2>
// //                         <Select onValueChange={setFilterPlant}>
// //                             <SelectTrigger className="w-[200px]">
// //                                 <SelectValue placeholder="Filter by plant" />
// //                             </SelectTrigger>
// //                             <SelectContent>
// //                                 <SelectItem value="all">All</SelectItem>
// //                                 {plants.map((p: any) => (
// //                                     <SelectItem key={p._id} value={p._id}>
// //                                         {p.name}
// //                                     </SelectItem>
// //                                 ))}
// //                             </SelectContent>
// //                         </Select>
// //                     </div>
// //                     {/* LIST */}
// //                     <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
// //                         {reviews.length === 0 ? (
// //                             <p className="text-gray-400">No reviews yet</p>
// //                         ) : (
// //                             reviews.map((r: any) => (
// //                                 <Card
// //                                     key={r._id}
// //                                     className="rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300"
// //                                 >
// //                                     <CardContent className="p-5 space-y-3">
// //                                         <div className="flex justify-between items-center">
// //                                             <h3 className="font-semibold text-lg">{r.name}</h3>
// //                                             <span className="text-xs text-gray-400">
// //                                                 {new Date(r.createdAt).toLocaleDateString()}
// //                                             </span>
// //                                         </div>
// //                                         <p className="text-gray-600 text-sm leading-relaxed">
// //                                             {r.review}
// //                                         </p>
// //                                         <div className="flex justify-between items-center">
// //                                             <span className="text-green-600 text-sm font-medium">
// //                                                 🌿 {r.plant?.name}
// //                                             </span>
// //                                             <Button
// //                                                 size="sm"
// //                                                 variant="destructive"
// //                                                 onClick={() => handleDelete(r._id)}
// //                                             >
// //                                                 Delete
// //                                             </Button>
// //                                         </div>
// //                                     </CardContent>
// //                                 </Card>
// //                             ))
// //                         )}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }
// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// // Updated to match your latest environment variable name
// const API = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
// const ReviewPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [plants, setPlants] = useState([]);
//   const [name, setName] = useState("");
//   const [review, setReview] = useState("");
//   const [plant, setPlant] = useState("");
//   const [filterPlant, setFilterPlant] = useState("");
//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API}/api/plants`);
//       console.log("PLANTS DATA:", res.data);
//       setPlants(Array.isArray(res.data) ? res.data : []);
//     } catch (error) {
//       console.error("Error fetching plants:", error);
//       setPlants([]);
//     }
//   };
//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get(`${API}/api/Plantreviews`, {
//         params: filterPlant && filterPlant !== "all" ? { plant: filterPlant } : {},
//       });
//       // Safety check for array response
//       setReviews(Array.isArray(res.data) ? res.data : []);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//       setReviews([]);
//     }
//   };
//   useEffect(() => {
//     fetchPlants();
//   }, []);
//   useEffect(() => {
//     fetchReviews();
//   }, [filterPlant]);
//   const handleSubmit = async () => {
//     if (!name || !review || !plant) {
//       console.warn("Fill all fields");
//       return;
//     }
//     try {
//       // Changed from /api/reviews to /api/Plantreviews to match your backend app.use
//       await axios.post(`${API}/api/Plantreviews`, {
//         name,
//         review,
//         plant,
//       });
//       setName("");
//       setReview("");
//       setPlant("");
//       fetchReviews();
//     } catch (error) {
//       console.error("Error submitting review:", error);
//     }
//   };
//   const handleDelete = async (id) => {
//     try {
//       // Changed from /api/reviews to /api/Plantreviews to match your backend routing
//       await axios.delete(`${API}/api/Plantreviews/${id}`);
//       fetchReviews();
//     } catch (error) {
//       console.error("Error deleting review:", error);
//     }
//   };
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* HEADER */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold">🌿 Customer Reviews</h1>
//         <p className="text-gray-500">Manage reviews for your plants</p>
//       </div>
//       {/* TOP SECTION */}
//       <div className="grid lg:grid-cols-3 gap-6">
//         {/* FORM */}
//         <Card className="lg:col-span-1 rounded-2xl shadow-lg border">
//           <CardContent className="p-6 space-y-4">
//             <h2 className="text-xl font-semibold">Add Review</h2>
//             <Input
//               placeholder="Customer Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <Textarea
//               placeholder="Write review..."
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//             />
//             <Select value={plant} onValueChange={(value) => setPlant(value)}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select Plant" />
//               </SelectTrigger>
//               <SelectContent>
//                 {plants.map((p) => (
//                   <SelectItem key={p._id} value={p._id}>
//                     🌿 {p.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <Button
//               className="w-full bg-green-600 hover:bg-green-700"
//               onClick={handleSubmit}
//             >
//               Add Review
//             </Button>
//           </CardContent>
//         </Card>
//         {/* RIGHT SIDE */}
//         <div className="lg:col-span-2 space-y-4">
//           {/* FILTER */}
//           <div className="flex justify-between items-center bg-white p-4 rounded-xl border shadow-sm">
//             <h2 className="text-xl font-semibold">All Reviews</h2>
//             <Select onValueChange={setFilterPlant}>
//               <SelectTrigger className="w-[200px]">
//                 <SelectValue placeholder="Filter by plant" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All</SelectItem>
//                 {plants.map((p) => (
//                   <SelectItem key={p._id} value={p._id}>
//                     {p.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           {/* LIST */}
//           <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
//             {reviews.length === 0 ? (
//               <p className="text-gray-400 col-span-full py-10 text-center">No reviews yet</p>
//             ) : (
//               reviews.map((r) => (
//                 <Card
//                   key={r._id}
//                   className="rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300"
//                 >
//                   <CardContent className="p-5 space-y-3">
//                     <div className="flex justify-between items-center">
//                       <h3 className="font-semibold text-lg">{r.name}</h3>
//                       <span className="text-xs text-gray-400">
//                         {r.createdAt ? new Date(r.createdAt).toLocaleDateString() : ""}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {r.review}
//                     </p>
//                     <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//                       <span className="text-green-600 text-sm font-medium">
//                         🌿 {r.plant?.name || "Unknown"}
//                       </span>
//                       <Button
//                         size="sm"
//                         variant="destructive"
//                         onClick={() => handleDelete(r._id)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ReviewPage;
}),
"[project]/app/plantreview/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/plantreview/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__23337edd._.js.map