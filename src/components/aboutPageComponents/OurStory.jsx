// src/components/about/OurStory.jsx
import React, { useEffect } from "react";
import { FaRocket, FaUsers, FaGlobeAfrica } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStory = () => {
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
      <section className="min-h-screen py-20 px-6 lg:px-8 bg-[#DCC885]">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
               >
                  <span className="text-[#2a2a2a]">Our</span>{" "}
                  <span className="text-white">Story</span>
               </h2>
               <p
                  className="text-gray-800 text-lg max-w-3xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="200"
               >
                  Born from the vision to create Algeria's most comprehensive
                  service platform, our journey began with a commitment to
                  bridge the gap between traditional services and digital
                  convenience. We recognized the growing need for a unified
                  ecosystem that caters specifically to the unique dynamics of
                  Algerian daily life—combining reliability, accessibility, and
                  local relevance into one seamless experience.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {/* First Box with /simple.jpg */}
               <div
                  className="relative p-8 rounded-xl border border-[#3a3a3a] hover:border-white transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay="300"
               >
                  <div
                     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                     style={{ backgroundImage: "url('/simple1.jpg')" }}
                  >
                     <div className="absolute inset-0 bg-black/70"></div>
                  </div>
                  <div className="relative z-10">
                     <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-100">
                           The Beginning
                        </h3>
                        <div className="flex items-center pt-2">
                           <FaRocket className="text-white text-2xl " />
                        </div>
                     </div>
                     <p className="text-gray-300 mt-6 ">
                        Started with a simple idea: create a unified platform
                        that solves multiple daily needs with Algerian users in
                        mind.
                     </p>
                  </div>
               </div>

               {/* Second Box with /design.jpg */}
               <div
                  className="relative p-8 rounded-xl border border-[#3a3a3a] hover:border-white transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay="400"
               >
                  <div
                     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                     style={{ backgroundImage: "url('/design.jpg')" }}
                  >
                     <div className="absolute inset-0 bg-black/70"></div>
                  </div>
                  <div className="relative z-10">
                     <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-100">
                           UC Design
                        </h3>
                        <div className="flex items-center pt-1">
                           <FaUsers className="text-white text-2xl" />
                        </div>
                     </div>
                     <p className="text-gray-300 mt-6 ">
                        Clean interfaces and discreet service provider
                        registration to maintain simplicity while offering
                        powerful features.
                     </p>
                  </div>
               </div>

               {/* Third Box with /world.jpg */}
               <div
                  className="relative p-8 rounded-xl border border-[#3a3a3a] hover:border-white transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay="500"
               >
                  <div
                     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                     style={{ backgroundImage: "url('/world.jpg')" }}
                  >
                     <div className="absolute inset-0 bg-black/70"></div>
                  </div>
                  <div className="relative z-10">
                     <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-100">
                           Local Focus
                        </h3>
                        <div className="flex items-center pt-1">
                           <FaGlobeAfrica className="text-white text-2xl" />
                        </div>
                     </div>
                     <p className="text-gray-300 mt-6 ">
                        Tailored specifically for Algerian cities with
                        inter-wilaya and intra-wilaya services.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurStory;
