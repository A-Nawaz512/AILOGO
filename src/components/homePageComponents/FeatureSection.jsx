import React from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Loyalty Points",
      description: "Earn 1 point per service — redeem for discounts and rewards.",
    },
    {
      title: "Borrow Credit",
      description: "Active users can borrow 1000–2000 DA based on loyalty & activity.",
    },
    {
      title: "In-App Chat",
      description: "Chat instantly with drivers, couriers, renters, or technicians.",
    },
    {
      title: "MapLibre 3D Tracking",
      description:
        "Real-time tracking for rides, couriers, rentals, apartments & assistance.",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-center px-6 py-20">

      {/* SECTION HEADING */}
      <h2 className="text-center text-4xl font-extrabold tracking-tight mb-16">
        Key{" "}
        <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]
          text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(226,207,125,0.45)]">
          Features
        </span>
      </h2>

      {/* FEATURES GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}

            className="p-8 rounded-3xl bg-white border border-[#6F4918]/25
              shadow-[0_0_14px_rgba(111,73,24,0.10)]
              transition-all duration-500 transform
              hover:scale-[1.05]
              hover:border-[#E2CF7D]
              hover:shadow-[0_0_30px_rgba(226,207,125,0.35)]
            "
          >
            {/* CARD TITLE */}
            <h3 className="text-2xl font-semibold mb-4
              bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]
              text-transparent bg-clip-text">
              {feature.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-[15px] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
