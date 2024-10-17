import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { scrollToSection } from '@/lib/helper';

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {


  const handleStartFreeTrial = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('contact');
  };


  const handleSolutions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('solutions');
  };

  
  return (
    <div id={id} className="bg-gradient-to-br from-beyd-primary via-beyd-tertiary to-beyd-secondary pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-beyd-dark">
              Point of Sale & Payments platform
            </h1>
            <p className="text-xl mb-8 max-w-lg text-beyd-dark-blue">
              Boost your business with our all-in-one Point of Sale (POS) software. Customisable, customer-first and cost-effective.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact"
              onClick={handleStartFreeTrial} className="bg-beyd-secondary text-beyd-dark px-8 py-3 rounded-full text-lg font-semibold hover:bg-beyd-primary hover:text-white transition-colors duration-200 text-center shadow-md hover:shadow-lg">
                Start free trial
              </a>
              <a href="#solutions"
                onClick={handleSolutions} className="bg-beyd-dark text-beyd-tertiary px-8 py-3 rounded-full text-lg font-semibold hover:bg-beyd-indigo hover:text-white transition-colors duration-200 flex items-center justify-center shadow-md hover:shadow-lg">
                View solutions <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/pos1.jpg"
                alt="POS Devices"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-beyd-secondary opacity-20 rounded-full filter blur-3xl z-0"></div>
          </div>
        </div>
        <p className="text-center text-sm mt-12 opacity-75 max-w-2xl mx-auto text-beyd-dark-blue">
          *Technology for exclusive use on iOS devices, no upgrade costs, data storage in the cloud and offline POS functionality.
        </p>
      </div>
    </div>
  );
};

export default Hero;