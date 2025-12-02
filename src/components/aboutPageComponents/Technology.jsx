// src/components/about/Technology.jsx
import React from "react";
import { FaMap, FaMobileAlt, FaServer, FaShieldAlt } from "react-icons/fa";

const Technology = () => {
   const techFeatures = [
      {
         icon: <FaMap />,
         title: "MapLibre 3D Integration",
         description:
            "Free, open-source 3D mapping showing all entities in real-time perspective",
         details: [
            "No Google Maps dependency",
            "Real-time tracking",
            "3D visualization",
            "Free service",
         ],
      },
      {
         icon: <FaMobileAlt />,
         title: "Cross-Platform",
         description: "Native apps for all devices with consistent experience",
         details: [
            "iOS App Store",
            "Android Play Store",
            "Responsive Web",
            "Admin Panel",
         ],
      },
      {
         icon: <FaServer />,
         title: "Advanced Backend",
         description:
            "Scalable architecture handling multiple services simultaneously",
         details: [
            "Real-time updates",
            "Payment processing",
            "Commission management",
            "User analytics",
         ],
      },
      {
         icon: <FaShieldAlt />,
         title: "Security & Privacy",
         description:
            "Enterprise-grade security protecting user data and transactions",
         details: [
            "Encrypted chats",
            "Secure payments",
            "Data protection",
            "Regular audits",
         ],
      },
   ];

   return (
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#202020] to-[#1a1a1a]">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-100">Our</span>{" "}
                  <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                     Technology
                  </span>
               </h2>
               <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  Built with cutting-edge technology to deliver the best user
                  experience
               </p>
            </div>

            {/* 4 Tech Features in 2x2 grid on laptop/tablet, 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
               {techFeatures.map((feature, index) => (
                  <div
                     key={index}
                     className="bg-[#2a2a2a] relative p-6 rounded-xl border border-[#3a3a3a] hover:border-[#6F4918] transition-all duration-300 hover:-translate-y-1"
                  >
                     <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4 absolute top-0 -right-4">
                           <div className="w-12 h-12 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] flex items-center justify-center">
                              <div className="text-white text-xl">
                                 {feature.icon}
                              </div>
                           </div>
                        </div>
                        <div className="flex-1">
                           <h3 className="text-xl font-bold text-gray-100 mb-2">
                              {feature.title}
                           </h3>
                           <p className="text-gray-400 mb-3">
                              {feature.description}
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {feature.details.map((detail, idx) => (
                                 <span
                                    key={idx}
                                    className="px-3 py-1 bg-[#1a1a1a] text-gray-300 text-sm rounded-full border border-[#3a3a3a]"
                                 >
                                    {detail}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* 3D Map Features - Below the grid */}
            <div className="bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] p-1 rounded-2xl">
               <div className="bg-[#202020] rounded-2xl p-8">
                  <div className="text-center mb-10">
                     <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                        3D Map Technology
                     </h3>
                     <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Powered by MapLibre for immersive real-time visualization
                     </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                     <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full flex items-center justify-center mx-auto mb-4">
                           <span className="text-white font-bold text-2xl">1</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-100 mb-2">
                           Live Entity Tracking
                        </h4>
                        <p className="text-gray-400 text-sm">
                           See all vehicles, rentals, apartments, and technicians on 3D map in real-time
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full flex items-center justify-center mx-auto mb-4">
                           <span className="text-white font-bold text-2xl">2</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-100 mb-2">
                           Perspective View
                        </h4>
                        <p className="text-gray-400 text-sm">
                           3D visualization for better spatial awareness and navigation experience
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full flex items-center justify-center mx-auto mb-4">
                           <span className="text-white font-bold text-2xl">3</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-100 mb-2">
                           Cost-Effective Solution
                        </h4>
                        <p className="text-gray-400 text-sm">
                           Free MapLibre eliminates expensive map service fees while maintaining quality
                        </p>
                     </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-12 pt-8 border-t border-[#3a3a3a]">
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#2a2a2a] p-5 rounded-lg">
                           <h5 className="text-[#E2CF7D] font-semibold mb-2">✓ No Google Maps Dependency</h5>
                           <p className="text-gray-400 text-sm">
                              Complete independence from paid mapping services
                           </p>
                        </div>
                        <div className="bg-[#2a2a2a] p-5 rounded-lg">
                           <h5 className="text-[#E2CF7D] font-semibold mb-2">✓ All Services Integrated</h5>
                           <p className="text-gray-400 text-sm">
                              Cars, scooters, apartments, technicians - all visible in 3D
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Technology;