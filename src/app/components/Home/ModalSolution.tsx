import React from 'react'
import Image from 'next/image'
import { X, Check, ArrowRight, Zap, BarChart, Target, Users, Briefcase, Star } from 'lucide-react'

interface SolutionModalProps {
  solution: {
    title: string
    description: string
    longDescription: string
    imageSrc: string
    features: string[]
    benefits: string[]
    targetAudience: string[]
    useCases: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function SolutionModal({ solution, isOpen, onClose }: SolutionModalProps) {
  if (!isOpen || !solution) return null

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="min-h-screen">
        {/* Header */}
        <div className="relative h-[50vh]">
          <Image
            src={solution.imageSrc}
            alt={solution.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-beyd-indigo/60 to-beyd-indigo"></div>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 bg-white rounded-full p-2 transition-all duration-200 hover:rotate-90 shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-10 h-10 text-beyd-indigo" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{solution.title}</h1>
            <p className="text-2xl md:text-3xl font-light">{solution.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* About Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-beyd-indigo mb-6">About {solution.title}</h2>
            <p className="text-xl text-beyd-dark-blue leading-relaxed">{solution.longDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-beyd-indigo mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solution.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-beyd-primary text-white p-2 rounded-full mr-4">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-beyd-indigo">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-beyd-indigo mb-8">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {solution.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-beyd-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-beyd-indigo mb-2">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-beyd-indigo mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3 text-beyd-primary" /> Target Audience
              </h2>
              <ul className="space-y-4">
                {solution.targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <Users className="w-6 h-6 text-beyd-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-beyd-dark-blue text-lg">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-beyd-indigo mb-6 flex items-center">
                <Briefcase className="w-8 h-8 mr-3 text-beyd-primary" /> Use Cases
              </h2>
              <ul className="space-y-4">
                {solution.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-beyd-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-beyd-dark-blue text-lg">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="bg-beyd-primary text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-beyd-secondary transition-all duration-300 inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started with {solution.title}
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}