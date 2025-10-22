
import React, { useState, useEffect, useCallback } from 'react';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from './IconComponents';

const testimonialsData = [
  {
    quote: "The best dental experience I've ever had. The staff is incredibly friendly and professional. I felt completely at ease from start to finish. My smile has never looked better!",
    name: 'Amina K.',
    image: 'https://picsum.photos/100/100?random=3'
  },
  {
    quote: "I was very nervous about getting implants, but the team at La Dune made the process smooth and painless. Their attention to detail and care is unmatched. Highly recommended!",
    name: 'Youssef B.',
    image: 'https://picsum.photos/100/100?random=4'
  },
  {
    quote: "A truly modern and clean clinic. The technology they use is top-notch, and the results of my cosmetic treatment exceeded all my expectations. Thank you, La Dune!",
    name: 'Fatima Z.',
    image: 'https://picsum.photos/100/100?random=5'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50]">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Real stories from our happy patients.</p>
          <div className="mt-4 w-24 h-1 bg-[#00b2a9] mx-auto rounded"></div>
        </div>

        <div className="relative max-w-3xl mx-auto bg-gray-50 p-8 md:p-12 rounded-lg shadow-xl">
          <div className="absolute top-0 left-0 -mt-6 -ml-6 text-[#4ed4d4]/30">
            <QuoteIcon />
          </div>
          <div className="overflow-hidden relative h-48 md:h-32">
             {testimonialsData.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute w-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <p className="text-center text-gray-700 italic text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-[#00b2a9]" />
                    <span className="font-bold text-lg text-[#2c3e50]">{testimonial.name}</span>
                  </div>
                </div>
             ))}
          </div>

          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#00b2a9] text-white p-3 rounded-full hover:bg-[#4ed4d4] transition duration-300 focus:outline-none shadow-lg">
            <ChevronLeftIcon />
          </button>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#00b2a9] text-white p-3 rounded-full hover:bg-[#4ed4d4] transition duration-300 focus:outline-none shadow-lg">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
