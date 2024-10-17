'use client'

import React from 'react'
import { Shield, Lock, Eye, FileText, Users, Globe, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Menu from '@/app/components/Home/Menu'
import Footer from '@/app/components/Home/Footer'

const PolicySection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <section className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left bg-gradient-to-r from-beyd-primary/10 to-beyd-secondary/10 p-6 rounded-lg hover:from-beyd-primary/20 hover:to-beyd-secondary/20 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-beyd-indigo flex items-center">
          <span className="bg-beyd-tertiary p-2 rounded-full mr-4">{icon}</span>
          {title}
        </h2>
        <ChevronDown className={`w-6 h-6 text-beyd-indigo transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div className={`mt-4 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white p-6 rounded-lg shadow-inner">
          {children}
        </div>
      </div>
    </section>
  )
}

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <div className="flex-grow bg-gradient-to-br from-white via-beyd-tertiary/30 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            {/* <Image src="/images/pos1.jpg" alt="Privacy Policy" width={1200} height={400} className="rounded-2xl shadow-2xl mb-8 mx-auto" /> */}
            <h1 className="text-4xl md:text-5xl font-bold text-beyd-indigo mb-4">Privacy Policy</h1>
            <p className="text-xl text-beyd-dark-blue max-w-2xl mx-auto">Your privacy is our priority. Learn how ExtendaGO protects and respects your personal information.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
            <PolicySection title="Our Commitment to Privacy" icon={<Shield className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed">
                At ExtendaGO, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services or visit our website. We adhere to the highest standards of data protection and comply with all applicable privacy laws and regulations.
              </p>
            </PolicySection>

            <PolicySection title="Information We Collect" icon={<Lock className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-beyd-dark-blue">
                <li><strong>Personal information:</strong> Name, email address, phone number, and other contact details you provide.</li>
                <li><strong>Business information:</strong> Company name, industry, size, and other relevant business details.</li>
                <li><strong>Payment information:</strong> Credit card details or other payment information (processed securely through our trusted payment providers).</li>
                <li><strong>Usage data:</strong> Information about how you interact with our services, including features used and time spent.</li>
                <li><strong>Device and browser information:</strong> IP address, browser type, device type, and operating system.</li>
                <li><strong>Cookies and similar technologies:</strong> Data collected through cookies and similar technologies (see our Cookie Policy for more details).</li>
              </ul>
            </PolicySection>

            <PolicySection title="How We Use Your Information" icon={<Eye className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-beyd-dark-blue">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your requests and provide customer support</li>
                <li>Send important notices, updates, and promotional materials</li>
                <li>Conduct research and analysis to improve our offerings</li>
                <li>Detect, prevent, and address technical issues or fraudulent activities</li>
                <li>Comply with legal obligations and enforce our terms of service</li>
              </ul>
            </PolicySection>

            <PolicySection title="Data Retention and Security" icon={<FileText className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed mb-4">
                We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. ExtendaGO employs industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction.
              </p>
              <p className="text-beyd-dark-blue leading-relaxed">
                Our security measures include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-beyd-dark-blue mt-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and security best practices</li>
                <li>Physical security measures for our data centers and offices</li>
              </ul>
            </PolicySection>

            <PolicySection title="Sharing Your Information" icon={<Users className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-beyd-dark-blue">
                <li><strong>Service providers:</strong> Third-party companies that assist us in operating our business, processing payments, and analyzing our services.</li>
                <li><strong>Business partners:</strong> Companies we partner with to offer integrated or joint products and services.</li>
                <li><strong>Legal and regulatory authorities:</strong> When required by law or to protect our rights and the rights of our users.</li>
                <li><strong>Potential buyers or investors:</strong> In connection with a merger, acquisition, or sale of assets, subject to confidentiality agreements.</li>
              </ul>
              <p className="text-beyd-dark-blue leading-relaxed mt-4">
                All third parties are obligated to keep your information confidential and secure, and to use it only for the specific purposes we authorize.
              </p>
            </PolicySection>

            <PolicySection title="International Data Transfers" icon={<Globe className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your information and comply with applicable data protection laws. These safeguards include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-beyd-dark-blue mt-2">
                <li>Standard contractual clauses approved by the European Commission</li>
                <li>Binding corporate rules for transfers within our corporate group</li>
                <li>Compliance with the EU-US Privacy Shield Framework, where applicable</li>
                <li>Obtaining your consent for certain transfers</li>
              </ul>
            </PolicySection>

            <div className="bg-gradient-to-r from-beyd-primary/20 to-beyd-secondary/20 rounded-xl p-8 mt-12">
              <h2 className="text-2xl font-semibold text-beyd-indigo mb-4">Contact Us</h2>
              <p className="text-beyd-dark-blue leading-relaxed mb-4">
                If you have any questions or concerns about our Privacy Policy, please contact our Data Protection Officer at:
              </p>
              <p className="text-beyd-dark-blue">
                ExtendaGO Data Protection Officer<br />
                Email: <a href="mailto:privacy@extendago.com" className="text-beyd-primary hover:underline">privacy@extendago.com</a><br />
                Address: 123 Tech Street, San Francisco, CA 94105, USA
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy