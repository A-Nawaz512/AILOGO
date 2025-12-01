// src/components/about/OurStory.jsx
import React from "react";
import { FaRocket, FaUsers, FaGlobeAfrica } from "react-icons/fa";

const OurStory = () => {
   return (
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#202020] to-[#1a1a1a]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-100">Our</span>{" "}
                  <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                     Story
                  </span>
               </h2>
               <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  Born from the vision to create Algeria's most comprehensive
                  service platform.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-[#2a2a2a] p-8 rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300 transform hover:-translate-y-2">
                  <div className="inline-flex p-4 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full mb-6">
                     <FaRocket className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">
                     The Beginning
                  </h3>
                  <p className="text-gray-400">
                     Started with a simple idea: create a unified platform that
                     solves multiple daily needs with Algerian users in mind.
                  </p>
               </div>

               <div className="bg-[#2a2a2a] p-8 rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300 transform hover:-translate-y-2">
                  <div className="inline-flex p-4 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full mb-6">
                     <FaUsers className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">
                     User-Centric Design
                  </h3>
                  <p className="text-gray-400">
                     Clean interfaces and discreet service provider registration
                     to maintain simplicity while offering powerful features.
                  </p>
               </div>

               <div className="bg-[#2a2a2a] p-8 rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300 transform hover:-translate-y-2">
                  <div className="inline-flex p-4 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full mb-6">
                     <FaGlobeAfrica className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">
                     Local Focus
                  </h3>
                  <p className="text-gray-400">
                     Tailored specifically for Algerian cities with inter-wilaya
                     and intra-wilaya services.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurStory;
