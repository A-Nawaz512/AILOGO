// src/components/PaymentSystem.jsx
import React, { useState } from 'react';
import { CreditCard, DollarSign, Shield, Lock } from 'lucide-react';

const PaymentSystem = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <section id="payment" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151212] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Payment <span className="text-[#86632C]">System</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Secure and simple payments for customers and delivery providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CUSTOMER PAYMENT */}
          <div className="p-8 rounded-3xl bg-[#1d1b1b] border border-[#2a2626] shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-[#86632C]">
              Customer Payment Options
            </h3>

            <div className="space-y-4">
              {[
                { 
                  id: "card", 
                  title: "Card Payment", 
                  icon: <CreditCard />, 
                  desc: "Secure debit or credit card payment" 
                },
                { 
                  id: "cash", 
                  title: "Cash on Delivery", 
                  icon: <DollarSign />, 
                  desc: "Pay after receiving your order" 
                },
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`flex items-center w-full p-4 rounded-xl border transition 
                    ${paymentMethod === method.id 
                      ? "border-[#86632C] bg-[#2a2626]" 
                      : "border-[#3a3434] hover:bg-[#242020]"}
                  `}
                >
                  <div className="mr-4 text-[#86632C]">{method.icon}</div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-white">{method.title}</div>
                    <div className="text-sm text-gray-400">{method.desc}</div>
                  </div>
                  {paymentMethod === method.id && (
                    <div className="ml-auto w-3 h-3 bg-[#86632C] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center text-[#86632C] text-sm">
              <Shield className="w-5 h-5 mr-2" />
              All transactions are encrypted and secure
            </div>
          </div>

          {/* PROVIDER REQUIREMENTS */}
          <div className="p-8 rounded-3xl bg-[#1d1b1b] border border-[#2a2626] shadow-xl space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-[#86632C]">
              Provider Requirements
            </h3>

            {/* Card Requirement */}
            <div className="p-5 bg-[#242020] rounded-xl border border-[#3a3434] flex items-start space-x-3">
              <Lock className="w-6 h-6 text-[#86632C] mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Card Required to Unlock Deliveries
                </h4>
                <p className="text-gray-400 text-sm">
                  Providers must verify a payment card to access new delivery tasks.
                </p>
              </div>
            </div>

            {/* Secure Payouts */}
            <div className="p-5 bg-[#242020] rounded-xl border border-[#3a3434]">
              <h4 className="font-semibold text-white mb-1">Secure Daily Payouts</h4>
              <p className="text-gray-400 text-sm">
                Earnings are transferred every 24 hours to your verified account.
              </p>
            </div>

            {/* Commission */}
            <div className="p-5 bg-[#2a2626] rounded-xl border border-[#3a3434]">
              <h4 className="font-semibold text-white mb-1">ALLOGO Commission</h4>
              <p className="text-gray-300 text-sm">
                Flat <span className="text-[#86632C] font-bold">5%</span> on each delivery.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSystem;
