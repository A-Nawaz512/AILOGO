// src/components/rides/RidesUIElements.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RidesUIElements = () => {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-16 left-[-4rem] w-56 h-56 bg-[#E2CF7D]/30 blur-3xl rounded-full" />
        <div className="absolute bottom-[-3rem] right-[-4rem] w-64 h-64 bg-[#6F4918]/18 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-55px] pt-20 pb-20 ">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[18px] font-bold bg-[#FFF9EE] text-[#6F4918] border border-[#F1E7D1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B78E3B]" />
            Rides · UI elements
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
            A clear map for{" "}
            <span className="text-[#B78E3B]">cars, motos & drivers.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Preview of the ALLOGO rides map with male / female drivers and quick
            icons for vehicles, chat, WhatsApp and payments.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Phone / map preview */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative w-full max-w-sm">
              {/* Phone frame */}
              <div className="mx-auto rounded-[2.3rem] bg-gradient-to-b from-gray-900 to-black shadow-[0_32px_80px_rgba(15,23,42,0.4)] p-2.5">
                {/* top notch */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-20 h-1.5 rounded-full bg-black/80 z-20" />
                <div className="rounded-[1.9rem] overflow-hidden bg-gray-900 relative h-[440px]">
                  {/* Map image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                    }}
                  />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

                  {/* top bar */}
                  <div className="absolute top-4 left-5 right-5 flex items-center justify-between text-[11px]">
                    <span className="px-3 py-1 rounded-full bg-black/85 text-white/90 backdrop-blur-sm">
                      City · OpenStreetMap
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[#6F4918] font-semibold shadow-sm">
                      Rides / Drivers
                    </span>
                  </div>

                  {/* route indicator */}
                  <div className="absolute left-1/2 top-[32%] -translate-x-1/2 flex flex-col items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E2CF7D] shadow" />
                    <span className="w-px h-12 bg-gradient-to-b from-[#E2CF7D] to-[#B78E3B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B78E3B] shadow" />
                  </div>

                  {/* male driver marker (black) */}
                  <div className="absolute left-[23%] top-[45%] flex flex-col items-center gap-1.5">
                    <div className="rounded-full bg-black text-white w-10 h-10 flex items-center justify-center text-xl shadow-xl border-2 border-white/90 transition-transform duration-300 hover:scale-110">
                      👨
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/95 text-gray-900 shadow-sm font-medium">
                      Male driver
                    </span>
                  </div>

                  {/* female driver marker (pink) */}
                  <div className="absolute right-[20%] top-[60%] flex flex-col items-center gap-1.5">
                    <div className="rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white w-10 h-10 flex items-center justify-center text-xl shadow-xl border-2 border-white/90 transition-transform duration-300 hover:scale-110">
                      👩
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/95 text-gray-900 shadow-sm font-medium">
                      Female driver
                    </span>
                  </div>

                  {/* bottom info strip */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[11px] text-white">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Live drivers nearby
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm">
                      3–5 min pick-up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend / chips */}
          <div
            className="w-full lg:w-1/2 space-y-8"
            data-aos="fade-left"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">
                Everything the rider needs on one screen.
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-gray-700">
                The map clearly separates male and female drivers, shows vehicle
                type, and keeps chat, WhatsApp and payment options one tap away.
              </p>
            </div>

            {/* Drivers legend */}
            <div className="rounded-2xl bg-gradient-to-b from-[#FFFDF8] to-[#FFF9EE] border border-[#F1E7D1] p-5 flex flex-col gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6F4918]">
                Drivers on the map
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-black border-2 border-gray-300 shadow-sm" />
                  <span>Male driver marker</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 border-2 border-pink-200 shadow-sm" />
                  <span>Female driver marker</span>
                </div>
              </div>
              <p className="text-[11px] text-[#6F4918]/80">
                Markers can carry either a car or motorcycle icon depending on the
                vehicle selected by the provider.
              </p>
            </div>

            {/* Vehicle icons */}
            <div className="rounded-2xl bg-gradient-to-b from-white to-[#FFFDF8] border border-[#F1E7D1] p-5 flex flex-col gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6F4918]">
                Vehicles
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#FFF9EE] border border-[#F1E7D1] text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm">
                  <span className="text-xl">🚗</span>
                  <span>Car</span>
                </div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#FFF9EE] border border-[#F1E7D1] text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm">
                  <span className="text-xl">🏍️</span>
                  <span>Motorcycle</span>
                </div>
              </div>
            </div>

            {/* Communication & payment chips */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Communication */}
              <div className="rounded-2xl bg-gradient-to-b from-white to-[#FFFDF8] border border-[#F1E7D1] p-5 flex flex-col gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6F4918]">
                  Communication
                </p>
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-[#E5E7EB] text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm">
                    <span className="text-xl">💬</span>
                    <span>In-app chat</span>
                  </div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#F0FFF4] border border-[#BBF7D0] text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm">
                    <span className="text-xl">🟢</span>
                    <span>WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Payments */}
              <div className="rounded-2xl bg-gradient-to-b from-white to-[#FFFDF8] border border-[#F1E7D1] p-5 flex flex-col gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6F4918]">
                  Payments
                </p>
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-[#E5E7EB] text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm">
                    <span className="text-xl">💳</span>
                    <span>Card</span>
                  </div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm">
                    <span className="text-xl">💵</span>
                    <span>Cash</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-[#6F4918]/70">
              The final ALLOGO app will reuse these same colors and icons, so riders
              instantly understand who is nearby, how to contact them and how they
              can pay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RidesUIElements;