'use client'

import React from 'react';
import dynamic from 'next/dynamic';

// Importations dynamiques pour optimiser le chargement
const PromoBar = dynamic(() => import('@/app/components/Home/PromoBar'));
const Menu = dynamic(() => import('@/app/components/Home/Menu'));
const Hero = dynamic(() => import('@/app/components/Home/Hero'));
const Section = dynamic(() => import('@/app/components/Home/Services'));
const Features = dynamic(() => import('@/app/components/Home/Features'));
const SolutionsSection = dynamic(() => import('@/app/components/Home/Solution'));
const Sectors = dynamic(() => import('@/app/components/Home/Sectors'));
const RetailerSection = dynamic(() => import('@/app/components/Home/Retailer'));
const AboutSection = dynamic(() => import('@/app/components/Home/About'));
const CTA = dynamic(() => import('@/app/components/Home/Cta'));
const ContactSection = dynamic(() => import('@/app/components/Home/Contact'));
const Footer = dynamic(() => import('@/app/components/Home/Footer'));
const PricingSection = dynamic(() => import('@/app/components/Home/Pricing'));
const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <PromoBar />
        <Menu />
      </header>
      <main className="flex-grow">
        <Hero />
        <Section id="services" />
        <Features id="features" />
        <SolutionsSection id="solutions" />
        <Sectors id="sectors" />
        <PricingSection id="pricing" />
        <RetailerSection id="retailer" />
        <AboutSection id="about" />
        <CTA id="cta" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;