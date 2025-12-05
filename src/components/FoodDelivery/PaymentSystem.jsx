// src/components/PaymentSystem.jsx
import React, { useState } from "react";
import { CreditCard, DollarSign, Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";

const PaymentSystem = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const customerMethods = [
    {
      id: "card",
      title: "Card Payment",
      icon: <CreditCard className="w-6 h-6" />,
      desc: "Secure debit or credit card payment",
    },
    {
      id: "cash",
      title: "Cash on Delivery",
      icon: <DollarSign className="w-6 h-6" />,
      desc: "Pay after receiving your order",
    },
  ];

  return (
    <section id="payment" className="py-8 px-5 sm:px-5 lg:px-5 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex  justify-center items-center mb-2">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Payment{" "} <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
              System
            </span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Secure and simple payments for customers and delivery providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CUSTOMER PAYMENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-5 py-2 rounded-3xl bg-white border border-gray-200 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#a37d4b]">
              Customer Payment Options
            </h3>

            <div className="space-y-4">
              {customerMethods.map((method) => (
                <motion.button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center w-full px-5 py-2 rounded-xl border transition-transform decoration-300 
                    ${paymentMethod === method.id 
                      ? "border-transparent bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white shadow-lg" 
                      : "border-gray-200 hover:bg-gray-100 text-gray-900"} cursor-pointer `}
                >
                  <div className={`mr-4 px-5 py-2 rounded-xl ${paymentMethod === method.id ? "bg-white/25" : "bg-gray-100"}`}>
                    {method.icon}
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold">{method.title}</div>
                    <div className="text-sm text-gray-900">{method.desc}</div>
                  </div>
                  {paymentMethod === method.id && (
                    <div className="ml-auto w-4 h-4 bg-white rounded-xl shadow-md" />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="mt-6 flex items-center text-[#ca9856] text-sm">
              <Shield className="w-5 h-5 mr-2" />
              All transactions are encrypted and secure
            </div>
          </motion.div>

          {/* PROVIDER REQUIREMENTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="px-5 py-2 rounded-xl bg-white border border-gray-200 shadow-xl  transition-transform decoration-300 space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#c1975f]">
              Provider Requirements
            </h3>

            {/* Card Requirement */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="px-5 py-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-xl border border-gray-200 flex items-start space-x-3 shadow-md cursor-pointer"
            >
              <Lock className="w-6 h-6 text-[#c3965d] mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Card Required to Unlock Deliveries
                </h4>
                <p className="text-gray-900 text-sm">
                  Providers must verify a payment card to access new delivery tasks.
                </p>
              </div>
            </motion.div>

            {/* Secure Payouts */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="px-5 py-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-xl border border-gray-200 shadow-md cursor-pointer"
            >
              <h4 className="font-semibold text-white mb-1">Secure Daily Payouts</h4>
              <p className="text-gray-900 text-sm">
                Earnings are transferred every 24 hours to your verified account.
              </p>
            </motion.div>

            {/* Commission */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="px-5 py-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-xl border border-gray-200 shadow-md cursor-pointer"
            >
              <h4 className="font-semibold text-white mb-1">ALLOGO Commission</h4>
              <p className="text-gray-900 text-sm">
                Flat <span className="text-[#f9f8f7] font-bold">5%</span> on each delivery.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSystem;
