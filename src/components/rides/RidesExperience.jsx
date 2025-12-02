import React from "react";

const riderSteps = [
  {
    title: "Set pickup & destination",
    desc: "Enter where you are and where you're going, or drop pins directly on the map.",
  },
  {
    title: "Choose vehicle & preferences",
    desc: "Pick car or moto, seat type and, if you wish, driver gender preference.",
  },
  {
    title: "Confirm the price",
    desc: "Review a clear fare before you ride, or agree on a price with your driver.",
  },
  {
    title: "Track your ride in real time",
    desc: "Follow your driver's arrival and full route on the live 3D MapLibre map.",
  },
];

const driverSteps = [
  {
    title: "Register & upload documents",
    desc: "Create your profile and securely upload your ID, license and vehicle details.",
  },
  {
    title: "Get approved",
    desc: "Our team reviews your information and activates your account.",
  },
  {
    title: "Go online & accept trips",
    desc: "Choose when you want to work, receive requests and accept the rides you prefer.",
  },
  {
    title: "Earn with loyalty & credit",
    desc: "Earn more with only 9% commission, loyalty points and access to AllLOGO credit.",
  },
];

const RidesHowItWorks = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="text-3xl font-bold uppercase tracking-[0.25em] text-[#B8871B]">
            How it works
          </p>
          <h2 className="mt-3 bg-gradient-to-r from-[#F9D777] via-[#D8A635] to-[#B8871B] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            Simple for riders, powerful for drivers
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            AllLOGO turns complex mobility into a clear journey: four steps for riders and four for drivers.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Riders */}
          <div data-aos="fade-right" data-aos-delay="80">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871B]">
              For Riders
            </h3>
            <p className="mt-2 text-lg font-semibold text-gray-900">
              Book a ride in four clear steps.
            </p>

            <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/70 p-4 sm:p-5">
              <div className="flex gap-4">
                {/* vertical timeline line */}
                <div className="relative w-6 flex-none">
                  <span className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-[2px] -translate-x-1/2 rounded-full bg-gray-200" />
                </div>

                <ol className="flex-1 space-y-4">
                  {riderSteps.map((step, index) => (
                    <li
                      key={step.title}
                      className="group relative flex gap-4 rounded-xl bg-white p-4 shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)]"
                    >
                      <div className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#F9D777] via-[#D8A635] to-[#B8871B] text-sm font-semibold text-white shadow-md shadow-[rgba(184,135,27,0.45)]">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Drivers */}
          <div className="lg:pl-6" data-aos="fade-left" data-aos-delay="120">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871B]">
              For Drivers
            </h3>
            <p className="mt-2 text-lg font-semibold text-gray-900">
              Turn your time and vehicle into reliable income.
            </p>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#FFF7E3] via-white to-[#FFF3D3] p-[1px] shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              <div className="rounded-2xl bg-white p-5 sm:p-6">
                {/* header row */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF4D1] px-3 py-1 text-[11px] font-medium text-[#B8871B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B8871B]" />
                    Driver journey
                  </div>
                  <span className="text-xs font-semibold text-[#D8A635]">
                    4 simple steps
                  </span>
                </div>

                <div className="space-y-4">
                  {driverSteps.map((step, index) => (
                    <div key={step.title} className="flex gap-3">
                      <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#FFF4D1] text-[10px] font-semibold text-[#B8871B]">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          {step.title}
                        </h4>
                          <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl bg-[#FFF6DF] px-4 py-3 text-xs text-gray-700 sm:text-sm">
                  <span className="font-semibold text-[#B8871B]">Bonus:</span>{" "}
                  keep more of what you earn with only{" "}
                  <span className="font-semibold text-[#B8871B]">9% commission</span>{" "}
                  and unlock micro-credit based on your loyalty and activity.
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500 sm:text-sm">
              As you complete more trips with AllLOGO, you unlock higher loyalty
              tiers, better credit limits and more stable daily earnings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RidesHowItWorks;