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
    },
    {
      service: "Mechanic On-site",
      basePrice: "Starting from 2000 DZD",
      commission: "5%",
      payment: "Cash or Card",
    },
    {
      service: "Battery Service",
      basePrice: "Starting from 1000 DZD",
      commission: "5%",
      payment: "Cash or Card",
    },
    {
      service: "Fuel Delivery",
      basePrice: "Fuel cost + 500 DZD",
      commission: "5%",
      payment: "Cash or Card",
    },
  ];

  const features = [
    {
      icon: <FaPercentage />,
      title: "Low 5% Commission",
      description: "Only 5% commission per service - lowest in market",
    },
    {
      icon: <FaCreditCard />,
      title: "Flexible Payments",
      description: "Pay with cash or card as per your convenience",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Transparent Pricing",
      description: "See exact costs before confirming service",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Transactions",
      description: "All payments processed securely through app",
    },
    {
      icon: <FaSyncAlt />,
      title: "No Hidden Fees",
      description: "What you see is what you pay - no surprises",
    },
  ];

  return (
    <section className="py-8 md:py-20 bg-gray-100 relative overflow-hidden">

      {/* Heading */}
      <div className="flex justify-center items-center mb-8" data-aos="zoom-in">
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#B78E3B] mr-3"></div>
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          AllLogo <span className="text-[#B78E3B]">Roadside Assistance</span>
        </h2>
        <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#B78E3B] ml-3"></div>
      </div>

      <p className="text-center text-gray-800 max-w-2xl mx-auto text-lg mb-14">
        Fast, secure, and affordable roadside services with transparent pricing ✨
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Pricing Cards */}
        <div className="space-y-5">
          {pricing.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="relative p-5 rounded-3xl bg-white/40 backdrop-blur-md border border-gray-200 
              shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(.25,.1,.25,1)]
              will-change-transform overflow-hidden"
            >

              {/* NO COLOR ON HOVER ANYMORE */}

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-2xl font-extrabold bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] 
                  bg-clip-text text-transparent">
                    {item.service}
                  </h4>

                  <span className="px-3 py-1 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] 
                  text-white rounded-full text-xs font-bold shadow-md">
                    {item.commission} Fee
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-gray-600 text-sm">Base Price</p>
                    <p className="font-semibold text-gray-800">{item.basePrice}</p>
                  </div>

                  <div>
                    <p className="text-gray-600 text-sm">Payment</p>
                    <p className="font-semibold text-gray-800">{item.payment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="space-y-5">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-white/40 backdrop-blur-md rounded-3xl p-5 border border-gray-200 shadow-md 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(.25,.1,.25,1)]
              will-change-transform"
            >
              <div className="flex items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] 
                flex items-center justify-center mr-4 transform transition-all duration-500 
                ease-[cubic-bezier(.25,.1,.25,1)]">
                  <div className="text-white text-xl">{feature.icon}</div>
                </div>

                <div>
                  <h4 className="text-2xl font-extrabold mb-1 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] 
                  bg-clip-text text-transparent">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Box */}
   <div
  data-aos="zoom-in"
  className="relative rounded-3xl p-12 text-white max-w-5xl mx-auto mt-12 shadow-2xl overflow-hidden"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Gradient Overlay with opacity */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#6F4918]/70 to-[#E2CF7D]/30"></div>

  <div className="relative z-10">
    <h4 className="text-3xl md:text-4xl font-extrabold mb-6">
      Why Only 5% Commission?
    </h4>
    <ul className="space-y-3 text-lg">
      {[
        "Lower than competitors (usually 10–20%)",
        "More earnings for service providers",
        "Affordable for customers",
        "Sustainable platform growth",
      ].map((item, i) => (
        <li key={i} className="flex items-start">
          <div className="w-3 h-3 bg-white rounded-full mr-3 mt-1"></div>
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
