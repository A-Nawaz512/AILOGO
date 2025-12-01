import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Loyalty Points",
      description: "Earn 1 point per service — redeem for discounts and rewards.",
    },
    {
      title: "Borrow Credit",
      description: "Active users can borrow 1000–2000 DA based on loyalty & activity.",
    },
    {
      title: "In-App Chat",
      description: "Chat instantly with drivers, couriers, renters, or technicians.",
    },
    {
      title: "MapLibre 3D Tracking",
      description: "Real-time tracking for rides, couriers, rentals, apartments & assistance.",
    },
  ];

  return (
    <div className="bg-black text-white pt-6 pb-6 px-6">

      <h2 className="text-center text-4xl font-extrabold tracking-wide mb-10">
        Key{" "}
        <span className="bg-gradient-to-r from-[#FFC936] via-[#D4AF37] to-[#A7862C] text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(255,201,54,0.5)]">
          Features
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {features.map((feature, i) => (
          <div
            key={i}
            className="p-8 bg-[#0D0D0D] rounded-3xl border border-[#C9A227]/20 shadow-[0_0_10px_rgba(255,201,54,0.15)]
                       transform transition-all duration-500
                       hover:scale-[1.05] 
                       hover:border-[#FFD95A]
                       hover:shadow-[0_0_20px_rgba(255,217,90,0.6)]
                       hover:bg-opacity-90"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#FFE08A] via-[#D4AF37] to-[#A7862C] text-transparent bg-clip-text mb-4">
              {feature.title}
            </h3>

            <p className="text-[#B5B5B5] text-[15px] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
