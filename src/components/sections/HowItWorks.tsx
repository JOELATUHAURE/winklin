// src/sections/HowItWorks.tsx

import React, { useState, useRef, useEffect } from 'react';
import { PhoneCall, Calendar, Truck, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import SignupModal, { SignupData } from '../SignupModal';


const steps = [
  {
    id: 1,
    title: 'Sign Up',
    description: 'Register for an account and choose your preferred service package.',
    icon: PhoneCall,
    color: 'bg-accent-500'
  },
  {
    id: 2,
    title: 'Schedule',
    description: 'Set up your preferred dates and times for service delivery.',
    icon: Calendar,
    color: 'bg-secondary-500'
  },
  {
    id: 3,
    title: 'We Serve',
    description: 'Our professional team delivers the service with excellence.',
    icon: Truck,
    color: 'bg-primary-500'
  },
  {
    id: 4,
    title: 'You Relax',
    description: 'Enjoy a cleaner space while we handle the rest.',
    icon: ThumbsUp,
    color: 'bg-success-500'
  }
];

export default function HowItWorks() {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [userData, setUserData] = useState<SignupData | null>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);

  // When signup completes, scroll smoothly to the Schedule step
  useEffect(() => {
    if (userData && scheduleRef.current) {
      scheduleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [userData]);

  return (
    <section id="how-it-works" className="section bg-surface-100 dark:bg-surface-900 overflow-hidden">
      {/* Signup modal */}
      <SignupModal
        isOpen={isSignupOpen}
        services={steps.map(s => ({ id: String(s.id), title: s.title }))}
        onClose={() => setSignupOpen(false)}
        onComplete={data => setUserData(data)}
      />

      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-surface-600 dark:text-surface-400 text-lg">
            Using WinKlin services is easy. Follow these simple steps to get started and experience our premium services.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-surface-300 dark:bg-surface-700 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                // Attach ref to Schedule step
                ref={step.id === 2 ? scheduleRef : undefined}
                // Open signup modal when Sign Up step is clicked
                onClick={() => step.id === 1 && setSignupOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cursor-pointer`}
              >
                <Card className="text-center h-full">
                  <div className="mb-6">
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="mt-4 text-4xl font-bold font-display text-surface-400 dark:text-surface-600">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-surface-600 dark:text-surface-400">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fleet Tracking Section (unchanged) */}
        <div className="mt-20 bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-md mb-6">Track Our Service Fleet</h3>
              <p className="text-surface-700 dark:text-surface-300 mb-8">
                With our cutting-edge tracking system, you can monitor the location of our service vehicles in real-time. Know exactly when to expect our team at your location.
              </p>
              <div className="bg-white dark:bg-surface-800 p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">Live Updates</h4>
                  <div className="h-2 w-full bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary-500 rounded-full animate-pulse-slow"></div>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-surface-600 dark:text-surface-400">Vehicle ID:</span>
                    <span className="font-medium">WK-123</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-surface-600 dark:text-surface-400">Estimated arrival:</span>
                    <span className="font-medium">10:15 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-surface-600 dark:text-surface-400">Current location:</span>
                    <span className="font-medium">Nakasero Road</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center bg-surface-200 dark:bg-surface-700 rounded-xl">
                <p className="text-surface-600 dark:text-surface-400 text-center px-6">
                  [Interactive map would be displayed here showing live fleet locations]
                </p>
              </div>
              <div className="aspect-square w-full rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2035909/pexels-photo-2035909.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Map representation"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
