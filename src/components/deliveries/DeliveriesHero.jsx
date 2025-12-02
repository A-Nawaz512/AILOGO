import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DeliveriesHero() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  return (
    <section className="relative text-white overflow-x-clip">
      {/* BACKGROUND (clipped) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background video */}
        <video
          className="h-full w-full object-cover"
          src="../../assets/food.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay + soft golden glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-[#020617]/90" />
        <div className="pointer-events-none absolute inset-0">
          {/* make circles a bit smaller & less offset on mobile */}
          <div className="absolute -left-12 top-0 h-40 w-40 sm:h-72 sm:w-72 rounded-full bg-[#fbbf24]/18 blur-3xl" />
          <div className="absolute -right-12 bottom-[-2rem] h-44 w-44 sm:h-80 sm:w-80 rounded-full bg-[#f97316]/18 blur-3xl" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[75vh] sm:min-h-[80vh] max-w-6xl items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div
          className="w-full max-w-3xl md:max-w-2xl text-center md:text-left mx-auto"
          data-aos="fade-up"
        >
          {/* Tag */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] sm:text-[11px] font-medium text-amber-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Deliveries • Same-day • Live tracking
          </div>

          {/* Heading */}
          <h1 className="mt-4 sm:mt-5 text-[1.9rem] leading-tight xs:text-[2.2rem] sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-xl mx-auto md:mx-0">
            <span className="block text-white">Fast, flexible</span>
            <span className="block text-[#fbbf24]">
              deliveries across your city
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-200 max-w-md md:max-w-xl mx-auto md:mx-0 px-1">
            Send documents and packages in just a few taps. Set pickup &amp;
            drop-off anywhere, match instantly with a nearby courier, and follow
            every step live on the 3D MapLibre map.
          </p>

          {/* Pills */}
          <div className="mt-4 sm:mt-5 flex flex-wrap justify-center md:justify-start gap-2 text-[10px] sm:text-[11px]">
            <span className="rounded-full border border-amber-400/70 bg-black/70 px-3 py-1 text-amber-100">
              Same-day delivery
            </span>
            <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-slate-100">
              Real-time 3D tracking
            </span>
            <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-slate-100">
              Proof of delivery
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-3 w-full">
            <button className="group w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-[#fbbf24] px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#e0a814]">
              Send a Package
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <button className="group w-full sm:w-auto inline-flex justify-center items-center rounded-full border border-amber-300/70 bg-black/60 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-amber-100 backdrop-blur transition-all duration-200 hover:bg-white/10">
              Become a Courier
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                🛵
              </span>
            </button>
          </div>

          {/* Bottom note */}
          <p className="mt-4 sm:mt-5 text-[10px] xs:text-[11px] sm:text-[12px] text-slate-300 max-w-md md:max-w-xl mx-auto md:mx-0 px-1 text-center md:text-left">
            Every delivery earns loyalty points. Active couriers can unlock
            credit between <span className="font-semibold">1000–2000 DA</span>,
            repaid automatically through their earnings.
          </p>
        </div>
      </div>
    </section>
  );
}
