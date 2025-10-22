
import React from 'react';
import { GeneralDentistryIcon, CosmeticDentistryIcon, OrthodonticsIcon, ImplantsIcon } from './IconComponents';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
    <div className="bg-[#00b2a9] text-white p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-[#2c3e50]">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);


const Services: React.FC = () => {
  const services = [
    {
      icon: <GeneralDentistryIcon />,
      title: 'General Dentistry',
      description: 'Comprehensive care for your oral health, from routine cleanings and check-ups to fillings and root canals.',
    },
    {
      icon: <CosmeticDentistryIcon />,
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our cosmetic services including teeth whitening, veneers, and bonding.',
    },
    {
      icon: <OrthodonticsIcon />,
      title: 'Orthodontics',
      description: 'Straighten your teeth and improve your bite with modern orthodontic solutions like braces and clear aligners.',
    },
    {
      icon: <ImplantsIcon />,
      title: 'Dental Implants',
      description: 'A permanent, natural-looking solution to replace missing teeth and restore your smile\'s function and beauty.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50]">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">We offer a wide range of dental services to meet all your needs.</p>
          <div className="mt-4 w-24 h-1 bg-[#00b2a9] mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
