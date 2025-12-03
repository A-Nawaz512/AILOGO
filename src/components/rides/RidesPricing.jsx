// src/components/rides/RidesPricing.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RidesPricing = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-[-4rem] w-60 h-60 bg-[#E2CF7D]/30 blur-3xl rounded-full" />
        <div className="absolute bottom-[-3rem] right-[-4rem] w-64 h-64 bg-[#6F4918]/18 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-40px] pt-12">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[18px] font-bold bg-[#FFF9EE] text-[#6F4918] border border-[#F1E7D1] transition-all duration-300 hover:shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B78E3B]" />
            Rides · Pricing & Commission
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
            Transparent for{" "}
            <span className="text-[#B78E3B]">clients and drivers.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            One clear commission, flexible payments for clients and a simple
            credit rule for providers. No hidden tricks.
          </p>
        </div>

        {/* Main pricing card */}
        <div
          className="rounded-[32px] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)] border border-[#F1E7D1] p-6 sm:p-8 space-y-7 transition-all duration-300 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] hover:border-[#E2CF7D]"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {/* Top stat row */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            {/* 7% commission */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFF9EE] to-[#FFF3D7] border border-[#F1E7D1] px-4 py-4 flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-[#B78E3B] group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#6F4918]/40 to-[#E2CF7D]/40 blur-xl rounded-full transition-all duration-500 group-hover:scale-110" />
                <div className="relative flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#6F4918] to-[#B78E3B] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#B78E3B] group-hover:to-[#E2CF7D]">
                    7%
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">
                  Commission per ride
                </p>
                <p className="text-xs sm:text-sm text-[#6F4918]/80 transition-colors duration-300 group-hover:text-[#6F4918]">
                  Only on <strong className="text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">completed</strong> rides.
                </p>
              </div>
            </div>

            {/* Payments */}
            <div className="rounded-2xl bg-gradient-to-br from-white to-[#FFFDF8] border border-[#F1E7D1] px-4 py-4 flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-[#B78E3B] group">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">
                Client payments
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-700 transition-colors duration-300 group-hover:text-gray-800">
                Pay by <strong className="text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">cash</strong> or{" "}
                <strong className="text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">card</strong> at the end of the ride.
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                <span className="inline-flex px-2.5 py-1 rounded-full bg-[#FFF9EE] text-[#6F4918] border border-[#F1E7D1] transition-all duration-300 hover:bg-[#FFF3D7] hover:border-[#B78E3B] hover:scale-105">
                  💵 Cash
                </span>
                <span className="inline-flex px-2.5 py-1 rounded-full bg-[#FFF9EE] text-[#6F4918] border border-[#F1E7D1] transition-all duration-300 hover:bg-[#FFF3D7] hover:border-[#B78E3B] hover:scale-105">
                  💳 Card
                </span>
              </div>
            </div>

            {/* Credit */}
            <div className="rounded-2xl bg-gradient-to-br from-white to-[#FFFDF8] border border-[#F1E7D1] px-4 py-4 flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-[#B78E3B] group">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">
                Provider credit
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-700 transition-colors duration-300 group-hover:text-gray-800">
                Keep at least{" "}
                <strong className="text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">1,000 DZD</strong> credit to
                unlock new ride missions.
              </p>
              <p className="mt-1 text-[11px] text-[#6F4918]/80 transition-colors duration-300 group-hover:text-[#6F4918]">
                Below this, new offers are paused until top-up.
              </p>
            </div>
          </div>

          {/* Middle: split clients vs drivers */}
          <div className="grid gap-6 lg:grid-cols-2 pt-2">
            {/* Clients block */}
            <div className="rounded-2xl bg-gradient-to-b from-[#FFFDF8] to-[#FFF9EE] border border-[#F1E7D1] p-5 sm:p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:border-[#B78E3B] group">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF3D7] to-[#E2CF7D] flex items-center justify-center text-lg shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  🚘
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">
                  For clients
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 transition-colors duration-300 group-hover:text-gray-800">
                You{" "}
                <strong className="text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">propose the price</strong>,
                negotiate with drivers and only pay when the trip is completed.
              </p>
              <ul className="mt-1 space-y-1.5 text-[11px] sm:text-[13px] text-gray-700">
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-[#B78E3B] mt-1 transition-colors duration-300 group-hover:text-[#E2CF7D]">•</span>
                  Choose cash or card at the end of the ride.
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-[#B78E3B] mt-1 transition-colors duration-300 group-hover:text-[#E2CF7D]">•</span>
                  No extra platform fee on top of your agreed price.
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-[#B78E3B] mt-1 transition-colors duration-300 group-hover:text-[#E2CF7D]">•</span>
                  Full trip history and receipts inside your account.
                </li>
              </ul>
            </div>

            {/* Drivers block */}
            <div className="rounded-2xl bg-gradient-to-b from-white to-[#FFFDF8] border border-[#F1E7D1] p-5 sm:p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:border-[#B78E3B] group">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF3D7] to-[#E2CF7D] flex items-center justify-center text-lg shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  🚖
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">
                  For drivers / providers
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 transition-colors duration-300 group-hover:text-gray-800">
                You keep control over which rides you accept and how much you earn
                after the{" "}
                <strong className="text-[#6F4918] transition-colors duration-300 group-hover:text-[#B78E3B]">7% commission</strong>.
              </p>
              <ul className="mt-1 space-y-1.5 text-[11px] sm:text-[13px] text-gray-700">
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-[#B78E3B] mt-1 transition-colors duration-300 group-hover:text-[#E2CF7D]">•</span>
                  7% commission charged only on completed rides.
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-[#B78E3B] mt-1 transition-colors duration-300 group-hover:text-[#E2CF7D]">•</span>
                  Must maintain 1,000 DZD credit to receive new offers.
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-[#B78E3B] mt-1 transition-colors duration-300 group-hover:text-[#E2CF7D]">•</span>
                  Earnings and commissions tracked automatically in the app.
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom: 15 free rides strip */}
          <div className="rounded-2xl bg-gradient-to-r from-[#6F4918] via-[#B78E3B] to-[#e1cd73] text-white px-5 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:from-[#967a44] hover:via-[#E2CF7D] hover:to-[#6b5625] group">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/90 transition-colors duration-300 group-hover:text-white">
                New providers · Welcome offer
              </p>
              <p className="mt-1 text-sm sm:text-[15px] font-medium transition-all duration-300 group-hover:scale-[1.01]">
                First <span className="font-extrabold">15 rides</span> are{" "}
                <span className="font-extrabold">0% commission</span>.
              </p>
              <p className="text-[11px] sm:text-xs text-white/80 mt-1 transition-colors duration-300 group-hover:text-white">
                After ride 15, the standard 7% commission is applied automatically.
              </p>
            </div>
            <div className="flex gap-2 text-[11px] sm:text-xs">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm font-semibold transition-all duration-300 hover:bg-white/30 hover:scale-105">
                🎁 15 free services
              </span>
              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-105">
                Perfect to start earning with ALLOGO
              </span>
            </div>
          </div>
        </div>

        {/* micro-note */}
        <p
          className="mt-6 text-[11px] sm:text-xs text-[#6F4918]/70 text-center transition-colors duration-300 hover:text-[#6F4918]"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          ALLOGO is a connection platform only. Keep all negotiations and payments
          inside the app so commissions, credits and free rides are calculated
          correctly.
        </p>
      </div>
    </section>
  );
};

export default RidesPricing;