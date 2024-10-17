import React from 'react';
import Image from 'next/image';
import { ChevronRight, ShoppingBag, Clock, Zap } from 'lucide-react';

interface RetailerProps {
  id?: string;
}

export default function RetailerSection({id}: RetailerProps) {
  return (
    <section id={id} className="bg-gradient-to-t from-beyd-dark-blue to-beyd-indigo py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <Image
                src="/images/women.jpg"
                alt="Woman with shopping bags"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-beyd-secondary text-beyd-dark-blue p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">Trusted by 10,000+ retailers</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <h2 className="text-4xl font-bold text-beyd-indigo mb-6 leading-tight">
                Empowering retailers to GO faster with cutting-edge technology
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                At ExtendaGO, we combine decades of expertise with our passion for innovation. Our next-generation point of sale and backoffice solutions empower retail and hospitality businesses of all sizes to thrive in the digital age.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: <ShoppingBag className="w-8 h-8 text-beyd-primary" />, text: "Streamlined Operations" },
                  { icon: <Clock className="w-8 h-8 text-beyd-primary" />, text: "Time-Saving Solutions" },
                  { icon: <Zap className="w-8 h-8 text-beyd-primary" />, text: "Increased Efficiency" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-beyd-tertiary/20 p-3 rounded-lg">
                    {item.icon}
                    <span className="text-beyd-dark-blue font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <button 
                className="bg-beyd-primary text-white px-8 py-3 rounded-full hover:bg-beyd-secondary hover:text-beyd-dark-blue flex items-center text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Discover More <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}