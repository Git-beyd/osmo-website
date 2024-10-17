  'use client'

  import React, { useState } from 'react'
  import Image from 'next/image'
  import { ChevronRight, Cloud, ShoppingBag } from 'lucide-react'
  import SolutionModal from '@/app/components/Home/ModalSolution'

  interface SolutionProps {
    id?: string
  }

    const solutions = [
      {
        icon: <Cloud className="w-8 h-8 text-beyd-primary" />,
        imageSrc: "/images/clothing.jpg",
        title: "ExtendaGO Retail Cloud",
        description: "Unified commerce platform for seamless retail management.",
        longDescription: "ExtendaGO Retail Cloud is a comprehensive, cloud-based solution designed to unify and streamline all aspects of your retail operations. From inventory management to customer relationships, our platform provides real-time data and insights, enabling you to make informed decisions and deliver exceptional customer experiences across all channels.",
        features: [
          "Real-time inventory synchronization across all channels",
          "Advanced AI-powered demand forecasting",
          "Omnichannel order management and fulfillment",
          "Customizable reporting and analytics dashboard",
          "Integrated CRM and loyalty program management"
        ],
        benefits: [
          "Increase operational efficiency by up to 30%",
          "Reduce stockouts and overstocking by 25%",
          "Boost customer satisfaction with consistent omnichannel experience",
          "Make data-driven decisions with real-time insights",
          "Scale your business effortlessly with cloud-based architecture"
        ],
        targetAudience: [
          "Small to medium-sized retail businesses",
          "Multi-store retail chains",
          "E-commerce businesses expanding to brick-and-mortar",
          "Retailers looking to implement omnichannel strategies"
        ],
        useCases: [
          "Centralized inventory management for multi-location stores",
          "Seamless integration of online and offline sales channels",
          "Personalized marketing campaigns based on customer data",
          "Efficient order fulfillment and returns processing",
          "Real-time sales and performance analytics for informed decision-making"
        ]
      },
      {
        icon: <ShoppingBag className="w-8 h-8 text-beyd-primary" />,
        imageSrc: "/images/pos2.jpg",
        title: "ExtendaGO POS",
        description: "Next-gen Point of Sale for frictionless transactions.",
        longDescription: "ExtendaGO POS is a cutting-edge point of sale system designed to streamline your in-store operations and enhance customer experiences. With its intuitive interface and powerful features, our POS system helps you process transactions quickly, manage inventory efficiently, and gain valuable insights into your business performance.",
        features: [
          "User-friendly touchscreen interface",
          "Integrated payment processing with multiple options",
          "Real-time inventory updates and stock management",
          "Customer profile management and loyalty program integration",
          "Offline mode for uninterrupted service"
        ],
        benefits: [
          "Reduce checkout times by up to 40%",
          "Minimize training time with intuitive design",
          "Increase sales with targeted upselling prompts",
          "Enhance customer loyalty with personalized experiences",
          "Ensure business continuity with reliable offline capabilities"
        ],
        targetAudience: [
          "Retail stores of all sizes",
          "Restaurants and cafes",
          "Specialty shops and boutiques",
          "Service-based businesses with point of sale needs"
        ],
        useCases: [
          "Fast-paced retail environments requiring quick transactions",
          "Restaurants needing table management and split bill capabilities",
          "Boutiques offering personalized shopping experiences",
          "Pop-up shops and mobile businesses requiring flexible POS solutions",
          "Multi-location businesses needing centralized sales data"
        ]
      }
    ]
  

  export default function SolutionsSection({id}: SolutionProps) {
    const [selectedSolution, setSelectedSolution] = useState(null)

    return (
      <section id={id} className="bg-gradient-to-b from-white to-beyd-tertiary py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-beyd-indigo mb-4">Our Solutions</h2>
            <p className="text-xl text-beyd-dark-blue max-w-3xl mx-auto">
              Empowering businesses with cutting-edge cloud-native point of sale and backoffice solutions
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h3 className="text-3xl sm:text-4xl font-bold text-beyd-indigo mb-6 leading-tight">
                Smart cloud-native point of sale and backoffice solutions
              </h3>
              <p className="text-beyd-dark-blue text-lg leading-relaxed mb-8">
                With a focus on speed, ease of use, and functionality, our software package includes
                a powerful mobile Point of Sale and Retail Cloud backoffice - providing real-time
                access to everything you need to run your business.
              </p>
              <a href="#" className="inline-flex items-center text-beyd-primary font-semibold hover:text-beyd-secondary transition-colors duration-300 group">
                Learn more about our solutions 
                <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <SolutionCard
                  key={index}
                  {...solution}
                  onClick={() => setSelectedSolution(solution)}
                />
              ))}
            </div>
          </div>
        </div>
        <SolutionModal 
          solution={selectedSolution}
          isOpen={!!selectedSolution}
          onClose={() => setSelectedSolution(null)}
        />
      </section>
    )
  }

  function SolutionCard({ icon, imageSrc, title, description, onClick }) {
    return (
      <div 
        className="group block focus:outline-none focus:ring-2 focus:ring-beyd-primary focus:ring-offset-4 rounded-2xl cursor-pointer"
        onClick={onClick}
      >
        <div className="bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl overflow-hidden h-full border border-gray-100">
          <div className="relative h-64">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beyd-indigo/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-beyd-indigo mb-3 group-hover:text-beyd-primary transition-colors duration-300">{title}</h4>
            <p className="text-beyd-dark-blue mb-4">{description}</p>
            <div className="text-beyd-primary font-semibold flex items-center transition-all duration-300 group-hover:translate-x-2">
              Explore solution <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    )
  }