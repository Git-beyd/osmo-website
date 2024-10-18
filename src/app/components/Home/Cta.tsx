import React from 'react';

interface CtaProps {
  id?: string;
}

const CTA: React.FC<CtaProps> = ({id}) => {
  return (
    <div id={id} className="bg-gradient-to-r from-beyd-indigo to-beyd-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to revolutionize your retail experience?
            </h2>
            <p className="text-xl text-beyd-tertiary">
              Join thousands of businesses that have transformed their operations with ExtendaGO.
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right">
            <a 
              href="#" 
              className="inline-block bg-white text-beyd-indigo px-8 py-4 rounded-full text-lg font-semibold hover:bg-beyd-secondary hover:text-beyd-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;