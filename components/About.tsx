
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img 
              src="https://picsum.photos/600/600?random=2" 
              alt="Dr. Jean Dupont" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">Meet Our Expert Dentist</h2>
            <div className="mb-6 w-24 h-1 bg-[#00b2a9] rounded"></div>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              With over 15 years of experience, our lead dentist is dedicated to providing the highest standard of dental care. A graduate of the prestigious University of Dental Medicine, they continually pursue advanced training in the latest dental technologies and techniques.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our philosophy is centered on patient comfort and personalized care. We believe in building trusting relationships and creating treatment plans that are tailored to each individual's unique needs and goals. Your health and comfort are our top priorities.
            </p>
            <a 
              href="#contact" 
              className="bg-[#00b2a9] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4ed4d4] transition-all duration-300 shadow-md"
            >
              Learn More & Book A Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
