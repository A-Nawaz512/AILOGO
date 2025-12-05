import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUser,
  FaPhoneAlt,
  FaWhatsapp,
  FaCar,
  FaFileUpload,
  FaChevronDown,
} from "react-icons/fa";

// Reusable input field
const InputField = ({ label, icon: Icon, ...props }) => (
  <div className="relative">
    <label className="block font-semibold text-md text-[#B78E3B] mb-1">{label}</label>
    <Icon className="absolute left-3 top-[40px] text-[#B78E3B]" />
    <input
      {...props}
      className="w-full pl-10 pr-4 py-2 bg-white text-black border border-[#B78E3B] 
                 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A7A3E] 
                 shadow-sm hover:shadow-md transition-all"
    />
  </div>
);

// Reusable dropdown
const Dropdown = ({ label, icon: Icon, value, open, setOpen, options, onSelect }) => (
  <div className="relative">
    <label className="block font-semibold text-md text-[#B78E3B] mb-1">{label}</label>
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
      <ul className="absolute w-full bg-white border border-[#B78E3B] mt-1 
                     rounded-xl shadow-lg z-10 max-h-48 overflow-auto">
        {options.map((opt) => (
          <li
            key={opt}
            className="px-4 py-2 cursor-pointer hover:bg-[#B78E3B]/10"
            onClick={() => {
              onSelect(opt);
              setOpen(false);
            }}
          >
            {opt}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default function BecomeDriver() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    vehicleType: "",
    driverGender: "",
    serviceType: "",
    license: null,
    registration: null,
    vehiclePhoto: null,
    termsAccepted: false,
  });

  const [openDropdown, setOpenDropdown] = useState({
    vehicle: false,
    gender: false,
    service: false,
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, type, checked, files, value } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-5 mb-5">
      <div className="w-full max-w-5xl bg-white rounded-2xl border border-[#B78E3B]/40 shadow-lg">

        {/* Header */}
        <div className="bg-[#0D0D0D] text-center py-6 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#B78E3B]">
            Become a Driver
          </h2>
          <div className="border-t border-[#B78E3B]/30 w-11/12 mx-auto my-2"></div>
          <p className="text-md text-white">Register to drive with ALLOGO</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-5 md:p-8 space-y-5 hover:shadow-[0_0_25px_#B78E3B] transition-all"
        >
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField label="First Name" placeholder="Enter first name" name="firstName" icon={FaUser} value={form.firstName} onChange={handleChange} />
            <InputField label="Last Name" placeholder="Enter last name" name="lastName" icon={FaUser} value={form.lastName} onChange={handleChange} />
          </div>

          {/* Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField label="Phone Number" placeholder="Enter phone number" name="phone" icon={FaPhoneAlt} value={form.phone} onChange={handleChange} />
            <InputField label="WhatsApp Number" placeholder="Enter WhatsApp number" name="whatsapp" icon={FaWhatsapp} value={form.whatsapp} onChange={handleChange} />
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Dropdown
              label="Vehicle Type"
              icon={FaCar}
              value={form.vehicleType}
              open={openDropdown.vehicle}
              setOpen={(v) => setOpenDropdown({ ...openDropdown, vehicle: v })}
              options={["Car", "Motorcycle / Two-Wheeler"]}
              onSelect={(val) => setForm({ ...form, vehicleType: val })}
            />

            <Dropdown
              label="Driver Gender"
              icon={FaUser}
              value={form.driverGender}
              open={openDropdown.gender}
              setOpen={(v) => setOpenDropdown({ ...openDropdown, gender: v })}
              options={["Male", "Female"]}
              onSelect={(val) => setForm({ ...form, driverGender: val })}
            />

          </div>

          {/* Service Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Dropdown
              label="Service Type"
              icon={FaCar}
              value={form.serviceType}
              open={openDropdown.service}
              setOpen={(v) => setOpenDropdown({ ...openDropdown, service: v })}
              options={[
                "Rides",
                "Deliveries",
                "Roadside Assistance",
                "Vehicle Rental",
              ]}
              onSelect={(val) => setForm({ ...form, serviceType: val })}
            />
            <InputField type="file" label="Upload Vehicle Photo" name="vehiclePhoto" icon={FaFileUpload} onChange={handleChange} />
          </div>


          {/* Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField type="file" label="Upload License" name="license" icon={FaFileUpload} onChange={handleChange} />
            <InputField type="file" label="Upload Vehicle Registration" name="registration" icon={FaFileUpload} onChange={handleChange} />

          </div>

          {/* Terms */}
          <label className="flex gap-2 text-[#B78E3B] text-sm">
            <input type="checkbox" name="termsAccepted" checked={form.termsAccepted} onChange={handleChange} />
          I confirm I have read and accepted the ALLOGO terms. I understand ALLOGO is only a connecting platform and any incident or payment outside the app is my responsibility
          </label>

          {/* <p className="text-sm text-[#B78E3B] bg-[#FFF7E6] p-3 rounded-lg border border-[#B78E3B]/50">
            ALLOGO applies a <strong>7% commission</strong> on all vehicle rental transactions.
          </p> */}

          {/* Submit */}
          <div className="flex justify-center">
            <button className="p-4 mt-4 text-white text-lg rounded-xl bg-[#B78E3B] hover:bg-[#b8924b] shadow-lg">
              Send Verification Code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
