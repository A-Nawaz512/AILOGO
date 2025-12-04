import React, { useState } from "react";
import {
  FaGift,
  FaFire,
  FaCar,
  FaMotorcycle,
  FaShippingFast,
  FaTools,
  FaHome,
  FaKey,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const FreeServices = () => {
  const [progress, setProgress] = useState(7);

  const freeServices = [
    {
      icon: <FaCar className="text-2xl" />,
      title: "Car Rides",
      count: "3 free rides",
      description: "Get 3 free car rides when you start",
      value: 3,
    },
    {
      icon: <FaMotorcycle className="text-2xl" />,
      title: "Motorcycle Rides",
      count: "2 free rides",
      description: "2 free motorcycle rides included",
      value: 2,
    },
    {
      icon: <FaShippingFast className="text-2xl" />,
      title: "Deliveries",
      count: "3 free deliveries",
      description: "Free food, pharmacy, or package delivery",
      value: 3,
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Roadside Assistance",
      count: "2 free services",
      description: "Free towing or mechanic service",
      value: 2,
    },
    {
      icon: <FaHome className="text-2xl" />,
      title: "Rental Services",
      count: "2 free rentals",
      description: "Free vehicle or apartment rental",
      value: 2,
    },
    {
      icon: <FaKey className="text-2xl" />,
      title: "Other Services",
      count: "3 free services",
      description: "Additional free services",
      value: 3,
    },
  ];

  const percentage = (progress / 15) * 100;

  const handleAddService = () => {
    if (progress < 15) setProgress(progress + 1);
  };

  const handleRemoveService = () => {
    if (progress > 0) setProgress(progress - 1);
  };

  const handleReset = () => setProgress(0);
  const handleUseAll = () => setProgress(15);

  return (
    <section className="py-15 relative overflow-hidden bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-[#CEAA36] text-white px-6 py-3 rounded-full mb-6  ">
            <FaGift className="mr-2 text-xl" />
            <span className="font-bold">New Provider Bonus</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-yellow-600">15 Free Services</span> for New Providers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Start your journey with ALLOGO and enjoy commission-free services
          </p>
        </div>

   {/* Progress Bar */}
<div className="max-w-4xl mx-auto mb-8 px-3 sm:px-6 lg:px-0">
  <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-orange-200">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
      <div className="mb-2 sm:mb-0">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Your Progress</h3>
        <p className="text-gray-600 text-sm sm:text-base">Free services used: {progress}/15</p>
      </div>
      <div className="flex items-center bg-orange-100 text-yellow-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base">
        <FaFire className="mr-2 animate-bounce" />
        <span className="font-bold">New Provider</span>
      </div>
    </div>

    {/* Progress Bar */}
    <div className="mb-4">
      <div className="h-4 sm:h-5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#CEAA36] to-yellow-400 rounded-full transition-all duration-1000 animate-pulse"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 mt-2 gap-1 sm:gap-0">
        <span>0 services</span>
        <span className="font-bold">{15 - progress} free services remaining</span>
        <span>15 services</span>
      </div>
    </div>

    {/* Controls */}
    <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
      <button
        onClick={handleAddService}
        disabled={progress >= 15}
        className="flex-1 min-w-[120px] bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center text-sm sm:text-base"
      >
        <FaPlus className="mr-2" /> Add Service
      </button>
      <button
        onClick={handleRemoveService}
        disabled={progress <= 0}
        className="flex-1 min-w-[120px] bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center text-sm sm:text-base"
      >
        <FaMinus className="mr-2" /> Remove Service
      </button>
      <button
        onClick={handleReset}
        className="flex-1 min-w-[120px] bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 text-sm sm:text-base"
      >
        Reset
      </button>
      <button
        onClick={handleUseAll}
        className="flex-1 min-w-[120px] bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 text-sm sm:text-base"
      >
        Use All
      </button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 shadow-md text-center">
        <div className="text-2xl sm:text-3xl font-bold text-orange-600 animate-pulse">{progress}</div>
        <div className="text-gray-700 text-sm sm:text-base">Services Used</div>
      </div>
      <div className="bg-green-50 p-4 rounded-xl border border-green-200 shadow-md text-center">
        <div className="text-2xl sm:text-3xl font-bold text-green-600 animate-pulse">{15 - progress}</div>
        <div className="text-gray-700 text-sm sm:text-base">Services Remaining</div>
      </div>
      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-md text-center">
        <div className="text-2xl sm:text-3xl font-bold text-blue-600 animate-pulse">
          {progress === 15 ? "5%" : "0%"}
        </div>
        <div className="text-gray-700 text-sm sm:text-base">Commission Rate</div>
      </div>
    </div>
  </div>
</div>


 {/* Free Services Grid */}
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 px-4 sm:px-6 lg:px-0">
  {freeServices.map((service, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-3 sm:mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 flex items-center justify-center mr-0 sm:mr-4 mb-2 sm:mb-0 shadow-md animate-pulse">
          <div className="text-white text-lg sm:text-xl">{service.icon}</div>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-base sm:text-lg">{service.title}</h4>
          <p className="text-yellow-600 font-bold text-sm sm:text-base">{service.count}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{service.description}</p>
      <div className="flex items-center text-xs sm:text-sm text-gray-500">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
        Included in free package
      </div>
    </div>
  ))}
</div>


        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-[#CEAA36] rounded-2xl p-4 md:p-8 text-white shadow-lg  ">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-6 animate-bounce">After 15 Free Services:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-3">Normal Commission Applies</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                  Roadside Assistance: 5% commission
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                  Rides/Drivers: 7% commission
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                  Deliveries: 5% commission
                </li>
              </ul>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-3">Continuous Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                  Priority in customer searches
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                  Access to premium features
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                  Higher visibility on map
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeServices;
