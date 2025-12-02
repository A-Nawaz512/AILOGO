import React from "react";

export default function DeliveriesCTASection() {
  return (
    <section className="relative w-full overflow-x-hidden overflow-y-visible bg-gray-50 py-16 sm:py-20">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700">
            ALLOGO Deliveries • Start now
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
            One platform for senders and couriers.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Book fast deliveries, or earn by completing them — all inside the
            ALLOGO app with live tracking and clear pricing.
          </p>
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Sender card (highlighted) */}
          <div className="relative min-w-0 rounded-3xl border border-amber-300/80 bg-white/90 p-6 sm:p-7 shadow-[0_16px_45px_rgba(15,23,42,0.16)] backdrop-blur">
            <span className="absolute inset-x-5 top-0 h-1 rounded-b-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-semibold text-amber-700">
                  For senders
                </div>
                <h3 className="mt-3 text-lg sm:text-xl font-semibold text-gray-900">
                  Send packages in minutes
                </h3>
              </div>
              <div className="hidden sm:flex flex-col items-end text-[11px] text-gray-500">
                <span className="font-semibold text-amber-600">
                  Same-day delivery
                </span>
                <span>Real-time 3D tracking</span>
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-600">
              Choose pickup &amp; drop-off, select package size, see the price
              upfront and follow your courier live on the map.
            </p>

            <div className="mt-4 grid gap-2 text-sm text-gray-700">
              <FeatureRow text="Instant price & ETA before you confirm." />
              <FeatureRow text="Live MapLibre tracking from pickup to delivery." />
              <FeatureRow text="In-app proof of delivery and status updates." />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(251,191,36,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-amber-500">
                Send a Package
                <span className="ml-2">→</span>
              </button>
              <p className="text-[11px] sm:text-xs text-gray-500 text-center sm:text-right">
                Available in supported cities. More regions coming soon.
              </p>
            </div>
          </div>

          {/* Courier card */}
          <div className="min-w-0 rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.10)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-700">
              For couriers
            </div>
            <h3 className="mt-3 text-lg sm:text-xl font-semibold text-gray-900">
              Earn more with every delivery
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Accept nearby delivery requests, see all details upfront, and keep
              95% of each fare with one of the lowest commissions in the market.
            </p>

            <div className="mt-4 grid gap-2 text-sm text-gray-700">
              <FeatureRow text="Only 5% commission on completed deliveries." />
              <FeatureRow text="Total control over your schedule and jobs." />
              <FeatureRow text="Loyalty points + access to 1000–2000 DA credit." />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-[11px] sm:text-xs text-gray-600">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2">
                <div className="font-semibold text-gray-800">Requirements</div>
                <div>Valid ID, smartphone &amp; moto/car.</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2">
                <div className="font-semibold text-gray-800">Payments</div>
                <div>Fast payouts, tracked in-app.</div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center rounded-full border border-amber-400 bg-white px-7 py-3 text-sm font-semibold text-amber-700 shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition-transform hover:-translate-y-0.5 hover:bg-amber-50">
                Become a Courier
                <span className="ml-2">🚚</span>
              </button>
            </div>
          </div>
        </div>

        {/* subtle footer text */}
        <p className="mt-10 text-center text-xs sm:text-sm text-gray-500">
          ALLOGO connects riders, couriers, renters and clients in one super app —
          with one account, one wallet and real-time 3D maps.
        </p>
      </div>
    </section>
  );
}

function FeatureRow({ text }) {
  return (
    <div className="flex gap-2 items-start">
      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
      <span className="text-xs sm:text-sm leading-snug">{text}</span>
    </div>
  );
}
