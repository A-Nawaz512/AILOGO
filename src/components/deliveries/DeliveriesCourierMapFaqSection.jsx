import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    q: "What items can I send?",
    a: "You can send most everyday items: documents, clothing, small electronics, accessories and non-fragile parcels. Dangerous, illegal or restricted items (weapons, drugs, cash, highly valuable jewelry, chemicals, etc.) are not allowed according to our terms.",
  },
  {
    q: "Is my package insured?",
    a: "Standard deliveries include basic coverage according to ALLOGO’s conditions. For high-value items, we recommend declaring the value in the app and using additional insurance options where available.",
  },
  {
    q: "How do I know my package is delivered?",
    a: "You’ll see live status in the app, plus delivery confirmation. When possible, we also show proof of delivery, such as a photo, receiver name or signature.",
  },
];

export default function DeliveriesCourierMapFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto overflow-hidden max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* ===== COURIER + MAP ROW ===== */}
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.95fr] items-start">
          {/* LEFT: COURIERS */}
          <div data-aos="fade-right" className="order-2 lg:order-none">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Become a courier • Earn with ALLOGO
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 text-left">
              Drive, deliver and earn — with only{" "}
              <span className="text-amber-500">5% commission</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Use your scooter or car to deliver packages on your own schedule.
              ALLOGO gives you clear jobs, transparent payouts and powerful
              tools to manage your day.
            </p>

            {/* Courier benefits cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <BenefitCard
                title="Fair earnings"
                text="Keep 95% of each delivery fare. See the price and distance before you accept."
              />
              <BenefitCard
                title="Flexible schedule"
                text="Work when it suits you — evenings, weekends or full-time. You decide."
              />
              <BenefitCard
                title="Clear requests"
                text="Every job shows pickup, drop-off, distance and package size upfront."
              />
              <BenefitCard
                title="Loyalty & credit"
                text="Earn points on every delivery and unlock 1000–2000 DA of in-app credit."
              />
            </div>

            {/* Small stats row */}
            <div className="mt-5 grid gap-3 grid-cols-2 sm:grid-cols-3 text-xs sm:text-sm">
              <CourierStat label="Commission" value="5% fixed" highlight />
              <CourierStat label="Vehicle types" value="Moto & car" />
              <CourierStat label="Payments" value="Fast & trackable" />
            </div>
          </div>

          {/* RIGHT: MAP CARD */}
          <div
            data-aos="fade-left"
            className="order-1 lg:order-none"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
              {/* top accent line */}
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400" />

              {/* header */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-sm font-bold text-white shadow-[0_6px_18px_rgba(251,191,36,0.6)]">
                    A
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-700">
                      ALLOGO • Deliveries
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Live map preview
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
                  LIVE • 3D tracking
                </span>
              </div>

              {/* map mock */}
              <div className="relative h-52 xs:h-56 sm:h-64 overflow-hidden bg-slate-900 rounded-2xl mx-3 mb-3">
                {/* grid */}
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_1px_1px,#ffffff30_1px,transparent_0)] bg-[length:22px_22px]" />

                {/* route path */}
                <svg
                  viewBox="0 0 400 240"
                  className="absolute inset-0 h-full w-full opacity-80"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10 220 C80 185,135 145,195 155 S330 120,390 35"
                    stroke="#fbbf24"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="6 7"
                  />
                </svg>

                {/* pins */}
                <MapPin label="Pickup" className="left-[10%] bottom-[22%]" />
                <MapPin label="Drop-off" className="right-[8%] top-[18%]" />

                {/* couriers */}
                <CourierDot className="left-[27%] bottom-[40%]" />
                <CourierDot className="left-[55%] top-[42%]" />
                <CourierDot className="left-[78%] top-[27%]" />

                {/* info card */}
                <div className="absolute left-3 top-3 rounded-xl bg-black/70 px-3 py-2 text-[11px] text-slate-100 backdrop-blur border border-white/10 max-w-[80%] sm:max-w-xs">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium">Medium box • 4 km</span>
                    <span className="rounded-full bg-amber-400/30 px-2 py-0.5 text-[10px] text-amber-100">
                      ETA 24 min
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] text-slate-200">
                    Courier assigned • live tracking enabled
                  </p>
                </div>

                {/* price pill */}
                <div className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-900 shadow-md">
                  620 DA • Est. delivery
                </div>
              </div>

              {/* footer text */}
              <div className="px-4 pb-4 text-[12px] text-gray-600 border-t border-gray-100">
                Live MapLibre 3D tracking lets senders and couriers see each
                other in real time — from pickup to drop-off.
              </div>
            </div>
          </div>
        </div>

        {/* ===== FAQ ===== */}
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
          {/* FAQ intro */}
          <div data-aos="fade-right">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">
              FAQ • Deliveries on ALLOGO
            </p>
            <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-gray-900">
              Answers to common delivery questions
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Whether you’re sending a package or delivering it, these quick
              answers explain how ALLOGO keeps your deliveries safe, clear and
              transparent.
            </p>

            <div className="mt-6 rounded-2xl bg-white border border-amber-100 px-4 py-4 text-[12px] sm:text-sm text-amber-800 shadow-sm">
              <span className="font-semibold text-amber-700">
                Need more help?
              </span>{" "}
              Use the in-app support chat to contact our team directly after you
              book or complete a delivery.
            </div>
          </div>

          {/* FAQ accordion */}
          <div
            data-aos="fade-left"
            className="space-y-3"
          >
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* === Small presentational components === */

function BenefitCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)] transition-shadow duration-200">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-sm">
          ⭐
        </span>
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function CourierStat({ label, value, highlight }) {
  return (
    <div
      className={`rounded-xl border px-3 py-3 shadow-sm bg-white ${
        highlight
          ? "border-amber-400/70 bg-amber-50/80 text-amber-800"
          : "border-gray-200 text-gray-700"
      }`}
    >
      <div className="text-[11px] uppercase tracking-wide text-gray-400">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function CourierDot({ className = "" }) {
  return (
    <div className={`absolute ${className}`}>
      <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-amber-400/60" />
      <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[9px] text-slate-900 font-bold">
        🚚
      </span>
    </div>
  );
}

function MapPin({ className = "", label }) {
  return (
    <div className={`absolute flex flex-col items-center ${className}`}>
      <div className="relative flex h-4 w-4 items-center justify-center">
        <span className="absolute h-6 w-6 rounded-full bg-red-500/18" />
        <span className="relative h-3 w-3 rounded-full bg-red-500 border border-white" />
      </div>
      <span className="mt-1 text-[9px] text-slate-100 bg-black/70 px-1.5 py-0.5 rounded-full border border-white/10">
        {label}
      </span>
    </div>
  );
}

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
      >
        <span className="text-sm sm:text-base font-semibold text-gray-900">
          {item.q}
        </span>
        <span
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs transition-colors ${
            isOpen
              ? "border-amber-400 bg-amber-50 text-amber-600"
              : "border-gray-300 bg-gray-50 text-gray-500"
          }`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-gray-100 px-4 py-3 text-xs sm:text-sm text-gray-600">
          {item.a}
        </div>
      )}
    </div>
  );
}
