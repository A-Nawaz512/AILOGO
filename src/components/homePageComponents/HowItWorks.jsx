import React from "react";
import { Search, MapPin, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Choose Service",
      description: "Select rides, deliveries, rentals, apartments, or roadside assistance",
    },
    {
      icon: MapPin,
      title: "Set Details",
      description: "Enter pickup, delivery, or service location and details",
    },
    {
      icon: Users,
      title: "Match with Provider",
      description: "Get connected to verified providers instantly",
    },
    {
      icon: CheckCircle,
      title: "Track & Complete",
      description: "Monitor your service live in 3D until completion",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center items-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#6F4918] mr-4"></div>
            <h2 className="text-xl md:text-4xl text-[#1E2939] font-bold  mb-3">
              How <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">ALLOGO Works</span>
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#6F4918] ml-4"></div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Book rides, deliveries, rentals, apartments, or roadside assistance in 4 simple steps with live 3D tracking and verified providers.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white cursor-pointer rounded-2xl p-6 group border-2 border-[#B78E3B]/20 hover:border-[#B78E3B] shadow-lg hover:shadow-2xl transition-all delay-75 relative"
            >
              {/* Step Icon */}
              <div className="relative flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full flex items-center justify-center 
                                bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] shadow-inner">
                  <step.icon className="w-7 h-7 text-[white]" />
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-lg md:text-xl text-center font-bold mb-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent group-hover:text-[#6F4918] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 text-center text-sm md:text-base">
                {step.description}
              </p>

              {/* Gradient Accent Line */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#6F4918] to-transparent rounded-full mt-4 opacity-50"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
