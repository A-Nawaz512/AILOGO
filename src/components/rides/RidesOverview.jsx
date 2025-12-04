// src/components/rides/RidesFeatures.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Driver selection",
    text: "Pick the driver you prefer before confirming your ride.",
    icon: "🧑‍✈️",
  },
  {
    title: "Real-time price negotiation",
    text: "Agree the fare directly with the driver, like in inDrive.",
    icon: "💬",
  },
  {
    title: "Live GPS tracking",
    text: "Follow every ride on OpenStreetMap from pickup to drop-off.",
    icon: "📍",
  },
  {
    title: "In-app chat, call & WhatsApp",
    text: "Contact your driver without sharing your real number.",
    icon: "📲",
  },
  {
    title: "Order for someone else",
    text: "Book rides for family or friends and track their trip.",
    icon: "🎁",
  },
  {
    title: "Trip history & ratings",
    text: "See all past trips, rate drivers and read reviews.",
    icon: "⭐",
  },
];

const RidesFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white via-[#FFF9EE] to-white overflow-hidden">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-16 w-56 h-56 bg-[#E2CF7D]/30 blur-3xl rounded-full" />
        <div className="absolute bottom-[-3rem] right-[-4rem] w-64 h-64 bg-[#6F4918]/15 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[18px] font-bold bg-[#F5F0E4] text-[#6F4918]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B78E3B]" />
            How ALLOGO rides work
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold">
            All the tools you need for{" "}
            <span className="text-[#B78E3B]">safer, smarter rides.</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-[#b7a27a]">
            For riders & drivers · One simple flow
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            From driver selection and negotiation to GPS tracking and full trip
            history, everything stays inside the app.
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Feature cards */}
          <div
            className="w-full lg:w-2/3 grid gap-5 sm:gap-6 md:grid-cols-2"
            data-aos="fade-right"
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                data-aos="fade-up"
                data-aos-delay={70 * i}
                className="relative rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] border border-white/70 hover:border-[#E2CF7D] transition-transform duration-600 hover:-translate-y-1 hover:bg-[#FFF9EE] overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-[#6F4918] via-[#B78E3B] to-[#E2CF7D]" />
                <div className="p-5 sm:p-6 flex gap-3">
                  <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-[#FFF6E4] text-xl shrink-0">
                    {f.icon}
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-[10px] flex items-center justify-center text-black font-semibold shadow-md">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: image + zones */}
          <div className="w-full lg:w-1/3 space-y-5" data-aos="fade-left">
            {/* Image panel */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.18)] group">
              <div
                className="h-40 sm:h-48 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#E2CF7D]">
                  Zones covered
                </p>
                <p className="text-sm sm:text-base font-medium text-white">
                  Inside city, neighborhoods & villas · Between areas in the same city
                </p>
              </div>
            </div>

            {/* Zones text */}
            <div className="rounded-3xl bg-[#0b0b0b] text-white p-5 sm:p-6 border border-[#2b2214] shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Built for your city&apos;s real zones.
              </h3>
              <ul className="space-y-2 text-sm sm:text-[15px] text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#B78E3B]" />
                  <span>
                    <strong>Inside the city</strong> – neighborhoods, downtown,
                    residential areas and villas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#E2CF7D]" />
                  <span>
                    <strong>Between areas in the same city</strong> – connect
                    districts, campuses or industrial zones with a single request.
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-gray-400">
                Choose your zone, set your price and let verified drivers respond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RidesFeatures;
