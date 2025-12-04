// src/components/rides/RidesJourney.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Set pickup & destination",
    short: "Step 1",
    text: "Drop your pickup pin and destination on the map so drivers see exactly where you’re going.",
  },
  {
    title: "Propose your price",
    short: "Step 2",
    text: "Enter the fare you want to pay. You stay in control of the offer from the very beginning.",
  },
  {
    title: "Choose from drivers",
    short: "Step 3",
    text: "Drivers respond to your request. Check ratings, vehicles and reviews, then pick the one you prefer.",
  },
  {
    title: "Track ride in real time",
    short: "Step 4",
    text: "Follow the route live on OpenStreetMap and stay in touch via in-app chat, call or WhatsApp.",
  },
  {
    title: "Pay & rate the driver",
    short: "Step 5",
    text: "Pay with cash or card inside the app, then leave a rating to help other clients choose safely.",
  },
];

const RidesJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-black via-[#050505] to-black text-white overflow-hidden">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 right-[-4rem] w-64 h-64 bg-[#6F4918]/40 blur-3xl rounded-full" />
        <div className="absolute bottom-[-3rem] left-[-4rem] w-64 h-64 bg-[#E2CF7D]/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[18px] font-bold bg-white/10 text-[#E2CF7D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2CF7D]" />
            Client Journey · Step by step
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
            How a ride works for{" "}
            <span className="text-[#B78E3B]">ALLOGO clients.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            From setting your pickup on the map to rating your driver, every ride
            follows the same clear, transparent flow.
          </p>
        </div>

        {/* MOBILE / TABLET: vertical cards */}
        <div className="grid gap-4 sm:gap-5 md:hidden" data-aos="fade-up">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-xs font-semibold text-black shadow-md">
                  {i + 1}
                </div>
                {i !== steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-[#E2CF7D]/40 to-transparent" />
                )}
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#E2CF7D]">
                  {step.short}
                </p>
                <h3 className="text-sm sm:text-base font-semibold">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP: horizontal stepper */}
        <div
          className="hidden md:block"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex items-start justify-between gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className="flex-1 flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-sm font-semibold text-black shadow-lg">
                      {i + 1}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#E2CF7D]/10 blur-md" />
                  </div>
                  <p className="text-[11px] uppercase tracking-wide text-[#E2CF7D]">
                    {step.short}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold">{step.title}</h3>
                  <p className="mt-1 text-[14px] text-gray-300 leading-relaxed max-w-xs">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom micro-note */}
        <p
          className="mt-10 text-[14px] sm:text-xs text-gray-400 text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          ALLOGO is a connection platform only. For full protection and history,
          keep all negotiations and payments inside the app.
        </p>
      </div>
    </section>
  );
};

export default RidesJourney;
