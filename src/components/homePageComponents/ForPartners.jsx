import React from "react";
import { FaCoins, FaCreditCard, FaCheckCircle, FaMapMarkedAlt } from "react-icons/fa";

export const ForPartners = () => {
  const benefits = [
    {
      icon: FaCoins,
      title: "Points System",
      description: "Earn points on all transactions (1 point = 1 DA) and redeem or transfer to providers."
    },
    {
      icon: FaCreditCard,
      title: "Credit Facility",
      description: "Active users can access 1000-2000 DA credit based on loyalty and activity."
    },
    {
      icon: FaCheckCircle,
      title: "Verified Providers",
      description: "All drivers, delivery personnel, and property owners are validated by ALLOGO."
    },
    {
      icon: FaMapMarkedAlt,
      title: "Real-time 3D Tracking",
      description: "All services are visualized live on MapLibre 3D for transparency and trust."
    }
  ];

  return (
    <div className="bg-white py-3 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center">
            <div className="h-px mt-2 w-12  bg-gradient-to-r from-transparent to-[#6F4918] mr-4"></div>
            <h2 className="text-2xl text-[#1E2939] md:text-4xl font-bold ">
              Partner <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">Benefits</span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#6F4918] ml-4"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Incentives, rewards, and real-time tracking for all ALLOGO providers
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid w-full sm:w-[80%] mx-auto md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition-transform transform border border-[#b78e3b94] hover:border-[#6F4918] hover:-translate-y-1"
              >
                <div
                  className="p-4 rounded-lg sm:w-12 w-12 sm:h-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]"
                >
                  <Icon className="h-4 sm:w-6 w-4 sm:h-6 text-[white]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
