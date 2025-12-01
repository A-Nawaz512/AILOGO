import React from "react";

const RidesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">

      {/* background glows */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0)_0,_#020617_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-20 md:flex-row md:items-center lg:px-0 lg:pb-24">

        {/* LEFT */}
        <div className="md:w-1/2" data-aos="fade-up">

          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-300 shadow-md shadow-amber-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            VTC • Inter & Intra-Wilaya
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Rides when you need them
            <span className="mt-1 block bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
              across every wilaya
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Book trusted VTC rides for{" "}
            <span className="font-semibold text-amber-300">inter-wilaya</span>{" "}
            and{" "}
            <span className="font-semibold text-amber-300">intra-wilaya</span>{" "}
            trips. Choose your driver, car or moto, and track live movement on
            our 3D MapLibre map.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#book-ride"
              data-aos="zoom-in"
              data-aos-delay="80"
              className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/40 transition-transform hover:scale-[1.04]"
            >
              <span className="absolute -inset-px rounded-full bg-gradient-to-r from-amber-500/30 via-yellow-300/20 to-amber-500/0 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              <span className="relative flex items-center">
                Book a Ride
                <span className="ml-2 text-base transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>

            <a
              href="#become-driver"
              data-aos="zoom-in"
              data-aos-delay="140"
              className="inline-flex items-center justify-center rounded-full border border-amber-400/70 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-amber-200 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-lg hover:shadow-amber-500/30"
            >
              Become a Driver
            </a>
          </div>

          <div
            className="mt-5 flex flex-wrap gap-3 text-xs text-slate-400 sm:text-[13px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Verified drivers in major wilayas
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Transparent fares & 9% commission
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Live 3D tracking with MapLibre
            </span>
          </div>
        </div>

        {/* RIGHT – map */}
        <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="120">

          <div className="mx-auto max-w-sm sm:max-w-md rounded-[2rem] border border-slate-700/70 bg-slate-900/70 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">

            {/* header */}
            <div className="mb-3 flex items-center justify-between text-xs sm:text-[13px]">
              <div>
                <p className="text-[10px] tracking-[0.22em] text-slate-400">
                  LIVE RIDE PREVIEW
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-50">
                  Algiers → Blida
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] sm:text-[11px] font-medium text-emerald-300">
                3 drivers nearby
              </span>
            </div>

            {/* map */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-2 sm:p-3">
              <div className="relative h-40 sm:h-44 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950">

                {/* grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.16)_1px,transparent_0)] bg-[length:16px_16px] sm:bg-[length:18px_18px] opacity-60" />

                {/* route */}
                <div className="absolute inset-5">
                  <svg viewBox="0 0 160 120" className="h-full w-full text-emerald-400/80">
                    <path
                      d="M15 100 C 40 80, 55 70, 75 72 C 100 75, 120 55, 145 35"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeDasharray="5 4"
                    />
                  </svg>
                </div>

                {/* Car marker */}
                <div className="absolute left-[30%] top-[52%] flex -translate-y-1/2 items-center gap-2 scale-[0.85] sm:scale-100">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40">
                    🚗
                  </div>
                  <div className="rounded-lg bg-slate-900/95 px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] text-slate-100">
                    Car on the way
                    <div className="text-[8px] sm:text-[9px] text-emerald-300">
                      ETA 08:00 min
                    </div>
                  </div>
                </div>

                {/* Moto marker */}
                <div className="absolute left-[18%] top-[30%] flex -translate-y-1/2 items-center gap-2 scale-90 sm:scale-100">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-sky-500 shadow-lg shadow-sky-500/40">
                    🛵
                  </div>
                  <div className="hidden sm:block rounded-lg bg-slate-900/90 px-2 py-1 text-[9px] text-slate-100">
                    Moto nearby
                  </div>
                </div>

                {/* Van marker */}
                <div className="absolute right-[12%] bottom-[26%] flex items-center gap-2 scale-90 sm:scale-100">
                  <div className="hidden sm:block rounded-lg bg-slate-900/90 px-2 py-1 text-[9px] text-slate-100">
                    XL vehicle
                  </div>
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-amber-400 shadow-lg shadow-amber-400/40">
                    🚐
                  </div>
                </div>

                <div className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full bg-slate-900/90 px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] text-slate-200">
                  Pickup confirmed
                </div>

                <div className="absolute bottom-3 right-3 sm:right-4 sm:bottom-4 rounded-full bg-slate-900/90 px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] text-slate-200">
                  Destination set
                </div>
              </div>
            </div>

            {/* bottom stats */}
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3 text-[10px] sm:text-[11px]">
              <div className="rounded-xl bg-slate-950/80 px-2 sm:px-3 py-2">
                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Trip
                </p>
                <p className="mt-1 font-semibold text-slate-50">Inter-wilaya</p>
              </div>
              <div className="rounded-xl bg-slate-950/80 px-2 sm:px-3 py-2">
                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Vehicles
                </p>
                <p className="mt-1 font-semibold text-slate-50">Car • Moto • XL</p>
              </div>
              <div className="rounded-xl bg-slate-950/80 px-2 sm:px-3 py-2">
                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Fare
                </p>
                <p className="mt-1 font-semibold text-emerald-300">2 300 DA</p>
              </div>
            </div>

            <p className="mt-2 text-[10px] sm:text-[11px] text-slate-400">
              Transparent fares, <span className="font-semibold text-amber-300">
                9% driver commission
              </span>{" "}
              and loyalty points on every trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RidesHero;
