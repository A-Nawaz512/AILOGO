// src/components/ProviderPaymentUnlock.jsx
import React from "react";
import { CreditCard, Shield, Lock, CheckCircle } from "lucide-react";

const ProviderPaymentUnlock = () => {
  return (
    <section
      id="provider-payment-unlock"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900 min-h-screen"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Provider <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">Requirements</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            To ensure secure and efficient delivery assignments, providers must verify a payment card.
          </p>
        </div>

        {/* Requirement Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full inline-flex items-center justify-center">
            <CreditCard className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Card Verification Required</h3>
          <p className="text-gray-600 max-w-2xl">
            Providers must add and verify a valid payment card to unlock new deliveries. 
            This ensures fast and secure transactions for both customers and providers.
          </p>

          {/* Features / Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
              <Lock className="w-6 h-6 text-[#d7a462]" />
              <span>Secure access to delivery tasks</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
              <Shield className="w-6 h-6 text-[#d6a566]" />
              <span>Encrypted card information</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
              <CheckCircle className="w-6 h-6 text-[#e6b26e]" />
              <span>Unlock deliveries instantly after verification</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
              <CreditCard className="w-6 h-6 text-[#dba866]" />
              <span>Supports multiple card types</span>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-10 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Verify Your Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProviderPaymentUnlock;
