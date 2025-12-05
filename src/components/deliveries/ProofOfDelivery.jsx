import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCamera, FaSignature, FaLock } from "react-icons/fa";

const ProofOfDelivery = () => {
  const [selectedMethod, setSelectedMethod] = useState("photo");
  const [otpCode, setOtpCode] = useState("");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const handleSubmit = () => {
    if (selectedMethod === "otp" && !otpCode) {
      alert("Please enter the OTP code");
      return;
    }
    alert(`Delivery confirmed with ${selectedMethod === "photo" ? "photo upload" : selectedMethod === "signature" ? "customer signature" : "OTP verification"}`);
    setOtpCode("");
  };

  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setOtpCode(newOtp.toString());
    alert(`Your OTP: ${newOtp}\nShare this with the driver for verification`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fefcf2] py-16 px-4">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-4xl md:text-4xl font-extrabold text-center text-[#6F4918] drop-shadow-md mb-4" data-aos="fade-down">
          ✅ Proof of Delivery
        </h2>
        <p className="text-gray-600 text-center max-w-2xl" data-aos="fade-down" data-aos-delay="100">
          Secure delivery verification methods
        </p>
      </div>

      {/* Delivery Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Photo Upload */}
        <div 
          className={`rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${selectedMethod === "photo" ? "bg-gradient-to-b from-[#FFF8E5] to-white border-4 border-[#B78E3B]" : "bg-[#FFF8E5] border-2 border-[#E2CF7D]"}`}
          data-aos="fade-up"
          onClick={() => setSelectedMethod("photo")}
        >
          <div className="relative mb-6">
            <FaCamera className="text-6xl text-[#B78E3B]" />
            {selectedMethod === "photo" && (
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
            )}
          </div>
          <h3 className="text-2xl font-bold text-[#6F4918] mb-4">Upload Photo</h3>
          <p className="text-gray-700 mb-4">Driver uploads photo of delivered item to confirm delivery.</p>
          {selectedMethod === "photo" && (
            <button className="mt-4 bg-[#B78E3B] text-white px-6 py-2 rounded-full font-medium hover:bg-[#6F4918] transition-colors">
              Upload Photo
            </button>
          )}
        </div>

        {/* Signature */}
        <div 
          className={`rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${selectedMethod === "signature" ? "bg-gradient-to-b from-[#FFF8E5] to-white border-4 border-[#B78E3B]" : "bg-[#FFF8E5] border-2 border-[#E2CF7D]"}`}
          data-aos="fade-up"
          data-aos-delay="100"
          onClick={() => setSelectedMethod("signature")}
        >
          <div className="relative mb-6">
            <FaSignature className="text-6xl text-[#B78E3B]" />
            {selectedMethod === "signature" && (
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
            )}
          </div>
          <h3 className="text-2xl font-bold text-[#6F4918] mb-4">Customer Signature</h3>
          <p className="text-gray-700 mb-4">Collect signature as proof of successful delivery.</p>
          {selectedMethod === "signature" && (
            <button className="mt-4 bg-[#B78E3B] text-white px-6 py-2 rounded-full font-medium hover:bg-[#6F4918] transition-colors">
              Sign Now
            </button>
          )}
        </div>

        {/* OTP Verification */}
        <div 
          className={`rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${selectedMethod === "otp" ? "bg-gradient-to-b from-[#FFF8E5] to-white border-4 border-[#B78E3B]" : "bg-[#FFF8E5] border-2 border-[#E2CF7D]"}`}
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={() => setSelectedMethod("otp")}
        >
          <div className="relative mb-6">
            <FaLock className="text-6xl text-[#B78E3B]" />
            {selectedMethod === "otp" && (
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
            )}
          </div>
          <h3 className="text-2xl font-bold text-[#6F4918] mb-4">OTP Verification</h3>
          <p className="text-gray-700 mb-4">Delivery code/OTP required to verify completion securely.</p>
          
          {selectedMethod === "otp" && (
            <div className="mt-4 w-full">
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#E2CF7D] focus:border-[#B78E3B] focus:outline-none text-center text-lg font-mono"
                maxLength="6"
              />
              <button 
                onClick={generateOTP}
                className="mt-3 text-[#6F4918] font-medium hover:text-[#B78E3B] transition-colors text-sm"
              >
                Generate New OTP
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Action Section */}
      <div className="max-w-2xl mx-auto" data-aos="zoom-in">
        <div className="bg-gradient-to-r from-[#fefcf2] to-white rounded-3xl shadow-xl p-8 border-l-8 border-[#B78E3B]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#6F4918] mb-2">
                Selected: {selectedMethod === "photo" ? "Photo Upload" : selectedMethod === "signature" ? "Customer Signature" : "OTP Verification"}
              </h3>
              <p className="text-gray-600">
                Confirm delivery with selected verification method
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[#6F4918] to-[#B78E3B] text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              ✅ Confirm Delivery
            </button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-3xl mx-auto mt-12 text-center" data-aos="fade-up">
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <p className="text-gray-600">
            🔒 All verification methods are securely encrypted and stored for delivery proof.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProofOfDelivery;