import React from "react";
import {
  FaMapMarkerAlt,
  FaCar,
  FaTools,
  FaCreditCard,
  FaStar,
} from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: "Set Location",
      description: "Pin your exact location on the map or use current GPS",
      color: "bg-blue-100 text-blue-600",
      number: "01",
    },
    {
      icon: <GiPathDistance className="text-4xl" />,
      title: "Choose Service",
      description:
        "Select from towing, mechanic, battery, fuel, or tire service",
      color: "bg-green-100 text-green-600",
      number: "02",
    },
    {
      icon: <FaCar className="text-4xl" />,
      title: "View Providers",
      description: "See available service providers with ratings and ETA",
      color: "bg-purple-100 text-purple-600",
      number: "03",
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Get Help",
      description: "Provider arrives and performs the required service",
      color: "bg-orange-100 text-orange-600",
      number: "04",
    },
    {
      icon: <FaCreditCard className="text-4xl" />,
      title: "Secure Payment",
      description: "Pay cash or card directly in the app",
      color: "bg-teal-100 text-teal-600",
      number: "05",
    },
    {
      icon: <FaStar className="text-4xl" />,
      title: "Rate Service",
      description: "Rate your experience and help improve the community",
      color: "bg-yellow-100 text-yellow-600",
      number: "06",
    },
  ];

  return (
    <section
      className="py-15 md:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94)), url('https://images.unsplash.com/photo-1519861531473-920034658307?auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        
        {/* TITLE */}
        <div data-aos="zoom-in" className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Cute & Smooth{" "}
            <span className="text-[#CEAA36]">How It Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            6 adorable steps with animated icons and soft transitions ✨
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="relative group"
            >
              <div
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 
                transition-all duration-500 group-hover:-translate-y-2 
                group-hover:shadow-2xl group-hover:border-[#CEAA36]
                relative overflow-hidden"
              >
                
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 
                bg-gradient-to-r from-[#CEAA36] to-yellow-400 blur-xl transition-all duration-700"></div>

                <div className="relative flex items-start">
                  
                  {/* ICON with cute animation */}
                  <div
                    data-aos="zoom-in"
                    className={`shrink-0 w-16 h-16 rounded-full ${step.color}
                    flex items-center justify-center mr-4 transform 
                    transition-all duration-500 group-hover:scale-110 
                    group-hover:rotate-6`}
                  >
                    {step.icon}
                  </div>

                  {/* TEXT */}
                  <div className="relative">
                    <div
                      data-aos="fade-down"
                      className="text-4xl font-extrabold text-gray-300 absolute -top-2 right-3 opacity-70 tracking-wide 
                      group-hover:text-[#CEAA36] transition-all duration-500"
                    >
                      {step.number}
                    </div>

                    <h3
                      data-aos="fade-right"
                      className="text-xl font-bold text-gray-800 mb-3"
                    >
                      {step.title}
                    </h3>

                    <p
                      data-aos="fade-left"
                      className="text-gray-600"
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Cute arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2">
                    <div
                      data-aos="zoom-in"
                      className="w-8 h-0.5 bg-gradient-to-r from-[#CEAA36] to-yellow-400"
                    ></div>
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#CEAA36] to-yellow-400 ml-3.5"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <div
            data-aos="zoom-in"
            className="inline-flex items-center justify-center 
            bg-gradient-to-r from-[#CEAA36] to-yellow-500 
            text-white px-7 md:px-10 py-4 rounded-full text-lg shadow-xl 
            font-bold hover:scale-101 transition-all duration-700  text-sm md:text-lg"
          >
            <FaTools className="mr-3" />
            Average Response Time: 15-20 Minutes
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
