import React, { useEffect } from "react";
import {
  FaDownload,
  FaUserPlus,
  FaQuestionCircle,
  FaHeadset,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const CTA = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const supportItems = [
    {
      icon: <FaQuestionCircle />,
      title: "FAQ & Help Center",
      desc: "Find answers to common questions",
      btn: "Visit Help Center →",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp Support",
      desc: "24/7 customer support via WhatsApp",
      btn: "Chat Now →",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaHeadset />,
      title: "Live Support",
      desc: "Call our support team anytime",
      btn: "Contact Support →",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Heading */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center justify-center w-full mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
              <h2 className="text-2xl md:text-4xl font-bold text-center">
      Get Started
      <span className="text-[#B78E3B]"> With AllLogo</span>
    </h2>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
            </div>
            <p className="text-center text-gray-600 text-base max-w-2xl">
              Join our platform and enjoy seamless roadside assistance and support anytime, anywhere.
            </p>
          </div>

          {/* Main CTA */}
          <div
            className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-3xl p-8 text-white shadow-2xl mb-12"
            data-aos="fade-up"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left */}
              <div className="text-center lg:text-left flex-1">
                <h2 className="text-2xl font-bold mb-3">
                  Ready to Join <span className="text-[#B78E3B]">ALLOGO?</span>
                </h2>
                <p className="text-base opacity-90 mb-6">
                  Download the app now and experience seamless roadside assistance
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button className="bg-white text-[#B78E3B] hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-base transition duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 min-w-[180px]">
                    <FaDownload className="mr-2" /> Download App
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white/20 font-bold py-3 px-6 rounded-full text-base transition duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 min-w-[180px]">
                    <FaUserPlus className="mr-2" /> Become a Provider
                  </button>
                </div>
              </div>

              {/* Right */}
              <div className="text-center lg:text-right flex-1">
                <div className="text-4xl font-bold mb-1">24/7</div>
                <div className="text-base opacity-90 mb-2">Emergency Support</div>
                <div className="flex items-center justify-center lg:justify-end text-base gap-2">
                  <FaPhoneAlt /> <span className="font-bold">+213 XXX XXX XXX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {supportItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-105`}>
                  <div className="text-xl text-white">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#B78E3B] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <button className="text-[#6F4918] font-semibold text-sm hover:text-[#B78E3B] transition duration-300">
                  {item.btn}
                </button>
              </div>
            ))}
          </div>

          {/* Final Note */}
          <div className="text-center text-gray-700">
            <p className="mb-3 text-base">
              ALLOGO is a connecting platform only. We are not responsible for incidents outside the app.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <a href="#" className="hover:text-[#6F4918] transition">Terms of Service</a>
              <a href="#" className="hover:text-[#6F4918] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#6F4918] transition">Safety Guidelines</a>
              <a href="#" className="hover:text-[#6F4918] transition">Provider Agreement</a>
              <a href="#" className="hover:text-[#6F4918] transition">Contact Us</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;