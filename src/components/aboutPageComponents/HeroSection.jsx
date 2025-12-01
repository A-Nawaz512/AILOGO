// src/components/about/HeroSection.jsx
import React from "react";
import { FaMapMarkedAlt, FaCar, FaShieldAlt } from "react-icons/fa";

const HeroSection = () => {
   return (
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden min-h-screen">
         {/* Background gradient */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#202020] via-[#121212] to-[#202020]"></div>

         <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="animate-fadeIn">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                     <span className="text-gray-100">Revolutionizing</span>{" "}
                     <span className="bg-gradient-to-r from-[#6F4918] via-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                        Mobility & Services
                     </span>
                  </h1>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                     ALLOGO is Algeria's premier multi-service platform
                     integrating transportation, rentals, delivery, and
                     assistance services into one seamless 3D-powered ecosystem.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                     <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#3a3a3a] transform transition-transform duration-300 hover:scale-105">
                        <FaCar className="text-[#E2CF7D] text-2xl mb-2" />
                        <p className="text-gray-200 font-semibold">
                           6 Services
                        </p>
                        <p className="text-gray-400 text-sm">
                           Integrated Platform
                        </p>
                     </div>
                     <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#3a3a3a] transform transition-transform duration-300 hover:scale-105">
                        <FaMapMarkedAlt className="text-[#E2CF7D] text-2xl mb-2" />
                        <p className="text-gray-200 font-semibold">
                           3D Live Map
                        </p>
                        <p className="text-gray-400 text-sm">
                           Real-time Tracking
                        </p>
                     </div>
                     <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#3a3a3a] transform transition-transform duration-300 hover:scale-105">
                        <FaShieldAlt className="text-[#E2CF7D] text-2xl mb-2" />
                        <p className="text-gray-200 font-semibold">Secure</p>
                        <p className="text-gray-400 text-sm">
                           Trusted Platform
                        </p>
                     </div>
                  </div>
               </div>

               <div className="animate-slideIn">
                  <div className="relative bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] p-1 rounded-2xl">
                     <div className="bg-[#202020] rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-100 mb-4">
                           Core Features
                        </h3>
                        <ul className="space-y-4">
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                              <span className="text-gray-300">
                                 Real-time 3D mapping with MapLibre
                              </span>
                           </li>
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                              <span className="text-gray-300">
                                 Multi-service commission system (5-9%)
                              </span>
                           </li>
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                              <span className="text-gray-300">
                                 Loyalty & credit points system
                              </span>
                           </li>
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                              <span className="text-gray-300">
                                 Complete admin control panel
                              </span>
                           </li>
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                              <span className="text-gray-300">
                                 Cross-platform (Web, Android, iOS)
                              </span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
