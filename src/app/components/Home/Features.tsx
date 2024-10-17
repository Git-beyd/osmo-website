import React, { useState, useEffect } from 'react';
import { Play, Wifi, Cog, DollarSign, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

interface FeaturesProps {
  id?: string;
}

const testimonials = [
  {
    quote: "Thanks to ExtendaGO's awesome POS, we're able to not only meet but exceed our customer demands and improve the staff workflow. The system has a lot of flexibility and countless options for customization - ExtendaGO is the right partner for us.",
    author: "Lasse på Heden Burgers",
    position: "Owner",
    company: "Sweden"
  },
  {
    quote: "ExtendaGO has revolutionized our operations. The intuitive interface and powerful features have significantly boosted our efficiency and customer satisfaction.",
    author: "Emma Laurent",
    position: "Manager",
    company: "Café Soleil, France"
  },
  {
    quote: "We've seen a remarkable increase in our sales since implementing ExtendaGO. Their responsive support team and regular updates keep us at the forefront of retail technology.",
    author: "Carlos Rodriguez",
    position: "CEO",
    company: "TechMart, Spain"
  }
];


const FeaturesSection: React.FC<FeaturesProps> = ({id}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id={id} className="bg-gradient-to-b from-white via-beyd-tertiary to-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-beyd-indigo mb-16 relative">
          Why choose ExtendaGO?
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-beyd-primary to-beyd-secondary"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <FeatureCard
            icon={<Play className="w-16 h-16 text-beyd-primary" />}
            title="Easy to get started"
            description="With plug & play technology, you'll be ready to take payments and manage your business in no time. Quick to learn and even easier to use, our solutions require little to no training."
          />
          <FeatureCard
            icon={
              <div className="relative">
                <Wifi className="w-16 h-16 text-beyd-primary" />
                <Cog className="w-8 h-8 text-beyd-secondary absolute -bottom-1 -right-1 animate-spin-slow" />
              </div>
            }
            title="Powerful integrations"
            description="With integrations to all major e-commerce platforms, payment providers, and beyond, ExtendaGO point of sale fits right into your existing ecosystem."
          />
          <FeatureCard
            icon={<DollarSign className="w-16 h-16 text-beyd-primary" />}
            title="A real money-saver"
            description="ExtendaGO users save up to 50% on software fees. No upfront setup costs and, with updates for life included, no development costs - just a monthly payment of €39 per checkout/month."
          />
        </div>
      </div>
      <div className="mt-32 relative h-[400px] max-h-[50vh]">
        <Image
          src="/images/burger.jpg"
          alt="Burger restaurant"
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
         <div className="absolute inset-0 bg-gradient-to-r from-beyd-dark-blue/90 to-beyd-primary/90 flex items-center justify-center">
          <div className="bg-white bg-opacity-95 p-8 md:p-12 rounded-3xl max-w-4xl mx-4 shadow-2xl transition-all duration-300 ease-in-out relative">
            <Quote className="absolute top-4 left-4 w-10 h-10 text-beyd-primary opacity-20" />
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8">
                    <p className="text-beyd-dark-blue italic mb-6 text-lg md:text-2xl leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-right">
                      <p className="text-beyd-primary font-semibold text-lg md:text-xl">{testimonial.author}</p>
                      <p className="text-beyd-dark-blue text-sm md:text-base">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-beyd-primary scale-125' : 'bg-beyd-tertiary'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={prevTestimonial} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-beyd-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-beyd-indigo" />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-beyd-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-beyd-indigo" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="mb-6 transform hover:scale-110 transition-transform duration-300 bg-beyd-tertiary p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-beyd-indigo mb-4">{title}</h3>
      <p className="text-beyd-dark-blue leading-relaxed">{description}</p>
    </div>
  );
};

export default FeaturesSection;