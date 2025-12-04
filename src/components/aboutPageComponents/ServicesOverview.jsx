// src/components/about/ServicesOverview.jsx
import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import {
   FaCar,
   FaKey,
   FaHome,
   FaBox,
   FaUtensils,
   FaWrench,
   FaArrowRight,
} from "react-icons/fa";

const ServicesOverview = () => {
   const services = [
      {
         id: "rides",
         icon: <FaCar className="text-[#B78E3B] text-2xl" />,
         title: "VTC Transport",
         description:
            "Book rides with choice of driver gender, vehicle type, and destination",
         features: [
            "Male/Female drivers",
            "Car/Moto options",
            "Inter/Intra-wilaya",
            "9% commission",
         ],
         path: "/services/rides",
         buttonText: "Book a Ride",
      },
      {
         id: "vehicle-rental",
         icon: <FaKey className="text-[#B78E3B] text-2xl" />,
         title: "Vehicle Rental",
         description: "Rent cars and scooters with availability management",
         features: [
            "Car rentals",
            "Scooter rentals",
            "Real-time availability",
            "5% commission",
         ],
         path: "/services/rentals",
         buttonText: "Rent Now",
      },
      {
         id: "apartment-rental",
         icon: <FaHome className="text-[#B78E3B] text-2xl" />,
         title: "Apartment Rental",
         description: "Find and rent apartments with integrated payment",
         features: [
            "Verified listings",
            "Secure payments",
            "Direct booking",
            "5% commission",
         ],
         path: "/services/apartments",
         buttonText: "Find Apartments",
      },
      {
         id: "delivery",
         icon: <FaBox className="text-[#B78E3B] text-2xl" />,
         title: "Delivery & Courier",
         description: "Send packages with delivery confirmation",
         features: [
            "Package tracking",
            "Courier confirmation",
            "Secure delivery",
            "5% commission",
         ],
         path: "/services/deliveries",
         buttonText: "Send Package",
      },
      {
         id: "food-delivery",
         icon: <FaUtensils className="text-[#B78E3B] text-2xl" />,
         title: "Food Delivery",
         description: "Order food from local restaurants",
         features: [
            "Restaurant partners",
            "Live tracking",
            "Order confirmation",
            "5% commission",
         ],
         path: "/services/food",
         buttonText: "Order Food",
      },
      {
         id: "roadside-assistance",
         icon: <FaWrench className="text-[#B78E3B] text-2xl" />,
         title: "Roadside Assistance",
         description: "Get help for vehicle breakdowns",
         features: [
            "Nearby technicians",
            "24/7 service",
            "Quick response",
            "5% commission",
         ],
         path: "/services/assistance",
         buttonText: "Get Help",
      },
   ];

   return (
      <section className="pb-20 px-6 lg:px-8 bg-white">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2
                  className="text-4xl  md:text-5xl font-bold mb-6 flex items-center justify-center gap-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
               >
                  <div className="pb-3">
                     <span className="text-[#2a2a2a]">Our</span>{" "}
                     <span className="text-[#B78E3B]">Services</span>
                  </div>
               </h2>
               <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Six comprehensive services integrated into one powerful
                  platform
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               {services.map((service, index) => (
                  <div
                     key={index}
                     className="relative rounded-xl bg-white shadow-lg hover:shadow-xl  border-2 border-[#A68748] p-6 hover:border-[#B78E3B] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden group"
                  >
                     {/* Content */}
                     <div className="relative z-10">
                        <div>
                           <div className="flex items-center justify-between pb-3 gap-3">
                              <h3 className="text-xl font-bold text-[#202020]">
                                 {service.title}
                              </h3>
                              {service.icon}
                           </div>
                           <p className="text-gray-500 mb-4">
                              {service.description}
                           </p>
                           <ul className="space-y-2 mb-6 grid md:grid-cols-2">
                              {service.features.map((feature, idx) => (
                                 <li
                                    key={idx}
                                    className="flex items-center text-sm text-gray-700"
                                 >
                                    <div className="w-1.5 h-1.5 bg-[#E2CF7D] rounded-full mr-2"></div>
                                    {feature}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        {/* Explore Button */}
                        <div className="mt-auto pt-4 border-t border-[#3a3a3a]/50 flex items-center justify-center">
                           <Link
                              to={service.path}
                              className="relative z-20 flex items-center justify-between group bg-[#B78E3B] hover:bg-[#997630] w-fit py-3 px-5 gap-8 rounded-full transition-all duration-500"
                           >
                              <span className="text-[#f1f0e9] font-medium group-hover:text-white transition-colors duration-300">
                                 {service.buttonText}
                              </span>
                              <FaArrowRight className="text-[#E2CF7D] group-hover:text-white group-hover:translate-x-2 transition-transform duration-300" />
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Features Banner with CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-white shadow-2xl shadow-3xl border border-[#D4BE71]">
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                     <div className="text-3xl font-bold bg-[#B78E3B] bg-clip-text text-transparent mb-2">
                        1 Point = 1 DA
                     </div>
                     <p className="text-gray-700">
                        Loyalty system for all users
                     </p>
                  </div>
                  <div className="text-center">
                     <div className="text-3xl font-bold bg-[#B78E3B] bg-clip-text text-transparent mb-2">
                        1000-2000 DA
                     </div>
                     <p className="text-gray-700">
                        Credit limit for active users
                     </p>
                  </div>
                  <div className="text-center">
                     <div className="text-3xl font-bold bg-[#B78E3B] bg-clip-text text-transparent mb-2">
                        Real-time
                     </div>
                     <p className="text-gray-700">3D tracking on MapLibre</p>
                  </div>
               </div>

               {/* Global Explore Button */}
               <div className="text-center mt-10">
                  <Link
                     to="/services"
                     className="inline-flex items-center px-8 py-2 md:py-4 bg-[#B78E3B] text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                     <span>Explore All</span>
                     <FaArrowRight className="ml-3 " />
                  </Link>
                  <p className="text-gray-800 text-sm mt-3">
                     Access all 6 services from one dashboard
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServicesOverview;
