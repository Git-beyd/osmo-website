import React from 'react';
import Image from 'next/image';
import { X, Check, ChevronRight } from 'lucide-react';

const SectorDetailModal = ({ sector, onClose }:any) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="min-h-screen">
        {/* Header */}
        <div className="relative h-[40vh]">
          <Image
            src={sector.image}
            alt={sector.name}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-beyd-primary/80"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{sector.name}</h1>
            <p className="text-xl md:text-2xl">{sector.description}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors duration-200"
          >
            <X className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-beyd-indigo mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sector?.features?.map((feature:any, index:any) => (
                <div key={index} className="bg-beyd-tertiary/10 p-6 rounded-xl transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-beyd-primary text-white p-2 rounded-full mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-beyd-indigo">{feature.name}</h3>
                  </div>
                  <p className="text-beyd-dark-blue">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-beyd-indigo mb-8">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sector?.benefits?.map((benefit:any, index:any) => (
                <div key={index} className="flex items-start">
                  <div className="bg-beyd-primary text-white p-2 rounded-full mr-4 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-beyd-indigo mb-2">{benefit.title}</h3>
                    <p className="text-beyd-dark-blue">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-beyd-indigo mb-8">Impact on Your Business</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {sector?.stats?.map((stat:any, index:any) => (
                <div key={index} className="bg-beyd-tertiary/10 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-beyd-primary mb-2">{stat.value}</div>
                  <p className="text-beyd-dark-blue">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-16 bg-beyd-primary text-white p-8 rounded-xl relative">
            <div className="absolute top-4 left-4 text-6xl opacity-20">"</div>
            <p className="text-xl italic mb-4 relative z-10">{sector?.testimonial?.quote}</p>
            <p className="font-semibold">{sector?.testimonial?.author}, {sector?.testimonial?.position}</p>
          </div>

          {/* Case Study */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-beyd-indigo mb-8">Case Study: {sector?.caseStudy?.title}</h2>
            <div className="bg-beyd-tertiary/10 p-8 rounded-xl">
              <ul className="space-y-4">
                {sector?.caseStudy?.highlights.map((highlight:any, index:any) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-beyd-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-beyd-dark-blue">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="bg-beyd-primary text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-beyd-secondary transition-all duration-300 inline-flex items-center">
              Get Started with ExtendaGO
              <ChevronRight className="ml-2 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorDetailModal;