// src/components/ProviderPaymentUnlock.jsx
import React, { useEffect, useState } from "react";
import { CreditCard, Shield, Lock, CheckCircle, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: Lock,
    text: "Secure access to delivery tasks",
    color: "text-[#d7a462]",
  },
  { icon: Shield, text: "Encrypted card information", color: "text-[#d6a566]" },
  {
    icon: CheckCircle,
    text: "Unlock deliveries instantly after verification",
    color: "text-[#e6b26e]",
  },
  {
    icon: CreditCard,
    text: "Supports multiple card types",
    color: "text-[#dba866]",
  },
];

const ProviderPaymentUnlock = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="provider-payment-unlock"
      className="relative py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="bg-[#FAFBFC] w-full h-full pointer-events-none"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
         <div className="flex  justify-center items-center mb-2">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl font-bold">
               Provider{" "}<span style={{ color: '#B78E3B' }}> Requirements</span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            To ensure secure and efficient delivery assignments, providers must
            verify a payment card.
          </p>
        </div>

        {/* Requirement Card */}
        <div
          className="bg-white border border-gray-200 rounded-4xl shadow-2xl px-5 py-2 flex flex-col items-center text-center space-y-8 transition-transform transform hover:-translate-y-2 hover:shadow-3xl duration-800"
          data-aos="zoom-out"
        >
          <div className="px-5 py-3 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-xl inline-flex items-center justify-center shadow-lg">
            <CreditCard className="w-8 h-8 text-white animate-pulse" />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Card Verification Required
          </h3>
          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            Providers must add and verify a valid payment card to unlock new
            deliveries. This ensures fast and secure transactions for both
            customers and providers.
          </p>

          {/* Features / Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full">
            {features.map(({ icon: Icon, text, color }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 px-5 py-3 bg-gray-100 rounded-2xl hover:bg-gray-200  ease-in-out transform hover:translate-y-1 transition duration-1000"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <Icon className={`w-6 h-6 ${color}`} />
                <span className="font-medium text-gray-800">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className="mt-12 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white px-5 py-2 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300"
            onClick={() => setShowModal(true)}
          >
            Verify Your Card
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-11/12 md:w-2/5 px-5 py-2 relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">Card Verification</h3>
            <p className="text-gray-600 mb-6">
              This is where you would add the card verification form or process.
              For now, this modal is just a placeholder.
            </p>
            <button
              className="
    relative inline-block px-5 py-2 rounded-full font-semibold text-white 
    bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] 
    shadow-lg 
    overflow-hidden
    transition-all duration-300 ease-out
    transform hover:scale-105 hover:shadow-2xl
    before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10
    after:absolute after:inset-0 after:rounded-xl after:ring-0 after:ring-[#E2CF7D] after:ring-offset-0 after:transition-all hover:after:ring-4
  "
              onClick={() => alert("Verification logic goes here!")}
            >
              <span className="relative z-10">Proceed</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProviderPaymentUnlock;
