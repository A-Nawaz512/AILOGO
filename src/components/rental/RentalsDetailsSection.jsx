// RentalsDetailsSection.jsx
import React from "react";
import { FaCar, FaUser, FaBuilding } from "react-icons/fa";

const RentalsDetailsSection = () => {
   return (
      <section className="bg-white py-16">
         <div className="mx-auto max-w-6xl px-6 lg:px-0">
            {/* Section Header */}
            <div className="text-center mb-12">
               <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Flexible Rentals for <br />
                  <span className="text-[#B78E3B]">Every Need</span>
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose between cars and scooters, rent for hours or days, all
                  managed through our simple platform.
               </p>
            </div>

            {/* Three Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {/* Rental Types */}
               <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl hover:border-[#B78E3B] hover:-translate-y-1.5 transition-all duration-500">
                  <div className="flex items-center justify-between gap-3 mb-6">
                     <h3 className="text-xl font-semibold text-gray-900">
                        Rental Types
                     </h3>
                     <FaCar className="text-[#B78E3B] text-2xl" />
                  </div>

                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#B78E3B] rounded-full mt-2"></div>
                        <div>
                           <h4 className="font-medium text-gray-900">
                              Cars · Hours/Days
                           </h4>
                           <p className="text-gray-600 text-sm mt-1">
                              Perfect for road trips, city errands, and longer
                              journeys.
                           </p>
                        </div>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#B78E3B] rounded-full mt-2"></div>
                        <div>
                           <h4 className="font-medium text-gray-900">
                              Scooters · Hours/Days
                           </h4>
                           <p className="text-gray-600 text-sm mt-1">
                              Ideal for quick trips and short-distance travel.
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>

               {/* For Clients */}
               <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between gap-3 mb-6">
                     <h3 className="text-xl font-semibold text-gray-900">
                        For Clients
                     </h3>
                     <FaUser className="text-[#B78E3B] text-2xl" />
                  </div>

                  <ol className="space-y-4">
                     {[
                        "Browse available vehicles near you on the map",
                        "Select dates and rental duration",
                        "Review details and confirm booking",
                        "Pick up the vehicle and start your trip",
                        "Return vehicle and provide feedback",
                     ].map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                           <div className="w-6 h-6 bg-[#B78E3B] text-white text-sm rounded-full flex items-center justify-center shrink-0 mt-0.5">
                              {index + 1}
                           </div>
                           <span className="text-gray-700">{step}</span>
                        </li>
                     ))}
                  </ol>
               </div>

               {/* For Owners */}
               <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between gap-3 mb-6">
                     <h3 className="text-xl font-semibold text-gray-900">
                        For Owners
                     </h3>
                     <FaBuilding className="text-[#B78E3B] text-2xl" />
                  </div>

                  <ul className="space-y-4">
                     {[
                        "Create listings with photos and pricing",
                        "Manage availability with calendar",
                        "Only 5% commission on completed rentals",
                        "Track bookings and earnings",
                        "Vehicles appear automatically on map",
                     ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                           <div className="w-2 h-2 bg-[#B78E3B] rounded-full mt-2"></div>
                           <span className="text-gray-700">{item}</span>
                        </li>
                     ))}
                  </ul>

                  <div className="flex gap-3 mt-6">
                     <button className="px-4 py-2 bg-[#B78E3B] text-white text-sm font-medium rounded-lg hover:bg-[#A37C32] transition-colors duration-300 flex-1">
                        List Vehicle
                     </button>
                     <button className="px-4 py-2 border border-[#B78E3B] text-[#B78E3B] text-sm font-medium rounded-lg hover:bg-[#F9F5EB] transition-colors duration-300 flex-1">
                        View Dashboard
                     </button>
                  </div>
               </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
               <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Key Benefits
               </h3>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                     <div className="w-16 h-16 bg-[#F9F5EB] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📍</span>
                     </div>
                     <h4 className="font-medium text-gray-900 mb-2">
                        Nearby First
                     </h4>
                     <p className="text-gray-600 text-sm">
                        Vehicles sorted by distance for convenience
                     </p>
                  </div>

                  <div className="text-center">
                     <div className="w-16 h-16 bg-[#F9F5EB] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚡</span>
                     </div>
                     <h4 className="font-medium text-gray-900 mb-2">
                        Quick Booking
                     </h4>
                     <p className="text-gray-600 text-sm">
                        Reserve a vehicle in just a few clicks
                     </p>
                  </div>

                  <div className="text-center">
                     <div className="w-16 h-16 bg-[#F9F5EB] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⭐</span>
                     </div>
                     <h4 className="font-medium text-gray-900 mb-2">
                        Verified Reviews
                     </h4>
                     <p className="text-gray-600 text-sm">
                        Trust through transparent feedback system
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default RentalsDetailsSection;
