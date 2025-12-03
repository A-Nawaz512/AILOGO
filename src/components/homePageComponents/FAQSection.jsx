import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaMoneyBill, FaMapMarkedAlt, FaCoins, FaShieldAlt } from "react-icons/fa";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does AlLOGO offer?",
      answer: "AlLOGO provides 6 integrated services: Ride booking, Vehicle Rentals, Apartment Rentals, Package Delivery, Food Delivery, and Roadside Assistance. All services include live 3D tracking for transparency.",
      icon: FaQuestionCircle
    },
    {
      question: "How does the commission system work?",
      answer: "Commission is transparent: 7% for rides, 5% for package,Food Deliveries,Roadside Assistance and 3% for Vehicle Rental and Apartment Rentals. Deductions are automatic through our secure payment gateway.",
      icon: FaMoneyBill
    },
    {
      question: "What is 3D map tracking?",
      answer: "MapLibre 3D provides real-time visualization of vehicles, couriers, rentals, and technicians on an interactive 3D map for live tracking.",
      icon: FaMapMarkedAlt
    },
    {
      question: "How does the loyalty points system work?",
      answer: "Earn 1 point per 1 DA spent. Points are credited to all users and can be redeemed for future services or transferred to other providers.",
      icon: FaCoins
    },
    {
      question: "How secure is the platform?",
      answer: "Encrypted payments, secure data storage, and protected communications ensure maximum security. Features include in-app chat and optional WhatsApp integration.",
      icon: FaShieldAlt
    }
  ];

  return (
    <div className="bg-[#fdf6e3] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-[#543918] mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Frequently Asked <span style={{ color: "#B78E3B" }}>Questions</span>
            </h2>
            <div className="h-px w-12 bg-[#543918] ml-4"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about AlLOGO services.
          </p>
        </motion.div>

          {/* FAQ List */}
          <div className=" w-full sm:w-[60%] mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#fff3e0] transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#B78E3B]/20">
                      <faq.icon className="w-6 h-6 text-[#543918]" />
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-2xl font-light text-[#B78E3B]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#fff8e6]"
                    >
                      <div className="px-6 pb-5 pt-2 pl-16">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
      </div>
    </div>
  );
};
