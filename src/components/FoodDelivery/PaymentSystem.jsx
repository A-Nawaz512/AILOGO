// src/components/PaymentSystem.jsx
import React, { useState } from "react";
import { CreditCard, DollarSign, Shield, Lock } from "lucide-react";

const PaymentSystem = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const customerMethods = [
    {
      id: "card",
      title: "Card Payment",
      icon: <CreditCard />,
      desc: "Secure debit or credit card payment",
    },
    {
      id: "cash",
      title: "Cash on Delivery",
      icon: <DollarSign />,
      desc: "Pay after receiving your order",
    },
  ];

  return (
    <section id="payment" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#F5B45D] to-[#FACC15] rounded-full mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Payment{" "}
            <span className="bg-gradient-to-r from-[#F5B45D] to-[#FACC15] bg-clip-text text-transparent">
              System
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Secure and simple payments for customers and delivery providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CUSTOMER PAYMENT */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-[#F5B45D]">
              Customer Payment Options
            </h3>

            <div className="space-y-4">
              {customerMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`flex items-center w-full p-4 rounded-xl border transition 
                    ${paymentMethod === method.id 
                      ? "border-transparent bg-gradient-to-r from-[#F5B45D] to-[#FACC15] text-white shadow-lg" 
                      : "border-gray-200 hover:bg-gray-100 text-gray-900"}
                  `}
                >
                  <div className="mr-4 text-[#F5B45D]">{method.icon}</div>
                  <div className="text-left flex-1">
                    <div className="font-semibold">{method.title}</div>
                    <div className="text-sm text-gray-500">{method.desc}</div>
                  </div>
                  {paymentMethod === method.id && (
                    <div className="ml-auto w-3 h-3 bg-[#F5B45D] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center text-[#F5B45D] text-sm">
              <Shield className="w-5 h-5 mr-2" />
              All transactions are encrypted and secure
            </div>
          </div>

          {/* PROVIDER REQUIREMENTS */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-[#F5B45D]">
              Provider Requirements
            </h3>

            {/* Card Requirement */}
            <div className="p-5 bg-yellow-50 rounded-xl border border-gray-200 flex items-start space-x-3">
              <Lock className="w-6 h-6 text-[#F5B45D] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Card Required to Unlock Deliveries
                </h4>
                <p className="text-gray-500 text-sm">
                  Providers must verify a payment card to access new delivery tasks.
                </p>
              </div>
            </div>

            {/* Secure Payouts */}
            <div className="p-5 bg-yellow-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-1">Secure Daily Payouts</h4>
              <p className="text-gray-500 text-sm">
                Earnings are transferred every 24 hours to your verified account.
              </p>
            </div>

            {/* Commission */}
            <div className="p-5 bg-yellow-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-1">ALLOGO Commission</h4>
              <p className="text-gray-900 text-sm">
                Flat <span className="text-[#F5B45D] font-bold">5%</span> on each delivery.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSystem;
