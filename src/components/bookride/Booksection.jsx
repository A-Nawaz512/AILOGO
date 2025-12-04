import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaCreditCard,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


export default function Booksection() {
  const [vehicleType, setVehicleType] = useState("");
  const [genderPreference, setGenderPreference] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [offer, setOffer] = useState("");
  const [notes, setNotes] = useState("");
  const [bookForSomeoneElse, setBookForSomeoneElse] = useState(false);

  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3 md:p-5 mb-5">
      <div className="w-full max-w-3xl bg-white rounded-2xl border border-[#B78E3B]/40 overflow-hidden shadow-lg">
        {/* HEADER */}
        <div className="bg-[#0D0D0D] text-center py-6 px-6 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-[#B78E3B]">Book a Ride</h2>
          <div className="border-t border-[#B78E3B]/30 w-11/12 mx-auto my-2"></div>
          <p className="text-md text-white">Fill the details below to book your ride</p>
        </div>

        {/* FORM */}
        <div className="p-5 md:p-8 space-y-5 transition-all duration-300 hover:shadow-[0_0_25px_#B78E3B]">

          {/* Pickup & Dropoff */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <label className="block font-semibold flex items-center gap-2 text-md text-[#B78E3B] mb-1">
                Pickup Location
              </label>
              <FaMapMarkerAlt className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter pickup location"
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className="block font-semibold flex items-center gap-2 text-md text-[#B78E3B] mb-1">
                Dropoff Location
              </label>
              <FaMapMarkerAlt className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Enter dropoff location"
                className={inputClass}
              />
            </div>
          </div>

          {/* Vehicle Type & Driver Preference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <label className="block font-semibold flex items-center gap-2 text-md text-[#B78E3B] mb-1">
                Vehicle Type
              </label>
              <FaUser className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <div
                className={`${dropdownClass} pl-10`}
                onClick={() => setVehicleOpen(!vehicleOpen)}
              >
                <span className={vehicleType === "" ? "text-gray-500" : "text-black"}>
                  {vehicleType || "Select vehicle type"}
                </span>
                <FaChevronDown className="text-[#B78E3B]" />
              </div>
              {vehicleOpen && (
                <ul className={optionsClass}>
                  <li className={optionItemClass} onClick={() => { setVehicleType(""); setVehicleOpen(false); }}>Select vehicle type</li>
                  <li className={optionItemClass} onClick={() => { setVehicleType("Car"); setVehicleOpen(false); }}>Car</li>
                  <li className={optionItemClass} onClick={() => { setVehicleType("Motorcycle / Two-Wheeler"); setVehicleOpen(false); }}>Motorcycle / Two-Wheeler</li>
                </ul>
              )}
            </div>

            <div className="relative">
              <label className="block font-semibold flex items-center gap-2 text-md text-[#B78E3B] mb-1">
                Driver Preference
              </label>
              <FaUser className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <div
                className={`${dropdownClass} pl-10`}
                onClick={() => setGenderOpen(!genderOpen)}
              >
                <span className={genderPreference === "" ? "text-gray-500" : "text-black"}>
                  {genderPreference || "Select driver gender"}
                </span>
                <FaChevronDown className="text-[#B78E3B]" />
              </div>
              {genderOpen && (
                <ul className={optionsClass}>
                  <li className={optionItemClass} onClick={() => { setGenderPreference(""); setGenderOpen(false); }}>Select driver gender</li>
                  <li className={optionItemClass} onClick={() => { setGenderPreference("Any"); setGenderOpen(false); }}>Any</li>
                  <li className={optionItemClass} onClick={() => { setGenderPreference("Male Driver"); setGenderOpen(false); }}>Male Driver</li>
                  <li className={optionItemClass} onClick={() => { setGenderPreference("Female Driver"); setGenderOpen(false); }}>Female Driver</li>
                </ul>
              )}
            </div>
          </div>

          {/* Your Offer & Payment Method */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <label className="block font-semibold flex items-center gap-2 text-md text-[#B78E3B] mb-1">
                Your Offer (DZD)
              </label>
              <IoPricetagOutline className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                type="number"
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
                placeholder="Enter your offer"
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className="block font-semibold flex items-center gap-2 text-md text-[#B78E3B] mb-1">
                Payment Method
              </label>
              <FaCreditCard className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <div
                className={`${dropdownClass} pl-10`}
                onClick={() => setPaymentOpen(!paymentOpen)}
              >
                <span className={paymentMethod === "" ? "text-gray-500" : "text-black"}>
                  {paymentMethod || "Select payment method"}
                </span>
                <FaChevronDown className="text-[#B78E3B]" />
              </div>
              {paymentOpen && (
                <ul className={optionsClass}>
                  <li className={optionItemClass} onClick={() => { setPaymentMethod(""); setPaymentOpen(false); }}>Select payment method</li>
                  <li className={optionItemClass} onClick={() => { setPaymentMethod("Cash"); setPaymentOpen(false); }}>Cash</li>
                  <li className={optionItemClass} onClick={() => { setPaymentMethod("Card"); setPaymentOpen(false); }}>Card</li>
                </ul>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="relative">
            <label className="block font-semibold flex items-center gap-2 text-md text-[#B78E3B] mb-1">
              Notes (Optional)
            </label>
            <FaUser className="absolute left-3 top-[40px] text-[#B78E3B]" />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add extra details"
              className={inputClass + " h-24 resize-none"}
            />
          </div>

          {/* Book for someone else */}
          <label className="flex items-center gap-2 text-[#B78E3B]">
            <input
              type="checkbox"
              checked={bookForSomeoneElse}
              onChange={(e) => setBookForSomeoneElse(e.target.checked)}
              className="h-4 w-4 rounded border-[#B78E3B] text-[#B78E3B] focus:ring-[#B78E3B]"
            />
            Book for someone else
          </label>

          {/* Preferred Communication */}
          <div className="space-y-2">
            <label className="font-semibold flex items-center gap-2 text-md text-[#B78E3B] mb-3">
              Preferred Communication
            </label>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+92 012 345678"
                className="flex items-center justify-center gap-2 p-4 rounded-xl border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                <FaPhoneAlt /> Call
              </a>
              <a
                href="https://wa.me/920123456789"
                className="flex items-center justify-center gap-2 p-4 rounded-xl border border-[#B78E3B] text-[#B78E3B] hover:bg-[#B78E3B] hover:text-white transition-all shadow-sm hover:shadow-[#B78E3B]/50"
              >
                <FaWhatsapp className="text-green-600 text-xl" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Submit */}
          <button className="w-full p-4 mt-4 text-white text-lg rounded-xl bg-[#B78E3B] hover:bg-[#b8924b] transition-all shadow-lg hover:shadow-[#9A7A3E]/50 font-semibold">
            Search Drivers
          </button>
        </div>
      </div>
    </div>
  );
}
