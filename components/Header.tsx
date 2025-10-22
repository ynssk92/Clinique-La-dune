import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="https://storage.googleapis.com/static.aistudio.google.com/studio/pro_studio/24.10.1.0/m/prompts/810629731.png" alt="La Dune Clinique Dentaire Logo" className="h-12" />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[#2c3e50] hover:text-[#00b2a9] transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-[#00b2a9] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#4ed4d4] transition-all duration-300 shadow-sm">
            Book Appointment
          </a>
        </nav>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#2c3e50]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 px-6 pb-6 pt-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-[#2c3e50] hover:text-[#00b2a9] transition-colors duration-300 font-medium py-2">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center bg-[#00b2a9] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#4ed4d4] transition-all duration-300 shadow-sm">
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;