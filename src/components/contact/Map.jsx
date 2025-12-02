import React, { useEffect } from 'react';
import { RiMapPinLine } from 'react-icons/ri';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

function Map() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2" data-aos="fade-up">
            Find Us on the <span className="text-[#bfa842]">Map</span>
          </h3>
          <p className="text-gray-900" data-aos="fade-up" data-aos-delay="100">
            Our services cover all major cities across Algeria
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6F4918]/20 to-[#E2CF7D]/10 rounded-full border border-[#E2CF7D]/20">
          <RiMapPinLine className="text-[#eacb43]" />
          <span className="text-sm font-medium text-[#b79c24]">3D View Available</span>
        </div>
      </div>

      {/* Map Container with 3D effect */}
      <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black h-[400px]" data-aos="fade-up">
        {/* Simulated 3D Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(to right, #E2CF7D 1px, transparent 1px),
              linear-gradient(to bottom, #E2CF7D 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* City markers - simulating AlLOGO's multi-service coverage */}
          {[
            { name: 'Algiers', x: '50%', y: '40%', type: 'hub' },
            { name: 'Oran', x: '30%', y: '50%', type: 'service' },
            { name: 'Constantine', x: '70%', y: '45%', type: 'service' },
            { name: 'Annaba', x: '80%', y: '60%', type: 'service' },
            { name: 'Tlemcen', x: '20%', y: '55%', type: 'service' },
          ].map((city, index) => (
            <div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${city.type === 'hub' ? 'w-6 h-6' : 'w-4 h-4'}`}
              style={{ left: city.x, top: city.y }}
            >
              <div className={`absolute inset-0 rounded-full ${city.type === 'hub' ? 'bg-[#E2CF7D] animate-pulse' : 'bg-[#6F4918]'} ${city.type === 'hub' ? 'shadow-lg shadow-[#E2CF7D]/30' : ''}`}></div>
              {city.type === 'hub' && (
                <div className="absolute inset-0 rounded-full border-2 border-[#E2CF7D]/50 animate-ping"></div>
              )}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white bg-black/50 px-2 py-1 rounded">
                {city.name}
              </div>
            </div>
          ))}
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="50%" y1="40%" x2="30%" y2="50%" stroke="#6F4918" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
            <line x1="50%" y1="40%" x2="70%" y2="45%" stroke="#6F4918" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
            <line x1="50%" y1="40%" x2="80%" y2="60%" stroke="#6F4918" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
            <line x1="50%" y1="40%" x2="20%" y2="55%" stroke="#6F4918" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
          </svg>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors transform hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors transform hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
            </svg>
          </button>
          <button className="p-2 bg-gradient-to-r from-[#6F4918] to-[#8B5E2A] backdrop-blur-sm rounded-lg text-white hover:opacity-90 transition-opacity transform hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
        </div>

        {/* Legend */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <h4 className="text-sm font-semibold text-white mb-2">Service Coverage</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E2CF7D]"></div>
              <span className="text-xs text-gray-300">Main Hub</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#6F4918]"></div>
              <span className="text-xs text-gray-300">Service Points</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-900">
        Real-time 3D map visualization powered by MapLibre  Showing live vehicle, rental, and service availability
      </div>
    </div>
  );
}

export default Map;
