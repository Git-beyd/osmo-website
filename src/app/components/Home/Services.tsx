'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { scrollToSection } from '@/lib/helper'

const partnerLogos = [
  { src: '/logo1.svg', alt: 'Logo 1' },
  { src: '/logo-haribo.svg', alt: 'Haribo' },
  { src: '/logo-cutters.svg', alt: 'Cutters' },
  { src: '/logo-sj.svg', alt: 'SJ' },
  { src: '/logo5.svg', alt: 'Logo 5' },
]

interface SectionProps {
  id?: string;
}

export default function Section({id}: SectionProps) {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextLogo = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length)
  }

  const prevLogo = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex - 1 + partnerLogos.length) % partnerLogos.length)
  }

  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div id={id} className="bg-gradient-to-b from-white to-beyd-tertiary">
      {/* Partner Logo Carousel */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-beyd-indigo text-center mb-8">Trusted by Leading Brands</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="flex justify-center items-center h-24 overflow-hidden">
            {partnerLogos.map((logo, index) => (
              <div
                key={logo.alt}
                className={`transition-all duration-500 absolute ${
                  index === currentLogoIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <Image src={logo.src} alt={logo.alt} width={120} height={60} />
              </div>
            ))}
          </div>
          <button 
            onClick={prevLogo}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-beyd-primary text-white rounded-full p-2 shadow-md hover:bg-beyd-secondary transition-colors duration-300"
            aria-label="Previous logo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextLogo}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-beyd-primary text-white rounded-full p-2 shadow-md hover:bg-beyd-secondary transition-colors duration-300"
            aria-label="Next logo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* First Content Area */}
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-beyd-indigo mb-6 leading-tight">
              The point of sale that helps you run your business
            </h2>
            <p className="text-beyd-dark-blue text-lg mb-8">
              Our market-leading POS and unified commerce platform connect every side of your business. Sell in-person or online, manage orders and inventory, direct your team, or analyze performance - all in one easy-to-use interface.
            </p>
            <Link href="/learn-more" className="inline-block bg-beyd-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-beyd-secondary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Learn More
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <video
        ref={videoRef}
        src="/images/video.mp4"
        width={600}
        height={400}
        className="w-full"
        controls={false} // Désactive les contrôles natifs de la vidéo.
      />
              <button
        onClick={handlePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-beyd-primary rounded-full p-5 hover:bg-beyd-secondary transition-colors duration-300"
        aria-label="Play video"
      >
        <Play className="w-10 h-10 text-white" fill="currentColor" />
      </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Content Area */}
      <div className="bg-beyd-dark py-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/pos.jpg" 
              alt="Device Mockups" 
              width={600} 
              height={400}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beyd-dark/50 to-transparent"></div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-beyd-secondary mb-6 leading-tight">
            The point of sale powering seamless & secure checkout experiences
          </h2>
          <p className="text-beyd-tertiary text-lg mb-8">
            The plug & play POS runs on any iOS device and guarantees a seamless, secure checkout experience. Data is transferred in real-time to the Retail Cloud software where you'll find detailed analytics, intelligent suggestions, and advanced features to stay ahead of the game.
          </p>
          <Link  
              href="#contact"
              onClick={handleLearnMore}
              className="inline-block bg-beyd-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-beyd-secondary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}