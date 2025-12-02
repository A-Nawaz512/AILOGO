// RentalsHeroLight.jsx
import React from "react";

const RentalsHeroLight = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/30">
      {/* subtle background shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-[#f5c451]/20 via-[#f5c451]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-gradient-to-tr from-slate-200/40 to-slate-300/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:grid lg:grid-cols-2 lg:items-center lg:py-20 xl:px-0">
        {/* LEFT SIDE ----------------------------------------------------- */}
        <div className="space-y-6">
          <div className="inline-flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
              Rentals
            </span>
            <span className="rounded-full bg-gradient-to-r from-[#f5c451]/15 to-[#f5c451]/5 px-3 py-1.5 text-xs font-semibold text-[#7a5b10] shadow-sm">
              Cars & Scooters · Short-term
            </span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Find, book & drive
            <span className="block bg-gradient-to-r from-[#c2921f] to-[#e0b446] bg-clip-text text-transparent">
              the closest rental vehicle.
            </span>
          </h1>

          <p className="max-w-xl text-sm text-slate-600 sm:text-base">
            Browse nearby cars and scooters on the live 3D map, book for hours
            or days, and start your trip in minutes. Owners and rental agencies
            get powerful tools to manage their fleet and earnings.
          </p>

          {/* Quick stats / highlights */}
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
            <div className="group flex items-center gap-3 rounded-xl bg-gradient-to-br from-slate-50 to-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f5c451]/20 to-[#f5c451]/10 text-sm font-semibold text-[#c2921f] shadow-inner">
                3D
              </span>
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-slate-950">Live map</p>
                <p className="text-slate-500 group-hover:text-slate-600">
                  See all available rentals around you.
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-3 rounded-xl bg-gradient-to-br from-slate-50 to-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f5c451]/20 to-[#f5c451]/10 text-sm font-semibold text-[#c2921f] shadow-inner">
                5%
              </span>
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-slate-950">Low commission</p>
                <p className="text-slate-500 group-hover:text-slate-600">
                  Simple, fixed rate for owners & agencies.
                </p>
              </div>
            </div>
          </div>

          {/* How it works for clients (stepper) */}
          <div className="mt-4 rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50/80 to-white p-4 shadow-xl sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                For clients · How it works
              </h2>
              <span className="rounded-full bg-gradient-to-r from-white to-slate-50 px-3 py-1.5 text-[0.65rem] font-semibold text-slate-600 shadow-sm">
                Book in 5 simple steps
              </span>
            </div>

            <ol className="mt-4 space-y-3 text-xs text-slate-700 sm:text-sm">
              {[1, 2, 3, 4, 5].map((step) => (
                <li key={step} className="group flex gap-3 rounded-lg p-3 transition-all hover:bg-gradient-to-r hover:from-slate-50/50 hover:to-white">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f5c451]/20 to-[#f5c451]/10 text-[0.7rem] font-semibold text-[#c2921f] shadow-inner group-hover:scale-110 transition-transform">
                    {step}
                  </span>
                  <span className="group-hover:text-slate-800 transition-colors">
                    {step === 1 && "Open the map and see vehicles for rent near you."}
                    {step === 2 && "Choose a car or scooter, then select dates and rental duration."}
                    {step === 3 && "Review the price and conditions, then confirm your booking."}
                    {step === 4 && "Pick up the vehicle and start your trip."}
                    {step === 5 && "Return the vehicle and rate the owner."}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f5c451] to-[#f7d068] px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-[#f5c451]/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#f5c451]/60">
              Start a booking
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="group inline-flex items-center justify-center rounded-full border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xl">
              Explore map
            </button>
          </div>
        </div>

        {/* RIGHT SIDE ---------------------------------------------------- */}
        <div className="space-y-5 lg:space-y-6">
          {/* Map highlight card */}
          <div className="group rounded-3xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/30 p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900">
                Live 3D map overview
              </h3>
              <span className="rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-3 py-1.5 text-[0.65rem] font-semibold text-slate-500 shadow-sm">
                Client view
              </span>
            </div>

            <p className="text-xs text-slate-600 sm:text-sm">
              All available rental vehicles appear on our 3D map so users can
              instantly find the closest option and compare prices.
            </p>

            {/* Simple fake map grid */}
            <div className="mt-4 grid grid-cols-4 gap-2 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 p-3 sm:p-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="group/cell flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-[0.65rem] font-semibold text-slate-400 group-hover/cell:scale-110 transition-transform">
                    {i === 3 || i === 7 || i === 10 ? "🚗" : i === 5 ? "🛵" : ""}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[0.7rem] text-slate-500 sm:text-xs">
              Zoom, filter by vehicle type, and tap to open the rental details.
            </p>
          </div>

          {/* Owners / agencies card */}
          <div className="group rounded-3xl border border-[#f5c451]/40 bg-gradient-to-br from-[#fff8e3] via-white to-[#fff5d0] p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900">
                For owners & rental agencies
              </h3>
              <span className="rounded-full bg-gradient-to-r from-white/90 to-white/70 px-3 py-1.5 text-[0.65rem] font-semibold text-[#7a5b10] shadow-sm">
                Host dashboard
              </span>
            </div>

            <p className="text-xs text-slate-700 sm:text-sm">
              Turn your cars and scooters into a steady income stream with
              powerful tools built for professionals.
            </p>

            <ul className="mt-3 space-y-2 text-xs text-slate-800 sm:text-sm">
              {[
                "Create listings with photos, descriptions, and hourly / daily prices.",
                "Control when each vehicle appears with an availability calendar.",
                `Commission is <strong class="font-semibold text-[#7a5b10]">5%</strong> on each completed rental — transparent and simple.`,
                "Monitor bookings & earnings from a clean, real-time dashboard.",
                "Vehicles automatically appear on the 3D map whenever they are marked as available."
              ].map((item, index) => (
                <li key={index} className="group/item flex gap-2 rounded-lg p-2 transition-all hover:bg-gradient-to-r hover:from-[#fff5d0]/30 hover:to-[#fff8e3]/30">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#c2921f] shadow-sm group-hover/item:scale-125 transition-transform" />
                  <span className="group-hover/item:text-slate-900 transition-colors" dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
              <button className="group rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Create a listing
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="group rounded-full border border-[#c2921f]/40 bg-gradient-to-b from-transparent to-white/50 px-6 py-3 font-semibold text-[#7a5b10] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c2921f] hover:bg-gradient-to-b hover:from-[#fff4ce] hover:to-[#ffefb5] hover:shadow-xl">
                View owner dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalsHeroLight;