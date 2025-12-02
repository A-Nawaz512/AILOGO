// RentalsFaqSection.jsx
import React from "react";

const faqs = [
  {
    question: "Do I rent by the hour or by the day?",
    answer:
      "You can choose either. Each listing clearly shows hourly and daily prices, so you decide what works best for your trip.",
  },
  {
    question: "How do I know a vehicle is really available?",
    answer:
      "Availability is synced with the owner's calendar. Only vehicles that are free for your selected dates appear as bookable on the 3D map.",
  },
  {
    question: "What happens if I need to change or cancel?",
    answer:
      "Each owner sets their own change and cancellation policy. You'll see it before you confirm the booking, and it's always available in your trip details.",
  },
  {
    question: "How does payment work?",
    answer:
      "You pay securely in the app when you confirm a booking. Funds are released to the owner after the rental is completed, minus a 5% commission.",
  },
  {
    question: "Can agencies list multiple vehicles?",
    answer:
      "Yes. Agencies can upload and manage multiple cars and scooters, each with its own pricing, availability calendar, and analytics.",
  },
  {
    question: "Is my rating visible to owners?",
    answer:
      "Only your overall rating and public reviews are visible. Personal information is kept private and protected.",
  },
];

const RentalsFaqSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50/30 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="flex flex-col gap-6 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Built for{" "}
              <span className="bg-gradient-to-r from-[#c2921f] to-[#e0b446] bg-clip-text text-transparent">
                trust, clarity & control
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
              Transparent pricing, verified profiles, and ratings on every
              rental. Whether you're a client or an owner, you stay in
              control of each step.
            </p>
          </div>

          {/* Quick stats bar */}
          <div className="grid w-full gap-3 text-xs sm:grid-cols-3 sm:text-sm lg:w-auto">
            <div className="group rounded-2xl bg-gradient-to-b from-slate-50 to-white px-4 py-4 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-2xl font-bold text-slate-900 group-hover:scale-110 transition-transform">5%</p>
              <p className="text-slate-500 mt-1">Flat commission</p>
            </div>
            <div className="group rounded-2xl bg-gradient-to-b from-slate-50 to-white px-4 py-4 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-2xl font-bold text-slate-900 group-hover:scale-110 transition-transform">3D</p>
              <p className="text-slate-500 mt-1">Live map view</p>
            </div>
            <div className="group rounded-2xl bg-gradient-to-b from-slate-50 to-white px-4 py-4 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-2xl font-bold text-slate-900 group-hover:scale-110 transition-transform">24/7</p>
              <p className="text-slate-500 mt-1">Booking access</p>
            </div>
          </div>
        </div>

        {/* Trust / safety band */}
        <div className="mb-10 grid gap-6 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-6 text-slate-100 shadow-2xl sm:px-6 sm:py-7 lg:grid-cols-[1.2fr,1.1fr]">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f5c451]/20 to-[#f5c451]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#f5c451]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5c451] animate-pulse"></span>
              Safety & reliability
            </p>
            <h3 className="text-lg font-semibold sm:text-xl">
              Every rental is protected by clear rules, verified profiles and
              rating systems.
            </h3>
            <p className="text-sm text-slate-200/90">
              We encourage owners to provide accurate descriptions, recent
              photos and clear terms. Clients see everything upfront: price,
              mileage limits, deposit, and owner rating.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
              <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-transparent px-4 py-4 transition-all hover:bg-gradient-to-br hover:from-white/15 hover:to-transparent">
                <p className="font-semibold text-[#f5c451]">Verified owners</p>
                <p className="text-slate-200/80 mt-1">
                  Profiles go through verification before listing vehicles.
                </p>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-transparent px-4 py-4 transition-all hover:bg-gradient-to-br hover:from-white/15 hover:to-transparent">
                <p className="font-semibold text-[#f5c451]">Clear conditions</p>
                <p className="text-slate-200/80 mt-1">
                  Key rules and fees are shown before you confirm.
                </p>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-transparent px-4 py-4 transition-all hover:bg-gradient-to-br hover:from-white/15 hover:to-transparent">
                <p className="font-semibold text-[#f5c451]">Two-way ratings</p>
                <p className="text-slate-200/80 mt-1">
                  Clients and owners rate each other after every trip.
                </p>
              </div>
            </div>
          </div>

          {/* Small mobile-first comparison card */}
          <div className="space-y-3 rounded-3xl bg-gradient-to-br from-slate-950/40 to-slate-900/60 p-5 shadow-inner">
            <h4 className="text-sm font-semibold text-slate-50 sm:text-base">
              Who is this platform for?
            </h4>
            <div className="grid gap-3 text-xs sm:grid-cols-2 sm:text-sm">
              <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-4 transition-all hover:bg-gradient-to-br hover:from-white/15 hover:to-transparent">
                <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-wide text-[#f5c451]">
                  Clients
                </p>
                <ul className="space-y-2 text-slate-200/90">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5c451]"></span>
                    Find nearby vehicles in seconds.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5c451]"></span>
                    Book for hours or days.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5c451]"></span>
                    Pay securely in the app.
                  </li>
                </ul>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-4 transition-all hover:bg-gradient-to-br hover:from-white/15 hover:to-transparent">
                <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-wide text-[#f5c451]">
                  Owners & agencies
                </p>
                <ul className="space-y-2 text-slate-200/90">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5c451]"></span>
                    List cars & scooters with ease.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5c451]"></span>
                    Set prices & availability.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5c451]"></span>
                    Earn with just 5% commission.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="group rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/50 p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f5c451]/40 hover:shadow-2xl sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base group-hover:text-slate-950">
                  {item.question}
                </h3>
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-slate-100 to-white text-xs font-semibold text-slate-500 shadow-lg group-hover:bg-gradient-to-b group-hover:from-[#f5c451]/20 group-hover:to-[#f5c451]/10 group-hover:text-[#7a5b10] group-hover:scale-110 transition-all duration-300">
                  {index + 1}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm group-hover:text-slate-700">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-5 text-center shadow-xl sm:flex-row sm:text-left sm:px-6">
          <div>
            <p className="text-sm font-semibold text-slate-900 sm:text-base">
              Still have questions about rentals?
            </p>
            <p className="text-xs text-slate-600 sm:text-sm">
              Reach out to our support team or start exploring the 3D map to see
              how everything works in real time.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="group rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-3 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:text-sm">
              Open 3D map
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="group rounded-full border border-slate-300 bg-gradient-to-b from-white to-slate-50 px-5 py-3 text-xs font-semibold text-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-xl sm:text-sm">
              Contact support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalsFaqSection;