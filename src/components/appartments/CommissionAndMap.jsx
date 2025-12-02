import React from "react";
import { FaPercentage, FaMapMarkedAlt } from "react-icons/fa";

const FEATURES = [
  {
    icon: FaPercentage,
    title: "Commission",
    text: "On apartment rentals, ALLOGO takes a 5% commission per booking.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Map & Visualization",
    text: "Available apartments can be displayed as markers on the 3D map.",
  },
];

export default function CommissionAndMap() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#9A7A3E]">
          Commission & Map Visualization
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {FEATURES.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-white p-6 rounded-2xl 
              border border-[#9A7A3E]/30 
              shadow-xl hover:shadow-2xl hover:shadow-[#9A7A3E]/70 
              transition duration-300"
            >
              {/* Icon */}
              <div className="h-14 w-14 flex items-center justify-center rounded-xl 
              bg-[#9A7A3E]/10 border border-[#9A7A3E]/40 shadow-md">
                <item.icon size={28} className="text-[#9A7A3E]" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-[#9A7A3E] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}