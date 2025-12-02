import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaMoneyBill, FaMapMarkedAlt, FaCoins, FaShieldAlt } from "react-icons/fa";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does AlLOGO offer?",
      answer: "AlLOGO offers 6 integrated services: Ride booking (9% commission), vehicle rentals (5%), apartment rentals (5%), package delivery (5%), food delivery (5%), and roadside assistance (5%). All with live 3D tracking.",
      icon: FaQuestionCircle
    },
    {
      question: "How does the commission system work?",
      answer: "Transparent commission rates: 9% for ride services, 5% for all other services. Commissions are automatically deducted from each transaction through our secure payment system.",
      icon: FaMoneyBill
    },
    {
      question: "What is the 3D map tracking feature?",
      answer: "We use MapLibre 3D for real-time 3D visualization of all service entities - vehicles, rentals, delivery couriers, and technicians - with live tracking on an interactive map.",
      icon: FaMapMarkedAlt
    },
    {
      question: "How does the loyalty points system work?",
      answer: "Users earn 1 loyalty point for every 1 DA spent on any service. Points are credited to all users including drivers, couriers, and renters, and can be redeemed for future services.",
      icon: FaCoins
    },
    {
      question: "How secure is the platform?",
      answer: "We use encrypted payment processing, secure data storage, and protected communications. Features include secure in-app chat and optional WhatsApp integration.",
      icon: FaShieldAlt
    }
  ];

  return (
    <div className="bg-white py-10 px-4">
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
            Get answers to common questions about AlLOGO
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(183, 142, 59, 0.1)" }}>
                      <faq.icon className="w-5 h-5" style={{ color: "#543918" }} />
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
                      className="overflow-hidden"
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

          {/* Right Column - Key Info */}
          <div className="space-y-6">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#543918] to-[#B78E3B] rounded-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Services</span>
                  <span className="font-bold">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Commission</span>
                  <span className="font-bold">5-9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Loyalty Points</span>
                  <span className="font-bold">1pt = 1DA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Credit Facility</span>
                  <span className="font-bold">1000-2000DA</span>
                </div>
              </div>
            </motion.div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Contact our support team for assistance with any questions.
              </p>
              <button 
                className="w-full py-3 rounded-lg font-semibold text-white"
                style={{ backgroundColor: "#B78E3B" }}>
                Contact Support
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};