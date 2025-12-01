import React from "react";
import backgroundVideoFile from "../../assets/video.mp4"; // <-- ADD THIS

export default function ApartmentHero({
  title = "Apartment Rentals",
  subtitle = "Find apartments for short stays and trips across Algeria.",
  primaryCTA = { text: "Find an Apartment", onClick: () => {} },
  secondaryCTA = { text: "List Your Apartment", onClick: () => {} },
  backgroundVideo = backgroundVideoFile,  // <-- SET DEFAULT VIDEO
  backgroundImage = null
}) {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video Layer */}
      {backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo} 
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Background Image Fallback */}
      {!backgroundVideo && backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#9A7A3E]">
          {title}
        </h1>

        <p className="text-lg md:text-2xl mb-10 text-gray-200">
          {subtitle}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-5">
          {/* Primary CTA */}
          <button
            onClick={primaryCTA.onClick}
            className="bg-[#9A7A3E] hover:bg-[#b8924b] text-black font-semibold py-2 px-5 rounded-xl transition shadow-xl"
          >
            {primaryCTA.text}
          </button>

          {/* Secondary CTA */}
          <button
            onClick={secondaryCTA.onClick}
            className="bg-transparent border-2 border-[#9A7A3E] hover:bg-[#9A7A3E] hover:text-black font-semibold py-2 px-5 rounded-xl transition shadow-xl"
          >
            {secondaryCTA.text}
          </button>
        </div>
      </div>
    </section>
  );
}
