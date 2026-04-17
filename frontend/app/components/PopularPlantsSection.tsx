

'use client'

import Link from "next/link";
import PlantCard from "./PlantCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PopularPlantsSection() {

  const [plants, setPlants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API}/plants`);

        setPlants(res.data.slice(0, 6));
      } catch (err) {
        console.error("Error fetching plants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  return (
    <section className="relative overflow-hidden py-10">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[10%] w-[250px] h-[250px] bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-80px] right-[10%] w-[250px] h-[250px] bg-green-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative container mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-700 rounded-full shadow-sm">
            🌱 Trending Now
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Popular Plants
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Discover the most loved plants by our community. Perfect picks for every home.
        </p>

        {/* Scroll Container */}
        {loading ? (
          <p className="text-center text-gray-500">Loading plants...</p>
        ) : (
          <div className="flex overflow-x-auto no-scrollbar space-x-6 pb-4 snap-x snap-mandatory">
            {plants.map((plant) => (
              <div
                key={plant._id}
                className="flex-shrink-0 snap-start w-[260px] md:w-[280px] transform transition duration-300 hover:scale-105"
              >
                <PlantCard
                  id={plant._id}
                  name={plant.name}
                  price={plant.price}
                  image={plant.img}
                  slug={plant._id}
                />
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-6">
          <Link href="/shop">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              View All Plants 🌿
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}