import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { formatCurrency } from '../../lib/utils';
import { PricingPlan } from '../../types';

const pricingPlans: PricingPlan[] = [
  // Monthly Plans
  {
    id: 'm1',
    name: 'Basic',
    price: 50000,
    description: 'Perfect for small homes',
    type: 'monthly',
    features: [
      'Weekly waste collection',
      'Basic home cleaning (bi-weekly)',
      'Electronic receipts',
      'Customer support',
      'x Dedicated account manager',
      'x Priority scheduling'
    ]
  },
  {
    id: 'm2',
    name: 'Standard',
    price: 120000,
    description: 'Ideal for families',
    type: 'monthly',
    isPopular: true,
    features: [
      'Twice-weekly waste collection',
      'Complete home cleaning (weekly)',
      'Electronic receipts',
      'Customer support',
      'Dedicated account manager',
      'x Priority scheduling'
    ]
  },
  {
    id: 'm3',
    name: 'Premium',
    price: 200000,
    description: 'For large homes & estates',
    type: 'monthly',
    features: [
      'Daily waste collection',
      'Complete home cleaning (2x weekly)',
      'Electronic receipts',
      'Priority customer support',
      'Dedicated account manager',
      'Priority scheduling'
    ]
  },
  // One-off Plans
  {
    id: 'o1',
    name: 'Basic Cleanup',
    price: 100000,
    description: 'One-time standard cleaning',
    type: 'one-off',
    features: [
      'Complete waste removal',
      'Basic deep cleaning',
      'Electronic receipt',
      'Customer support',
      'x Dedicated supervisor',
      'x Weekend availability'
    ]
  },
  {
    id: 'o2',
    name: 'Deep Clean',
    price: 180000,
    description: 'Thorough cleaning service',
    type: 'one-off',
    isPopular: true,
    features: [
      'Complete waste removal',
      'Comprehensive deep cleaning',
      'Electronic receipt',
      'Customer support',
      'Dedicated supervisor',
      'x Weekend availability'
    ]
  },
  {
    id: 'o3',
    name: 'Premium Service',
    price: 250000,
    description: 'Our most thorough service',
    type: 'one-off',
    features: [
      'Complete waste removal',
      'Premium deep cleaning',
      'Electronic receipt',
      'Priority customer support',
      'Dedicated supervisor',
      'Weekend availability'
    ]
  },
  // Custom Plans
  {
    id: 'c1',
    name: 'Small Office',
    price: 300000,
    description: 'For offices up to 10 people',
    type: 'custom',
    features: [
      'Daily waste collection',
      'Office cleaning (3x weekly)',
      'Electronic receipts',
      'Customer support',
      'Dedicated account manager',
      'x Priority scheduling'
    ]
  },
  {
    id: 'c2',
    name: 'Medium Business',
    price: 500000,
    description: 'For offices up to 30 people',
    type: 'custom',
    isPopular: true,
    features: [
      'Daily waste collection',
      'Office cleaning (5x weekly)',
      'Electronic receipts',
      'Priority customer support',
      'Dedicated account manager',
      'Priority scheduling'
    ]
  },
  {
    id: 'c3',
    name: 'Enterprise',
    price: 0,
    description: 'Custom solution for large businesses',
    type: 'custom',
    features: [
      'Custom waste management',
      'Custom cleaning schedule',
      'Detailed reporting',
      '24/7 customer support',
      'Account management team',
      'Custom SLA'
    ]
  }
];

type PlanType = 'monthly' | 'one-off' | 'custom';

export default function Pricing() {
  const [planType, setPlanType] = useState<PlanType>('monthly');

  const filteredPlans = pricingPlans.filter(plan => plan.type === planType);

  return (
    <section id="pricing" className="section bg-white dark:bg-surface-800">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Simple, Transparent Pricing</h2>
          <p className="text-surface-600 dark:text-surface-400 text-lg">
            Choose the plan that works for you. All plans include high-quality service and customer support.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-surface-100 dark:bg-surface-700 p-1 rounded-lg">
            <button
              onClick={() => setPlanType('monthly')}
              className={`px-4 py-2 rounded-md ${
                planType === 'monthly'
                  ? 'bg-white dark:bg-surface-800 shadow-sm'
                  : 'text-surface-600 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200'
              } transition-colors`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPlanType('one-off')}
              className={`px-4 py-2 rounded-md ${
                planType === 'one-off'
                  ? 'bg-white dark:bg-surface-800 shadow-sm'
                  : 'text-surface-600 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200'
              } transition-colors`}
            >
              One-Off
            </button>
            <button
              onClick={() => setPlanType('custom')}
              className={`px-4 py-2 rounded-md ${
                planType === 'custom'
                  ? 'bg-white dark:bg-surface-800 shadow-sm'
                  : 'text-surface-600 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200'
              } transition-colors`}
            >
              Business
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className={`overflow-hidden h-full border ${
                  plan.isPopular
                    ? 'border-primary-500 dark:border-primary-400'
                    : 'border-surface-200 dark:border-surface-700'
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-primary-500 text-white py-1 px-4 text-sm font-medium text-center">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-surface-600 dark:text-surface-400 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    {plan.price === 0 ? (
                      <div className="text-3xl font-bold">Custom Pricing</div>
                    ) : (
                      <>
                        <div className="text-3xl font-bold">
                          {formatCurrency(plan.price)}
                        </div>
                        <div className="text-surface-500 dark:text-surface-400">
                          {planType === 'monthly' ? 'per month' : 'one-time fee'}
                        </div>
                      </>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => {
                      const isIncluded = !feature.startsWith('x ');
                      const featureText = isIncluded ? feature : feature.substring(2);
                      
                      return (
                        <li key={featureIndex} className="flex items-start">
                          {isIncluded ? (
                            <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-surface-400 mr-2 flex-shrink-0" />
                          )}
                          <span className={isIncluded ? '' : 'text-surface-500 dark:text-surface-500'}>
                            {featureText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href="#contact"
                    className={`w-full text-center btn ${
                      plan.isPopular ? 'btn-primary' : 'btn-outline'
                    }`}
                  >
                    {plan.price === 0 ? 'Contact Us' : 'Get Started'}
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}