'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu as MenuIcon, X, ChevronUp } from 'lucide-react';
import { scrollToSection } from '@/lib/helper';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-beyd-primary hover:bg-beyd-secondary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [clickedSection, setClickedSection] = useState('');

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'features', label: 'Features' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'sectors', label: 'Sectors' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (clickedSection) return; 
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentSection = '';
      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = item.id;
        } else {
          break;
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, clickedSection]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      setClickedSection(id);
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  const isActive = (id: string) => clickedSection === id || (clickedSection === '' && activeSection === id);

  const handleSolutions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <>
      <nav className="bg-beyd-dark shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#hero" onClick={(e) => handleClick(e, 'hero')} className="flex items-center cursor-pointer">
              <Image src="/images/logo.png" alt="ExtendaGO Logo" width={120} height={32} />
            </a>
            
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                    ${isActive(item.id) 
                      ? 'text-beyd-primary' 
                      : 'text-beyd-tertiary hover:text-beyd-primary'
                    }
                  `}
                >
                  {item.label}
                  {isActive(item.id) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-beyd-primary rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
            
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-beyd-tertiary hover:text-beyd-primary focus:outline-none focus:text-beyd-primary"
              >
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
            
            <button className="hidden lg:block bg-beyd-primary text-beyd-dark px-6 py-2 rounded-full text-sm font-semibold hover:bg-beyd-secondary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
             <a href="#contact"
              onClick={handleSolutions}> Book a demo</a>
            </button>
          </div>
        </div>

        <div 
          className={`lg:hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                  ${isActive(item.id)
                    ? 'text-beyd-primary bg-beyd-dark-blue'
                    : 'text-beyd-tertiary hover:text-beyd-primary hover:bg-beyd-dark-blue'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-beyd-primary text-beyd-dark px-6 py-2 rounded-full text-sm font-semibold hover:bg-beyd-secondary transition-all duration-300 shadow-md hover:shadow-lg">
              Book a demo
            </button>
          </div>
        </div>
      </nav>
      <ScrollToTopButton />
    </>
  );
};

export default Menu;