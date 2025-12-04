import React from "react";
import {
  FaCoins,
  FaExchangeAlt,
  FaGift,
  FaLock,
  FaUnlock,
  FaTrophy,
} from "react-icons/fa";

const CreditPointsSystem = () => {
  return (
    <section
      className="py-15 md:py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Soft Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(206,170,54,0.3),transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div data-aos="zoom-in" className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            <span className="text-[#CEAA36]">Credit & Points</span> System
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Smart, animated systems to engage users and reward providers ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Provider Credit System */}
          <div
            className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-200 hover:shadow-3xl transition-all duration-500 group"
            data-aos="fade-right"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-[#CEAA36] flex items-center justify-center mr-4 transform transition-all duration-500 group-hover:scale-110">
                <FaCoins className="text-2xl text-white animate-bounce-slow" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Provider Credit System
                </h3>
                <p className="text-gray-600">
                  Required credit to unlock new missions
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold text-gray-800">
                    Roadside Assistance
                  </h4>
                  <span className="px-4 py-2 bg-yellow-500 text-white rounded-full font-bold shadow-md">
                    500 DZD
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Initial credit required to start accepting roadside assistance missions
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <FaLock className="mr-2 text-red-500" />
                  <span className="mr-4">Locked without credit</span>
                  <FaUnlock className="mr-2 text-green-500" />
                  <span>Unlocks with 500 DZD credit</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Drivers", value: "1,000 DZD", color: "text-blue-600" },
                  { title: "Delivery", value: "2,000 DZD", color: "text-green-600" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-4 rounded-xl border border-gray-300 group hover:scale-105 hover:shadow-md transition-all duration-300 text-center"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <h5 className="font-bold text-gray-800 mb-2">{item.title}</h5>
                    <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                    <p className="text-sm text-gray-500">Required credit</p>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 p-4 md:p-6 rounded-xl border border-yellow-200 flex items-center group hover:shadow-lg transition-all duration-500">
                <FaGift className="hidden md:flex text-2xl text-yellow-600 mr-3 animate-bounce-slow" />
                <div>
                  <h4 className="font-bold text-gray-800">Credit Usage</h4>
                  <p className="text-gray-600 text-sm">
                    Credit is deducted only when you accept a mission. Refill anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User Points System */}
          <div
            className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-200 hover:shadow-3xl transition-all duration-500 group"
            data-aos="fade-left"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#CEAA36] to-yellow-600 flex items-center justify-center mr-4 transform transition-all duration-500 group-hover:scale-110">
                <FaTrophy className="text-2xl text-white animate-bounce-slow" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">User Points System</h3>
                <p className="text-gray-600">1 Point = 1 DZD value</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 md:p-6 rounded-xl border border-orange-200 group hover:shadow-lg transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-600 to-[#CEAA36] text-white px-6 py-3 rounded-full mb-4 transform transition-all duration-500 group-hover:scale-105">
                    <FaExchangeAlt className="mr-2 animate-spin-slow" />
                    Point Transfer Feature
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Motivate Providers with Points
                  </h4>
                  <p className="text-gray-600">
                    Transfer your points to service providers as appreciation
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Users", desc: "Give points to providers" },
                    { title: "Providers", desc: "Receive points from users" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-2 md:p-4 rounded-xl border border-orange-200 text-center group hover:scale-105 hover:shadow-md transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={idx * 100}
                    >
                      <div className="text-xl md:text-2xl font-bold text-yellow-500 mb-1">{item.title}</div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                      <div className="mt-2 text-xs text-gray-500">Points from services</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-lg">Points Can Be Used For:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Unlock new missions", "Purchase credit", "Pay for services", "Get discounts"].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 rounded-lg group hover:bg-yellow-50 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-3 transform group-hover:scale-110 transition-all duration-500">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreditPointsSystem;
