import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="bg-[#0a0a0a] text-white pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center px-6"
      >

        {/* Gold Logo Title */}
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#c9a227] via-[#e7c873] to-[#c9a227] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(201,162,39,0.5)] tracking-wider">
          ALLOGO
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-3">
          All services in one app — rides, rentals, deliveries, food, homes, shopping, roadside support — powered by smart real-time mapping.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-10">

          {/* Learn More Button (upgraded) */}
          <button className="px-8 py-3 rounded-xl border border-gold text-gold font-semibold hover:bg-[#c9a227] hover:text-black hover:shadow-[0_0_18px_rgba(201,162,39,0.9)] transition-all duration-300">
            Learn More
          </button>
        </div>

      </motion.div>
    </div>
  );
}
