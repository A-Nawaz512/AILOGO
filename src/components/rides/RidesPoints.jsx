// src/components/rides/RidesPoints.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RidesPoints = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-16 right-[-4rem] w-56 h-56 bg-[#E2CF7D]/35 blur-3xl rounded-full" />
        <div className="absolute bottom-[-3rem] left-[-4rem] w-64 h-64 bg-[#6F4918]/18 blur-3xl rounded-full" />
      </div>

      {/* ⭐ FIXED SPACING HERE — MOVED SECTION UP */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-30px] pt-15 pb-10">
        
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[18px] font-bold bg-[#F5F0E4] text-[#6F4918] transition-all duration-300 hover:bg-[#FFF3D7] hover:shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B78E3B]" />
            Points & Credits · Rides
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
            Smart rewards for{" "}
            <span className="text-[#B78E3B] transition-colors duration-300 hover:text-[#E2CF7D]">
              clients & drivers.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-700">
            Clients use points to lower their fare or tip drivers. Drivers use those
            points + credit to keep new ride missions unlocked.
          </p>
        </div>

        {/* FLOW WITH IMAGES */}
        <div
          className="mb-12 flex flex-col items-center gap-8"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
            {/* Step 1 – pay with points */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs group">
              <div className="relative mb-3">
                <div
                  className="w-40 h-40 rounded-full bg-cover bg-center shadow-[0_20px_50px_rgba(15,23,42,0.3)] transform hover:scale-110 transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(15,23,42,0.4)]"
                  style={{
                    backgroundImage:
                      "url('https://blog.currencyalliance.com/wp-content/uploads/2023/03/card-accepted-2-1024x482.jpg')",
                  }}
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs bg-white shadow-lg text-[#6F4918] font-semibold transition-all duration-300 group-hover:bg-[#FFF9EE] group-hover:scale-105 group-hover:shadow-xl">
                  Pay with points
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-700 transition-all duration-300 group-hover:text-gray-800 group-hover:scale-105">
                Users pay part of their ride with points and the rest with cash or
                card.
              </p>
            </div>

            {/* arrow */}
            <div className="hidden md:flex items-center justify-center text-gray-400 text-3xl transition-all duration-500 hover:scale-125 hover:text-[#B78E3B]">
              ➝
            </div>

            {/* Step 2 – send points as tip */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs group">
              <div className="relative mb-3">
                <div
                  className="w-40 h-40 rounded-full bg-cover bg-center shadow-[0_20px_50px_rgba(15,23,42,0.3)] transform hover:scale-110 transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(15,23,42,0.4)]"
                  style={{
                    backgroundImage:
                      "url('https://www.lalamove.com/hs-fs/hubfs/confirm%20with%20passenger.jpg?width=600&height=400&name=confirm%20with%20passenger.jpg')",
                  }}
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs bg-white shadow-lg text-[#6F4918] font-semibold transition-all duration-300 group-hover:bg-[#FFF9EE] group-hover:scale-105 group-hover:shadow-xl">
                  Tip in points
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-700 transition-all duration-300 group-hover:text-gray-800 group-hover:scale-105">
                Users send extra points as a "tip" or motivation to drivers they
                like.
              </p>
            </div>

            {/* arrow */}
            <div className="hidden md:flex items-center justify-center text-gray-400 text-3xl transition-all duration-300 hover:scale-125 hover:text-[#B78E3B]">
              ➝
            </div>

            {/* Step 3 – drivers unlock missions */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs group">
              <div className="relative mb-3">
                <div
                  className="w-40 h-40 rounded-full bg-cover bg-center shadow-[0_20px_50px_rgba(15,23,42,0.3)] transform hover:scale-110 transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(15,23,42,0.4)]"
                  style={{
                    backgroundImage:
                      "url('https://t4.ftcdn.net/jpg/02/16/64/59/360_F_216645902_N6uzAuvXTt8bglqwMYFIvqw5ajEumro0.jpg')",
                  }}
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs bg-white shadow-lg text-[#6F4918] font-semibold transition-all duration-300 group-hover:bg-[#FFF9EE] group-hover:scale-105 group-hover:shadow-xl">
                  Unlock missions
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-700 transition-all duration-300 group-hover:text-gray-800 group-hover:scale-105">
                Drivers use points + credit balance to keep new ride missions
                unlocked.
              </p>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-gray-500 text-center max-w-xl transition-all duration-300 hover:text-gray-600 hover:scale-105">
            All points move inside ALLOGO: from client wallet → driver balance →
            provider credit. No points are handled outside the app.
          </p>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Clients card */}
          <div
            className="rounded-3xl bg-[#F9FAFB] border border-[#E5E7EB] p-5 sm:p-6 flex flex-col gap-4 transition-all duration-100 hover:shadow-lg hover:scale-[1.02] hover:bg-white group"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF3D7] flex items-center justify-center text-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#FFF3D7] group-hover:to-[#E2CF7D] group-hover:shadow-md">
                👤
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#111827] transition-colors duration-500 group-hover:text-[#6F4918]">
                For ALLOGO clients
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-gray-700">
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">
                • <strong className="transition-colors duration-300 group-hover:text-[#B78E3B]">
                  Pay part of ride with points
                </strong>{" "}
                and reduce your cash / card amount.
              </li>
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">
                • <strong className="transition-colors duration-300 group-hover:text-[#B78E3B]">
                  Send points as a tip
                </strong>{" "}
                to drivers who give you a great service.
              </li>
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">
                • All point usage is visible in your wallet and trip history.
              </li>
            </ul>
          </div>

          {/* Drivers card */}
          <div
            className="rounded-3xl bg-white border border-[#E5E7EB] p-5 sm:p-6 flex flex-col gap-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-100 hover:shadow-xl hover:scale-[1.02] hover:shadow-[0_25px_80px_rgba(15,23,42,0.12)] group"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF3D7] flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#FFF3D7] group-hover:to-[#E2CF7D] group-hover:shadow-md">
                🚖
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#111827] transition-colors duration-300 group-hover:text-[#6F4918]">
                For drivers / providers
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-gray-700">
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">
                • <strong className="transition-colors duration-300 group-hover:text-[#B78E3B]">
                  Points received
                </strong>{" "}
                from clients increase your ALLOGO balance.
              </li>
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">
                • You can use{" "}
                <strong className="transition-colors duration-300 group-hover:text-[#B78E3B]">
                  points + money
                </strong>{" "}
                as provider credit to unlock new missions.
              </li>
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">
                • If credit drops too low, missions pause until you top up with
                points or cash.
              </li>
            </ul>
            <p className="mt-1 text-[11px] text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
              Points are not cash outside the app, but they are powerful inside
              ALLOGO to keep your missions open.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RidesPoints;
