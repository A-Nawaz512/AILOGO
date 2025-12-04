// src/components/ModernNavbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCaretDown, FaCaretUp, FaUserCircle, FaCoins, FaCar, FaMotorcycle, FaBox, FaWrench, FaBuilding } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

const Navbar = () => {
  // Set user to null if not logged in
  const user = true; // or { name: "John Doe", avatar: "/user-avatar.jpg" }

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [providerOpenDesktop, setProviderOpenDesktop] = useState(false);
  const [providerOpenMobile, setProviderOpenMobile] = useState(false);
  const [walletOpenDesktop, setWalletOpenDesktop] = useState(false);
  const [walletOpenMobile, setWalletOpenMobile] = useState(false);
  const [profileOpenDesktop, setProfileOpenDesktop] = useState(false);
  const [profileOpenMobile, setProfileOpenMobile] = useState(false);
  const [langOpenDesktop, setLangOpenDesktop] = useState(false);
  const [langOpenMobile, setLangOpenMobile] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleServicesDesktop = () => setServicesOpenDesktop(!servicesOpenDesktop);
  const toggleServicesMobile = () => setServicesOpenMobile(!servicesOpenMobile);
  const toggleProviderDesktop = () => setProviderOpenDesktop(!providerOpenDesktop);
  const toggleProviderMobile = () => setProviderOpenMobile(!providerOpenMobile);
  const toggleWalletDesktop = () => setWalletOpenDesktop(!walletOpenDesktop);
  const toggleWalletMobile = () => setWalletOpenMobile(!walletOpenMobile);
  const toggleProfileDesktop = () => setProfileOpenDesktop(!profileOpenDesktop);
  const toggleProfileMobile = () => setProfileOpenMobile(!profileOpenMobile);
  const toggleLangDesktop = () => setLangOpenDesktop(!langOpenDesktop);
  const toggleLangMobile = () => setLangOpenMobile(!langOpenMobile);

  const servicesRef = useRef();
  const providerRef = useRef();
  const walletRef = useRef();
  const profileRef = useRef();
  const langRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) setServicesOpenDesktop(false);
      if (providerRef.current && !providerRef.current.contains(event.target)) setProviderOpenDesktop(false);
      if (walletRef.current && !walletRef.current.contains(event.target)) setWalletOpenDesktop(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setProfileOpenDesktop(false);
      if (langRef.current && !langRef.current.contains(event.target)) setLangOpenDesktop(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const servicesList = [
    { label: "Rides / Drivers", path: "/services/rides", icon: <FaCar size={16} /> },
    { label: "Deliveries", path: "/services/deliveries", icon: <FaBox size={16} /> },
    { label: "Roadside Assistance", path: "/services/roadside", icon: <FaWrench size={16} /> },
    { label: "Vehicle Rental", path: "/services/rentals", icon: <FaMotorcycle size={16} /> },
    { label: "Apartment Rental", path: "/services/apartments", icon: <FaBuilding size={16} /> },
  ];

  const providersList = [
    { label: "Become Driver", path: "/provider/driver" },
    { label: "Become Delivery Provider", path: "/provider/delivery" },
    { label: "Roadside Provider", path: "/provider/roadside" },
    { label: "List Vehicle", path: "/provider/list-vehicle" },
    { label: "List Apartment", path: "/provider/list-apartment" },
  ];

  const walletList = [
    { label: "My Credit", path: "/wallet/credit" },
    { label: "My Points", path: "/wallet/points" },
    { label: "Transfer Points", path: "/wallet/transfer" },
  ];

  const profileList = [
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" },
    { label: "Logout", path: "/logout" },
  ];

  const languages = ["English", "Français", "العربية"];

  const navButtonStyle = "px-4 py-2 rounded transition-all duration-200 hover:bg-[#6F4918] hover:scale-105";
  const dropdownItemStyle = "block px-4 py-2 w-[95%] mx-auto rounded flex items-center gap-2 transition-all duration-200 hover:bg-[#6F4918]";

  return (
    <nav className="bg-black text-gray-100 py-3 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* BRAND */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/ailogo.png" alt="Logo" className="h-10 lg:h-12 w-auto bg-black-400/20 shadow-sm shadow-[#755023] rounded-lg" />
        </Link>

        {/* CENTER MENU */}
        <div className="hidden md:flex space-x-4 justify-center flex-1">
          <Link to="/" className={navButtonStyle}>Home</Link>
          <Link to="/about" className={navButtonStyle}>About</Link>

          {/* SERVICES DROPDOWN */}
          <div className="relative" ref={servicesRef}>
            <button onClick={toggleServicesDesktop} className={navButtonStyle + " flex items-center gap-1"}>
              Services {servicesOpenDesktop ? <FaCaretUp /> : <FaCaretDown />}
            </button>
            {servicesOpenDesktop && (
              <div className="absolute top-full left-0 py-3 mt-2 w-64 bg-black border border-[#202020] rounded-lg shadow-lg animate-fadeIn">
                {servicesList.map((item) => (
                  <Link key={item.path} to={item.path} className={dropdownItemStyle}>{item.icon} {item.label}</Link>
                ))}
              </div>
            )}
          </div>

          {/* PROVIDER DROPDOWN */}
          <div className="relative" ref={providerRef}>
            <button onClick={toggleProviderDesktop} className={navButtonStyle + " flex items-center gap-1"}>
              Providers {providerOpenDesktop ? <FaCaretUp /> : <FaCaretDown />}
            </button>
            {providerOpenDesktop && (
              <div className="absolute top-full left-0 py-3 mt-2 w-64 bg-black border border-[#202020] rounded-lg shadow-lg animate-fadeIn">
                {providersList.map((item) => (
                  <Link key={item.path} to={item.path} className={dropdownItemStyle}>{item.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className={navButtonStyle}>Contact</Link>
        </div>

        {/* LANGUAGE */}
        <div className="relative px-2 hidden md:flex" ref={langRef}>
          <button onClick={toggleLangDesktop} className="flex items-center gap-2 px-4 py-2 rounded bg-[#1a1a1a] hover:bg-[#6F4918] transition-all duration-200">
            <IoLanguageSharp size={18} /> {selectedLang} {langOpenDesktop ? <FaCaretUp /> : <FaCaretDown />}
          </button>
          {langOpenDesktop && (
            <div className="absolute right-0 py-2 mt-10 w-30 bg-black border border-[#202020] rounded-lg shadow-lg animate-fadeIn">
              {languages.map((lang) => (
                <button key={lang} onClick={() => { setSelectedLang(lang); setLangOpenDesktop(false); }} className={dropdownItemStyle}>{lang}</button>
              ))}
            </div>
          )}
        </div>
        {/* RIGHT MENU */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              {/* WALLET */}
              <div className="relative" ref={walletRef}>
                <button onClick={toggleWalletDesktop} className="flex items-center gap-1 px-4 py-2 rounded bg-[#1a1a1a] hover:bg-[#6F4918] transition-all duration-200">
                  <FaCoins size={16} className="text-yellow-400" /> Wallet {walletOpenDesktop ? <FaCaretUp /> : <FaCaretDown />}
                </button>
                {walletOpenDesktop && (
                  <div className="absolute right-0 py-3 mt-2 w-56 bg-black border border-[#202020] rounded-lg shadow-lg animate-fadeIn">
                    {walletList.map((item) => (
                      <Link key={item.path} to={item.path} className={dropdownItemStyle}>{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>



              {/* PROFILE */}
              <div className="relative" ref={profileRef}>
                <button onClick={toggleProfileDesktop} className="flex items-center gap-2">
                  <FaUserCircle size={32} className="text-gray-100 hover:text-yellow-400 transition-all duration-200" />
                  {profileOpenDesktop ? <FaCaretUp /> : <FaCaretDown />}
                </button>
                {profileOpenDesktop && (
                  <div className="absolute right-0 py-3 mt-2 w-48 bg-black border border-[#202020] rounded-lg shadow-lg animate-fadeIn">
                    {profileList.map((item) => (
                      <Link key={item.path} to={item.path} className={dropdownItemStyle}>{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>

              <Link to="/signup" className="px-5 py-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105">Sign Up</Link>
              <Link to="/login" className="px-5 py-2 border-2 border-[#6F4918] text-white rounded-lg hover:bg-[#6F4918] transition-all duration-200 hover:scale-105">Login</Link>
            </>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={toggleMobile} className="md:hidden text-gray-100 hover:text-[#FFD700] transition-all duration-200">
          {mobileOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-[#202020] py-3 space-y-2 animate-fadeIn">
          {/* Main Links */}
          <Link to="/" className={navButtonStyle + " block px-6 py-2"}>Home</Link>
          <Link to="/about" className={navButtonStyle + " block px-6 py-2"}>About</Link>

          {/* Services */}
          <button
            onClick={toggleServicesMobile}
            className={navButtonStyle + " w-full px-6 py-2 flex justify-between items-center"}
          >
            Services <span>{servicesOpenMobile ? "▲" : "▼"}</span>
          </button>
          {servicesOpenMobile && (
            <div className="ml-4 space-y-2">
              {servicesList.map((item) => (
                <Link key={item.path} to={item.path} className={dropdownItemStyle + " block px-6 py-2"}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Providers */}
          <button
            onClick={toggleProviderMobile}
            className={navButtonStyle + " w-full px-6 py-2 flex justify-between items-center"}
          >
            Providers <span>{providerOpenMobile ? "▲" : "▼"}</span>
          </button>
          {providerOpenMobile && (
            <div className="ml-4 space-y-2">
              {providersList.map((item) => (
                <Link key={item.path} to={item.path} className={dropdownItemStyle + " block px-6 py-2"}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/contact" className={navButtonStyle + " block px-6 py-2"}>Contact</Link>

          {/* Wallet */}
          {user && (
            <>
              <button
                onClick={toggleWalletMobile}
                className={navButtonStyle + " w-full px-6 py-2 flex justify-between items-center"}
              >
                Wallet <span>{walletOpenMobile ? "▲" : "▼"}</span>
              </button>
              {walletOpenMobile && (
                <div className="ml-4 space-y-2">
                  {walletList.map((item) => (
                    <Link key={item.path} to={item.path} className={dropdownItemStyle + " block px-6 py-2"}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Profile */}
          {user && (
            <>
              <button
                onClick={toggleProfileMobile}
                className={navButtonStyle + " w-full px-6 py-2 flex justify-between items-center"}
              >
                Profile <span>{profileOpenMobile ? "▲" : "▼"}</span>
              </button>
              {profileOpenMobile && (
                <div className="ml-4 space-y-2">
                  {profileList.map((item) => (
                    <Link key={item.path} to={item.path} className={dropdownItemStyle + " block px-6 py-2"}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Language */}
          <button
            onClick={toggleLangMobile}
            className={navButtonStyle + " w-full px-6 py-2 flex justify-between items-center"}
          >
            Language <span>{langOpenMobile ? "▲" : "▼"}</span>
          </button>
          {langOpenMobile && (
            <div className="ml-4 space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLang(lang);
                    setLangOpenMobile(false);
                  }}
                  className={dropdownItemStyle + " block px-6 py-2 text-left"}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}

          {/* Auth Buttons for non-logged in users */}
          {!user && (
            <div className="px-6 space-y-3 pt-3">
              <Link
                to="/signup"
                className="block text-center px-5 py-2 bg-linear-to-r from-[#6F4918] to-[#E2CF7D] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="block text-center px-5 py-2 border-2 border-[#6F4918] text-white rounded-lg hover:bg-[#6F4918] transition-all duration-200 hover:scale-105"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}

    </nav>
  );
};

export default Navbar;
