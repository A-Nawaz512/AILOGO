import React from "react";
import {
   FaUser,
   FaWhatsapp,
   FaIdCard,
   FaCar,
   FaHome,
   FaCheckCircle,
   FaClock,
   FaFileAlt,
} from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const RegistrationProcess = () => {
   const userSteps = [
      {
         icon: <FaUser className="text-2xl" />,
         title: "Basic Info",
         description: "Name, surname, photo, and user type",
         duration: "2 minutes",
      },
      {
         icon: <FaWhatsapp className="text-2xl" />,
         title: "WhatsApp Verification",
         description: "Receive and enter confirmation code",
         duration: "1 minute",
      },
      {
         icon: <GiCheckMark className="text-2xl" />,
         title: "Immediate Access",
         description: "Start using services right away",
         duration: "Instant",
      },
   ];

   const providerSteps = [
      {
         icon: <FaFileAlt className="text-2xl" />,
         title: "Document Upload",
         description: "License, registration, vehicle/apartment photos",
         duration: "5 minutes",
      },
      {
         icon: <FaClock className="text-2xl" />,
         title: "Controller Review",
         description: "Manual verification by ALLOGO team",
         duration: "24-48 hours",
      },
      {
         icon: <FaCheckCircle className="text-2xl" />,
         title: "Approval & Activation",
         description: "Receive notification and start working",
         duration: "Instant after approval",
      },
   ];

   const providerTypes = [
      {
         icon: <FaCar className="text-2xl" />,
         title: "Roadside Assistance",
         docs: ["Mechanic License", "Vehicle Registration", "Insurance"],
      },
      {
         icon: <FaIdCard className="text-2xl" />,
         title: "Towing Service",
         docs: ["Towing License", "Vehicle Documents", "Operator License"],
      },
      {
         icon: <FaHome className="text-2xl" />,
         title: "Other Providers",
         docs: [
            "Professional License",
            "ID Verification",
            "Service Certificates",
         ],
      },
   ];

   return (
      <section className="py-15 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
         <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                  Simple{" "}
                  <span className="text-[#CEAA36]">Registration Process</span>
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Easy onboarding for both users and service providers
               </p>
            </div>

       {/* Registration Steps */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 px-4 sm:px-6 lg:px-0">
  {/* User Registration */}
  <div
    className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 border border-blue-100 hover:scale-105 transition-transform duration-300"
    data-aos="fade-right"
  >
    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center mr-0 sm:mr-4 mb-4 sm:mb-0 shadow-lg">
        <FaUser className="text-2xl text-white animate-bounce" />
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800" data-aos="fade-left">
          For Users (Clients)
        </h3>
        <p className="text-gray-600 text-sm sm:text-base" data-aos="fade-left" data-aos-delay="100">
          Quick WhatsApp verification
        </p>
      </div>
    </div>

    <div className="space-y-4 sm:space-y-6">
      {userSteps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-white/70 rounded-xl border border-blue-100 shadow hover:shadow-lg transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay={index * 150}
        >
          <div className="shrink-0 w-12 h-12 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center mb-2 sm:mb-0 mr-0 sm:mr-4 hover:bg-blue-100 transition-colors duration-300">
            <div className="text-blue-600 animate-pulse">{step.icon}</div>
          </div>
          <div className="flex flex-col grow mb-2 sm:mb-0">
            <h4 className="font-bold text-gray-800 text-sm sm:text-base">{step.title}</h4>
            <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
          </div>
          <div className="text-xs sm:text-sm bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full font-semibold animate-pulse mt-1 sm:mt-0">
            {step.duration}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 sm:mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 shadow-inner">
      <p className="text-blue-800 font-semibold text-sm sm:text-base">
        ✅ Immediate access to all services after WhatsApp verification
      </p>
    </div>
  </div>

  {/* Provider Registration */}
  <div
    className="bg-gradient-to-br from-yellow-50/50 to-orange-50/50 rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 border border-orange-100 hover:scale-105 transition-transform duration-300"
    data-aos="fade-left"
  >
    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-[#CEAA36] flex items-center justify-center mr-0 sm:mr-4 mb-4 sm:mb-0 shadow-lg">
        <FaCar className="text-2xl text-white animate-bounce" />
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800" data-aos="fade-right">
          For Providers
        </h3>
        <p className="text-gray-600 text-sm sm:text-base" data-aos="fade-right" data-aos-delay="100">
          Document verification required
        </p>
      </div>
    </div>

    <div className="space-y-4 sm:space-y-6">
      {providerSteps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-white/70 rounded-xl border border-orange-100 shadow hover:shadow-lg transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay={index * 150}
        >
          <div className="shrink-0 w-12 h-12 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center mb-2 sm:mb-0 mr-0 sm:mr-4 hover:bg-orange-100 transition-colors duration-300">
            <div className="text-yellow-600 animate-pulse">{step.icon}</div>
          </div>
          <div className="flex flex-col grow mb-2 sm:mb-0">
            <h4 className="font-bold text-gray-800 text-sm sm:text-base">{step.title}</h4>
            <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
          </div>
          <div className="text-xs sm:text-sm bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded-full font-semibold animate-pulse mt-1 sm:mt-0">
            {step.duration}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 sm:mt-8 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 shadow-inner">
      <p className="text-orange-800 font-semibold text-sm sm:text-base">
        ⚠️ Manual validation by ALLOGO controller before activation
      </p>
    </div>
  </div>
</div>


            {/* Provider Types */}
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
               <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 animate-bounce">
                  Required Documents by Provider Type
               </h3>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {providerTypes.map((type, index) => (
                     <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        data-aos="zoom-in"
                        data-aos-delay={index * 150}
                     >
                        <div className="flex items-center mb-4">
                           <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#CEAA36] to-yellow-500 flex items-center justify-center mr-4 shadow-md animate-pulse">
                              <div className="text-white">{type.icon}</div>
                           </div>
                           <h4 className="text-xl font-bold text-gray-800">{type.title}</h4>
                        </div>

                        <ul className="space-y-3">
                           {type.docs.map((doc, idx) => (
                              <li key={idx} className="flex items-center">
                                 <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                                 <span className="text-gray-700">{doc}</span>
                              </li>
                           ))}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-gray-200">
                           <p className="text-sm text-gray-500">
                              Plus: Recent photos, ID verification, and contact information
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Legal Notice */}
            <div
               className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-200 shadow-inner"
               data-aos="fade-up"
            >
               <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center animate-bounce">
                  <FaFileAlt className="mr-3 text-yellow-500" />
                  Legal & Security Notice
               </h4>
               <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <p className="text-gray-700 italic">
                     "I confirm I have read and accepted the ALLOGO terms. I understand ALLOGO is only a connecting platform and that any incident or payment outside the app is my responsibility."
                  </p>
                  <div className="flex items-center mt-4">
                     <input type="checkbox" id="terms" className="mr-3 w-5 h-5 accent-yellow-400" />
                     <label htmlFor="terms" className="text-gray-700 font-semibold">
                        Required checkbox during registration
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default RegistrationProcess;
