import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaFire } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import carImg from "../../assets/rentall1.jpg";
import bikeImg from "../../assets/rentall2.jpg";
import deliveryImg from "../../assets/slide2.jpg";
import toolsImg from "../../assets/rb3.jpg";
import homeImg from "../../assets/home.jpg";
import keyImg from "../../assets/key.jpg";

const FreeServices = () => {
  const [progress, setProgress] = useState(7);

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  const freeServices = [
    { image: carImg, title: "Car Rides", count: "3 free rides", description: "Get 3 free car rides when you start" },
    { image: bikeImg, title: "Motorcycle Rides", count: "2 free rides", description: "2 free motorcycle rides included" },
    { image: deliveryImg, title: "Deliveries", count: "3 free deliveries", description: "Free food, pharmacy, or package delivery" },
    { image: toolsImg, title: "Roadside Assistance", count: "2 free services", description: "Free towing or mechanic service" },
    { image: homeImg, title: "Rental Services", count: "2 free rentals", description: "Free vehicle or apartment rental" },
    { image: keyImg, title: "Other Services", count: "3 free services", description: "Additional free services" },
  ];

  const percentage = (progress / 15) * 100;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-3">

        {/* Heading */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center justify-center w-full mb-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl font-bold text-center">
      15 Free
      <span className="text-[#B78E3B]"> Services</span>
    </h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
          <p className="text-center text-gray-600 text-lg max-w-xl">
            Start your journey with ALLOGO and enjoy commission-free services for new providers.
          </p>
        </div>

        {/* Progress Section */}
        <div className="max-w-3xl mx-auto mb-14 p-7 bg-white rounded-3xl shadow-xl border border-[#E2CF7D]/50" data-aos="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">Your Progress</h3>
              <p className="text-gray-600">Free services used: {progress}/15</p>
            </div>

            <div className="flex items-center bg-gradient-to-r from-[#B78E3B] to-[#E2CF7D] text-white px-5 py-2.5 rounded-full font-bold shadow-lg">
              <FaFire className="mr-2 animate-pulse" /> New Provider
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 font-medium mb-7 px-1">
            <span>0 services</span>
            <span className="font-bold text-[#6F4918]">{15 - progress} remaining</span>
            <span>15 services</span>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => progress < 15 && setProgress(progress + 1)}
              className="w-full sm:w-auto min-w-[170px] bg-gradient-to-r from-[#B78E3B] to-[#E2CF7D] hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md"
            >
              <FaPlus className="text-lg" /> Add
            </button>

            <button
              onClick={() => progress > 0 && setProgress(progress - 1)}
              className="w-full sm:w-auto min-w-[170px] bg-gradient-to-r from-[#D9534F] to-[#F28F8F] hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md"
            >
              <FaMinus className="text-lg" /> Remove
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 mb-16">
          {freeServices.map((service, idx) => (
            <div key={idx} className="group cursor-pointer" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 h-full">

                {/* Image Section */}
                <div className="relative overflow-hidden h-36">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-110"
                  />

                  {/* Count Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white px-3 py-1.5 rounded-lg font-bold shadow-lg">
                    {service.count}
                  </div>

                  {/* Smooth Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text Section */}
                <div className="p-5 h-44 flex flex-col">
                  <h4 className="text-lg font-bold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-[#6F4918]">
                    {service.title}
                  </h4>

                  <p className="text-gray-600 mb-3 flex-grow text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-sm text-[#6F4918] font-semibold">
                      Included in free package
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
      

      </div>
    </section>
  );
};

export default FreeServices;
