import React from "react";
import {
  FaMapMarkerAlt,
  FaCar,
  FaTools,
  FaCreditCard,
  FaStar,
} from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMapMarkerAlt className="text-[#B78E3B] text-3xl" />,
      title: "Set Location",
      description: "Pin your exact location on the map or use current GPS",
    },
    {
      icon: <GiPathDistance className="text-[#B78E3B] text-3xl" />,
      title: "Choose Service",
      description:
        "Select from towing, mechanic, battery, fuel, or tire service",
    },
    {
      icon: <FaCar className="text-[#B78E3B] text-3xl" />,
      title: "View Providers",
      description: "See available service providers with ratings and ETA",
    },
    {
      icon: <FaTools className="text-[#B78E3B] text-3xl" />,
      title: "Get Help",
      description: "Provider arrives and performs the required service",
    },
    {
      icon: <FaCreditCard className="text-[#B78E3B] text-3xl" />,
      title: "Secure Payment",
      description: "Pay cash or card directly in the app",
    },
    {
      icon: <FaStar className="text-[#B78E3B] text-3xl" />,
      title: "Rate Service",
      description: "Rate your experience and help improve the community",
    },
  ];

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl font-bold text-center">
      Cute & Smooth
      <span className="text-[#B78E3B]"> How It Works</span>
    </h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            6 easy steps to get roadside assistance quickly and efficiently.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 relative overflow-hidden 
                         hover:shadow-[0_20px_40px_rgba(183,142,59,0.4)] hover:scale-105 
                         transition-transform transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFF4E0] mb-6 mx-auto">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#CEAA36] to-[#937b2c] text-white px-8 md:px-8 py-4 rounded-xl text-lg shadow-xl font-bold">
            <FaTools className="mr-3" />
            Average Response Time: 15-20 Minutes
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
