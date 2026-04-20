import { useState } from "react";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div id="home" className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-subtle-zoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-4 md:py-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wider md:tracking-widest">
                AGRAWAL PALACE
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-xs lg:text-sm tracking-wide">
                <a
                  href="#home"
                  className="text-white hover:text-[#C8A96A] transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-[#C8A96A] transition-colors duration-300"
                >
                  About Us
                </a>
                <a
                  href="#rooms"
                  className="text-white hover:text-[#C8A96A] transition-colors duration-300"
                >
                  Rooms
                </a>
                <a
                  href="#garden"
                  className="text-white hover:text-[#C8A96A] transition-colors duration-300"
                >
                  Garden
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-[#C8A96A] transition-colors duration-300"
                >
                  Contact
                </a>
              </div>

              {/* Reservation Button */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="hidden lg:block border border-white/50 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-md hover:bg-white hover:text-black transition-all duration-300 text-xs lg:text-sm tracking-wide"
              >
                Reservation
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white focus:outline-none"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-6 pb-4 space-y-4 text-center animate-fade-in">
                <a
                  href="#home"
                  className="block text-white active:text-[#C8A96A] transition-colors text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-white active:text-[#C8A96A] transition-colors text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#rooms"
                  className="block text-white active:text-[#C8A96A] transition-colors text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rooms
                </a>
                <a
                  href="#garden"
                  className="block text-white active:text-[#C8A96A] transition-colors text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Garden
                </a>
                <a
                  href="#contact"
                  className="block text-white active:text-[#C8A96A] transition-colors text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <button
                  onClick={() => {
                    setIsBookingOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="border border-white/50 text-white px-6 py-2.5 rounded-md active:bg-white active:text-black transition-all duration-300 w-full max-w-xs mx-auto text-sm"
                >
                  Reservation
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-4xl animate-fade-in-up pt-16 sm:pt-20 md:pt-0">
            {/* Star Rating */}
            <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="text-[#C8A96A] text-base sm:text-lg md:text-xl"
                >
                  ★
                </span>
              ))}
              <span className="text-[#C8A96A] ml-1 sm:ml-2 text-xs sm:text-sm">
                (5.0)
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-[0.6rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-light px-4">
              ★ Modern Luxury and Timeless Living
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-serif leading-tight mb-6 sm:mb-8 drop-shadow-2xl px-4">
              Welcome to Our Luxurious
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Hotel & Resort
            </h1>

            {/* CTA Button */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#C8A96A] text-black px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-md text-xs sm:text-sm tracking-wider sm:tracking-widest font-medium hover:bg-[#B89858] hover:scale-105 transition-all duration-300 shadow-xl"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Hero;
