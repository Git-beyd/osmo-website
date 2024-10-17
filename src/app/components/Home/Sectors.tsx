'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, Coffee, ShoppingBag, Utensils, Scissors, X, Check, Star, BarChart, Users, Clock, DollarSign } from 'lucide-react'
import SectorDetailModal from '@/app/components/Home/SectorModal';

interface SectorProps {
  id?: string;
}

const sectors = [
  { 
    id: 'restaurants',
    name: 'Quick-service restaurants & bars',
    icon: <Utensils className="w-8 h-8" />,
    description: 'Boost your quick-service success with our all-in-one cloud-native POS. Packed with tools to improve service and increase profits.',
    longDescription: 'Our comprehensive POS solution for quick-service restaurants and bars is designed to streamline your operations, enhance customer experience, and boost your bottom line. With features tailored to the fast-paced environment of QSRs, you\'ll be able to handle rush hours with ease, manage your inventory efficiently, and make data-driven decisions to grow your business.',
    addOns: ['GO CTRL', 'GO KDS', 'GO Ordin', 'GO Pay'],
    image: '/images/food.jpg',
    features: [
      { name: 'Fast order processing', description: 'Handle high-volume orders quickly and accurately', icon: <Clock className="w-6 h-6" /> },
      { name: 'Table management', description: 'Optimize seating arrangements and turn tables faster', icon: <Users className="w-6 h-6" /> },
      { name: 'Kitchen display system', description: 'Streamline kitchen operations with real-time order updates', icon: <BarChart className="w-6 h-6" /> },
      { name: 'Menu customization', description: 'Easily update menu items, prices, and specials', icon: <Coffee className="w-6 h-6" /> },
      { name: 'Inventory tracking', description: 'Real-time stock management to prevent shortages', icon: <ShoppingBag className="w-6 h-6" /> },
      { name: 'Staff management', description: 'Track employee hours, performance, and scheduling', icon: <Users className="w-6 h-6" /> }
    ],
    benefits: [
      { title: 'Increased Efficiency', description: 'Reduce wait times and serve more customers during peak hours', icon: <Clock className="w-6 h-6" /> },
      { title: 'Enhanced Customer Experience', description: 'Provide faster service and personalized offerings to boost satisfaction', icon: <Users className="w-6 h-6" /> },
      { title: 'Better Inventory Management', description: 'Minimize waste and optimize stock levels for higher profitability', icon: <ShoppingBag className="w-6 h-6" /> },
      { title: 'Improved Reporting', description: 'Gain actionable insights into sales trends and staff performance', icon: <BarChart className="w-6 h-6" /> }
    ],
    testimonial: {
      quote: "ExtendaGO has revolutionized our restaurant operations. The speed and efficiency of the system have significantly improved our customer service and bottom line.",
      author: "Emily Chen",
      position: "Owner, Tasty Bites Restaurant"
    },
    stats: [
      { value: '30%', label: 'Increase in table turnover', icon: <Users className="w-6 h-6" /> },
      { value: '25%', label: 'Reduction in order errors', icon: <Check className="w-6 h-6" /> },
      { value: '20%', label: 'Boost in customer satisfaction', icon: <Star className="w-6 h-6" /> },
      { value: '15%', label: 'Increase in average order value', icon: <DollarSign className="w-6 h-6" /> }
    ],
    caseStudy: {
      title: "How TastyBites Increased Revenue by 35% with ExtendaGO",
      highlights: [
        "Implemented ExtendaGO POS system across 5 locations",
        "Reduced average order time from 3 minutes to 90 seconds",
        "Increased upselling success rate by 22%",
        "Improved inventory accuracy, reducing waste by 18%"
      ]
    }
  },
  { 
    id: 'clothing',
    name: 'Clothing & accessories',
    icon: <ShoppingBag className="w-8 h-8" />,
    description: 'Streamline your retail operations with our comprehensive POS solution designed for fashion and accessories stores.',
    longDescription: 'Our POS system for clothing and accessories retailers is built to handle the unique challenges of the fashion industry. From managing complex inventories with multiple sizes and colors to integrating with e-commerce platforms, our solution provides the tools you need to run your business efficiently and provide a seamless shopping experience for your customers.',
    addOns: ['GO Inventory', 'GO CRM', 'GO Analytics', 'GO eCommerce'],
    image: '/images/habilement.jpg',
    features: [
      { name: 'Barcode scanning', description: 'Quickly process items and update inventory in real-time', icon: <BarChart className="w-6 h-6" /> },
      { name: 'Size and color variants', description: 'Easily manage product variations and stock levels', icon: <ShoppingBag className="w-6 h-6" /> },
      { name: 'Customer loyalty program', description: 'Build customer relationships with integrated loyalty features', icon: <Users className="w-6 h-6" /> },
      { name: 'Inventory management', description: 'Track stock across multiple locations and channels', icon: <ShoppingBag className="w-6 h-6" /> },
      { name: 'Sales reporting', description: 'Gain insights with detailed sales and performance analytics', icon: <BarChart className="w-6 h-6" /> },
      { name: 'E-commerce integration', description: 'Seamlessly connect your online and offline sales channels', icon: <ShoppingBag className="w-6 h-6" /> }
    ],
    benefits: [
      { title: 'Seamless Omnichannel Experience', description: 'Provide consistent shopping experiences across all sales channels', icon: <ShoppingBag className="w-6 h-6" /> },
      { title: 'Efficient Inventory Management', description: 'Optimize stock levels and reduce carrying costs', icon: <BarChart className="w-6 h-6" /> },
      { title: 'Enhanced Customer Loyalty', description: 'Increase repeat purchases with personalized marketing', icon: <Users className="w-6 h-6" /> },
      { title: 'Data-Driven Decisions', description: 'Use sales data to inform buying and pricing strategies', icon: <BarChart className="w-6 h-6" /> }
    ],
    testimonial: {
      quote: "The inventory management features of ExtendaGO have been a game-changer for our clothing store. We can now track our stock in real-time across all our locations, which has significantly reduced our overstock and stockout issues.",
      author: "Michael Thompson",
      position: "CEO, Urban Threads Boutique"
    },
    stats: [
      { value: '40%', label: 'Increase in inventory accuracy', icon: <Check className="w-6 h-6" /> },
      { value: '35%', label: 'Growth in online sales', icon: <BarChart className="w-6 h-6" /> },
      { value: '15%', label: 'Reduction in stockouts', icon: <ShoppingBag className="w-6 h-6" /> },
      { value: '25%', label: 'Increase in customer retention', icon: <Users className="w-6 h-6" /> }
    ],
    caseStudy: {
      title: "Urban Threads Boutique: From Local Shop to Omnichannel Success",
      highlights: [
        "Expanded from 2 physical stores to 5 locations and a thriving e-commerce platform",
        "Increased overall sales by 50% within the first year of implementing ExtendaGO",
        "Reduced inventory holding costs by 20% through better stock management",
        "Boosted customer loyalty program participation by 60%"
      ]
    }
  },
  { 
    id: 'cafe',
    name: 'Cafe & bakery',
    icon: <Coffee className="w-8 h-8" />,
    description: 'Manage your cafe or bakery efficiently with our tailored POS system, featuring order management and loyalty programs.',
    longDescription: 'Our POS solution for cafes and bakeries is designed to help you serve your customers quickly while maintaining the warm, inviting atmosphere they love. From managing complex coffee orders to tracking fresh inventory, our system provides the tools you need to run your cafe or bakery smoothly and profitably.',
    addOns: ['GO Menu', 'GO Loyalty', 'GO Delivery', 'GO Reporting'],
    image: '/images/cafe.jpg',
    features: [
      { name: 'Quick order taking', description: 'Streamline the ordering process for faster service', icon: <Clock className="w-6 h-6" /> },
      { name: 'Custom loyalty programs', description: 'Create and manage customer rewards to encourage repeat visits', icon: <Users className="w-6 h-6" /> },
      { name: 'Inventory management', description: 'Track perishable items and ensure you never run out of essentials', icon: <ShoppingBag className="w-6 h-6" /> },
      { name: 'Detailed reporting', description: 'Analyze sales data to identify trends and opportunities', icon: <BarChart className="w-6 h-6" /> },
      { name: 'Table management', description: 'Optimize seating and improve customer flow', icon: <Users className="w-6 h-6" /> },
      { name: 'Online ordering integration', description: 'Easily sync in-store and online orders', icon: <ShoppingBag className="w-6 h-6" /> }
    ],
    benefits: [
      { title: 'Faster Service', description: 'Speed up order processing and reduce customer wait times', icon: <Clock className="w-6 h-6" /> },
      { title: 'Enhanced Customer Loyalty', description: 'Reward regular customers with tailored loyalty programs', icon: <Users className="w-6 h-6" /> },
      { title: 'Inventory Control', description: 'Reduce waste and keep track of perishable inventory', icon: <ShoppingBag className="w-6 h-6" /> },
      { title: 'Data-Driven Growth', description: 'Use sales analytics to refine your menu and increase profits', icon: <BarChart className="w-6 h-6" /> }
    ],
    testimonial: {
      quote: "ExtendaGO has made managing our cafe so much simpler. From tracking sales to managing our loyalty program, it’s a complete package.",
      author: "Sara Lee",
      position: "Owner, Morning Brew Cafe"
    },
    stats: [
      { value: '20%', label: 'Increase in customer retention', icon: <Users className="w-6 h-6" /> },
      { value: '30%', label: 'Reduction in inventory waste', icon: <Check className="w-6 h-6" /> },
      { value: '10%', label: 'Growth in online orders', icon: <ShoppingBag className="w-6 h-6" /> },
      { value: '15%', label: 'Increase in average ticket size', icon: <DollarSign className="w-6 h-6" /> }
    ],
    caseStudy: {
      title: "Morning Brew Cafe: Boosting Efficiency and Customer Loyalty",
      highlights: [
        "Implemented ExtendaGO’s loyalty program, resulting in a 25% increase in repeat customers",
        "Reduced order processing time by 40% with streamlined POS system",
        "Cut waste costs by 15% through improved inventory tracking",
        "Grew online orders by 50% within the first quarter"
      ]
    }
  },
  { 
    id: 'beauty',
    name: 'Health & beauty',
    icon: <Scissors className="w-8 h-8" />,
    description: 'Elevate your salon or spa experience with our specialized POS solution, including appointment scheduling and client management.',
    longDescription: 'Our POS system for health and beauty businesses is designed to help you manage appointments, staff, and inventory while providing a luxurious experience for your clients. From booking to checkout, our solution streamlines your operations so you can focus on delivering exceptional service.',
    addOns: ['GO Booking', 'GO Inventory', 'GO CRM', 'GO Marketing'],
    image: '/images/body.jpg',
    features: [
      { name: 'Appointment scheduling', description: 'Efficiently manage bookings and reduce no-shows', icon: <Clock className="w-6 h-6" /> },
      { name: 'Client profiles', description: 'Keep detailed records of client preferences and history', icon: <Users className="w-6 h-6" /> },
      { name: 'Service packages', description: 'Create and sell bundled services to increase revenue', icon: <ShoppingBag className="w-6 h-6" /> },
      { name: 'Product sales', description: 'Integrate retail product sales with services', icon: <ShoppingBag className="w-6 h-6" /> },
      { name: 'Employee management', description: 'Track employee performance, commissions, and schedules', icon: <Users className="w-6 h-6" /> },
      { name: 'Marketing tools', description: 'Run targeted campaigns to boost client retention and acquisition', icon: <BarChart className="w-6 h-6" /> }
    ],
    benefits: [
      { title: 'Efficient Appointment Management', description: 'Maximize your schedule and reduce downtime', icon: <Clock className="w-6 h-6" /> },
      { title: 'Personalized Customer Experience', description: 'Provide tailored services based on client history', icon: <Users className="w-6 h-6" /> },
      { title: 'Increased Revenue', description: 'Boost sales with integrated product recommendations', icon: <DollarSign className="w-6 h-6" /> },
      { title: 'Improved Staff Performance', description: 'Optimize scheduling and track individual performance', icon: <Users className="w-6 h-6" /> }
    ],
    testimonial: {
      quote: "The appointment booking system in ExtendaGO has streamlined our operations and reduced no-shows. It's been a valuable asset to our salon, allowing us to focus on providing excellent service to our clients.",
      author: "Lisa Martinez",
      position: "Owner, Glow Up Beauty Salon"
    },
    stats: [
      { value: '50%', label: 'Reduction in no-shows', icon: <Check className="w-6 h-6" /> },
      { value: '30%', label: 'Increase in product sales', icon: <ShoppingBag className="w-6 h-6" /> },
      { value: '40%', label: 'Boost in repeat appointments', icon: <Users className="w-6 h-6" /> },
      { value: '20%', label: 'Increase in average service value', icon: <DollarSign className="w-6 h-6" /> }
    ],
    caseStudy: {
      title: "Glow Up Beauty Salon: A Makeover for Business Operations",
      highlights: [
        "Implemented ExtendaGO POS and appointment management system",
        
        "Reduced appointment no-shows by 60% within the first 3 months",
        "Increased retail product sales by 45% through integrated recommendations",
        "Improved staff utilization by 25%, leading to higher revenue per stylist"
      ]
    }
  }
]


