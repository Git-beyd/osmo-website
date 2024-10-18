import React, { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

interface PricingProps {
  id?: string;
}

interface PricingPlan {
  name: string;
  price: { monthly: string; yearly: string };
  description: string;
  features: string[];
  isRecommended?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: { monthly: "$29", yearly: "$290" },
    description: "Essential features for small businesses",
    features: [
      "Single POS terminal",
      "Basic inventory management",
      "24/7 customer support",
      "Monthly sales reports"
    ]
  },
  {
    name: "Growth",
    price: { monthly: "$79", yearly: "$790" },
    description: "Advanced tools for expanding businesses",
    features: [
      "Up to 3 POS terminals",
      "Advanced inventory management",
      "Customer loyalty program",
      "Real-time analytics dashboard",
      "Integration with e-commerce platforms"
    ],
    isRecommended: true
  },
  {
    name: "Enterprise",
    price: { monthly: "$149", yearly: "$1490" },
    description: "Full-scale solution for large operations",
    features: [
      "Unlimited POS terminals",
      "Advanced inventory and supply chain management",
      "Custom reporting and analytics",
      "Multi-location support",
      "API access for custom integrations",
      "Dedicated account manager"
    ]
  }
];

const PricingSection: React.FC<PricingProps> = ({id}) => {
  const [isYearly, setIsYearly] = useState(false);

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const yOffset = -80; 
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <section id={id} className="bg-gradient-to-b from-white to-beyd-tertiary py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-beyd-indigo mb-4">Pricing Plans</h2>
        <p className="text-xl md:text-2xl text-center text-beyd-dark-blue mb-12">Choose the perfect plan for your business needs</p>
        
        <div className="flex justify-center mb-12">
          <div className="bg-beyd-tertiary p-1 rounded-full shadow-lg">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!isYearly ? 'bg-beyd-primary text-white' : 'text-beyd-dark-blue hover:text-beyd-primary'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isYearly ? 'bg-beyd-primary text-white' : 'text-beyd-dark-blue hover:text-beyd-primary'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${plan.isRecommended ? 'ring-4 ring-beyd-secondary ring-opacity-50' : ''}`}>
              {plan.isRecommended && (
                <div className="bg-beyd-secondary text-beyd-dark py-2 px-4 text-center font-semibold">
                  <Star className="w-5 h-5 inline-block mr-1" fill="currentColor" /> Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-beyd-indigo mb-4">{plan.name}</h3>
                <p className="text-5xl md:text-6xl font-bold text-beyd-primary mb-4">
                  {isYearly ? plan.price.yearly : plan.price.monthly}
                  <span className="text-base font-normal text-beyd-dark-blue">/{isYearly ? 'year' : 'month'}</span>
                </p>
                <p className="text-beyd-dark-blue mb-8">{plan.description}</p>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-6 h-6 text-beyd-primary mr-2 flex-shrink-0" />
                      <span className="text-beyd-dark-blue">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    plan.isRecommended 
                      ? 'bg-beyd-primary text-white hover:bg-beyd-secondary hover:text-beyd-dark shadow-lg hover:shadow-xl'
                      : 'bg-beyd-tertiary text-beyd-dark hover:bg-beyd-primary hover:text-white'
                  }`}
                >
                  Get Started <Zap className="w-5 h-5 inline-block ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;