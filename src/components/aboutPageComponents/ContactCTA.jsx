// src/components/about/ContactCTA.jsx
import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactCTA = () => {
   return (
      <section className="py-20 px-6 lg:px-8">
         <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-[#202020] to-[#2a2a2a] rounded-2xl border border-[#3a3a3a] p-8 md:p-12 transform transition-all duration-500 hover:shadow-2xl">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-gray-100">
                           Ready to Transform
                        </span>{" "}
                        <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                           Service Experience?
                        </span>
                     </h2>
                     <p className="text-gray-400 mb-8 text-lg">
                        Join ALLOGO today as a user, driver, courier, or
                        partner.
                     </p>

                     <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                           <div className="w-12 h-12 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-lg flex items-center justify-center">
                              <FaWhatsapp className="text-white text-xl" />
                           </div>
                           <div>
                              <p className="text-gray-400 text-sm">
                                 WhatsApp Support
                              </p>
                              <p className="text-gray-100 font-semibold">
                                 [Your WhatsApp Number]
                              </p>
                           </div>
                        </div>

                        <div className="flex items-center space-x-4">
                           <div className="w-12 h-12 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-lg flex items-center justify-center">
                              <FaEnvelope className="text-white text-xl" />
                           </div>
                           <div>
                              <p className="text-gray-400 text-sm">Email</p>
                              <p className="text-gray-100 font-semibold">
                                 contact@allogo.dz
                              </p>
                           </div>
                        </div>

                        <div className="flex items-center space-x-4">
                           <div className="w-12 h-12 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-lg flex items-center justify-center">
                              <FaPhoneAlt className="text-white text-xl" />
                           </div>
                           <div>
                              <p className="text-gray-400 text-sm">Phone</p>
                              <p className="text-gray-100 font-semibold">
                                 [Your Phone Number]
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a]">
                     <h3 className="text-2xl font-bold text-gray-100 mb-6">
                        Get Started Now
                     </h3>
                     <div className="space-y-4">
                        <a
                           href="/signup"
                           className="block w-full py-4 text-center bg-gradient-to-r from-[#6F4918] via-[#6F4918] to-[#E2CF7D] text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                        >
                           Sign Up Free
                        </a>
                        <a
                           href="/login"
                           className="block w-full py-4 text-center border-2 border-[#6F4918] text-gray-100 rounded-lg font-semibold text-lg hover:bg-[#6F4918] transition-all duration-300 transform hover:scale-[1.02]"
                        >
                           Login to Account
                        </a>
                        <a
                           href="/services"
                           className="block w-full py-4 text-center bg-[#2a2a2a] text-gray-100 rounded-lg font-semibold text-lg hover:bg-[#3a3a3a] transition-all duration-300 transform hover:scale-[1.02]"
                        >
                           Explore Services
                        </a>
                     </div>

                     <div className="mt-8 pt-8 border-t border-[#3a3a3a]">
                        <p className="text-gray-400 text-sm text-center">
                           Download our mobile app for the best experience
                        </p>
                        <div className="flex justify-center space-x-4 mt-4">
                           <button className="px-6 py-2 bg-[#2a2a2a] text-gray-100 rounded-lg border border-[#3a3a3a] hover:border-[#6F4918] hover:bg-[#3a3a3a] transition-colors duration-300">
                              App Store
                           </button>
                           <button className="px-6 py-2 bg-[#2a2a2a] text-gray-100 rounded-lg border border-[#3a3a3a] hover:border-[#6F4918] hover:bg-[#3a3a3a] transition-colors duration-300">
                              Play Store
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Domain Info */}
            <div className="mt-12 text-center">
               <p className="text-gray-500 text-sm">
                  Official Domain:{" "}
                  <span className="text-[#E2CF7D] font-semibold">
                     ALLOGO.DZ
                  </span>
               </p>
               <p className="text-gray-500 text-sm mt-2">
                  Inspired by inDrive • Built for Algeria • Powered by MapLibre
                  3D
               </p>
            </div>
         </div>
      </section>
   );
};

export default ContactCTA;
