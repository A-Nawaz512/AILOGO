import React from "react";
import {
   GiTowTruck,
   GiCarBattery,
   GiGasPump,
   GiCarWheel,
} from "react-icons/gi";
import { FaTools, FaTruckLoading, FaKey, FaBolt } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const ServicesGrid = () => {
   const services = [
      {
         icon: <GiTowTruck className="text-5xl" />,
         title: "Towing Service",
         description: "Vehicle towing to nearest garage or your preferred location",
         features: ["24/7 Available", "All vehicle types", "GPS tracked"],
      },
      {
         icon: <FaTools className="text-5xl" />,
         title: "Mechanic On-site",
         description: "Certified mechanics come to your location for repairs",
         features: ["Minor repairs", "Diagnostics", "Spare parts available"],
      },
      {
         icon: <GiCarBattery className="text-5xl" />,
         title: "Battery Service",
         description: "Jump-start or battery replacement service",
         features: ["Jump-start", "Battery test", "Replacement"],
      },
      {
         icon: <GiGasPump className="text-5xl" />,
         title: "Fuel Delivery",
         description: "Emergency fuel delivery when you run out",
         features: ["Petrol/Diesel", "Quick delivery", "Safety measures"],
      },
      {
         icon: <GiCarWheel className="text-5xl" />,
         title: "Tire Service",
         description: "Flat tire repair or replacement on the spot",
         features: ["Tire change", "Puncture repair", "New tires available"],
      },
      {
         icon: <FaKey className="text-5xl" />,
         title: "Lockout Service",
         description: "Locked out of your car? We can help!",
         features: ["Key retrieval", "Lock opening", "No damage guarantee"],
      },
      {
         icon: <FaTruckLoading className="text-5xl" />,
         title: "Heavy Duty",
         description: "Towing and assistance for trucks & heavy vehicles",
         features: ["Heavy trucks", "Equipment transport", "Special handling"],
      },
      {
         icon: <MdOutlineMiscellaneousServices className="text-5xl" />,
         title: "Other Services",
         description: "Various emergency roadside services",
         features: ["Overheating help", "Electrical issues", "General assistance"],
      },
   ];

   return (
      <section className="py-15 md:py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
         <div className="container mx-auto px-4">

            {/* TITLE */}
            <div data-aos="fade-up" className="text-center mb-14">
               <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                  Cute & Premium{" "}
                  <span className="text-[#CEAA36]">Roadside Services</span>
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Smooth animations + adorable card effects built for customer love 💛
               </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {services.map((service, index) => (
                  <div
                     key={index}
                     data-aos="zoom-in"
                     data-aos-delay={index * 120}
                     className="relative group bg-white rounded-3xl shadow-lg overflow-hidden 
    border border-gray-200 
    hover:border-[#CEAA36] 
    transition-all duration-900 ease-out
    hover:shadow-2xl
    hover:scale-[1.01]"
                  >
                     {/* Glow gradient border */}
                     <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                     ></div>

                     {/* CARD CONTENT */}
                     <div className="relative z-10 p-7">

                        {/* ICON WITH FLOAT EFFECT */}
                        <div
                           data-aos="fade-down"
                           className="text-[#CEAA36] flex items-center justify-center mb-6 
                  transform group-hover:-translate-y-1 transition-all duration-300"
                        >
                           {service.icon}
                        </div>

                        {/* TITLE */}
                        <h3
                           data-aos="fade-right"
                           className="text-xl font-bold text-gray-800 mb-3 text-center"
                        >
                           {service.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p
                           data-aos="fade-left"
                           className="text-gray-600 mb-5 text-center"
                        >
                           {service.description}
                        </p>

                        {/* FEATURES */}
                        <ul className="space-y-2">
                           {service.features.map((feature, idx) => (
                              <li
                                 data-aos="fade-up"
                                 data-aos-delay={idx * 100}
                                 key={idx}
                                 className="flex items-center text-sm text-gray-500"
                              >
                                 <FaBolt className="text-[#b49955] mr-2 text-sm group-hover:rotate-180 transition-all duration-500" />
                                 {feature}
                              </li>
                           ))}
                        </ul>

                        {/* BUTTON */}
                        <button
                           className="mt-7 w-full py-3 
                  bg-[#CEAA36] text-white font-semibold rounded-xl
                  hover:bg-[#a27e26] hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1"
                        >
                           Learn More
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServicesGrid;
