'use client'

import React from 'react'
import { Cookie, Info, Settings, Shield, Clock, ExternalLink, ChevronDown } from 'lucide-react'
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

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <div className="flex-grow bg-gradient-to-br from-white via-beyd-tertiary/30 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            {/* <Image src="/images/cookie-banner.jpg" alt="Cookie Policy" width={1200} height={400} className="rounded-2xl shadow-2xl mb-8 mx-auto" /> */}
            <h1 className="text-4xl md:text-5xl font-bold text-beyd-indigo mb-4">Cookie Policy</h1>
            <p className="text-xl text-beyd-dark-blue max-w-2xl mx-auto">Learn how ExtendaGO uses cookies to enhance your browsing experience and improve our services.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
            <PolicySection title="What Are Cookies?" icon={<Cookie className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. At ExtendaGO, we use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.
              </p>
            </PolicySection>

            <PolicySection title="How We Use Cookies" icon={<Info className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed mb-4">
                At ExtendaGO, we use cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-beyd-dark-blue">
                <li>Understand how you use our website and services</li>
                <li>Remember your preferences and settings</li>
                <li>Improve your browsing experience</li>
                <li>Provide personalized content and advertisements</li>
                <li>Analyze our website performance and functionality</li>
                <li>Ensure the security of your account and transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </PolicySection>

            <PolicySection title="Types of Cookies We Use" icon={<Settings className="w-6 h-6 text-beyd-primary" />}>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-beyd-indigo">Essential Cookies:</h3>
                  <p className="text-beyd-dark-blue">Necessary for the website to function properly. These cannot be disabled.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-beyd-indigo">Analytical Cookies:</h3>
                  <p className="text-beyd-dark-blue">Help us understand how visitors interact with our website, using services like Google Analytics.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-beyd-indigo">Functional Cookies:</h3>
                  <p className="text-beyd-dark-blue">Remember your preferences and settings for a better user experience.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-beyd-indigo">Advertising Cookies:</h3>
                  <p className="text-beyd-dark-blue">Used to deliver relevant advertisements and track ad campaign performance.</p>
                </div>
                <div>
                  <h3 className="font-semibold  text-beyd-indigo">Third-Party Cookies:</h3>
                  <p className="text-beyd-dark-blue">Set by third-party services we use, such as social media platforms or payment processors.</p>
                </div>
              </div>
            </PolicySection>

            <PolicySection title="Your Cookie Choices" icon={<Shield className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed mb-4">
                You have the right to choose whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. You can also control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <p className="text-beyd-dark-blue leading-relaxed mb-4">
                However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
              <p className="text-beyd-dark-blue leading-relaxed">
                To learn more about how to manage cookies, visit <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-beyd-primary hover:underline">AboutCookies.org <ExternalLink className="inline w-4 h-4" /></a>.
              </p>
            </PolicySection>

            <PolicySection title="Changes to Our Cookie Policy" icon={<Clock className="w-6 h-6 text-beyd-primary" />}>
              <p className="text-beyd-dark-blue leading-relaxed">
                We may update our Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </PolicySection>

            <div className="bg-gradient-to-r from-beyd-primary/20 to-beyd-secondary/20 rounded-xl p-8 mt-12">
              <h2 className="text-2xl font-semibold text-beyd-indigo mb-4">Contact Us</h2>
              <p className="text-beyd-dark-blue leading-relaxed mb-4">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <p className="text-beyd-dark-blue">
                ExtendaGO Customer Support<br />
                Email: <a href="mailto:support@extendago.com" className="text-beyd-primary hover:underline">support@extendago.com</a><br />
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

export default CookiePolicy