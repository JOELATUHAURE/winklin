import React, { useState } from 'react';
import { Trash2, SprayCan as Spray, Building as BuildingOffice2, ArrowRight, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Service } from '../../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Waste Management',
    description: 'Regular door-to-door waste collection service with electronic receipts and fleet tracking.',
    icon: 'Trash2',
    features: [
      'Scheduled waste pickup',
      'Proper waste segregation',
      'Eco-friendly disposal',
      'Electronic receipts',
      'GPS fleet tracking'
    ],
    image: 'https://images.pexels.com/photos/4399088/pexels-photo-4399088.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '2',
    title: 'Residential Cleaning',
    description: 'Professional home cleaning services from regular maintenance to deep sanitization.',
    icon: 'Spray',
    features: [
      'Regular home cleaning',
      'Deep sanitization',
      'Move-in/out cleaning',
      'Upholstery cleaning',
      'Window cleaning'
    ],
    image: 'https://images.pexels.com/photos/4106710/pexels-photo-4106710.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '3',
    title: 'Commercial Cleaning',
    description: 'Comprehensive cleaning solutions for offices, retail spaces, and commercial buildings.',
    icon: 'BuildingOffice2',
    features: [
      'Office sanitization',
      'Retail space cleaning',
      'Commercial waste management',
      'Floor maintenance',
      'Post-construction cleaning'
    ],
    image: 'https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

export default function ServicesList() {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trash2':
        return <Trash2 className="h-6 w-6" />;
      case 'Spray':
        return <Spray className="h-6 w-6" />;
      case 'BuildingOffice2':
        return <BuildingOffice2 className="h-6 w-6" />;
      default:
        return <Trash2 className="h-6 w-6" />;
    }
  };

  const activeServiceData = services.find(s => s.id === activeService);

  return (
    <section id="services" className="section bg-gradient-radial from-surface-50 via-white to-surface-100 dark:from-surface-900 dark:to-surface-800 py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-accent-500 font-extrabold tracking-tight animate-pulse">
            Our Services
          </h2>
          <p className="text-surface-600 dark:text-surface-400 text-lg">
            WinKlin offers a <span className="text-primary-600 dark:text-primary-400 font-medium">comprehensive range</span> of waste management and cleaning services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card
                variant={activeService === service.id ? 'neumorphic' : 'default'}
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-surface-100 dark:hover:bg-surface-700 group",
                  activeService === service.id
                    ? "border-2 border-primary-500 dark:border-primary-400"
                    : "border border-transparent"
                )}
                onClick={() => setActiveService(service.id)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={cn(
                      "p-3 rounded-full transition-all duration-300 group-hover:scale-110",
                      activeService === service.id
                        ? "bg-primary-500 text-white shadow-lg"
                        : "bg-surface-200 dark:bg-surface-700 text-surface-700 dark:text-surface-300"
                    )}>
                      {getServiceIcon(service.icon)}
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {activeServiceData && (
          <motion.div
            key={activeServiceData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-surface-800 rounded-3xl shadow-neumorphic overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {activeServiceData.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 mb-6">
                  {activeServiceData.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {activeServiceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded-full mr-3 mt-0.5 shadow-sm">
                        <Check className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                      </span>
                      <span className="text-surface-700 dark:text-surface-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-medium">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="relative h-64 lg:h-auto lg:aspect-auto overflow-hidden">
                <img 
                  src={activeServiceData.image} 
                  alt={activeServiceData.title}
                  className="absolute inset-0 h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
