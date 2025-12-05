import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaCarSide,
    FaCamera,
    FaMoneyBill,
    FaMapMarkerAlt,
    FaFileUpload,
    FaTag,
    FaUser,
} from "react-icons/fa";

export default function ListVehicle() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        vehicleType: "",
        brand: "",
        model: "",
        price: "",
        location: "",
        docs: null,
        photos: null,
        termsAccepted: false,
    });

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const inputClass =
        "w-full pl-10 pr-4 py-2 bg-white text-black border border-[#B78E3B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A7A3E] shadow-sm hover:shadow-md transition duration-300";

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        if (type === "file") {
            setForm({ ...form, [name]: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = () => {
        alert("Vehicle listing submitted successfully.");
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB] flex justify-center items-center p-5 mb-5">
            <div className="w-full max-w-5xl bg-white rounded-2xl border border-[#B78E3B]/40 overflow-hidden shadow-lg">

                {/* HEADER */}
                <div className="bg-[#0D0D0D] text-center py-6 px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#B78E3B] tracking-wide">
                        List Your Vehicle
                    </h2>
                    <div className="border-t border-[#B78E3B]/30 w-11/12 mx-auto my-2"></div>
                    <p className="text-md text-white">
                        Rent your car, scooter, motorcycle, SUV, or truck on ALLOGO
                    </p>
                </div>

                {/* FORM */}
                <div className="p-5 md:p-8 space-y-5 transition-all duration-300 hover:shadow-[0_0_25px_#B78E3B]">
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

                    {/* Vehicle Type */}
                    <div className="relative">
                        <label className="font-semibold text-md text-[#B78E3B]">Vehicle Type</label>
                        <FaCarSide className="absolute left-3 top-[40px] text-[#B78E3B]" />
                        <input
                            name="vehicleType"
                            value={form.vehicleType}
                            onChange={handleChange}
                            placeholder="e.g. Car, Scooter, Truck"
                            className={inputClass}
                        />
                    </div>

                    {/* Brand & Model */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="relative">
                            <label className="font-semibold text-md text-[#B78E3B]">Brand</label>
                            <FaTag className="absolute left-3 top-[40px] text-[#B78E3B]" />
                            <input
                                name="brand"
                                value={form.brand}
                                onChange={handleChange}
                                placeholder="e.g. Toyota, Honda"
                                className={inputClass}
                            />
                        </div>

                        <div className="relative">
                            <label className="font-semibold text-md text-[#B78E3B]">Model</label>
                            <FaTag className="absolute left-3 top-[40px] text-[#B78E3B]" />
                            <input
                                name="model"
                                value={form.model}
                                onChange={handleChange}
                                placeholder="e.g. Corolla, Civic"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Price */}
                        <div className="relative">
                            <label className="font-semibold text-md text-[#B78E3B]">Rental Price (Daily)</label>
                            <FaMoneyBill className="absolute left-3 top-[40px] text-[#B78E3B]" />
                            <input
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                placeholder="Enter price per day"
                                className={inputClass}
                            />
                        </div>

                        {/* Location */}
                        <div className="relative">
                            <label className="font-semibold text-md text-[#B78E3B]">Location</label>
                            <FaMapMarkerAlt className="absolute left-3 top-[40px] text-[#B78E3B]" />
                            <input
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                placeholder="Enter pickup city / area"
                                className={inputClass}
                            />
                        </div>
                    </div>


                    {/* Upload */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Photos */}
                        <div className="relative">
                            <label className="font-semibold text-md text-[#B78E3B]">
                                Upload Vehicle Photos
                            </label>
                            <FaCamera className="absolute left-3 top-[40px] text-[#B78E3B]" />
                            <input
                                type="file"
                                name="photos"
                                onChange={handleChange}
                                className={`${inputClass} p-2`}
                            />
                        </div>

                        {/* Document */}
                        <div className="relative">
                            <label className="font-semibold text-md text-[#B78E3B]">
                                Upload Registration Document
                            </label>
                            <FaFileUpload className="absolute left-3 top-[40px] text-[#B78E3B]" />
                            <input
                                type="file"
                                name="docs"
                                onChange={handleChange}
                                className={`${inputClass} p-2`}
                            />
                        </div>
                    </div>
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
                    {/* Commission Notice */}
                    {/* <p className="text-sm text-[#B78E3B] bg-[#FFF7E6] p-3 rounded-lg border border-[#B78E3B]/50">
                        ALLOGO applies a <strong>3% commission</strong> on all vehicle rental transactions.
                    </p> */}

                    {/* Submit */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={handleSubmit}
                            className="p-4 text-white text-lg rounded-xl bg-[#B78E3B] hover:bg-[#b8924b] transition-all shadow-lg hover:shadow-[#9A7A3E]/50 font-semibold"
                        >
                            Send verfication code
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
