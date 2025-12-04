import React from "react";
import {
  FaPercentage,
  FaCreditCard,
  FaMoneyBillWave,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";

const PricingCommission = () => {
  const pricing = [
    {
      service: "Towing Service",
      basePrice: "Starting from 1500 DZD",
      commission: "5%",
      payment: "Cash or Card",
      color: "border-red-200 bg-red-50",
    },
    {
      service: "Mechanic On-site",
      basePrice: "Starting from 2000 DZD",
      commission: "5%",
      payment: "Cash or Card",
      color: "border-blue-200 bg-blue-50",
    },
    {
      service: "Battery Service",
      basePrice: "Starting from 1000 DZD",
      commission: "5%",
      payment: "Cash or Card",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      service: "Fuel Delivery",
      basePrice: "Fuel cost + 500 DZD",
      commission: "5%",
      payment: "Cash or Card",
      color: "border-green-200 bg-green-50",
    },
  ];

  const features = [
    {
      icon: <FaPercentage className="text-2xl" />,
      title: "Low 5% Commission",
      description: "Only 5% commission per service - lowest in market",
    },
    {
      icon: <FaCreditCard className="text-2xl" />,
      title: "Flexible Payments",
      description: "Pay with cash or card as per your convenience",
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: "Transparent Pricing",
      description: "See exact costs before confirming service",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Secure Transactions",
      description: "All payments processed securely through app",
    },
    {
      icon: <FaSyncAlt className="text-2xl" />,
      title: "No Hidden Fees",
      description: "What you see is what you pay - no surprises",
    },
  ];

  return (
    <section
      className="py-15 md:py-20 bg-gray-100 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Soft Glow Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(206,170,54,0.4),transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Heading */}
        <div data-aos="zoom-in" className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Cute & Transparent{" "}
            <span className="text-[#CEAA36]">Pricing & Commission</span>
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto text-lg">
            Soft animated cards • Smooth icons • Premium gold highlights ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Pricing Cards */}
          <div className="bg-white/10 rounded-3xl p-4 md:p-8 border border-gray-400/50 backdrop-blur-md shadow-xl">
            <h3
              data-aos="fade-right"
              className="text-2xl md:text-2xl font-bold text-gray-800 mb-8 flex items-center"
            >
              <FaPercentage className="mr-3 text-yellow-400" />
              ALLOGO Service Pricing
            </h3>

            <div className="space-y-5">
              {pricing.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 120}
                  className={`p-6 rounded-xl border ${item.color} backdrop-blur-sm 
                  transition-all duration-700  hover:shadow-xl hover:border-yellow-500/30 relative overflow-hidden`}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-[#CEAA36] to-yellow-500 blur-xl transition-all duration-700"></div>

                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-bold text-gray-800">
                        {item.service}
                      </h4>
                      <span className="px-3 md:px-4 py-1 bg-yellow-500 text-white rounded-full text-sm font-bold shadow-md">
                        {item.commission} Fee
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div>
                        <p className="text-gray-600 text-sm">Base Price</p>
                        <p className="md:text-lg font-bold text-gray-800">
                          {item.basePrice}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Payment</p>
                        <p className="md:text-lg font-semibold text-gray-800">
                          {item.payment}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 120}
                className="bg-white/10 rounded-2xl p-4 md:p-6 border border border-gray-400/30
                backdrop-blur-md shadow-lg  
                hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-start">
                  
                  {/* Icon bubble with cute bounce */}
                  <div
                    className="shrink-0 w-14 h-14 rounded-full 
                    bg-gradient-to-r from-[#CEAA36] to-yellow-500 
                    flex items-center justify-center mr-4
                    transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Comparison Box */}
        <div
          data-aos="zoom-in"
          className="bg-[#b78e3b] 
          rounded-2xl p-4 md:p-8 text-white max-w-2xl mx-auto mt-12 shadow-2xl"
        >
          <h4 className="text-2xl font-extrabold mb-4">Why 5% Commission?</h4>
          <ul className="space-y-3 text-lg">
            {[
              "Lower than competitors (usually 10–20%)",
              "More earnings for service providers",
              "Affordable for customers",
              "Sustainable platform growth",
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingCommission;
