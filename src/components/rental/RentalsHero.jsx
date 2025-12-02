// RentalsHero.jsx
import React from "react";

const RentalsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#080c18] to-[#111827] text-white">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#f5c451]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#f5c451]/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:py-20 xl:px-0">
        {/* LEFT: Main copy */}
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#f5c451]">
            Rentals · Cars & Scooters
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Rent a car or scooter
            <span className="block text-[#f5c451]">
              right from the 3D map.
            </span>
          </h1>

          <p className="max-w-xl text-sm text-gray-300 sm:text-base">
            Find vehicles nearby, book for hours or days, and hit the road.
            Owners and rental agencies can list their fleet, set availability,
            and manage bookings — all in one place.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="rounded-full bg-[#f5c451] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[#f5c451]/40 transition hover:translate-y-0.5 hover:bg-[#f7d068]">
              Rent a vehicle
            </button>
            <button className="rounded-full border border-[#f5c451]/60 bg-transparent px-6 py-3 text-sm font-semibold text-[#f5c451] transition hover:border-[#f5c451] hover:bg-[#f5c451]/10">
              List your vehicle
            </button>
          </div>

          {/* Map highlight */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-gray-200 sm:text-sm">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#f5c451]/40 bg-[#f5c451]/10 text-[0.65rem] font-semibold text-[#f5c451]">
              3D
            </span>
            <p>
              <span className="font-semibold text-[#f5c451]">
                Live 3D map:
              </span>{" "}
              All available rental vehicles appear on our 3D map so users can
              find the closest option.
            </p>
          </div>
        </div>

        {/* RIGHT: Cards for Clients & Owners */}
        <div className="flex-1 space-y-5 lg:max-w-md">
          {/* “How it works” – Clients */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
            <h2 className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide text-gray-100">
              For clients
              <span className="rounded-full bg-[#f5c451]/10 px-3 py-1 text-[0.65rem] font-semibold text-[#f5c451]">
                Short-term · Hours / Days
              </span>
            </h2>

            <p className="mt-2 text-xs text-gray-300">
              Rent a car or scooter in a few taps:
            </p>

            <ol className="mt-3 space-y-2 text-xs text-gray-200 sm:text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f5c451]/20 text-[0.7rem] font-semibold text-[#f5c451] flex items-center justify-center">
                  1
                </span>
                <span>Open the map & see vehicles for rent near you.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f5c451]/20 text-[0.7rem] font-semibold text-[#f5c451] flex items-center justify-center">
                  2
                </span>
                <span>
                  Choose a car or scooter, select dates and rental duration.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f5c451]/20 text-[0.7rem] font-semibold text-[#f5c451] flex items-center justify-center">
                  3
                </span>
                <span>
                  Review price & conditions, then confirm your booking.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f5c451]/20 text-[0.7rem] font-semibold text-[#f5c451] flex items-center justify-center">
                  4
                </span>
                <span>Pick up the vehicle and start your trip.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f5c451]/20 text-[0.7rem] font-semibold text-[#f5c451] flex items-center justify-center">
                  5
                </span>
                <span>Return the vehicle & rate the owner.</span>
              </li>
            </ol>
          </div>

          {/* Owners / Agencies */}
          <div className="rounded-3xl border border-[#f5c451]/30 bg-[#020617] p-5 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#f5c451]">
              For owners & rental agencies
            </h2>
            <p className="mt-2 text-xs text-gray-300 sm:text-sm">
              List vehicles, set prices, and manage bookings from a unified
              dashboard.
            </p>
            <ul className="mt-3 space-y-2 text-xs text-gray-200 sm:text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f5c451]" />
                <span>
                  Create listings with photos, descriptions, and hourly / daily
                  pricing.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f5c451]" />
                <span>Control your schedule with an availability calendar.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f5c451]" />
                <span>
                  Fixed commission of <strong className="text-[#f5c451]">5%</strong> on each completed rental.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f5c451]" />
                <span>
                  Track bookings & earnings in a clean, real-time dashboard.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f5c451]" />
                <span>
                  Vehicles automatically appear on the 3D map whenever they are
                  available.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalsHero;
