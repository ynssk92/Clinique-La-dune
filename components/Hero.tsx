
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/1600/900?random=1')" }}></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight shadow-text">
          La Dune Clinique Dentaire
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light max-w-2xl mx-auto">
          Your healthy, beautiful smile is our passion. Experience gentle and comprehensive dental care.
        </p>
        <a 
          href="#contact" 
          className="bg-[#00b2a9] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4ed4d4] transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Book An Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;
