// src/components/rides/ProviderJourney.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import driverStrip from "../../assets/driver-strip.jpg";
import driverHero from "../../assets/driver-hero.jpg";

const steps = [
  {
    title: "Register as a driver",
    short: "Step 1",
    text: "Create your ALLOGO provider account as a male or female driver and complete your profile.",
    tag: "Male / Female drivers",
  },
  {
    title: "Upload license & vehicle photos",
    short: "Step 2",
    text: "Upload your driving license, vehicle registration and clear photos of your car or motorcycle.",
    tag: "License · Registration · Photos",
  },
  {
    title: "Wait for controller validation",
    short: "Step 3",
    text: "ALLOGO controllers manually review your documents and pictures before you appear on the map.",
    tag: "Verified providers only",
  },
  {
    title: "Receive offers & negotiate",
    short: "Step 4",
    text: "Get ride requests, review client offers and negotiate your price before accepting.",
    tag: "Live price negotiation",
  },
  {
    title: "Complete trips & earn",
    short: "Step 5",
    text: "Finish trips, earn cash and points, grow your rating and unlock more ride opportunities.",
    tag: "Earnings + points system",
  },
];

const ProviderJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 right-[-4rem] w-64 h-64 bg-[#E2CF7D]/35 blur-3xl rounded-full" />
        <div className="absolute bottom-[-3rem] left-[-4rem] w-64 h-64 bg-[#6F4918]/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[18px] font-bold bg-[#F5F0E4] text-[#6F4918]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B78E3B]" />
            Provider Journey · Drivers
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
            From registration to{" "}
            <span className="text-[#B78E3B]">earning with ALLOGO.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Register once, get validated by controllers, then start receiving ride
            offers, negotiating and earning money plus points.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          
          <div className="w-full lg:w-2/3 relative" data-aos="fade-right">
            <div
              className="hidden lg:block absolute inset-y-6 left-0 right-10 rounded-[32px] bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${driverStrip})` }}
            />
            <div className="hidden lg:block absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-[#E2CF7D]/10 via-[#B78E3B]/35 to-[#6F4918]/20" />

            <div className="space-y-5 sm:space-y-6 relative">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  data-aos="fade-up"
                  data-aos-delay={60 * i}
                  className="relative flex gap-4 max-w-[90%] ml-4 mx-auto rounded-3xl bg-white/90 backdrop-blur border border-[#F1E7D1] shadow-[0_14px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center pt-5 pl-4">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-xs font-semibold text-black shadow-md">
                      {i + 1}
                    </div>
                    {i !== steps.length - 1 && (
                      <div className="hidden lg:block flex-1 w-px bg-gradient-to-b from-[#E2CF7D]/40 to-transparent mt-1" />
                    )}
                  </div>

                  <div className="py-4 pr-4 sm:py-5 sm:pr-5 flex-1">
                    <p className="text-[11px] uppercase tracking-wide text-[#B78E3B]">
                      {step.short}
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-0.5">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {step.text}
                    </p>
                    <p className="mt-2 inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#FFF6E4] text-[#6F4918]">
                      {step.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-5" data-aos="fade-left">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.25)] group">
              <div
                className="h-40 sm:h-52 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${driverHero})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#E2CF7D]">
                  Drive with ALLOGO
                </p>
                <p className="text-sm sm:text-base font-medium text-white">
                  Verified drivers receive ride offers, negotiate fares and earn money
                  + points on every completed trip.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#9e7033] via-[#b99242] to-[#deca71] text-white p-5 sm:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Why drive with ALLOGO?
              </h3>
              <p className="text-sm sm:text-[15px] text-white/95 mb-3">
                You’re in control: pick the trips you want, negotiate prices and
                build your rating with every ride.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-white/95">
                <li>• Male and female drivers welcome</li>
                <li>• Transparent 7% commission on rides</li>
                <li>• Earn cash + points for every completed trip</li>
                <li>• Full trip history and performance overview</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-[#0b0b0b] text-white p-5 sm:p-6 border border-[#2b2214] shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
              <h4 className="text-sm sm:text-base font-semibold mb-2">
                Controller validation = trust.
              </h4>
              <p className="text-xs sm:text-sm text-gray-200 mb-3">
                Every driver is manually checked by ALLOGO controllers before going
                live on the map, so clients know they’re riding with a verified
                provider.
              </p>
              <ul className="space-y-1.5 text-[11px] sm:text-xs text-gray-300">
                <li>• License & vehicle registration checks</li>
                <li>• Vehicle photos and identity verification</li>
                <li>• Clear notifications for approval or corrections</li>
              </ul>
            </div>
          </div>
        </div>

        <p
          className="mt-10 text-[11px] sm:text-xs text-gray-500 text-center"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          ALLOGO is a connection platform only. All rides and payments must remain
          inside the app to correctly track commissions, earnings and points.
        </p>
      </div>
    </section>
  );
};

export default ProviderJourney;
