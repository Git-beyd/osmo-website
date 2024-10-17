import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Instagram, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { scrollToSection } from '@/lib/helper'

const footerSections = [
  {
    title: 'Discover',
    links: [
      { name: 'Our company', href: '/#about', scroll: true },
      { name: 'Solutions', href: '/#solutions', scroll: true },
      { name: 'Sectors', href: '/#sectors', scroll: true },
      // { name: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Support', href: '/support' },
      { name: 'Privacy policy', href: '/privacy-policy' },
      { name: 'Cookie policy', href: '/cookie-policy' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Get in touch', href: '/#contact', scroll: true },
      { name: 'Start a trial', href: '/#pricing', scroll: true },
      { name: 'Become a partner', href: '/partners' },
      { name: 'Security updates', href: '/security' },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/extendago', name: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/extendago', name: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/extendago', name: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/extendago', name: 'Instagram' },
]

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-gradient-to-br from-beyd-dark via-beyd-dark-blue to-beyd-indigo text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/footer-pattern.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="col-span-2 space-y-8">
            <Link href="/">
              <Image src="/images/logo.png" alt="ExtendaGO Logo" width={180} height={48} className="mb-6" />
            </Link>
            <p className="text-beyd-tertiary text-lg leading-relaxed max-w-md">
              ExtendaGO empowers businesses with cutting-edge point of sale and backoffice solutions, revolutionizing retail and hospitality operations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beyd-tertiary hover:text-beyd-secondary transition-all duration-300 transform hover:scale-110 bg-beyd-dark-blue/30 p-3 rounded-full"
                  aria-label={`Follow us on ${link.name}`}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-beyd-secondary relative inline-block">
                {section.title}
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-beyd-secondary"></span>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.scroll ? (
                      <a 
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href.replace('/#', ''))}
                        className="text-beyd-tertiary hover:text-beyd-secondary transition-all duration-300 flex items-center group cursor-pointer"
                      >
                        <span className="group-hover:underline">{link.name}</span>
                        <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="text-beyd-tertiary hover:text-beyd-secondary transition-all duration-300 flex items-center group"
                      >
                        <span className="group-hover:underline">{link.name}</span>
                        <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-beyd-dark-blue/30">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
            <p className="text-beyd-tertiary text-sm">
              © {new Date().getFullYear()} BeydGroup SA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms-of-service" className="text-beyd-tertiary hover:text-beyd-secondary transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-beyd-tertiary hover:text-beyd-secondary transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-beyd-secondary rounded-full transform translate-x-1/2 translate-y-1/2 opacity-10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-beyd-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
    </footer>
  )
}

export default Footer