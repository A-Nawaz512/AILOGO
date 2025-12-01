// src/components/about/OurStory.jsx
import React from "react";
import { FaRocket, FaUsers, FaGlobeAfrica } from "react-icons/fa";

const OurStory = () => {
   return (
      <section className="py-20 px-6 lg:px-8 bg-[#DCC878]">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-[#2a2a2a]">Our</span>{" "}
                  <span className="bg-[#6F4918] bg-clip-text text-transparent">
                     Story
                  </span>
               </h2>
               <p className="text-gray-800 text-lg max-w-3xl mx-auto">
                  Born from the vision to create Algeria's most comprehensive
                  service platform.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-[#2a2a2a] p-8 rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                     <h3 className="text-2xl font-bold text-gray-100">
                        The Beginning
                     </h3>
                     <div className="flex items-center pt-2" >
                        <FaRocket className="text-white text-2xl " />
                     </div>
                  </div>
                  <p className="text-gray-400 mt-6 text-justify">
                     Started with a simple idea: create a unified platform that
                     solves multiple daily needs with Algerian users in mind.
                  </p>
               </div>

               <div className="bg-[#2a2a2a] p-8 rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                     <h3 className="text-2xl font-bold text-gray-100">
                        UC Design
                     </h3>
                     <div className="flex items-center pt-1" >
                        <FaUsers className="text-white text-2xl" />
                     </div>
                  </div>
                  <p className="text-gray-400 mt-6 text-justify">
                     Clean interfaces and discreet service provider registration
                     to maintain simplicity while offering powerful features.
                  </p>
               </div>

               <div className="bg-[#2a2a2a] p-8 rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                     <h3 className="text-2xl font-bold text-gray-100">
                        Local Focus
                     </h3>
                     <div  className="flex items-center pt-1">
                        <FaGlobeAfrica className="text-white text-2xl" />
                     </div>
                  </div>
                  <p className="text-gray-400 mt-6 text-justify">
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
