import React from "react";

const features = [
  {
    title: "Inter & Intra-Wilaya Trips",
    desc: "Travel city-to-city or within your wilaya quickly and comfortably.",
    icon: "🧭",
  },
  {
    title: "Choose Car, Moto & Seat Type",
    desc: "Select your ideal vehicle type depending on your trip needs.",
    icon: "🚗",
  },
  {
    title: "Driver Gender Preference",
    desc: "Choose male, female or no preference for a safer experience.",
    icon: "🧑‍✈️",
  },
  {
    title: "Transparent Fares & 9% Commission",
    desc: "Clear pricing and a fair 9% commission for drivers.",
    icon: "💸",
  },
  {
    title: "Live 3D MapLibre Tracking",
    desc: "Track your driver live in a modern 3D map experience.",
    icon: "🗺️",
  },
  {
    title: "In-App Chat & Calls",
    desc: "Communicate instantly with drivers during trips.",
    icon: "💬",
  },
];

const RidesFeatures = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-12 sm:py-16 md:py-20">
      {/* soft gold background tints */}
      <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-[#D8A635]/20 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#B8871B]/22 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.25em] text-[#B8871B]">
            Core Features
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-[#F9D777] via-[#D8A635] to-[#B8871B] bg-clip-text text-2xl sm:text-4xl md:text-5xl font-bold text-transparent leading-snug">
            Premium mobility features that define ALLOGO
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 px-2 sm:px-0">
            Explore modern, flexible and highly optimized services built to
            deliver a premium transportation experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-[#E4D3A3] bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_45px_rgba(184,135,27,0.18)]"
            >
              {/* Icon bubble */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F9D777] via-[#D8A635] to-[#B8871B] text-xl text-white shadow-lg shadow-[rgba(184,135,27,0.4)]">
                {item.icon}
              </div>

              {/* Title & text */}
              <h3 className="text-base sm:text-lg font-semibold text-[#1F1F1F]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* subtle accent line */}
              <div className="mt-4 sm:mt-5 h-[3px] w-10 sm:w-12 rounded-full bg-gradient-to-r from-[#F9D777] via-[#D8A635] to-[#B8871B] opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RidesFeatures;
