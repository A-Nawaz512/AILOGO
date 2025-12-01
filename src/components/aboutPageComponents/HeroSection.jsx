// src/components/about/HeroSection.jsx
import React, { useEffect } from "react";
import { FaMapMarkedAlt, FaCar, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
   useEffect(() => {
      // Initialize AOS with custom settings
      AOS.init({
         duration: 800,
         once: true,
         disable: window.innerWidth < 768, // Disable on mobile devices
         startEvent: "DOMContentLoaded",
         offset: 100,
      });

      // Re-initialize on resize to handle responsive behavior
      const handleResize = () => {
         if (window.innerWidth >= 768) {
            AOS.init({
               duration: 800,
               once: true,
               disable: false,
               startEvent: "DOMContentLoaded",
               offset: 100,
            });
         } else {
            AOS.refreshHard(); // Disable AOS on mobile
         }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return (
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden min-h-screen">
         {/* Background image */}
         <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/company.jpg')" }}
         >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
         </div>

         <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="animate-fadeIn">
                  <h1
                     className="text-5xl md:text-6xl font-bold mb-6"
                     data-aos="fade-right"
                     data-aos-delay="100"
                  >
                     <span className="text-white">Revolutionizing</span>{" "}
                     <span className="bg-gradient-to-r from-[#6F4918] via-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                        Mobility & Services
                     </span>
                  </h1>
                  <p
                     className="text-white text-lg mb-8 leading-relaxed"
                     data-aos="fade-right"
                     data-aos-delay="200"
                  >
                     ALLOGO is Algeria's premier multi-service platform
                     integrating transportation, rentals, delivery, and
                     assistance services into one seamless 3D-powered ecosystem.
                  </p>

                  <div
                     className="grid md:grid-cols-3 gap-4 mb-8"
                     data-aos="fade-up"
                     data-aos-delay="300"
                  >
                     <div className="bg-[#2a2a2a] p-4 rounded-lg border border-white transform transition-transform duration-300 hover:scale-105">
                        <FaCar className="text-[#E2CF7D] text-2xl mb-2" />
                        <p className="text-gray-200 font-semibold">
                           6 Services
                        </p>
                        <p className="text-gray-400 text-sm">
                           Integrated Platform
                        </p>
                     </div>
                     <div className="bg-[#2a2a2a] p-4 rounded-lg border border-white transform transition-transform duration-300 hover:scale-105">
                        <FaMapMarkedAlt className="text-[#E2CF7D] text-2xl mb-2" />
                        <p className="text-gray-200 font-semibold">
                           3D Live Map
                        </p>
                        <p className="text-gray-400 text-sm">
                           Real-time Tracking
                        </p>
                     </div>
                     <div className="bg-[#2a2a2a] p-4 rounded-lg border border-white transform transition-transform duration-300 hover:scale-105">
                        <FaShieldAlt className="text-[#E2CF7D] text-2xl mb-2" />
                        <p className="text-gray-200 font-semibold">Secure</p>
                        <p className="text-gray-400 text-sm">
                           Trusted Platform
                        </p>
                     </div>
                  </div>
               </div>

               <div className="flex items-center justify-center">
                  <div
                     className="relative bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] w-fit p-1 rounded-2xl transition-transform duration-500 hover:rotate-1 md:hover:rotate-2"
                     data-aos="fade-left"
                     data-aos-delay="400"
                  >
                     <div className="bg-[#202020] rounded-2xl p-12">
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
