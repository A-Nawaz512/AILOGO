// src/components/about/VisionMission.jsx
import React from "react";
import {
   FaEye,
   FaBullseye,
   FaStar,
   FaChartLine,
   FaShieldAlt,
   FaUsers,
   FaRocket,
} from "react-icons/fa";

const VisionMission = () => {
   return (
      <section className="py-20 px-6 lg:px-8 bg-gray-100 overflow-hidden">
         <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div
               className="text-center mb-16"
               data-aos="fade-up"
               data-aos-delay="100"
               data-aos-once="true"
               data-aos-mirror="false"
               data-aos-anchor-placement="top-center"
            >
               <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-[#202020]">Vision &</span>{" "}
                  <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                     Mission
                  </span>
               </h2>
               <p className="text-[#202020] text-lg max-w-3xl mx-auto">
                  Driving innovation with purpose, building Algeria's most
                  trusted service ecosystem
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-20">
               {/* Vision Card */}
               <div
                  className="relative group"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-once="true"
                  data-aos-mirror="false"
                  data-aos-anchor-placement="top-center"
               >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-500 ease-out"></div>
                  <div className="relative bg-white p-8 rounded-2xl border border-gray-200 h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#E2CF7D]/20 group-hover:border-[#E2CF7D]/30">
                     <div className="flex items-start justify-between mb-8">
                        <div>
                           <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#6F4918]/10 to-[#E2CF7D]/10 rounded-xl mb-4 group-hover:from-[#6F4918]/20 group-hover:to-[#E2CF7D]/20 transition-all duration-300">
                              <FaEye className="text-[#6F4918] text-2xl group-hover:scale-110 transition-transform duration-300" />
                           </div>
                           <h2 className="text-3xl font-bold text-[#202020]">
                              Our Vision
                           </h2>
                        </div>
                     </div>
                     <p className="text-[#202020] text-lg mb-8 leading-relaxed group-hover:text-[#202020]/90 transition-colors duration-300">
                        To become Algeria's leading multi-service platform,
                        revolutionizing daily life through integrated digital
                        solutions that connect communities with essential
                        services.
                     </p>

                     <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#202020] mb-4 flex items-center gap-3">
                           <FaRocket className="text-[#6F4918] group-hover:animate-pulse" />
                           Strategic Goals
                        </h3>
                        <ul className="space-y-3">
                           {[
                              "National expansion across all 58 wilayas",
                              "AI-powered service optimization",
                              "Sustainable EV integration network",
                              "Regional expansion across North Africa",
                           ].map((goal, index) => (
                              <li
                                 key={index}
                                 className="flex items-center group/item"
                              >
                                 <div className="w-2 h-2 bg-[#6F4918] rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300 group-hover/item:bg-[#E2CF7D]"></div>
                                 <span className="text-[#202020] group-hover/item:text-[#6F4918] transition-colors duration-300">
                                    {goal}
                                 </span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>

               {/* Mission Card */}
               <div
                  className="relative group"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-once="true"
                  data-aos-mirror="false"
                  data-aos-anchor-placement="top-center"
               >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-500 ease-out"></div>
                  <div className="relative bg-white p-8 rounded-2xl border border-gray-200 h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#E2CF7D]/20 group-hover:border-[#E2CF7D]/30">
                     <div className="flex items-start justify-between mb-8">
                        <div>
                           <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#6F4918]/10 to-[#E2CF7D]/10 rounded-xl mb-4 group-hover:from-[#6F4918]/20 group-hover:to-[#E2CF7D]/20 transition-all duration-300">
                              <FaBullseye className="text-[#6F4918] text-2xl group-hover:scale-110 transition-transform duration-300" />
                           </div>
                           <h2 className="text-3xl font-bold text-[#202020]">
                              Our Mission
                           </h2>
                        </div>
                     </div>
                     <p className="text-[#202020] text-lg mb-8 leading-relaxed group-hover:text-[#202020]/90 transition-colors duration-300">
                        To empower Algerians with reliable, accessible, and
                        innovative services that simplify everyday tasks while
                        supporting local economies and digital transformation.
                     </p>

                     <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#202020] mb-4 flex items-center gap-3">
                           <FaStar className="text-[#6F4918] group-hover:animate-spin group-hover:duration-1000" />
                           Core Values
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              {
                                 icon: <FaChartLine />,
                                 label: "Innovation",
                                 desc: "Pioneering tech solutions",
                              },
                              {
                                 icon: <FaShieldAlt />,
                                 label: "Trust",
                                 desc: "Secure & reliable service",
                              },
                              {
                                 icon: <FaUsers />,
                                 label: "Community",
                                 desc: "Local-first approach",
                              },
                              {
                                 icon: <FaStar />,
                                 label: "Excellence",
                                 desc: "Quality in every service",
                              },
                           ].map((value, index) => (
                              <div
                                 key={index}
                                 className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-[#6F4918] transition-all duration-300 hover:shadow-md hover:shadow-[#E2CF7D]/10 hover:-translate-y-1"
                              >
                                 <div className="flex items-center gap-3 mb-2">
                                    <div className="text-[#6F4918] hover:scale-110 transition-transform duration-300">
                                       {value.icon}
                                    </div>
                                    <span className="text-[#202020] font-semibold hover:text-[#6F4918] transition-colors duration-300">
                                       {value.label}
                                    </span>
                                 </div>
                                 <p className="text-gray-600 text-sm">
                                    {value.desc}
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Business Model Section */}
            <div
               className="relative overflow-hidden"
               data-aos="fade-up"
               data-aos-delay="400"
               data-aos-once="true"
               data-aos-mirror="false"
               data-aos-anchor-placement="top-center"
            >
               <div
                  className="text-center mb-12"
                  data-aos="fade-up"
                  data-aos-delay="450"
                  data-aos-once="true"
                  data-aos-mirror="false"
                  data-aos-anchor-placement="top-center"
               >
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#6F4918]/10 to-[#E2CF7D]/10 rounded-xl mb-4">
                     <FaChartLine className="text-[#6F4918] text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#202020] mb-3">
                     Sustainable Business Model
                  </h3>
                  <p className="text-[#202020] max-w-2xl mx-auto">
                     Fair commissions supporting platform growth while providing
                     value to service providers
                  </p>
               </div>

               <div className="grid md:grid-cols-4 gap-6">
                  {[
                     {
                        rate: "9%",
                        title: "VTC Transport",
                        desc: "Passenger Transport",
                        tag: "Premium",
                     },
                     {
                        rate: "5%",
                        title: "Vehicle Rental",
                        desc: "Car & scooter rentals",
                        tag: "Standard",
                     },
                     {
                        rate: "5%",
                        title: "Delivery Services",
                        desc: "Packages & food delivery",
                        tag: "Standard",
                     },
                     {
                        rate: "5%",
                        title: "Road Assistance",
                        desc: "Emergency services",
                        tag: "Essential",
                     },
                  ].map((model, index) => (
                     <div
                        key={index}
                        className="group relative bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#6F4918] transition-all duration-300 hover:-translate-y-2 overflow-hidden hover:shadow-xl hover:shadow-[#E2CF7D]/20"
                        data-aos="fade-up"
                        data-aos-delay={500 + index * 100}
                        data-aos-once="true"
                        data-aos-mirror="false"
                        data-aos-anchor-placement="top-center"
                     >
                        <div className="absolute top-4 right-4">
                           <span className="px-3 py-1 bg-[#6F4918]/10 text-[#6F4918] text-xs font-semibold rounded-full group-hover:bg-[#6F4918] group-hover:text-white transition-all duration-300">
                              {model.tag}
                           </span>
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent mb-3 group-hover:from-[#E2CF7D] group-hover:to-[#6F4918] transition-all duration-500">
                           {model.rate}
                        </div>
                        <h4 className="text-xl font-bold text-[#202020] mb-2 group-hover:text-[#6F4918] transition-colors duration-300">
                           {model.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                           {model.desc}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-[#E2CF7D]/30 transition-colors duration-300">
                           <p className="text-gray-500 text-sm group-hover:text-[#6F4918]/80 transition-colors duration-300">
                              Platform commission rate
                           </p>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Summary */}
               <div
                  className="mt-12 text-center"
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-once="true"
                  data-aos-mirror="false"
                  data-aos-anchor-placement="top-center"
               >
                  <div className="inline-block bg-gray-50 px-6 py-3 rounded-full border border-gray-200 hover:shadow-lg hover:shadow-[#E2CF7D]/10 hover:border-[#E2CF7D]/50 transition-all duration-300">
                     <p className="text-gray-600 hover:text-[#202020] transition-colors duration-300">
                        <span className="text-[#6F4918] font-semibold hover:text-[#E2CF7D] transition-colors duration-300">
                           All commissions
                        </span>{" "}
                        reinvested in platform development & user experience
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default VisionMission;
