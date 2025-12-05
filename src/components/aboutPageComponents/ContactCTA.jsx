// src/components/about/ContactCTA.jsx
import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactCTA = () => {
   return (
      <section className="py-20 px-6 lg:px-8 overflow-hidden">
         <div className="max-w-6xl mx-auto">
            <div
               className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden transition-all duration-400"
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
                        <span>Ready to Transform</span>{" "}
                        <span className="bg-[#B78E3B] bg-clip-text text-transparent">
                           Service Experience?
                        </span>
                     </h2>
                     <p
                        className="text-gray-800 mb-8 text-lg transition-colors duration-400 hover:text-[#B78E3B]"
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
                              text: "1234 5678 890",
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
                              text: "1234 5678 890 ",
                           },
                        ].map((contact, index) => (
                           <div
                              key={index}
                              className="flex items-center space-x-4 overflow-hidden cursor-pointer group"
                              data-aos="fade-up"
                              data-aos-delay={250 + index * 50}
                              data-aos-once="true"
                              data-aos-mirror="false"
                              data-aos-anchor-placement="top-center"
                           >
                              <div className="w-12 h-12 bg-[#B78E3B] rounded-lg flex items-center justify-center transition-all duration-400 group-hover:bg-[#785320] group-hover:scale-105">
                                 {contact.icon}
                              </div>
                              <div className="transition-all duration-400 group-hover:translate-x-2">
                                 <p className="text-gray-700 text-sm transition-colors duration-400 group-hover:text-[#785320]">
                                    {contact.label}
                                 </p>
                                 <p className="text-gray-500 font-semibold transition-colors duration-400 group-hover:text-[#382a2a]">
                                    {contact.text}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div
                     className="bg-white shadow-xl rounded-xl p-8 overflow-hidden transition-all duration-400 hover:shadow-2xl"
                     data-aos="fade-up"
                     data-aos-delay="400"
                     data-aos-once="true"
                     data-aos-mirror="false"
                     data-aos-anchor-placement="top-center"
                  >
                     <h3
                        className="text-2xl font-bold text-[#B78E3B] mb-6 hover:text-[#BD9751] transition-all duration-900 "
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
                                 "block w-full py-2 text-center border border-[#B78E3B] border-2 bg-white text-[#B78E3B] rounded-lg font-semibold text-lg transition-all duration-500 hover:border-white hover:bg-[#B78E3B] hover:text-white hover:scale-[1.02] hover:shadow-lg",
                           },
                           {
                              to: "/login",
                              text: "Login to Account",
                              className:
                                 "block w-full py-2 text-center border-2 border-[#B78E3B] text-[#B78E3B] rounded-lg font-semibold text-lg transition-all duration-500 hover:border-white hover:text-white hover:bg-[#B78E3B] hover:scale-[1.02] hover:shadow-lg",
                           },
                           {
                              to: "/services",
                              text: "Explore Services",
                              className:
                                 "block w-full py-2 text-center bg-[#BD9751] border border-[#BD9751] border-2 text-gray-100 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-[#B78E3B] hover:scale-[1.02] hover:shadow-lg",
                           },
                        ].map((link, index) => (
                           <button className={link.className}>
                              <Link
                                 key={index}
                                 to={link.to}
                                 data-aos="fade-up"
                                 data-aos-delay={500 + index * 50}
                                 data-aos-once="true"
                                 data-aos-mirror="false"
                                 data-aos-anchor-placement="top-center"
                              >
                                 {link.text}
                              </Link>
                           </button>
                        ))}
                     </div>

                     <div
                        className="mt-8 pt-8 border-t border-[#3a3a3a] overflow-hidden transition-all duration-400 hover:border-[#B78E3B]"
                        data-aos="fade-up"
                        data-aos-delay="650"
                        data-aos-once="true"
                        data-aos-mirror="false"
                        data-aos-anchor-placement="top-center"
                     >
                        <p
                           className="text-gray-400 text-sm text-center transition-colors duration-400 hover:text-gray-600"
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
                              <span className="px-5 py-2 bg-[#B78E3B] text-gray-100 rounded-lg transition-all duration-400 hover:bg-[#3a3a3a] hover:scale-105 hover:shadow-lg">
                                 <button
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={800 + index * 50}
                                    data-aos-once="true"
                                    data-aos-mirror="false"
                                    data-aos-anchor-placement="top-center"
                                 >
                                    {store}
                                 </button>
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactCTA;
