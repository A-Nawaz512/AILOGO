import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaMoneyBill, FaMapMarkedAlt, FaCoins, FaShieldAlt } from "react-icons/fa";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does ALLOGO offer?",
      answer: "ALLOGO provides 6 integrated services: Ride booking, Vehicle Rentals, Apartment Rentals, Package Delivery, Food Delivery, and Roadside Assistance. All services include live 3D tracking for transparency.",
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
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">

        {/* LEFT — FAQ LIST */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Frequently Asked <span className="text-[#B78E3B]">Questions</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Everything you need to know about ALLOGO services.
            </p>
          </motion.div>

          <div className="space-y-4 flex-1">
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
                  className="w-full group cursor-pointer px-5 py-2 text-left flex items-center justify-between hover: bg-gradient-to-r from-[#b3a35a] to-[#6F4918] transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="sm:w-12 w-8 sm:h-12 h-8 rounded-full flex items-center justify-center  bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] group-hover:bg-[#d3c48c] transition-all">
                      <faq.icon className="w-4 sm:w-6 h-4 sm:h-6 text-[white]" />
                    </div>
                    <span className="font-semibold text-gray-50 sm:text-lg group-hover:text-white transition-all">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-2xl font-light text-[#f7f5f1] group-hover:text-white transition-all">
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
                      className="overflow-hidden bg-white"
                    >
                      <div className="px-6 pb-5 pt-2 pl-16">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — IMAGE (Same height as left side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full flex"
        >
          <img
            src="https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg"
            alt="Allogo FAQ Illustration"
            className="rounded-2xl shadow-lg w-full h-full object-cover hover:translate-y-1 transition-all duration-300"
          />
        </motion.div>

      </div>
    </div>
  );
};
