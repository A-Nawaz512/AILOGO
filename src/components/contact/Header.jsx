import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url('https://www.zeiss.com/content/dam/pno/images/_home/_content/contact/_stage/zeiss-photonics-and-optics-contact-stage.jpg/_jcr_content/renditions/original.image_file.1920.640.file/zeiss-photonics-and-optics-contact-stage.jpg')",
        }}
      ></div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6F4918]/10 via-[#E2CF7D]/10 to-[#6F4918]/10"></div>

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* Header Title */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            data-aos="fade-up"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E2CF7D] via-[#B89C5A] to-[#E2CF7D]">
              Contact ALLOGO
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
          >
            Connect with Algeria's all in one mobility and service platform
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* Launch Platform */}
            <button
              className="group relative px-5 py-2 bg-gradient-to-r from-[#6F4918] to-[#8B5E2A] rounded-full font-semibold text-white hover:from-[#8B5E2A] hover:to-[#6F4918] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E2CF7D]/20"
              aria-label="Launch Platform"
              data-aos="zoom-in"
            >
              <span className="relative z-10">Launch Platform</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E2CF7D] to-[#B89C5A] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            {/* Business Inquiry */}
            <button
              className="group px-5 py-2 border-2 border-[#E2CF7D] rounded-full font-semibold text-[#E2CF7D] hover:bg-[#E2CF7D]/10 hover:border-[#E2CF7D]/80 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Business Inquiry"
              data-aos="zoom-in"
            >
              <span className="flex items-center gap-2">
                Business Inquiry
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
