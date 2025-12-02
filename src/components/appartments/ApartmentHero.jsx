import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundVideoFile from "../../assets/video.mp4";

export default function ApartmentHero({
  title = "Apartment Rentals",
  subtitle = "Find apartments for short stays and trips across Algeria.",
  primaryCTA = { text: "Find an Apartment", onClick: () => {} },
  secondaryCTA = { text: "List Your Apartment", onClick: () => {} },
  backgroundVideo = backgroundVideoFile,
  backgroundImage = null
}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative text-white min-h-[90vh] flex items-center justify-center overflow-hidden">

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

      {/* Extra soft dark opacity on video */}
      <div className="absolute inset-0 bg-black/20"></div>

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
      <div className="relative z-10 container mx-auto px-5 mb-4 text-center">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-6xl font-bold mb-4 text-[#B78E3B]"
        >
          {title}
        </h1>

        <p
          data-aos="fade-up"
          className="text-lg md:text-2xl mb-10 text-gray-200"
        >
          {subtitle}
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col md:flex-row justify-center gap-5"
        >
          {/* Primary CTA */}
          <button
            onClick={primaryCTA.onClick}
            className="bg-[#B78E3B] hover:bg-[#b8924b] text-black font-semibold py-2 px-5 rounded-xl transition shadow-xl"
          >
            {primaryCTA.text}
          </button>

          {/* Secondary CTA */}
          <button
            onClick={secondaryCTA.onClick}
            className="bg-transparent border-2 border-[#B78E3B] hover:bg-[#B78E3B] hover:text-black font-semibold py-2 px-5 rounded-xl transition shadow-xl"
          >
            {secondaryCTA.text}
          </button>
        </div>
      </div>
    </section>
  );
}
