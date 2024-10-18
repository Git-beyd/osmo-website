import React from 'react';
import { Shield, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react';

interface AboutProps {
  id?: string;
}

const AboutProductSection: React.FC<AboutProps> = ({id}) => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-beyd-tertiary py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-beyd-indigo mb-6">Why Choose ExtendaGO?</h2>
          <p className="text-xl text-beyd-dark-blue max-w-3xl mx-auto">
            Our all-in-one Point of Sale and Payments platform is designed to empower businesses of all sizes, 
            bringing cutting-edge technology to the heart of retail operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img
              src="/images/team.jpg"
              alt="ExtendaGO POS System"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-10 -right-10 bg-beyd-primary text-white p-4 rounded-lg shadow-xl">
              <p className="font-semibold">Trusted by 10,000+ businesses worldwide</p>
            </div>
          </div>
          <div>
            <ul className="space-y-8">
              {[
                {
                  icon: <Shield className="w-10 h-10 text-beyd-primary" />,
                  title: "Secure & Reliable",
                  description: "Bank-grade security measures to protect your data and transactions."
                },
                {
                  icon: <Zap className="w-10 h-10 text-beyd-primary" />,
                  title: "Lightning Fast",
                  description: "Optimized for speed, ensuring smooth operations even during peak hours."
                },
                {
                  icon: <Users className="w-10 h-10 text-beyd-primary" />,
                  title: "User-Friendly",
                  description: "Intuitive interface that requires minimal training for your staff."
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-beyd-primary" />,
                  title: "Scalable Solution",
                  description: "Grows with your business, from single stores to multi-location chains."
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="mr-6 bg-beyd-tertiary p-3 rounded-full">{item.icon}</div>
                  <div>
                    <h4 className="text-2xl font-semibold text-beyd-indigo mb-2">{item.title}</h4>
                    <p className="text-beyd-dark-blue">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-beyd-indigo text-white rounded-2xl p-12 shadow-2xl mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Our Journey</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Since 2010, ExtendaGO has been at the forefront of retail technology innovation. 
                We've grown from a small startup to a global leader, serving over 10,000 businesses 
                across more than 50 countries. Our journey is marked by continuous innovation and 
                a commitment to empowering businesses of all sizes.
              </p>
              <button className="bg-beyd-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-beyd-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Our Full Story
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { number: "10+", label: "Years in Business" },
                { number: "10,000+", label: "Clients Worldwide" },
                { number: "50+", label: "Countries Served" },
                { number: "99.9%", label: "Uptime Guarantee" },
              ].map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
                  <div className="text-4xl font-bold mb-2 text-beyd-secondary">{stat.number}</div>
                  <div className="text-sm uppercase tracking-wide text-beyd-tertiary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-beyd-indigo mb-6">Our Mission</h3>
          <p className="text-xl text-beyd-dark-blue max-w-4xl mx-auto mb-12">
            At ExtendaGO, we empower retailers with innovative technology that simplifies operations, 
            enhances customer experiences, and drives growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Simplify retail operations",
              "Enhance customer experiences",
              "Drive business growth",
              "Provide cutting-edge technology",
              "Offer unparalleled support",
              "Continuously innovate"
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-beyd-primary mr-3" />
                <span className="text-beyd-dark-blue">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProductSection;