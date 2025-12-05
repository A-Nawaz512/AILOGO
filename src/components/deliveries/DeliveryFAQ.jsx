import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserShield, FaFileAlt, FaPhoneAlt } from "react-icons/fa";

const SafetySecurity = () => {
  const [reportedIssues, setReportedIssues] = useState(0);
  
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
    // Simulate reported issues count
    const interval = setInterval(() => {
      setReportedIssues(prev => (prev < 1247 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleReportIssue = () => {
    alert("Issue reported successfully. Our support team will contact you within 24 hours.");
  };

  return (
    <section className="relative bg-gradient-to-b from-[#FFFDF7] to-[#FFF5E0] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left Image */}
        <div
          className="md:w-1/2 flex justify-center md:justify-start"
          data-aos="fade-right"
        >
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Safety illustration"
              className="rounded-3xl shadow-2xl w-full md:w-[95%] transform transition-transform duration-700 hover:scale-105 hover:-rotate-1 border-4 border-[#B78E3B]"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#6F4918] to-[#B78E3B] text-white px-6 py-3 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2">
                <FaUserShield className="text-lg" />
                <span className="font-bold">24/7 Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Features */}
        <div className="md:w-1/2 flex flex-col gap-12">
          <div>
            <h2
              className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6F4918] to-[#B78E3B] drop-shadow-md mb-4"
              data-aos="fade-left"
            >
              🔒 Safety & Security
            </h2>
            <p
              className="text-gray-700 text-lg md:text-xl max-w-xl"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Deliveries are secure with privacy for both customers and drivers. 
              Insurance coverage is included, and support is always available for 
              any delivery-related concerns.
            </p>
          </div>

          {/* Security Stats */}
          <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E2CF7D]" data-aos="fade-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6F4918]">{reportedIssues}+</div>
              <div className="text-gray-600 text-sm">Issues Resolved</div>
            </div>
            <div className="h-8 w-px bg-[#E2CF7D]"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6F4918]">100%</div>
              <div className="text-gray-600 text-sm">Privacy Protected</div>
            </div>
            <div className="h-8 w-px bg-[#E2CF7D]"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6F4918]">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Masking */}
            <div
              className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-lg border-2 border-[#E2CF7D] rounded-3xl shadow-xl text-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-[#B78E3B] hover:-translate-y-2 group"
              data-aos="fade-up"
            >
              <div className="bg-gradient-to-tr from-[#B78E3B] to-[#E2CF7D] text-white p-5 rounded-full text-4xl flex justify-center items-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-bold text-[#6F4918] mb-3">
                Phone Masking
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Customer and driver numbers are masked to ensure privacy.
              </p>
              <div className="text-sm text-[#B78E3B] font-medium bg-[#FFF8E5] px-4 py-1 rounded-full">
                🔒 Privacy Protected
              </div>
            </div>

            {/* Insurance */}
            <div
              className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-lg border-2 border-[#E2CF7D] rounded-3xl shadow-xl text-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-[#B78E3B] hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-gradient-to-tr from-[#B78E3B] to-[#E2CF7D] text-white p-5 rounded-full text-4xl flex justify-center items-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-bold text-[#6F4918] mb-3">
                Insurance Coverage
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Basic insurance protects against lost or damaged goods.
              </p>
              <div className="text-sm text-[#B78E3B] font-medium bg-[#FFF8E5] px-4 py-1 rounded-full">
                📦 Up to 500,000 DZD
              </div>
            </div>

            {/* Report & Support */}
            <div
              className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-lg border-2 border-[#E2CF7D] rounded-3xl shadow-xl text-center transition-all duration-850 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-[#B78E3B] hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gradient-to-tr from-[#B78E3B] to-[#E2CF7D] text-white p-5 rounded-full text-4xl flex justify-center items-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <FaUserShield />
              </div>
              <h3 className="text-xl font-bold text-[#6F4918] mb-3">
                Report & Support
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Option to report issues or contact support anytime.
              </p>
              <button 
                onClick={handleReportIssue}
                className="text-sm bg-[#6F4918] text-white px-4 py-2 rounded-full font-medium hover:bg-[#B78E3B] transition-colors mt-2"
              >
                Report Issue
              </button>
            </div>
          </div>

          {/* Support Contact */}
          <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gradient-to-r from-[#fefcf2] to-white rounded-2xl p-6 border-l-4 border-[#B78E3B] shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-[#FFF8E5] p-3 rounded-full">
                  <FaUserShield className="text-2xl text-[#B78E3B]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#6F4918] text-lg">Need Help?</h4>
                  <p className="text-gray-600">Contact support: <span className="text-[#B78E3B] font-medium">+213 123 456 789</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Shapes */}
      <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-[60rem] h-[60rem] bg-gradient-to-r from-[#B78E3B]/20 to-[#E2CF7D]/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default SafetySecurity;