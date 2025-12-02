// RentalsDetailsSection.jsx
import React from "react";

const RentalsDetailsSection = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-0">
        {/* Top intro */}
        <div className="flex flex-col items-start justify-between gap-6 pb-10 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Flexible rentals for{" "}
              <span className="bg-gradient-to-r from-[#c2921f] to-[#e0b446] bg-clip-text text-transparent">
                every kind of trip
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
              Choose between cars and scooters, rent for a few hours or several
              days, and manage everything inside one simple interface.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
            <span className="rounded-full bg-gradient-to-b from-white to-slate-50 px-4 py-2.5 font-medium text-slate-700 shadow-lg">
              Short-term · Hours / days
            </span>
            <span className="rounded-full border border-[#f5c451]/50 bg-gradient-to-r from-[#f5c451]/15 to-[#f5c451]/5 px-4 py-2.5 font-medium text-[#7a5b10] shadow-lg">
              Cars & scooters on 3D map
            </span>
          </div>
        </div>

        {/* GRID: rental types + clients + owners */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Rental Types */}
          <div className="group flex flex-col rounded-3xl bg-gradient-to-b from-white to-slate-50/50 p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5c451]/20 to-[#f5c451]/10 text-lg shadow-inner">
                🚗
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                Rental types
              </h3>
            </div>

            <p className="text-sm text-slate-600">
              All rentals are short-term, which keeps things flexible for both
              travelers and owners.
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="group/item flex gap-2 rounded-lg p-3 transition-all hover:bg-gradient-to-r hover:from-slate-50/50 hover:to-white">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#c2921f] shadow-sm group-hover/item:scale-125 transition-transform" />
                <div>
                  <p className="font-semibold text-slate-900 group-hover/item:text-slate-950">
                    Cars · Hours / days
                  </p>
                  <p className="text-xs text-slate-500 group-hover/item:text-slate-600">
                    Great for road trips, airport runs, and city errands.
                  </p>
                </div>
              </li>
              <li className="group/item flex gap-2 rounded-lg p-3 transition-all hover:bg-gradient-to-r hover:from-slate-50/50 hover:to-white">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#c2921f] shadow-sm group-hover/item:scale-125 transition-transform" />
                <div>
                  <p className="font-semibold text-slate-900 group-hover/item:text-slate-950">
                    Scooters · Hours / days
                  </p>
                  <p className="text-xs text-slate-500 group-hover/item:text-slate-600">
                    Perfect for quick hops across town and last-mile journeys.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-slate-50/80 to-slate-100/50 p-3.5 text-xs text-slate-600 shadow-inner">
              <span className="font-semibold text-[#7a5b10]">
                Pro tip:
              </span>{" "}
              Compare multiple vehicles on the 3D map before booking to find the
              best price and distance.
            </div>
          </div>

          {/* For Clients */}
          <div className="group flex flex-col rounded-3xl bg-gradient-to-b from-white to-slate-50/50 p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-lg shadow-inner">
                🙋‍♀️
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                For clients
              </h3>
            </div>

            <p className="text-sm text-slate-600">
              A simple booking journey built for busy people on the move.
            </p>

            <ol className="mt-4 space-y-3 text-sm text-slate-700">
              {[
                "Open the 3D map to discover cars and scooters available near your location.",
                "Choose your vehicle, select dates and rental duration (hours or days).",
                "Review price, mileage limits and conditions, then confirm the booking.",
                "Pick up the vehicle, enjoy your trip and return it on time.",
                "Rate the owner and share feedback with the community."
              ].map((item, index) => (
                <li key={index} className="group/item flex gap-3 rounded-lg p-3 transition-all hover:bg-gradient-to-r hover:from-slate-50/50 hover:to-white">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-[0.7rem] font-semibold text-white shadow-lg group-hover/item:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <span className="group-hover/item:text-slate-800 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* For Owners / Agencies */}
          <div className="group flex flex-col rounded-3xl bg-gradient-to-br from-[#fff8e3] via-white to-[#fff4cc] p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl sm:p-6">
            <div className="mb-4 inline-flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5c451]/20 to-[#f5c451]/10 text-lg shadow-inner">
                  🧑‍💼
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
                  For owners & agencies
                </h3>
              </div>
              <span className="rounded-full bg-gradient-to-r from-white/90 to-white/70 px-3 py-1.5 text-[0.65rem] font-semibold text-[#7a5b10] shadow-lg">
                5% commission
              </span>
            </div>

            <p className="text-sm text-slate-700">
              Powerful tools to keep every vehicle booked and visible on the
              3D map.
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-800">
              {[
                "Create listings with photos, clear descriptions and hourly / daily prices.",
                "Use the availability calendar to control when each vehicle can be booked.",
                `Pay only a <strong class="font-semibold text-[#7a5b10]">5% commission</strong> on completed rentals.`,
                "Track bookings, payouts and ratings from a dedicated dashboard.",
                "Vehicles automatically appear on the 3D map whenever marked as available."
              ].map((item, index) => (
                <li key={index} className="group/item flex gap-2 rounded-lg p-3 transition-all hover:bg-gradient-to-r hover:from-[#fff5d0]/30 hover:to-[#fff8e3]/30">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#c2921f] shadow-sm group-hover/item:scale-125 transition-transform" />
                  <span className="group-hover/item:text-slate-900 transition-colors" dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3 text-xs sm:text-sm">
              <button className="group/btn rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-2.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Start listing vehicles
                <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
              <button className="group/btn rounded-full border border-[#c2921f]/40 bg-gradient-to-b from-transparent to-white/50 px-5 py-2.5 font-semibold text-[#7a5b10] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c2921f] hover:bg-gradient-to-b hover:from-[#fff4ce] hover:to-[#ffefb5] hover:shadow-xl">
                View owner tools
              </button>
            </div>
          </div>
        </div>

        {/* Bottom strip: key benefits */}
        <div className="mt-10 grid gap-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-5 text-xs text-slate-100 shadow-2xl sm:grid-cols-3 sm:px-6 sm:py-6 sm:text-sm">
          <div className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/15 to-transparent text-lg shadow-inner">
              📍
            </span>
            <p>
              <span className="font-semibold text-[#f5c451]">Nearby first.</span>{" "}
              Vehicles are sorted by distance so users always see the closest
              options.
            </p>
          </div>
          <div className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/15 to-transparent text-lg shadow-inner">
              ⏱️
            </span>
            <p>
              <span className="font-semibold text-[#f5c451]">Fast booking.</span>{" "}
              Reserve a ride in just a few taps from mobile or desktop.
            </p>
          </div>
          <div className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/15 to-transparent text-lg shadow-inner">
              ⭐
            </span>
            <p>
              <span className="font-semibold text-[#f5c451]">
                Ratings & reviews.
              </span>{" "}
              Build trust between clients and owners with transparent feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalsDetailsSection;