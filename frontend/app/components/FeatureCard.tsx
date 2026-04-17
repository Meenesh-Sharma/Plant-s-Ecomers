import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  borderColor?: string;
}

export default function FeatureCard({ icon: Icon, title, description, borderColor = "border-green-500" }: FeatureCardProps) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 flex-none w-64 md:w-auto border-t-4 ${borderColor}`}>
      <Icon className="text-4xl text-green-600 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
