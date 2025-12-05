import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUser,
  FaPhoneAlt,
  FaWhatsapp,
  FaCar,
  FaBoxes,
  FaFileUpload,
  FaChevronDown,
} from "react-icons/fa";

// Reusable Input Component
const InputField = ({ label, icon: Icon, ...props }) => (
  <div className="relative">
    <label className="block font-semibold text-md text-[#B78E3B] mb-1">
      {label}
    </label>
    {Icon && <Icon className="absolute left-3 top-[40px] text-[#B78E3B]" />}
    <input
      {...props}
      className="w-full pl-10 pr-4 py-2 bg-white text-black border border-[#B78E3B] 
                 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A7A3E] 
                 shadow-sm hover:shadow-md transition-all"
    />
  </div>
);

// Reusable Dropdown Component
const Dropdown = ({ label, icon: Icon, value, open, setOpen, options, onSelect }) => (
  <div className="relative">
    <label className="block font-semibold text-md text-[#B78E3B] mb-1">
      {label}
    </label>
    <Icon className="absolute left-3 top-[40px] text-[#B78E3B]" />

    <div
      className="w-full bg-white border border-[#B78E3B] rounded-xl px-4 py-2 pl-10 
                 flex justify-between items-center cursor-pointer shadow-sm 
                 hover:shadow-md transition-all"
      onClick={() => setOpen(!open)}
    >
      <span className={value ? "text-black" : "text-gray-500"}>
        {value || `Select ${label}`}
      </span>
      <FaChevronDown className="text-[#B78E3B]" />
    </div>

    {open && (
      <ul className="absolute w-full bg-white border border-[#B78E3B] 
                     mt-1 rounded-xl shadow-lg z-10 max-h-48 overflow-auto">
        {options.map((item) => (
          <li
            key={item}
            className="px-4 py-2 cursor-pointer hover:bg-[#B78E3B]/10"
            onClick={() => {
              onSelect(item);
              setOpen(false);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default function BecomeDelivery() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    vehicleType: "",
    deliveryCategory: "",
    license: null,
    registration: null,
    vehiclePhoto: null,
    termsAccepted: false,
  });

  const [open, setOpen] = useState({
    vehicle: false,
    category: false,
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const requiresDocs =
    form.vehicleType !== "Bicycle" && form.vehicleType !== "On Foot";

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Delivery Provider application submitted!");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-5 mb-5">
      <div className="w-full max-w-5xl bg-white rounded-2xl border border-[#B78E3B]/40 shadow-lg">

        {/* HEADER */}
        <div className="bg-[#0D0D0D] text-center py-6 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#B78E3B]">
            Become a Delivery Provider
          </h2>
          <div className="border-t border-[#B78E3B]/30 w-11/12 mx-auto my-2"></div>
          <p className="text-md text-white">
            Register to provide delivery services with ALLOGO
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-5 md:p-8 space-y-5 hover:shadow-[0_0_25px_#B78E3B] transition-all"
        >
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              label="First Name"
              name="firstName"
              icon={FaUser}
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />
            <InputField
              label="Last Name"
              name="lastName"
              icon={FaUser}
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              label="Phone Number"
              name="phone"
              icon={FaPhoneAlt}
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
            <InputField
              label="WhatsApp Number"
              name="whatsapp"
              icon={FaWhatsapp}
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="Enter WhatsApp number"
            />
          </div>

          {/* Vehicle Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Dropdown
              label="Vehicle Type"
              icon={FaCar}
              value={form.vehicleType}
              open={open.vehicle}
              setOpen={(v) => setOpen({ ...open, vehicle: v })}
              options={["Bicycle", "Motorcycle", "Car", "On Foot"]}
              onSelect={(val) => setForm({ ...form, vehicleType: val })}
            />

            {/* Delivery Category */}
            <Dropdown
              label="Delivery Category"
              icon={FaBoxes}
              value={form.deliveryCategory}
              open={open.category}
              setOpen={(v) => setOpen({ ...open, category: v })}
              options={[
                "Food",
                "Pharmacy",
                "Packages",
                "Products",
                "All Deliveries",
              ]}
              onSelect={(val) => setForm({ ...form, deliveryCategory: val })}
            />
          </div>

          {/* Required Docs (Depends on Vehicle Type) */}
          {requiresDocs && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField
                label="Upload License"
                type="file"
                name="license"
                icon={FaFileUpload}
                onChange={handleChange}
              />
              <InputField
                label="Upload Vehicle Registration"
                type="file"
                name="registration"
                icon={FaFileUpload}
                onChange={handleChange}
              />
              <InputField
                label="Upload Vehicle Photo"
                type="file"
                name="vehiclePhoto"
                icon={FaFileUpload}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Terms */}
          <label className="flex gap-2 text-[#B78E3B] text-sm">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleChange}
            />
            I confirm I have read and accepted the ALLOGO terms. I understand ALLOGO is only a connecting platform and any incident or payment outside the app is my responsibility.
          </label>

         

          {/* Submit */}
          <div className="flex justify-center">
            <button
              className="p-4 mt-4 text-white text-lg rounded-xl bg-[#B78E3B] hover:bg-[#b8924b] shadow-lg"
            >
              Send Verification Code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
