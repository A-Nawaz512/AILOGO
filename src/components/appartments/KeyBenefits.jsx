import React from 'react';
import { FaMapMarkerAlt, FaImages, FaLock, FaSearch } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaSearch size={30} className="text-[#9A7A3E] mb-2" />,
    title: "Search by city, dates, and price",
    description: "Easily filter apartments by location, availability, and budget."
  },
  {
    icon: <FaImages size={30} className="text-[#9A7A3E] mb-2" />,
    title: "Photos and detailed descriptions",
    description: "View high-quality images and detailed apartment information."
  },
  {
    icon: <FaLock size={30} className="text-[#9A7A3E] mb-2" />,
    title: "Secure bookings",
    description: "Book with confidence through our safe and secure platform."
  },
  {
    icon: <FaMapMarkerAlt size={30} className="text-[#9A7A3E] mb-2" />,
    title: "Location preview on map",
    description: "See apartment locations directly on our interactive 3D map."
  },
];

export default function KeyBenefits() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#9A7A3E]">Key Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white border border-[#9A7A3E]/30 p-6 rounded-2xl shadow-md 
                         hover:shadow-[#9A7A3E]/70 transition duration-300"
            >
              <div className="flex flex-col items-center">
                {benefit.icon}
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}