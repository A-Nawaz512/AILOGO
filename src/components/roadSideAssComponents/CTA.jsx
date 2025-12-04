import React from "react";
import {
   FaDownload,
   FaUserPlus,
   FaQuestionCircle,
   FaHeadset,
   FaWhatsapp,
   FaPhoneAlt,
} from "react-icons/fa";

const CTA = () => {
   return (
      <section
         className="py-15 bg-linear-to-br from-gray-300/30 verflow-hidden"
         data-aos="fade-up"
      >
       <div className="container mx-auto px-4 sm:px-6 lg:px-0">
  <div className="max-w-6xl mx-auto">

    {/* Main CTA */}
    <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Side */}
        <div className="mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Join ALLOGO?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-6">
            Download the app now and experience seamless roadside assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-white text-yellow-700 hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 transform hover:scale-105 flex items-center justify-center">
              <FaDownload className="mr-2 sm:mr-3" />
              Download App
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/20 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 flex items-center justify-center">
              <FaUserPlus className="mr-2 sm:mr-3" />
              Become a Provider
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-center lg:text-right">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">24/7</div>
          <div className="text-lg sm:text-xl opacity-90 mb-2">Emergency Support</div>
          <div className="flex items-center justify-center lg:justify-end mt-2 sm:mt-4 text-base sm:text-lg">
            <FaPhoneAlt className="mr-2" />
            <span className="font-bold">+213 XXX XXX XXX</span>
          </div>
        </div>
      </div>
    </div>

    {/* Support Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
      {[
        {
          icon: <FaQuestionCircle />,
          title: "FAQ & Help Center",
          desc: "Find answers to common questions",
          btn: "Visit Help Center →",
          from: "from-blue-500",
          to: "to-cyan-500",
        },
        {
          icon: <FaWhatsapp />,
          title: "WhatsApp Support",
          desc: "24/7 customer support via WhatsApp",
          btn: "Chat Now →",
          from: "from-green-500",
          to: "to-emerald-500",
        },
        {
          icon: <FaHeadset />,
          title: "Live Support",
          desc: "Call our support team anytime",
          btn: "Contact Support →",
          from: "from-purple-500",
          to: "to-pink-500",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-yellow-600 rounded-2xl p-4 sm:p-6 text-center hover:bg-[#CEAA36] transition duration-300"
        >
          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.from} ${item.to} flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
            <div className="text-2xl sm:text-3xl text-white">{item.icon}</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-2 sm:mb-4">{item.desc}</p>
          <button className="text-white font-semibold text-sm sm:text-base">{item.btn}</button>
        </div>
      ))}
    </div>

    {/* Final Note */}
    <div className="text-center text-gray-700 text-sm sm:text-base">
      <p className="mb-4 text-base sm:text-lg">
        ALLOGO is a connecting platform only. We are not responsible for incidents outside the app.
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
        <a href="#" className="hover:text-white transition">Terms of Service</a>
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Safety Guidelines</a>
        <a href="#" className="hover:text-white transition">Provider Agreement</a>
        <a href="#" className="hover:text-white transition">Contact Us</a>
      </div>
    </div>

  </div>
</div>

      </section>
   );
};

export default CTA;
