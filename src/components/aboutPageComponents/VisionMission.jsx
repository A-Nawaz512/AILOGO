// src/components/about/VisionMission.jsx
import React from "react";
import { FaEye, FaBullseye, FaStar } from "react-icons/fa";

const VisionMission = () => {
   return (
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#202020]">
         <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
               {/* Vision */}
               <div>
                  <div className="flex items-center justify-between mb-8">
                     <h2 className="text-3xl font-bold text-gray-100">
                        Our Vision
                     </h2>
                        <FaEye className="text-white text-2xl" />
                  </div>
                  <p className="text-gray-400 text-lg text-justify mb-6 leading-relaxed">
                     To become Algeria's leading multi-service platform,
                     revolutionizing how people access transportation, rentals,
                     and delivery services through innovative technology.
                  </p>
                  <div className="bg-[#2a2a2a] p-6 rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300">
                     <h3 className="text-xl font-bold text-gray-100 mb-4">
                        Future Goals
                     </h3>
                     <ul className="space-y-3">
                        <li className="flex items-center">
                           <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                           <span className="text-gray-300">
                              Expand to all Algerian wilayas
                           </span>
                        </li>
                        <li className="flex items-center">
                           <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                           <span className="text-gray-300">
                              Introduce AI-powered service matching
                           </span>
                        </li>
                        <li className="flex items-center">
                           <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                           <span className="text-gray-300">
                              Add electric vehicle integration
                           </span>
                        </li>
                        <li className="flex items-center">
                           <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                           <span className="text-gray-300">
                              Launch in neighboring countries
                           </span>
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Mission */}
               <div>
                  <div className="flex items-center justify-between mb-8">
                     <h2 className="text-3xl font-bold text-gray-100">
                        Our Mission
                     </h2>
                        <FaBullseye className="text-white text-2xl" />
                  </div>
                  <p className="text-gray-400 text-lg mb-6 text-justify leading-relaxed">
                     To provide Algerians with a reliable, efficient, and
                     comprehensive service platform that simplifies daily life
                     through technology and management
                  </p>
                  <div className="bg-[#2a2a2a] p-6 rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300">
                     <h3 className="text-xl font-bold text-gray-100 mb-4">
                        Core Values
                     </h3>
                     <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                           <FaStar className="text-[#E2CF7D]" />
                           <span className="text-gray-300">Innovation</span>
                        </div>
                        <div className="flex items-center space-x-3">
                           <FaStar className="text-[#E2CF7D]" />
                           <span className="text-gray-300">Reliability</span>
                        </div>
                        <div className="flex items-center space-x-3">
                           <FaStar className="text-[#E2CF7D]" />
                           <span className="text-gray-300">Transparency</span>
                        </div>
                        <div className="flex items-center space-x-3">
                           <FaStar className="text-[#E2CF7D]" />
                           <span className="text-gray-300">Community</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Business Model */}
            <div className="mt-16">
               <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">
                     Sustainable Business Model
                  </h3>
                  <p className="text-gray-400">
                     Fair commissions supporting platform growth
                  </p>
               </div>
               <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-[#2a2a2a] rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300">
                     <div className="text-3xl font-bold text-[#E2CF7D] mb-2">
                        9%
                     </div>
                     <p className="text-gray-300 font-semibold">
                        VTC Commission
                     </p>
                     <p className="text-gray-500 text-sm">
                        Passenger Transport
                     </p>
                  </div>
                  <div className="text-center p-6 bg-[#2a2a2a] rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300">
                     <div className="text-3xl font-bold text-[#E2CF7D] mb-2">
                        5%
                     </div>
                     <p className="text-gray-300 font-semibold">
                        Rental Services
                     </p>
                     <p className="text-gray-500 text-sm">
                        Vehicles & Apartments
                     </p>
                  </div>
                  <div className="text-center p-6 bg-[#2a2a2a] rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300">
                     <div className="text-3xl font-bold text-[#E2CF7D] mb-2">
                        5%
                     </div>
                     <p className="text-gray-300 font-semibold">
                        Delivery Services
                     </p>
                     <p className="text-gray-500 text-sm">Packages & Food</p>
                  </div>
                  <div className="text-center p-6 bg-[#2a2a2a] rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300">
                     <div className="text-3xl font-bold text-[#E2CF7D] mb-2">
                        5%
                     </div>
                     <p className="text-gray-300 font-semibold">Assistance</p>
                     <p className="text-gray-500 text-sm">Roadside Help</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default VisionMission;
