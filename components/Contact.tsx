
import React from 'react';
import { PhoneIcon, WhatsAppIcon, LocationIcon } from './IconComponents';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50]">Contact Us & Book an Appointment</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">We're here to help. Reach out to us or fill the form below.</p>
          <div className="mt-4 w-24 h-1 bg-[#00b2a9] mx-auto rounded"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 bg-white p-8 rounded-xl shadow-2xl">
          {/* Left Side: Info */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold text-[#2c3e50] mb-6">Clinic Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#4ed4d4]/20 p-3 rounded-full text-[#00b2a9]"><LocationIcon /></div>
                <div>
                  <h4 className="font-semibold">Our Address</h4>
                  <p className="text-gray-600">123 Dental St, Smile City, Morocco</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#4ed4d4]/20 p-3 rounded-full text-[#00b2a9]"><PhoneIcon /></div>
                <div>
                  <h4 className="font-semibold">Phone Number</h4>
                  <a href="tel:0529939999" className="text-gray-600 hover:text-[#00b2a9]">0529939999</a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a href="https://wa.me/212529939999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-all duration-300 shadow-md">
                <WhatsAppIcon />
                <span className="ml-2">Chat on WhatsApp</span>
              </a>
            </div>
            <div className="mt-8 h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.709325854884!2d-7.619017684795908!3d33.5868959807353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2ed9c560f7b%3A0x48a0f0a4f5f5f5f!2sCasablanca!5e0!3m2!1sen!2sma!4v1622037300000" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-[#2c3e50] mb-6">Online Appointment Form</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#00b2a9] focus:border-[#00b2a9]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#00b2a9] focus:border-[#00b2a9]" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#00b2a9] focus:border-[#00b2a9]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#00b2a9] focus:border-[#00b2a9]"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-[#00b2a9] text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-[#4ed4d4] transition-all duration-300 shadow-lg">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
