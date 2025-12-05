import React from "react";
import {
  GiTowTruck,
  GiCarBattery,
  GiGasPump,
  GiCarWheel,
} from "react-icons/gi";
import { FaTools, FaKey, FaBolt } from "react-icons/fa";

const ServicesGrid = () => {
  const services = [
    {
      icon: <GiTowTruck className="text-4xl md:text-5xl" />,
      title: "Towing Service",
      description: "Vehicle towing to the nearest garage or your preferred location",
      features: ["24/7 Available", "All vehicle types", "GPS tracked"],
    },
    {
      icon: <FaTools className="text-4xl md:text-5xl" />,
      title: "Mechanic On-site",
      description: "Certified mechanics come to your location for repairs",
      features: ["Minor repairs", "Diagnostics", "Spare parts available"],
    },
    {
      icon: <GiCarBattery className="text-4xl md:text-5xl" />,
      title: "Battery Service",
      description: "Jump-start or battery replacement service",
      features: ["Jump-start", "Battery test", "Replacement"],
    },
    {
      icon: <GiGasPump className="text-4xl md:text-5xl" />,
      title: "Fuel Delivery",
      description: "Emergency fuel delivery when you run out",
      features: ["Petrol/Diesel", "Quick delivery", "Safety measures"],
    },
    {
      icon: <GiCarWheel className="text-4xl md:text-5xl" />,
      title: "Tire Service",
      description: "Flat tire repair or replacement on the spot",
      features: ["Tire change", "Puncture repair", "New tires available"],
    },
    {
      icon: <FaKey className="text-4xl md:text-5xl" />,
      title: "Lockout Service",
      description: "Locked out of your car? We can help!",
      features: ["Key retrieval", "Lock opening", "No damage guarantee"],
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-20">

        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center mb-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Cute & Premium
              <span className="text-[#B78E3B]"> Roadside Services</span>
            </h2>

            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>

          <p className="text-gray-600 max-w-xl text-center">
            Smooth card effects built for customer love 💛
          </p>
        </div>

        {/* Smaller & Centered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-md border border-gray-200 
              hover:border-[#B78E3B] hover:shadow-xl hover:-translate-y-2 
              transition-all duration-500 w-[90%] sm:w-[85%] md:w-[80%] xl:w-[83%]"
            >
              <div className="p-6 flex flex-col items-center text-center">

                {/* Icon */}
                <div className="text-[#B78E3B] mb-4 transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5 text-sm">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center justify-center text-gray-500">
                      <FaBolt className="text-[#b49955] mr-2 text-sm" /> {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full py-2.5 bg-[#B78E3B] text-white rounded-lg font-semibold
                  hover:bg-[#a27e26] transition-all duration-300">
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