export default function SectorsComponent({id}: SectorProps) {
  const [selectedSector, setSelectedSector] = useState(sectors[0].id)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const currentSector = sectors.find(s => s.id === selectedSector)

  return (
    <section id={id} className="bg-gradient-to-b from-white to-beyd-tertiary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-beyd-indigo mb-12 text-center">What industry are you in?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setSelectedSector(sector.id)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                selectedSector === sector.id
                  ? 'bg-beyd-primary text-white shadow-lg scale-105'
                  : 'bg-beyd-tertiary text-beyd-dark hover:bg-beyd-secondary hover:text-white hover:shadow-md hover:scale-102'
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                {sector.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{sector.name}</h3>
            </button>
          ))}
        </div>

        {currentSector && (
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold text-beyd-indigo mb-6">{currentSector.name}</h3>
                <p className="text-beyd-dark-blue mb-8 text-lg">{currentSector.description}</p>
                
                <h4 className="text-xl font-semibold text-beyd-indigo mb-4">Add-ons</h4>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentSector.addOns.map((addOn) => (
                    <a key={addOn} href="#" className="text-beyd-primary hover:text-beyd-secondary transition-colors duration-200 flex items-center text-lg">
                      {addOn} <ChevronRight className="w-5 h-5 ml-2" />
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6">
                  <button 
                    onClick={openModal}
                    className="bg-beyd-primary text-white px-8 py-3 rounded-full hover:bg-beyd-secondary transition-colors duration-200 flex items-center text-lg font-medium"
                  >
                    Learn more <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-beyd-indigo text-beyd-indigo px-8 py-3 rounded-full hover:bg-beyd-indigo hover:text-white transition-all duration-200 flex items-center text-lg font-medium">
                    Request demo <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative h-64 md:h-80 lg:h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-102">
                  <Image
                    src={currentSector.image}
                    alt={currentSector.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-beyd-indigo to-beyd-primary text-white p-8 rounded-xl relative shadow-lg">
          <div className="absolute -top-4 left-12 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-beyd-indigo"></div>
          <p className="mb-6 italic text-lg md:text-xl leading-relaxed">
            "This system makes the daily life of our drivers easier. It's an efficient system, it's speedy, not complex at all and the margin of error is small"
          </p>
          <p className="font-semibold text-lg">
            Marvel Skreien Stigen, <span className="font-normal text-beyd-tertiary">Head of Marketing and Communication, Isbjørn Is Holding AS</span>
          </p>
        </div>
      </div>

      {isModalOpen && currentSector && (
  <SectorDetailModal sector={currentSector} onClose={closeModal} />
)}
    </section>
  )
}