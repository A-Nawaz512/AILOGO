import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaFilter, FaImages } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    icon: <FaMapMarkerAlt size={28} className="text-[#B78E3B]" />,
    title: "Choose city and stay dates",
    description: "Select your desired location and dates for your stay."
  },
  {
    icon: <FaFilter size={28} className="text-[#B78E3B]" />,
    title: "Filter by price, size, amenities",
    description: "Use filters to find the perfect apartment for your needs."
  },
  {
    icon: <FaImages size={28} className="text-[#B78E3B]" />,
    title: "View photos and details",
    description: "Check high-quality images and detailed apartment descriptions."
  },
];

export default function HowItWorksClient() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="container mx-auto px-6 text-center">
        <h2
          data-aos="fade-down"
          className="text-3xl font-bold mb-12 text-[#B78E3B]"
        >
          How It Works – Client
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger animations
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-[#B78E3B]/70 transition duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-black text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
