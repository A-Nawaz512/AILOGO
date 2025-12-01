// src/components/about/ServicesOverview.jsx
import React from "react";
import {
   FaCar,
   FaKey,
   FaHome,
   FaBox,
   FaUtensils,
   FaWrench,
} from "react-icons/fa";

const ServicesOverview = () => {
   const services = [
      {
         icon: <FaCar />,
         title: "VTC Transport",
         description:
            "Book rides with choice of driver gender, vehicle type, and destination",
         features: [
            "Male/Female drivers",
            "Car/Moto options",
            "Inter/Intra-wilaya",
            "9% commission",
         ],
         color: "from-blue-500 to-cyan-400",
      },
      {
         icon: <FaKey />,
         title: "Vehicle Rental",
         description: "Rent cars and scooters with availability management",
         features: [
            "Car rentals",
            "Scooter rentals",
            "Real-time availability",
            "5% commission",
         ],
         color: "from-green-500 to-emerald-400",
      },
      {
         icon: <FaHome />,
         title: "Apartment Rental",
         description: "Find and rent apartments with integrated payment",
         features: [
            "Verified listings",
            "Secure payments",
            "Direct booking",
            "5% commission",
         ],
         color: "from-purple-500 to-pink-400",
      },
      {
         icon: <FaBox />,
         title: "Delivery & Courier",
         description: "Send packages with delivery confirmation",
         features: [
            "Package tracking",
            "Courier confirmation",
            "Secure delivery",
            "5% commission",
         ],
         color: "from-orange-500 to-yellow-400",
      },
      {
         icon: <FaUtensils />,
         title: "Food Delivery",
         description: "Order food from local restaurants",
         features: [
            "Restaurant partners",
            "Live tracking",
            "Order confirmation",
            "5% commission",
         ],
         color: "from-red-500 to-pink-400",
      },
      {
         icon: <FaWrench />,
         title: "Roadside Assistance",
         description: "Get help for vehicle breakdowns",
         features: [
            "Nearby technicians",
            "24/7 service",
            "Quick response",
            "5% commission",
         ],
         color: "from-gray-500 to-gray-400",
      },
   ];

   return (
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#202020]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-100">Our</span>{" "}
                  <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                     Services
                  </span>
               </h2>
               <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  Six comprehensive services integrated into one powerful
                  platform
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {services.map((service, index) => (
                  <div
                     key={index}
                     className="bg-[#2a2a2a] rounded-xl border border-[#3a3a3a] p-6 hover:border-[#6F4918] transition-all duration-300 hover:-translate-y-2"
                  >
                     <div
                        className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
                     >
                        <div className="text-white text-2xl">
                           {service.icon}
                        </div>
                     </div>
                     <h3 className="text-xl font-bold text-gray-100 mb-3">
                        {service.title}
                     </h3>
                     <p className="text-gray-400 mb-4">{service.description}</p>
                     <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                           <li
                              key={idx}
                              className="flex items-center text-sm text-gray-300"
                           >
                              <div className="w-1.5 h-1.5 bg-[#E2CF7D] rounded-full mr-2"></div>
                              {feature}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* Features Banner */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#202020] to-[#2a2a2a] border border-[#3a3a3a]">
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                     <div className="text-3xl font-bold bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent mb-2">
                        1 Point = 1 DA
                     </div>
                     <p className="text-gray-400">
                        Loyalty system for all users
                     </p>
                  </div>
                  <div className="text-center">
                     <div className="text-3xl font-bold bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent mb-2">
                        1000-2000 DA
                     </div>
                     <p className="text-gray-400">
                        Credit limit for active users
                     </p>
                  </div>
                  <div className="text-center">
                     <div className="text-3xl font-bold bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent mb-2">
                        Real-time
                     </div>
                     <p className="text-gray-400">3D tracking on MapLibre</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServicesOverview;
