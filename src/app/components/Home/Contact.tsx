import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, ShoppingCart, BarChart2, Headphones, Code, Package, Database } from 'lucide-react';
import { scrollToSection } from '@/lib/helper';

interface ContactProps {
  id?: string;
}

const services = [
  { id: 'pos', name: 'Point of Sale', icon: ShoppingCart },
  { id: 'inventory', name: 'Inventory Management', icon: Package },
  { id: 'ecommerce', name: 'E-commerce Integration', icon: Database },
  { id: 'analytics', name: 'Analytics & Reporting', icon: BarChart2 },
  { id: 'support', name: 'Customer Support', icon: Headphones },
  { id: 'custom', name: 'Custom Solutions', icon: Code },
];

const contactInfo = [
  { icon: Mail, text: 'contact@extendago.com' },
  { icon: Phone, text: '+1 (555) 123-4567' },
  { icon: MapPin, text: 'Mermoz, Dakar, Sénégal' },
  { icon: Clock, text: 'Monday - Friday: 9AM - 6PM (GMT)' },
];

const ServiceCard: React.FC<{ 
  service: { id: string; name: string; icon: any }; 
  isSelected: boolean; 
  onToggle: () => void 
}> = ({ service, isSelected, onToggle }) => {
  const Icon = service.icon;
  return (
    <div
      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isSelected 
          ? 'bg-gradient-to-br from-beyd-primary to-beyd-secondary text-white shadow-lg' 
          : 'bg-white text-beyd-dark-blue hover:bg-beyd-tertiary/20 hover:shadow-md'
      }`}
      onClick={onToggle}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
          isSelected ? 'bg-white' : 'bg-beyd-tertiary/20'
        }`}>
          <Icon className={`w-7 h-7 ${isSelected ? 'text-beyd-primary' : 'text-beyd-indigo'}`} />
        </div>
        <span className="font-medium text-sm">{service.name}</span>
        {isSelected && <Check className="w-5 h-5 mt-2" />}
      </div>
    </div>
  );
};

const ContactSection: React.FC<ContactProps> = ({id}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleStartFreeTrial = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <section id={id} className="bg-gradient-to-b from-white to-beyd-tertiary py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-beyd-indigo mb-6 leading-tight">Get in Touch</h2>
          <p className="text-xl text-beyd-dark-blue max-w-3xl mx-auto">
            We're here to help you elevate your business. Reach out to us for any questions or to schedule a demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-10 transform hover:scale-102 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-beyd-indigo mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-beyd-dark-blue mb-2 font-medium">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-beyd-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-beyd-primary transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-beyd-dark-blue mb-2 font-medium">Company</label>
                  <input type="text" id="company" className="w-full px-4 py-3 border border-beyd-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-beyd-primary transition-all duration-300" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-beyd-dark-blue mb-2 font-medium">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-beyd-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-beyd-primary transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-beyd-dark-blue mb-2 font-medium">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-beyd-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-beyd-primary transition-all duration-300" />
                </div>
              </div>
              <div>
                <label className="block text-beyd-dark-blue mb-4 font-medium">Services You're Interested In</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {services.map(service => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      isSelected={selectedServices.includes(service.id)}
                      onToggle={() => toggleService(service.id)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-beyd-dark-blue mb-2 font-medium">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 border border-beyd-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-beyd-primary transition-all duration-300"></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r from-beyd-primary to-beyd-secondary text-white px-8 py-4 rounded-full font-semibold hover:from-beyd-secondary hover:to-beyd-primary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center w-full">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8 flex flex-col h-full">
            <div className="bg-gradient-to-br from-beyd-indigo to-beyd-dark-blue text-white rounded-3xl p-8 lg:p-10 shadow-2xl transform hover:scale-102 transition-transform duration-300">
              <h3 className="text-3xl font-semibold mb-8">Contact Information</h3>
              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-14 h-14 mr-4 bg-beyd-secondary rounded-full flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-beyd-indigo" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-102 transition-transform duration-300 overflow-hidden flex-grow">
              <div className="relative w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0517175053248!2d-17.47603852399105!3d14.714860774248658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172912a636cc9%3A0x4194c7f595d676e6!2sPolytechnique%20de%20Dakar!5e0!3m2!1sfr!2ssn!4v1697290391181!5m2!1sfr!2ssn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-2xl absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-4xl font-semibold text-beyd-indigo mb-8">Ready to Transform Your Business?</h3>
          <button className="bg-gradient-to-r from-beyd-primary to-beyd-secondary text-white px-10 py-5 rounded-full font-semibold hover:from-beyd-secondary hover:to-beyd-primary transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <a href="#contact"
          onClick={handleStartFreeTrial}>Book a Demo</a>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-beyd-primary rounded-full transform translate-x-1/2 translate-y-1/2 opacity-10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-beyd-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
    </section>
  );
};

export default ContactSection;