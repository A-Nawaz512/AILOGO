// src/components/about/ServicesOverview.jsx
import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesOverview = () => {
   const services = [
      {
         id: "rides",
         icon: <FaCar className="text-white text-2xl" />,
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
         icon: <FaKey className="text-white text-2xl" />,
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
         icon: <FaHome className="text-white text-2xl" />,
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
         icon: <FaBox className="text-white text-2xl" />,
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
         icon: <FaUtensils className="text-white text-2xl" />,
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
         icon: <FaWrench className="text-white text-2xl" />,
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
      <section className="py-20 px-6 lg:px-8 bg-white">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
               >
                  <span className="text-[#202020]">Our</span>{" "}
                  <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                     Services
                  </span>
               </h2>
               <p
                  className="text-gray-400 text-lg max-w-3xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="200"
               >
                  Six comprehensive services integrated into one powerful
                  platform
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               {services.map((service, index) => (
                  <div
                     key={index}
                     className="relative rounded-xl border border-[#3a3a3a] p-6 hover:border-[#6F4918] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
                     data-aos="fade-up"
                     data-aos-delay={300 + index * 50} // Staggered delays
                  >
                     {/* Background Image */}
                     <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/simple2.jpg')" }}
                     >
                        <div className="absolute inset-0 bg-black/70"></div>
                     </div>

                     <div className="relative z-10">
                        <div className="flex items-center justify-between pb-3 gap-3">
                           <h3 className="text-xl font-bold text-gray-100">
                              {service.title}
                           </h3>
                           {service.icon}
                        </div>
                        <p className="text-gray-300 mb-4">
                           {service.description}
                        </p>
                        <ul className="space-y-2 mb-6 grid md:grid-cols-2">
                           {service.features.map((feature, idx) => (
                              <li
                                 key={idx}
                                 className="flex items-center text-sm text-gray-200"
                              >
                                 <div className="w-1.5 h-1.5 bg-[#E2CF7D] rounded-full mr-2"></div>
                                 {feature}
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* Explore Button */}
                     <div className="mt-auto pt-4 border-t border-gray-600 flex justify-center relative z-10">
                        <Link
                           to={service.path}
                           className="flex items-center justify-between group bg-[#6F4918] p-4 px-8 rounded-full w-fit gap-6"
                        >
                           <span className="text-[#E2CF7D] font-medium group-hover:text-white transition-colors duration-300">
                              {service.buttonText}
                           </span>
                           <FaArrowRight className="text-[#E2CF7D] group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                     </div>
                  </div>
               ))}
            </div>

            {/* Features Banner with CTA */}
            <div
               className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#202020] to-[#2a2a2a] border border-[#3a3a3a]"
               data-aos="fade-up"
               data-aos-delay="600"
            >
               <div className="grid md:grid-cols-3 gap-8">
                  <div
                     className="text-center"
                     data-aos="fade-up"
                     data-aos-delay="700"
                  >
                     <div className="text-3xl font-bold bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent mb-2">
                        1 Point = 1 DA
                     </div>
                     <p className="text-gray-400">
                        Loyalty system for all users
                     </p>
                  </div>
                  <div
                     className="text-center"
                     data-aos="fade-up"
                     data-aos-delay="750"
                  >
                     <div className="text-3xl font-bold bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent mb-2">
                        1000-2000 DA
                     </div>
                     <p className="text-gray-400">
                        Credit limit for active users
                     </p>
                  </div>
                  <div
                     className="text-center"
                     data-aos="fade-up"
                     data-aos-delay="800"
                  >
                     <div className="text-3xl font-bold bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent mb-2">
                        Real-time
                     </div>
                     <p className="text-gray-400">3D tracking on MapLibre</p>
                  </div>
               </div>

               {/* Global Explore Button */}
               <div
                  className="text-center mt-10"
                  data-aos="fade-up"
                  data-aos-delay="850"
               >
                  <Link
                     to="/services"
                     className="inline-flex items-center px-8 py-2 md:py-4 bg-gradient-to-r from-[#6F4918] via-[#6F4918] to-[#E2CF7D] text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                     <span>Explore All</span>
                     <FaArrowRight className="ml-3 animate-pulse" />
                  </Link>
                  <p className="text-gray-400 text-sm mt-3">
                     Access all 6 services from one dashboard
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServicesOverview;
