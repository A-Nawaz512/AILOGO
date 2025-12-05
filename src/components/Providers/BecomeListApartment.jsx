import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaBuilding,
  FaHome,
  FaMoneyBill,
  FaMapMarkerAlt,
  FaCamera,
  FaFileUpload,
} from "react-icons/fa";

// Reusable styled input
const InputField = ({ label, icon: Icon, ...props }) => (
  <div className="relative">
    <label className="block font-semibold text-md text-[#B78E3B] mb-1">
      {label}
    </label>
    <Icon className="absolute left-3 top-[40px] text-[#B78E3B]" />
    <input
      {...props}
      className="w-full pl-10 pr-4 py-2 bg-white text-black border border-[#B78E3B]
                 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A7A3E]
                 shadow-sm hover:shadow-md transition-all"
    />
  </div>
);

export default function BecomeListApartment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    ownerName: "",
    phone: "",
    apartmentType: "",
    bedrooms: "",
    price: "",
    location: "",
    photos: [],
    docs: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
            ? name === "photos"
              ? [...files]
              : files[0]
            : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept ALLOGO terms before submitting.");
      return;
    }
    alert("Apartment listing submitted!");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-5 mb-5">
      <div className="w-full max-w-5xl bg-white rounded-2xl border border-[#B78E3B]/40 shadow-lg">

        {/* HEADER */}
        <div className="bg-[#0D0D0D] text-center py-6 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#B78E3B]">
            List Your Apartment
          </h2>
          <div className="border-t border-[#B78E3B]/30 w-11/12 mx-auto my-2"></div>
          <p className="text-md text-white">Add your apartment and rent it on ALLOGO</p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-5 md:p-8 space-y-6 hover:shadow-[0_0_25px_#B78E3B] transition-all"
        >

          {/* FIRST & LAST NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              label="First Name"
              name="firstName"
              icon={FaUser}
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputField
              label="Last Name"
              name="lastName"
              icon={FaUser}
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* OWNER NAME + PHONE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              label="Owner Full Name"
              name="ownerName"
              icon={FaUser}
              placeholder="Enter full name"
              value={formData.ownerName}
              onChange={handleChange}
            />
            <InputField
              label="Phone Number"
              name="phone"
              icon={FaPhone}
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* APARTMENT TYPE + BEDROOMS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              label="Apartment Type"
              name="apartmentType"
              icon={FaBuilding}
              placeholder="Apartment, House, Studio..."
              value={formData.apartmentType}
              onChange={handleChange}
            />
            <InputField
              label="Number of Bedrooms"
              name="bedrooms"
              icon={FaHome}
              type="number"
              placeholder="e.g. 1, 2, 3..."
              value={formData.bedrooms}
              onChange={handleChange}
            />
          </div>

          {/* PRICE */}
          <InputField
            label="Monthly Rent Price"
            name="price"
            type="number"
            icon={FaMoneyBill}
            placeholder="Enter rent price"
            value={formData.price}
            onChange={handleChange}
          />

          {/* LOCATION */}
          <InputField
            label="Location"
            name="location"
            icon={FaMapMarkerAlt}
            placeholder="City / Area / Street"
            value={formData.location}
            onChange={handleChange}
          />

          {/* PHOTOS */}
          <div>
            <label className="block font-semibold text-md text-[#B78E3B] mb-1">
              Apartment Photos
            </label>
            <div className="relative">
              <FaCamera className="absolute left-3 top-3 text-[#B78E3B]" />
              <input
                type="file"
                name="photos"
                multiple
                accept="image/*"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 bg-white text-black border border-[#B78E3B]
                           rounded-xl shadow-sm hover:shadow-md transition-all"
              />
            </div>
          </div>

          {/* DOCUMENT */}
          <div>
            <label className="block font-semibold text-md text-[#B78E3B] mb-1">
              Upload Ownership Document
            </label>
            <div className="relative">
              <FaFileUpload className="absolute left-3 top-3 text-[#B78E3B]" />
              <input
                type="file"
                name="docs"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 bg-white text-black border border-[#B78E3B]
                           rounded-xl shadow-sm hover:shadow-md transition-all"
              />
            </div>
          </div>

          {/* TERMS */}
          <label className="flex gap-2 text-[#B78E3B] text-sm cursor-pointer">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            I confirm I have read and accepted the ALLOGO terms. I understand ALLOGO is only a connecting platform and any incident or payment outside the app is my responsibility          </label>

          {/* SUBMIT */}
          <div className="flex justify-center">
            <button className="p-4 mt-4 text-white text-lg rounded-xl bg-[#B78E3B]
                               hover:bg-[#b8924b] shadow-lg">
              Send verification code
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
