
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">La Dune Clinique Dentaire</h3>
            <p className="text-gray-400">Your path to a perfect smile.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#services" className="hover:text-[#4ed4d4] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#4ed4d4] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#4ed4d4] transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} La Dune Clinique Dentaire. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
