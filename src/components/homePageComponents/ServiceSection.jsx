import React from "react";
import { Car, Home as HomeIcon, Bike, Truck, Utensils, Wrench } from "lucide-react";

const services = [
  { title: "Ride Booking (VTC)", icon: Car },
  { title: "Vehicle Rental", icon: Bike },
  { title: "Apartment Rental", icon: HomeIcon },
  { title: "Courier Delivery", icon: Truck },
  { title: "Food Delivery", icon: Utensils },
  { title: "Roadside Assistance", icon: Wrench },
];

export default function ServicesSection() {
  return (
    <div className="bg-[#111] text-white py-10">

      
      <h2 className="text-center text-4xl font-bold mb-16">
        Our{" "}
        <span className="bg-gradient-to-r from-[#E4C46A] via-[#C9A227] to-[#9C7C1D] text-transparent bg-clip-text">
          Services
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {services.map((s, i) => (
          <div
            key={i}
            className="bg-[#1A1A1A] p-8 rounded-3xl text-center border border-[#C9A227]/40
                       transform transition-all duration-500 hover:scale-[1.05]
                       hover:border-[#E4C46A] hover:shadow-[0_0_20px_rgba(201,162,39,0.6)]"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-gradient-to-br from-[#E4C46A] via-[#C9A227] to-[#9C7C1D] shadow-[0_0_18px_rgba(201,162,39,0.7)]">
                <s.icon size={40} className="text-black font-bold" strokeWidth={2.5} />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#E4C46A] mb-2">
              {s.title}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              High-quality service with transparency and loyalty rewards.
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
