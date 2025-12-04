import React, { useEffect } from "react";
import { FaPercentage, FaCreditCard, FaWallet, FaExclamationTriangle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FEATURES = [
  {
    icon: FaPercentage,
    title: "Commission",
    text: "ALLOGO charges a 3% commission per booking on apartment rentals.",
  },
  {
    icon: FaCreditCard,
    title: "Payment",
    text: "All payments are processed via secure card transactions only.",
  },
  {
    icon: FaWallet,
    title: "Payout Flow",
    text: "ALLOGO keeps the commission and sends the remaining amount directly to the apartment owner.",
  },
  {
    icon: FaExclamationTriangle,
    title: "Dispute Management",
    text: "Tenants can report issues. The controller reviews booking, chat history, and photos. Outcomes may include refunds, partial refunds, or other resolutions.",
  },
];

export default function CommissionAndPayout() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-5">
        <h2
          data-aos="fade-down"
          className="text-3xl font-bold text-center mb-12 text-[#B78E3B]"
        >
          Commission, Payment & Dispute Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {FEATURES.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger animation
              className="flex items-start gap-5 bg-white p-6 rounded-2xl 
                         border border-[#B78E3B]/30 
                         shadow-xl hover:shadow-2xl hover:shadow-[#B78E3B]/70 
                         transition duration-300"
            >
              {/* Icon */}
              <div className="h-14 w-14 flex items-center justify-center rounded-xl 
                              bg-[#B78E3B]/10 border border-[#B78E3B]/40 shadow-md">
                <item.icon size={28} className="text-[#B78E3B]" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-[#B78E3B] mb-2">
                  {item.title}
                </h3>
                <p className="text-black leading-relaxed text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
