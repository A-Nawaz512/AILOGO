import React from "react";
import { Car, Home as HomeIcon, Bike, Truck, Utensils, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "Ride Booking (VTC)", icon: Car },
  { title: "Vehicle Rental", icon: Bike },
  { title: "Apartment Rental", icon: HomeIcon },
  { title: "Courier Delivery", icon: Truck },
  { title: "Food Delivery", icon: Utensils },
  { title: "Roadside Assistance", icon: Wrench },
];

export default function ServicesSection() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-center py-16">

      {/* SECTION TITLE */}
      <h2 className="text-center text-4xl font-extrabold mb-16 tracking-tight">
        Our{" "}
        <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-transparent bg-clip-text">
          Services
        </span>
      </h2>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            className="p-8 rounded-3xl text-center border border-[#6F4918]/30 bg-white
              shadow-[0_0_20px_rgba(111,73,24,0.05)]
              transition-all duration-500 transform hover:scale-[1.06]
              hover:shadow-[0_0_35px_rgba(226,207,125,0.35)]
              hover:border-[#E2CF7D]"
          >
            {/* ICON CONTAINER */}
            <div className="flex justify-center mb-6">
              <div className="p-5 rounded-full 
                bg-gradient-to-br from-[#6F4918] to-[#E2CF7D]
                shadow-[0_0_20px_rgba(226,207,125,0.3)]
                border border-white/20">
                <s.icon size={42} className="text-white drop-shadow" strokeWidth={2.5} />
              </div>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold 
              bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]
              text-transparent bg-clip-text">
              {s.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              High-quality service with transparency and loyalty rewards.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
