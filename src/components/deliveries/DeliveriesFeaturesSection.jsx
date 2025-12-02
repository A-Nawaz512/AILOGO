import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Same-day delivery in your city",
    desc: "Send urgent documents and parcels across your city in just a few hours.",
  },
  {
    title: "Pickup & drop-off anywhere",
    desc: "Choose precise pickup and drop-off points that work for you and your recipient.",
  },
  {
    title: "Package size options",
    desc: "Select small, medium or large so couriers know exactly what to expect.",
  },
  {
    title: "Real-time courier tracking",
    desc: "Follow your courier on the map from pickup to delivery with live status updates.",
  },
  {
    title: "Proof of delivery",
    desc: "Get in-app delivery confirmation, plus photo or recipient confirmation when available.",
  },
  {
    title: "Only 5% commission for couriers",
    desc: "Fair pricing for couriers so the service stays competitive, stable and reliable.",
  },
];

const steps = [
  {
    label: "Step 1",
    title: "Describe your package & addresses",
    text: "Enter pickup & drop-off locations, choose the package size and add notes for the courier.",
  },
  {
    label: "Step 2",
    title: "Get an instant delivery estimate",
    text: "See the price and ETA before confirming so you always know what you'll pay.",
  },
  {
    label: "Step 3",
    title: "Courier picks up your package",
    text: "A nearby courier accepts the request and confirms pickup inside the app.",
  },
  {
    label: "Step 4",
    title: "Track live & receive confirmation",
    text: "Watch the route in real time and get proof of delivery instantly.",
  },
];

export default function DeliveriesFeaturesSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-amber-50/30 py-14 sm:py-20 overflow-x-clip">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-black">
        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="max-w-3xl text-center md:text-left mx-auto md:mx-0"
        >
          <p className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-amber-300/60 bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-1.5 text-[10px] xs:text-[11px] font-semibold text-amber-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ALLOGO Deliveries • Features
          </p>

          <h2 className="mt-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-snug">
            Everything you need for fast, reliable deliveries
          </h2>

          <p className="mt-3 text-gray-600 text-xs xs:text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            ALLOGO Deliveries makes sending packages effortless — with clear
            prices, fast couriers and real-time tracking from pickup to
            drop-off.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-10 grid gap-4 xs:gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, i) => (
            <article
              key={i}
              className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 
                bg-gradient-to-br from-white via-white to-amber-50/50 p-4 xs:p-5
                shadow-[0_10px_30px_rgba(251,191,36,0.08)]
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(251,191,36,0.15)]
                hover:border-amber-300/50"
            >
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-1 
                  bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400"
              />

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 flex h-8 w-8 sm:h-9 sm:w-9 flex-none items-center justify-center 
                    rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 
                    text-[11px] sm:text-xs font-semibold text-white 
                    shadow-[0_6px_20px_rgba(251,191,36,0.8)] 
                    group-hover:scale-105 transition-transform duration-300"
                >
                  {i + 1}
                </div>

                <div>
                  <h3 className="text-sm sm:text-[15px] font-semibold text-gray-900 leading-snug">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[10px] xs:text-[11px] text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Optimised for everyday use
                </span>

                <span className="font-medium text-amber-600 flex-shrink-0">
                  ALLOGO
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-14 sm:mt-20">
          <div
            data-aos="fade-up"
            className="max-w-2xl text-center md:text-left mx-auto md:mx-0"
          >
            <p
              className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 
                bg-gradient-to-r from-slate-50 to-gray-50 px-3 py-1.5
                text-[10px] xs:text-[11px] font-semibold text-slate-700 shadow-sm"
            >
              Sender flow • 4 simple steps
            </p>

            <h3 className="mt-3 text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              How deliveries work for senders
            </h3>

            <p className="mt-2 text-gray-600 text-xs xs:text-sm sm:text-base max-w-lg mx-auto md:mx-0">
              A clear flow from booking to delivery confirmation — so you always
              know what's happening with your package.
            </p>
          </div>

          {/* STEPS GRID */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-10 grid gap-5 xs:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, i) => (
              <article
                key={i}
                className="group relative flex flex-col w-full rounded-2xl 
                  border border-gray-200 bg-gradient-to-b from-white to-amber-50/30 
                  p-4 xs:p-5 shadow-[0_10px_30px_rgba(15,23,42,0.07)]
                  transition-all duration-300 hover:-translate-y-1.5 
                  hover:shadow-[0_20px_50px_rgba(251,191,36,0.12)]
                  hover:border-amber-300/50"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full 
                      bg-gradient-to-br from-amber-400 to-amber-500 
                      text-[10px] xs:text-[11px] font-bold text-white 
                      shadow-[0_6px_20px_rgba(251,191,36,0.8)] 
                      group-hover:scale-110 transition-transform duration-300"
                  >
                    {i + 1}
                  </span>

                  <span
                    className="rounded-full border border-amber-300/70 
                      bg-gradient-to-r from-amber-50 to-yellow-50 
                      px-2 py-0.5 text-[9px] xs:text-[10px] font-semibold text-amber-700"
                  >
                    {step.label}
                  </span>
                </div>

                <h4 className="mt-3 text-sm sm:text-[15px] font-semibold text-gray-900">
                  {step.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.text}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[10px] xs:text-[11px] text-gray-400">
                  <span>Inside the ALLOGO app</span>
                  {i === steps.length - 1 && (
                    <span className="font-medium text-emerald-600 animate-pulse flex-shrink-0">
                      Delivery confirmed ✓
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* BONUS CARD */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-10 rounded-2xl border border-amber-300/50 
              bg-gradient-to-r from-amber-50 via-amber-50/80 to-yellow-50 
              px-4 xs:px-5 py-4 text-xs xs:text-sm sm:text-base
              shadow-[0_10px_40px_rgba(251,191,36,0.25)]
              transition-all duration-300 hover:scale-[1.01]"
          >
            <span className="font-semibold text-amber-700">
              Bonus for couriers:{" "}
            </span>
            <span className="text-amber-800">
              Earn loyalty points on every completed delivery and unlock credit
              between{" "}
              <span className="font-semibold text-amber-900">
                1000–2000 DA
              </span>
              , repaid automatically through your commissions.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
