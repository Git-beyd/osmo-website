'use client'

import React, { useState, useEffect } from 'react'
import { ChevronDown, Search, HelpCircle, ShoppingCart, CreditCard, BarChart, Zap, Globe, Shield, HeadphonesIcon, WifiOff } from 'lucide-react'
import Menu from '@/app/components/Home/Menu'
import Footer from '@/app/components/Home/Footer'
import { scrollToSection } from '@/lib/helper'
import { useRouter } from 'next/navigation'

const faqs = [
  {
    question: "What makes ExtendaGO different from other POS systems?",
    answer: "ExtendaGO stands out with its seamless integration of point-of-sale and backoffice operations, cloud-based architecture for real-time data access, and industry-specific features for retail and hospitality. Our system is designed for scalability, allowing businesses to grow without changing their core operational software.",
    icon: <ShoppingCart className="w-6 h-6 text-beyd-primary" />
  },
  {
    question: "How does ExtendaGO handle different payment methods?",
    answer: "ExtendaGO supports a wide range of payment methods including cash, credit/debit cards, mobile payments, and even cryptocurrency. Our system integrates with major payment gateways and can be customized to include region-specific payment options, ensuring you can serve customers however they prefer to pay.",
    icon: <CreditCard className="w-6 h-6 text-beyd-primary" />
  },
  {
    question: "What kind of reporting and analytics does ExtendaGO offer?",
    answer: "ExtendaGO provides comprehensive reporting and analytics tools. You can access real-time sales data, inventory levels, customer insights, and employee performance metrics. Our customizable dashboards allow you to visualize key performance indicators, helping you make data-driven decisions to optimize your business operations.",
    icon: <BarChart className="w-6 h-6 text-beyd-primary" />
  },
  {
    question: "How fast can I set up ExtendaGO in my business?",
    answer: "With our streamlined onboarding process, most businesses can be up and running with ExtendaGO in as little as 24 hours. Our team provides personalized support to ensure a smooth transition, including data migration, hardware setup, and staff training. For more complex setups, we offer tailored implementation plans to meet your specific needs.",
    icon: <Zap className="w-6 h-6 text-beyd-primary" />
  },
  {
    question: "Can ExtendaGO handle multiple stores or locations?",
    answer: "ExtendaGO is designed to support businesses with multiple locations. Our multi-store management features allow you to oversee operations across all your stores from a single dashboard. You can manage inventory, track sales, and analyze performance for each location individually or as a whole.",
    icon: <Globe className="w-6 h-6 text-beyd-primary" />
  },
  {
    question: "How secure is ExtendaGO for handling sensitive customer data?",
    answer: "Security is our top priority. ExtendaGO uses bank-level encryption for all data transmissions and storage. We are PCI-DSS compliant, ensuring that all credit card information is handled securely. Regular security audits and updates are performed to maintain the highest level of protection for your business and customer data.",
    icon: <Shield className="w-6 h-6 text-beyd-primary" />
  },
  {
    question: "What kind of customer support does ExtendaGO offer?",
    answer: "We provide 24/7 customer support through multiple channels including phone, email, and live chat. Our support team is highly trained in all aspects of ExtendaGO and can assist with technical issues, feature inquiries, and best practices. We also offer a comprehensive knowledge base and regular webinars for continuous learning.",
    icon: <HeadphonesIcon className="w-6 h-6 text-beyd-primary" />
  },
  {
    question: "Can I use ExtendaGO if my internet connection is unreliable?",
    answer: "Yes, ExtendaGO has a robust offline mode that allows you to continue processing sales even when your internet connection is down. The system will automatically sync all data once the connection is restored, ensuring you never lose any transaction information.",
    icon: <WifiOff className="w-6 h-6 text-beyd-primary" />
  }
]

const FAQItem: React.FC<{ question: string; answer: string; icon: React.ReactNode }> = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-beyd-tertiary/30 last:border-b-0 transition-all duration-300 hover:bg-beyd-tertiary/5">
      <button
        className="w-full text-left py-6 px-6 focus:outline-none flex justify-between items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center text-lg font-medium text-beyd-indigo group-hover:text-beyd-primary transition-colors duration-300">
          {icon}
          <span className="ml-4">{question}</span>
        </span>
        <ChevronDown className={`w-5 h-5 text-beyd-primary transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-6 text-beyd-dark-blue">{answer}</p>
      </div>
    </div>
  )
}

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredFAQs, setFilteredFAQs] = useState(faqs)
  const router = useRouter()

  useEffect(() => {
    const filtered = faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredFAQs(filtered)
  }, [searchTerm])

  const handleContactSupport = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push('/#contact')
    setTimeout(() => {
      scrollToSection('contact')
    }, 100)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-grow bg-gradient-to-br from-white via-beyd-tertiary/30 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-beyd-indigo mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-beyd-dark-blue max-w-2xl mx-auto">
              Get quick answers to common questions about ExtendaGO's powerful POS and backoffice solution.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 px-12 rounded-full border-2 border-beyd-tertiary/50 focus:outline-none focus:ring-2 focus:ring-beyd-primary/50 focus:border-transparent text-beyd-dark-blue placeholder-beyd-dark-blue/50 text-lg transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-beyd-primary w-6 h-6" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} icon={faq.icon} />
              ))
            ) : (
              <div className="p-12 text-center">
                <HelpCircle className="w-20 h-20 text-beyd-primary mx-auto mb-6" />
                <p className="text-2xl text-beyd-dark-blue mb-4">No matching questions found</p>
                <p className="text-lg text-beyd-dark-blue/70">Try a different search term or contact our support team for assistance.</p>
              </div>
            )}
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-beyd-primary/20 to-beyd-secondary/20 rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-semibold text-beyd-indigo mb-4">Still have questions?</h2>
            <p className="text-xl text-beyd-dark-blue mb-8">Our expert support team is ready to help you with any inquiries.</p>
            <a
              href="/#contact"
              onClick={handleContactSupport}
              className="inline-block bg-beyd-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-beyd-secondary transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FAQ