// src/components/about/ContactCTA.jsx
import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactCTA = () => {
   return (
      <section className="py-20 px-6 lg:px-8 overflow-hidden">
         <div className="max-w-6xl mx-auto">
            <div
               className="bg-gradient-to-r from-[#202020] to-[#2a2a2a] rounded-2xl border border-[#3a3a3a] p-8 md:p-12 transform transition-all duration-500 hover:shadow-2xl overflow-hidden"
               data-aos="fade-up"
               data-aos-delay="100"
               data-aos-once="true"
               data-aos-mirror="false"
               data-aos-anchor-placement="top-center"
            >
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-once="true"
                        data-aos-mirror="false"
                        data-aos-anchor-placement="top-center"
                     >
                        <span className="text-gray-100">
                           Ready to Transform
                        </span>{" "}
                        <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                           Service Experience?
                        </span>
                     </h2>
                     <p
                        className="text-gray-400 mb-8 text-lg"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-once="true"
                        data-aos-mirror="false"
                        data-aos-anchor-placement="top-center"
                     >
                        Join ALLOGO today as a user, driver, courier, or
                        partner.
                     </p>

                     <div className="space-y-4">
                        {[
                           {
                              icon: (
                                 <FaWhatsapp className="text-white text-xl" />
                              ),
                              label: "WhatsApp Support",
                              text: "[Your WhatsApp Number]",
                           },
                           {
                              icon: (
                                 <FaEnvelope className="text-white text-xl" />
                              ),
                              label: "Email",
                              text: "contact@allogo.dz",
                           },
                           {
                              icon: (
                                 <FaPhoneAlt className="text-white text-xl" />
                              ),
                              label: "Phone",
                              text: "[Your Phone Number]",
                           },
                        ].map((contact, index) => (
                           <div
                              key={index}
                              className="flex items-center space-x-4 overflow-hidden"
                              data-aos="fade-up"
                              data-aos-delay={250 + index * 50}
                              data-aos-once="true"
                              data-aos-mirror="false"
                              data-aos-anchor-placement="top-center"
                           >
                              <div className="w-12 h-12 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-lg flex items-center justify-center">
                                 {contact.icon}
                              </div>
                              <div>
                                 <p className="text-gray-400 text-sm">
                                    {contact.label}
                                 </p>
                                 <p className="text-gray-100 font-semibold">
                                    {contact.text}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div
                     className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a] overflow-hidden"
                     data-aos="fade-up"
                     data-aos-delay="400"
                     data-aos-once="true"
                     data-aos-mirror="false"
                     data-aos-anchor-placement="top-center"
                  >
                     <h3
                        className="text-2xl font-bold text-gray-100 mb-6"
                        data-aos="fade-up"
                        data-aos-delay="450"
                        data-aos-once="true"
                        data-aos-mirror="false"
                        data-aos-anchor-placement="top-center"
                     >
                        Get Started Now
                     </h3>
                     <div className="space-y-4">
                        {[
                           {
                              to: "/signup",
                              text: "Sign Up Free",
                              className:
                                 "block w-full py-4 text-center border border-[#6f4918] border-2 hover:border-white bg-gradient-to-r from-[#6F4918] via-[#6F4918] to-[#E2CF7D] text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",
                           },
                           {
                              to: "/login",
                              text: "Login to Account",
                              className:
                                 "block w-full py-4 text-center border-2 border-[#6F4918] hover:border-white text-gray-100 rounded-lg font-semibold text-lg hover:bg-[#6F4918] transition-all duration-300 transform hover:scale-[1.02]",
                           },
                           {
                              to: "/services",
                              text: "Explore Services",
                              className:
                                 "block w-full py-4 text-center bg-[#2a2a2a] border border-[#2a2a2a] border-2 text-gray-100 rounded-lg font-semibold text-lg hover:bg-[#3a3a3a] transition-all duration-300 transform hover:scale-[1.02] hover:border-white",
                           },
                        ].map((link, index) => (
                           <Link
                              key={index}
                              to={link.to}
                              className={link.className}
                              data-aos="fade-up"
                              data-aos-delay={500 + index * 50}
                              data-aos-once="true"
                              data-aos-mirror="false"
                              data-aos-anchor-placement="top-center"
                           >
                              {link.text}
                           </Link>
                        ))}
                     </div>

                     <div
                        className="mt-8 pt-8 border-t border-[#3a3a3a] overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="650"
                        data-aos-once="true"
                        data-aos-mirror="false"
                        data-aos-anchor-placement="top-center"
                     >
                        <p
                           className="text-gray-400 text-sm text-center"
                           data-aos="fade-up"
                           data-aos-delay="700"
                           data-aos-once="true"
                           data-aos-mirror="false"
                           data-aos-anchor-placement="top-center"
                        >
                           Download our mobile app for the best experience
                        </p>
                        <div
                           className="flex justify-center space-x-4 mt-4"
                           data-aos="fade-up"
                           data-aos-delay="750"
                           data-aos-once="true"
                           data-aos-mirror="false"
                           data-aos-anchor-placement="top-center"
                        >
                           {["App Store", "Play Store"].map((store, index) => (
                              <button
                                 key={index}
                                 className="px-6 py-2 bg-[#2a2a2a] text-gray-100 rounded-lg border border-[#3a3a3a] hover:border-[#6F4918] hover:bg-[#3a3a3a] transition-colors duration-300"
                                 data-aos="fade-up"
                                 data-aos-delay={800 + index * 50}
                                 data-aos-once="true"
                                 data-aos-mirror="false"
                                 data-aos-anchor-placement="top-center"
                              >
                                 {store}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Domain Info */}
            <div
               className="mt-12 text-center overflow-hidden"
               data-aos="fade-up"
               data-aos-delay="900"
               data-aos-once="true"
               data-aos-mirror="false"
               data-aos-anchor-placement="top-center"
            >
               <p
                  className="text-gray-500 text-sm"
                  data-aos="fade-up"
                  data-aos-delay="950"
                  data-aos-once="true"
                  data-aos-mirror="false"
                  data-aos-anchor-placement="top-center"
               >
                  Official Domain:{" "}
                  <span className="text-[#E2CF7D] font-semibold">
                     ALLOGO.DZ
                  </span>
               </p>
               <p
                  className="text-gray-500 text-sm mt-2"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-once="true"
                  data-aos-mirror="false"
                  data-aos-anchor-placement="top-center"
               >
                  Inspired by inDrive • Built for Algeria • Powered by MapLibre
                  3D
               </p>
            </div>
         </div>
      </section>
   );
};

export default ContactCTA;
