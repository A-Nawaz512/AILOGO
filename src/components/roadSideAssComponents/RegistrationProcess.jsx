import React from "react";
import {
  FaUser,
  FaWhatsapp,
  FaCar,
  FaHome,
  FaCheckCircle,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const RegistrationProcess = () => {
  const userSteps = [
    { icon: <FaUser />, title: "Basic Info", description: "Name, photo, user type", duration: "2 min" },
    { icon: <FaWhatsapp />, title: "WhatsApp Verification", description: "Enter confirmation code", duration: "1 min" },
    { icon: <GiCheckMark />, title: "Immediate Access", description: "Start using services", duration: "Instant" },
  ];

  const providerSteps = [
    { icon: <FaFileAlt />, title: "Document Upload", description: "License & registration", duration: "5 min" },
    { icon: <FaClock />, title: "Controller Review", description: "Manual verification by ALLOGO", duration: "24-48 hrs" },
    { icon: <FaCheckCircle />, title: "Approval & Activation", description: "Receive notification & start", duration: "Instant" },
  ];

  const providerTypes = [
    { icon: <FaCar />, title: "Roadside Assistance", docs: ["Mechanic License", "Vehicle Registration", "Insurance"] },
    { icon: <FaCar />, title: "Towing Service", docs: ["Towing License", "Vehicle Docs", "Operator License"] },
    { icon: <FaHome />, title: "Other Providers", docs: ["Professional License", "ID Verification", "Certificates"] },
  ];

  const Timeline = ({ steps }) => (
    <div className="relative pl-12">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 w-1 bg-[#E2CF7D] h-full rounded"></div>
      {steps.map((step, idx) => (
        <div key={idx} className="relative mb-12 flex items-start">
          <div className="absolute -left-1 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] flex items-center justify-center text-white text-xl shadow-lg transition-transform duration-300 hover:scale-110">
            {step.icon}
          </div>
          <div className="ml-16 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 w-full">
            <h4 className="font-bold text-gray-800 text-lg mb-1">{step.title}</h4>
            <p className="text-gray-600 text-sm mb-2">{step.description}</p>
            <span className="text-[#6F4918] font-semibold text-sm">{step.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
       <div className="flex flex-col items-center mb-10">

  {/* ---- Title Row with Before/After Lines ---- */}
  <div className="flex items-center justify-center mb-4">
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>

    <h2 className="text-2xl md:text-4xl font-bold text-center">
      Registration
      <span className="text-[#B78E3B]"> Process</span>
    </h2>

    <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
  </div>

  {/* ---- Subtitle ---- */}
  <p className="text-gray-600 text-lg max-w-2xl text-center">
    Seamless onboarding for users and service providers
  </p>

</div>


        {/* Timelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* User Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center">
              <FaUser className="mr-2 text-[#E2CF7D]" /> For Users
            </h3>
            <Timeline steps={userSteps} />
          </div>

          {/* Provider Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center">
              <FaCar className="mr-2 text-[#E2CF7D]" /> For Providers
            </h3>
            <Timeline steps={providerSteps} />
          </div>
        </div>

        {/* Provider Types */}
        <div className="max-w-6xl mx-auto my-20">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">
            Required Documents by Provider Type
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {providerTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] flex items-center justify-center text-white text-xl mr-4">
                    {type.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{type.title}</h4>
                </div>
                <ul className="space-y-3 mt-4">
                  {type.docs.map((doc, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-[#E2CF7D] rounded-full mr-3"></div>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Notice */}

<div className="max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-yellow-100">
  <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
    <FaFileAlt className="mr-3 text-[#E2CF7D] text-2xl" />
    Legal & Security Notice
  </h4>

  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    <p className="text-gray-700 italic text-base mb-4 leading-relaxed">
      "I confirm I have read and accepted the ALLOGO terms. I understand ALLOGO is only a connecting platform and that any incident or payment outside the app is my responsibility."
    </p>

    <div className="flex items-center mt-4">
      <input 
        type="checkbox" 
        id="terms" 
        className="mr-3 w-5 h-5 accent-[#E2CF7D] border-gray-300 rounded transition duration-300 focus:ring-2 focus:ring-[#E2CF7D]" 
      />
      <label htmlFor="terms" className="text-gray-700 font-semibold select-none">
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
