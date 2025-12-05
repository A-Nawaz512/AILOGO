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
    <section className="py-8 md:py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(206,170,54,0.3),transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="flex justify-center items-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
          <h2 className="text-2xl md:text-4xl font-bold text-center">
      Credit &
      <span className="text-[#B78E3B]"> Points System</span>
    </h2>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
        </div>
        <p className="text-center text-gray-700 max-w-2xl mx-auto text-lg mb-14">
          Engage users and reward providers with smart credit and points system
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Provider Credit System */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200 hover:shadow-3xl transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] flex items-center justify-center mr-4">
                <FaCoins className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Provider Credit System
                </h3>
                <p className="text-gray-600">
                  Required credit to unlock new missions
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/40 p-6 rounded-2xl border border-gray-200 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-gray-800">Roadside Assistance</h4>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white rounded-full font-bold shadow-md">
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
                  { title: "Drivers", value: "1,000 DZD" },
                  { title: "Delivery", value: "2,000 DZD" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-2xl border border-gray-200 group hover:scale-105 hover:shadow-lg transition-all duration-500 text-center"
                  >
                    <h5 className="font-bold text-gray-800 mb-2">{item.title}</h5>
                    <p className="text-2xl font-bold text-[#6F4918]">{item.value}</p>
                    <p className="text-sm text-gray-500">Required credit</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] p-4 md:p-6 rounded-2xl flex items-center text-white">
                <FaGift className="mr-3 text-2xl" />
                <div>
                  <h4 className="font-bold text-lg">Credit Usage</h4>
                  <p className="text-sm">
                    Credit is deducted only when you accept a mission. Refill anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User Points System */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200 hover:shadow-3xl transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] flex items-center justify-center mr-4">
                <FaTrophy className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">User Points System</h3>
                <p className="text-gray-600">1 Point = 1 DZD value</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/40 p-6 rounded-2xl border border-gray-200 group hover:shadow-xl transition-all duration-500">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white px-6 py-3 rounded-full mb-4">
                    <FaExchangeAlt className="mr-2" />
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
                      className="bg-white p-4 rounded-2xl border border-gray-200 text-center group hover:scale-105 hover:shadow-lg transition-all duration-500"
                    >
                      <div className="text-xl md:text-2xl font-bold text-[#6F4918] mb-1">{item.title}</div>
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
                      className="flex items-center p-3 bg-gray-50 rounded-xl group hover:bg-yellow-50 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] flex items-center justify-center mr-3">
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
