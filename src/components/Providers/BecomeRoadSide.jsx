import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUser,
  FaPhone,
  FaFileUpload,
  FaWhatsapp,
  FaChevronDown,
  FaTools,
  FaCarCrash,
} from "react-icons/fa";

export default function BecomeRoadSide() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    roadsideType: "",
    serviceZone: "",
    idCard: null,
    equipmentPhoto: null,
    termsAccepted: false,
  });

  const [roadsideOpen, setRoadsideOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const inputClass =
    "w-full pl-10 pr-4 py-2 bg-white text-black border border-[#B78E3B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A7A3E] shadow-sm hover:shadow-md transition-all duration-300";

  const dropdownClass =
    "w-full bg-white border border-[#B78E3B] rounded-xl px-4 py-2 flex justify-between items-center cursor-pointer shadow-sm hover:shadow-md transition-all";

  const optionsClass =
    "absolute w-full bg-white border border-[#B78E3B] mt-1 rounded-xl shadow-lg z-10 max-h-48 overflow-auto";

  const optionItemClass = "px-4 py-2 cursor-pointer hover:bg-[#B78E3B]/10";

  const handleChange = (e) => {
    const { name, type, files, value, checked } = e.target;
    if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Your roadside provider registration has been submitted.");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-5 mb-5">
      <div className="w-full max-w-5xl bg-white rounded-2xl border border-[#B78E3B]/40 overflow-hidden shadow-lg">

        {/* HEADER */}
        <div className="bg-[#0D0D0D] text-center py-6 px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#B78E3B]">
            Become a Roadside Provider
          </h2>
          <div className="border-t border-[#B78E3B]/30 w-11/12 mx-auto my-2"></div>
          <p className="text-md text-white">
            Register as a mechanic, towing, battery, tire or fuel assistance provider
          </p>
        </div>

        {/* FORM */}
        <div className="p-5 md:p-8 space-y-5 transition-all duration-300 hover:shadow-[0_0_25px_#B78E3B]">

          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <label className="font-semibold text-md text-[#B78E3B] mb-1">First Name</label>
              <FaUser className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className="font-semibold text-md text-[#B78E3B] mb-1">Last Name</label>
              <FaUser className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className={inputClass}
              />
            </div>
          </div>

          {/* Phone & WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <label className="font-semibold text-md text-[#B78E3B] mb-1">Phone Number</label>
              <FaPhone className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className="font-semibold text-md text-[#B78E3B] mb-1">WhatsApp Number</label>
              <FaWhatsapp className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="Enter WhatsApp number"
                className={inputClass}
              />
            </div>
          </div>

          {/* Roadside Service Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="font-semibold text-md text-[#B78E3B] mb-1">
                Roadside Service Type
              </label>
              <FaTools className="absolute left-3 top-[40px] text-[#B78E3B]" />

              <div
                className={`${dropdownClass} pl-10`}
                onClick={() => setRoadsideOpen(!roadsideOpen)}
              >
                <span className={form.roadsideType ? "text-black" : "text-gray-500"}>
                  {form.roadsideType || "Select roadside service"}
                </span>
                <FaChevronDown className="text-[#B78E3B]" />
              </div>

              {roadsideOpen && (
                <ul className={optionsClass}>
                  <li
                    className={optionItemClass}
                    onClick={() => {
                      setForm({ ...form, roadsideType: "Mechanic" });
                      setRoadsideOpen(false);
                    }}
                  >
                    Mechanic
                  </li>
                  <li
                    className={optionItemClass}
                    onClick={() => {
                      setForm({ ...form, roadsideType: "Towing" });
                      setRoadsideOpen(false);
                    }}
                  >
                    Towing
                  </li>
                  <li
                    className={optionItemClass}
                    onClick={() => {
                      setForm({ ...form, roadsideType: "Battery Boost" });
                      setRoadsideOpen(false);
                    }}
                  >
                    Battery Boost
                  </li>
                  <li
                    className={optionItemClass}
                    onClick={() => {
                      setForm({ ...form, roadsideType: "Tire Change" });
                      setRoadsideOpen(false);
                    }}
                  >
                    Tire Change
                  </li>
                  <li
                    className={optionItemClass}
                    onClick={() => {
                      setForm({ ...form, roadsideType: "Fuel Delivery" });
                      setRoadsideOpen(false);
                    }}
                  >
                    Fuel Delivery
                  </li>
                </ul>
              )}
            </div>

            {/* Service Zone */}
            <div className="relative">
              <label className="font-semibold text-md text-[#B78E3B] mb-1">
                Service Zone / Area
              </label>
              <FaCarCrash className="absolute left-3 top-[40px] text-[#B78E3B]" />

              <input
                name="serviceZone"
                value={form.serviceZone}
                onChange={handleChange}
                placeholder="Enter service zone / city"
                className={inputClass}
              />
            </div>
          </div>
          {/* Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <label className="font-semibold text-md text-[#B78E3B] mb-1">
                Upload ID Card / Document
              </label>
              <FaFileUpload className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                type="file"
                name="idCard"
                onChange={handleChange}
                className={`${inputClass} p-2`}
              />
            </div>

            <div className="relative">
              <label className="font-semibold text-md text-[#B78E3B] mb-1">
                Upload Equipment / Vehicle Photo
              </label>
              <FaFileUpload className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                type="file"
                name="equipmentPhoto"
                onChange={handleChange}
                className={`${inputClass} p-2`}
              />
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-[#B78E3B] text-sm">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleChange}
              className="mt-1 h-4 w-4"
            />
            I confirm I have read and accepted the ALLOGO terms. I understand
            ALLOGO is only a connecting platform and any incident or payment
            outside the app is my responsibility.
          </label>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="p-4 mt-4 text-white text-lg rounded-xl bg-[#B78E3B] hover:bg-[#b8924b] transition-all shadow-lg hover:shadow-[#9A7A3E]/50 font-semibold"
            >
              Send Verification Code
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
