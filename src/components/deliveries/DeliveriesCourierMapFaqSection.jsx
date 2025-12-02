import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeliveryForCouriers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full overflow-x-hidden bg-gradient-to-b from-white via-[#fefcf7] to-white  py-16 sm:py-20 lg:py-1 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_#E2CF7D15,_transparent_50%),radial-gradient(circle_at_70%_80%,_#6F491808,_transparent_50%)]" />
      
      {/* decorative elements */}
      <div className="absolute top-1/4 right-5 w-40 h-40 rounded-full bg-gradient-to-br from-[#E2CF7D]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 left-5 w-32 h-32 rounded-full bg-gradient-to-tr from-[#6F4918]/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div
          data-aos="fade-up"
          className="mx-auto max-w-3xl text-center lg:text-left"
        >
          <div className="relative inline-block mb-1">
            <span className="relative z-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#6F4918]/8 to-[#6F4918]/4 px-5 py-1.5 text-[1rem] font-bold uppercase tracking-[0.24em] text-[#6F4918] shadow-[0_4px_15px_rgba(111,73,24,0.1)]">
              For Couriers
            </span>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#E2CF7D]/15 to-transparent blur-sm" />
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1a1206] sm:text-4xl lg:text-[2.6rem]">
            Drive, deliver, and get paid
            <span className="block bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
              on your terms.
            </span>
          </h2>

          <p className="mt-4 text-sm text-gray-700 sm:text-base max-w-2xl leading-relaxed">
            Use your bike, scooter, or car to earn extra income with clear
            commissions, instant job alerts, and a live earnings overview inside
            the AILOGO app.
          </p>
        </div>

        {/* ENHANCED MAIN LAYOUT */}
        <div
          data-aos="fade-up"
          data-aos-delay="120"
          className="mt-12 flex w-full flex-col gap-10 rounded-[2rem] border border-[#E2CF7D]/50 bg-gradient-to-br from-white via-[#fefcf7] to-white p-5 shadow-[0_25px_60px_rgba(111,73,24,0.12)] sm:p-6 lg:mt-14 lg:flex-row lg:items-center lg:gap-8 lg:p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#FFF8E5]/20 before:content-['']"
        >
          {/* LEFT – ENHANCED EARNINGS CARD */}
          <div className="w-full lg:max-w-[480px]">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#E2CF7D]/70 bg-gradient-to-br from-[#6F4918] via-[#8a5b23] to-[#E2CF7D] p-[2px] shadow-[0_25px_60px_rgba(111,73,24,0.4)]">
              <div className="flex h-full flex-col rounded-[2rem] bg-gradient-to-br from-[#1b1307]/98 to-[#2d1a0c]/95 px-6 py-6 sm:px-8 sm:py-7 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/20 before:content-['']">
                {/* glow effect */}
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#E2CF7D]/10 via-transparent to-transparent" />
                
                <div className="relative z-10 inline-flex items-center rounded-full bg-gradient-to-r from-white/8 to-transparent px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#E2CF7D] shadow-[0_0_20px_rgba(226,207,125,0.2)]">
                  Earn with every delivery
                </div>

                <h3 className="relative z-10 mt-5 text-2xl font-bold text-white sm:text-3xl">
                  Keep 95% of every delivery fare.
                </h3>

                <p className="relative z-10 mt-3 text-sm text-gray-200 sm:text-base leading-relaxed">
                  AILOGO charges a simple{" "}
                  <span className="font-bold text-[#E2CF7D]">5%</span> commission on each
                  completed trip. No hidden fees — you always see your net
                  earnings before you accept.
                </p>

                {/* Enhanced Example earning */}
                <div className="relative z-10 mt-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/4 p-5 text-sm text-[#FDF6E7] backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#E2CF7D] to-[#f8e6a9]" />
                    <p className="font-bold">Example earning</p>
                  </div>
                  <div className="mt-4 grid gap-5 text-xs sm:grid-cols-3 sm:text-sm">
                    <div className="text-center">
                      <p className="text-gray-300">Delivery price</p>
                      <p className="text-xl font-bold text-[#E2CF7D] mt-1">
                        1,000&nbsp;DA
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-300">You receive (95%)</p>
                      <p className="text-xl font-bold text-white mt-1">
                        950&nbsp;DA
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-300">AILOGO (5%)</p>
                      <p className="text-xl font-bold text-gray-300 mt-1">
                        50&nbsp;DA
                      </p>
                    </div>
                  </div>
                </div>

                {/* enhanced chips + CTA */}
                <div className="relative z-10 mt-7 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-200 sm:text-sm">
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white/8 to-white/4 px-3.5 py-1.5 backdrop-blur-sm border border-white/10">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#E2CF7D] to-[#f8e6a9]" />
                      Daily & weekly earning breakdowns
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white/8 to-white/4 px-3.5 py-1.5 backdrop-blur-sm border border-white/10">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#E2CF7D] to-[#f8e6a9]" />
                      Earnings update after every trip
                    </span>
                  </div>

                  <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E2CF7D] to-[#f7e7a2] px-6 py-2.5 text-xs font-bold text-[#2b1a08] shadow-[0_8px_25px_rgba(226,207,125,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(226,207,125,0.5)]">
                    Become a courier
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – ENHANCED 3 FEATURE CARDS */}
          <div className="grid w-full flex-1 gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {/* ENHANCED CARD 1 – Vehicle requirements */}
            <div className="group relative flex flex-col rounded-2xl border border-[#E2CF7D]/60 bg-gradient-to-br from-white via-[#FFF8E5] to-[#F5E4B880] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(111,73,24,0.15)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#FFF8E5]/30 before:content-['']">
              <div className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] text-[0.7rem] font-bold text-white shadow-[0_8px_20px_rgba(111,73,24,0.3)] group-hover:scale-110 transition-transform duration-300">
                <div className="h-4 w-6 rounded-md border border-white/85" />
              </div>

              <h3 className="text-sm font-bold text-[#2b1a08] sm:text-base group-hover:text-[#6F4918] transition-colors">
                Vehicle requirements
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Use a <span className="font-bold text-[#6F4918]">bike, scooter, or car</span> in
                good condition, insured and ready to safely carry packages.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]" />
                  Valid local driving documents.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]" />
                  Smartphone with GPS &amp; internet.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]" />
                  Ability to follow navigation &amp; timing.
                </li>
              </ul>

              <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#6F4918] via-[#E2CF7D] to-transparent transition-all duration-300 group-hover:w-20 group-hover:shadow-[0_0_10px_rgba(226,207,125,0.3)]" />
            </div>

            {/* ENHANCED CARD 2 – 5% Commission */}
            <div className="group relative flex flex-col rounded-2xl border border-[#E2CF7D]/60 bg-gradient-to-br from-white via-[#FFF8E5] to-[#F5E4B880] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(111,73,24,0.15)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#FFF8E5]/30 before:content-['']">
              <div className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] text-[0.8rem] font-bold text-white shadow-[0_8px_20px_rgba(111,73,24,0.3)] group-hover:scale-110 transition-transform duration-300">
                %
              </div>

              <h3 className="text-sm font-bold text-[#2b1a08] sm:text-base group-hover:text-[#6F4918] transition-colors">
                Simple 5% commission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                A flat <span className="font-bold text-[#6F4918]">5% fee</span> on every completed
                delivery. No subscription, no extra platform costs.
              </p>

              <p className="mt-3 text-xs text-gray-700 bg-gradient-to-r from-[#FFF9EA]/30 to-transparent p-3 rounded-lg">
                You see the gross price, commission, and your net earnings{" "}
                <span className="font-bold">before</span> you tap accept.
              </p>

              <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#6F4918] via-[#E2CF7D] to-transparent transition-all duration-300 group-hover:w-20 group-hover:shadow-[0_0_10px_rgba(226,207,125,0.3)]" />
            </div>

            {/* ENHANCED CARD 3 – Notifications & earnings */}
            <div className="group relative flex flex-col rounded-2xl border border-[#E2CF7D]/60 bg-gradient-to-br from-white via-[#FFF8E5] to-[#F5E4B880] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(111,73,24,0.15)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#FFF8E5]/30 before:content-[''] md:col-span-2 lg:col-span-1 xl:col-span-2">
              <div className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] text-[0.7rem] font-bold text-white shadow-[0_8px_20px_rgba(111,73,24,0.3)] group-hover:scale-110 transition-transform duration-300">
                <div className="h-4 w-4 rounded-sm border border-white/85" />
              </div>

              <h3 className="text-sm font-bold text-[#2b1a08] sm:text-base group-hover:text-[#6F4918] transition-colors">
                Job notifications &amp; earnings
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Requests appear based on your location with pickup, drop-off,
                distance, and payout clearly shown.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]" />
                  Accept or decline in a single tap.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]" />
                  Live trip tracking until the receiver confirms.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]" />
                  Balance updates instantly after each delivery.
                </li>
              </ul>

              <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#FFF9EA] to-[#FFF3C2] p-4 text-xs text-[#3b2412] shadow-inner shadow-[#E2CF7D]/20">
                View your earnings history by{" "}
                <span className="font-bold text-[#6F4918]">day, week, or month</span> and see
                exactly how much you've made with AILOGO.
              </div>

              <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#6F4918] via-[#E2CF7D] to-transparent transition-all duration-300 group-hover:w-20 group-hover:shadow-[0_0_10px_rgba(226,207,125,0.3)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryForCouriers;