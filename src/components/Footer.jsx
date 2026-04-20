const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light tracking-widest mb-6">
              AGRAWAL PALACE
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience luxury and elegance in the heart of the city. Your
              comfort is our priority.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-gray-300">
              Discover
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#rooms"
                  className="text-gray-400 hover:text-[#C8A96A] transition-colors"
                >
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a
                  href="#dining"
                  className="text-gray-400 hover:text-[#C8A96A] transition-colors"
                >
                  Dining
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-gray-400 hover:text-[#C8A96A] transition-colors"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-gray-300">
              Experiences
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#garden"
                  className="text-gray-400 hover:text-[#C8A96A] transition-colors"
                >
                  Garden Tours
                </a>
              </li>
              <li>
                <a
                  href="#concierge"
                  className="text-gray-400 hover:text-[#C8A96A] transition-colors"
                >
                  Concierge Services
                </a>
              </li>
              <li>
                <a
                  href="#offers"
                  className="text-gray-400 hover:text-[#C8A96A] transition-colors"
                >
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-gray-300">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Near Railway Station Ashoknagar</li>
              <li className="pt-2">
                <a
                  href="tel:+919755598222"
                  className="hover:text-[#C8A96A] transition-colors"
                >
                  +91 9755598222
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Agrawal Palace. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-gray-500 hover:text-[#C8A96A] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-500 hover:text-[#C8A96A] text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
