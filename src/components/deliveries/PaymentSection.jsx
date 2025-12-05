import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const pricingData = {
  distance: "12 km",
  time: "25 mins",
  vehicle: "Motorbike",
  baseFee: 150,
  distanceFee: 60,
  timeFee: 40,
  total: 250,
};

const PaymentSection = () => {
  const [selectedPayment, setSelectedPayment] = useState("cash");
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const confirmPayment = () => {
    setIsConfirmed(true);
    setTimeout(() => setIsConfirmed(false), 3000);
  };

  const paymentMethods = [
    { id: "cash", icon: "💵", label: "Cash", color: "from-[#6F4918] to-[#E2CF7D]" },
    { id: "card", icon: "💳", label: "Card", color: "from-[#B78E3B] to-[#E2CF7D]" },
    { id: "wallet", icon: "👛", label: "Wallet / Balance", color: "from-[#6F4918] to-[#B78E3B]" },
  ];

  const feeItems = [
    { label: `Distance (${pricingData.distance})`, value: `${pricingData.distanceFee} DZD`, icon: "📍" },
    { label: `Time (${pricingData.time})`, value: `${pricingData.timeFee} DZD`, icon: "⏱️" },
    { label: "Vehicle Type", value: pricingData.vehicle, icon: "🏍️" },
    { label: "Base Fee", value: `${pricingData.baseFee} DZD`, icon: "💰" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fefcf2] py-16 px-4">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-16">
        <h2
          className="text-4xl md:text-4xl font-extrabold text-center text-[#6F4918] drop-shadow-md mb-4"
          data-aos="fade-down"
        >
          💳 Pricing & Payment
        </h2>
        <p className="text-gray-600 text-center max-w-2xl" data-aos="fade-down" data-aos-delay="100">
          Auto-calculated delivery fee with transparent breakdown
        </p>
      </div>

      {/* Confirmation Message */}
      {isConfirmed && (
        <div className="max-w-5xl mx-auto mb-8" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-green-500 to-green-400 text-white p-6 rounded-2xl shadow-xl text-center flex items-center justify-center gap-4">
            <span className="text-2xl">✅</span>
            <span className="text-xl font-bold">Payment Confirmed! Your delivery is on the way.</span>
          </div>
        </div>
      )}

      {/* Pricing Card */}
      <div
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border-l-8 border-[#B78E3B] relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#fff8e5] to-transparent rounded-full -mr-32 -mt-32"></div>
        
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-[#6F4918] mb-8 flex items-center gap-3">
            <span>📊 Delivery Fee Breakdown</span>
          </h3>

          {/* Fee Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {feeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-6 bg-gradient-to-r from-[#FFF8E5] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#f0e6cc] hover:border-[#E2CF7D] group"
                data-aos="fade-right"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="font-medium text-gray-700 block">{item.label}</span>
                    <span className="text-sm text-gray-500">Auto-calculated</span>
                  </div>
                </div>
                <span className="font-bold text-xl text-[#B78E3B]">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Total Amount */}
          <div 
            className="bg-gradient-to-r from-[#fff8e5] to-[#fefcf2] border-2 border-[#E2CF7D] rounded-2xl p-8 mb-10 shadow-lg"
            data-aos="zoom-in"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold text-gray-700 block">Total Amount</span>
                <span className="text-gray-500 text-sm">Including all fees</span>
              </div>
              <div className="text-right">
                <span className="text-4xl font-extrabold text-[#6F4918] block">{pricingData.total} DZD</span>
                <span className="text-gray-500 text-sm">Algerian Dinar</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-8">
            <h4 className="text-2xl font-semibold text-gray-700 mb-8 flex items-center gap-3">
              <span className="text-[#B78E3B]">💳</span>
              Payment Options
            </h4>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handlePaymentSelect(method.id)}
                  className={`flex-1 flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 shadow-lg ${
                    selectedPayment === method.id
                      ? `bg-gradient-to-r ${method.color} text-white transform scale-105 shadow-xl`
                      : "bg-white border-2 border-[#E2CF7D] text-gray-700 hover:border-[#B78E3B]"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={method.id === "cash" ? 100 : method.id === "card" ? 200 : 300}
                >
                  <div className={`text-3xl mb-3 ${selectedPayment === method.id ? "text-white" : "text-[#B78E3B]"}`}>
                    {method.icon}
                  </div>
                  <span className="font-bold text-lg">{method.label}</span>
                  {selectedPayment === method.id && (
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <span className="text-white">✅</span>
                      <span>Selected</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Confirm Payment Button */}
            <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="400">
              <button
                onClick={confirmPayment}
                className="bg-gradient-to-r from-[#6F4918] to-[#B78E3B] text-white font-bold px-12 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-4 text-lg"
              >
                <span className="text-xl">✅</span>
                Confirm Payment of {pricingData.total} DZD
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-5xl mx-auto mt-12 text-center" data-aos="fade-up">
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <p className="text-gray-600">
            💡 All fees are auto-calculated based on distance, time, and vehicle type. 
            <span className="text-[#6F4918] font-medium ml-2">No hidden charges.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;