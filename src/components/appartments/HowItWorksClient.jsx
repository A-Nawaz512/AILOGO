import React from 'react';
import { FaMapMarkerAlt, FaFilter, FaImages } from 'react-icons/fa';

const steps = [
  {
    icon: <FaMapMarkerAlt size={28} className="text-[#9A7A3E]" />,
    title: "Choose city and stay dates",
    description: "Select your desired location and dates for your stay."
  },
  {
    icon: <FaFilter size={28} className="text-[#9A7A3E]" />,
    title: "Filter by price, size, amenities",
    description: "Use filters to find the perfect apartment for your needs."
  },
  {
    icon: <FaImages size={28} className="text-[#9A7A3E]" />,
    title: "View photos and details",
    description: "Check high-quality images and detailed apartment descriptions."
  },
];

export default function HowItWorksClient() {
  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#9A7A3E]">How It Works – Client</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-[#9A7A3E]/70 transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}