import React, { useState } from 'react';
import { X } from 'lucide-react';

const PromoBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-beyd-primary to-beyd-secondary py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-sm md:text-base font-medium text-beyd-dark">
          🎉 ExtendaGO Refer & Reward: Earn up to €300! <a href="#" className="underline font-bold hover:text-white transition-colors duration-200">Join Now</a>
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-beyd-dark hover:text-white transition-colors duration-200"
          aria-label="Close promotion"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default PromoBar;