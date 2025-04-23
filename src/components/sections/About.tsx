import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';
import { TeamMember } from '../../types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
 name: 'Mr. Godwin',
    role: 'CEO & Founder',
    bio: 'David oversees all operations and ensures our services are delivered with excellence.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Joel Atuhaire',
    role: 'Operations Manager',
    bio: 'Joel oversees all operations and ensures our services are delivered with excellence.',
    image: '/images/portfolio-img (1).png'

  },
  {
    id: '3',
    name: 'Grace Atieno',
    role: 'Sustainability Officer',
    bio: 'Grace leads our initiatives for environmentally responsible waste management practices.',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section id="about" className="section bg-white dark:bg-surface-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">About WinKlin</h2>
          <p className="text-surface-600 dark:text-surface-400 text-lg">
            We're on a mission to transform waste management and cleaning services in Uganda, creating a cleaner environment and sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-500/20 rounded-lg"></div>
              <div className="relative z-10 rounded-xl overflow-hidden aspect-video">
                
                <img 
  src="/images/winlin.jpeg" 
  alt="WinKlin team" 
  className="w-full h-full object-cover"
/>

              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="heading-md mb-6">Our Mission & Vision</h3>
            <p className="text-surface-700 dark:text-surface-300 mb-6">
              Founded in 2020, WinKlin started with a simple mission: to transform waste management and cleaning services in Uganda through innovation, reliability, and environmental responsibility.
            </p>
            <p className="text-surface-700 dark:text-surface-300 mb-8">
              Today, we serve thousands of residential and commercial clients across Kampala and surrounding areas, providing efficient waste collection and premium cleaning services that exceed expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-5 border border-surface-200 dark:border-surface-700">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Our Mission</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400">
                  To provide exceptional waste management and cleaning services while promoting environmental sustainability.
                </p>
              </Card>
              <Card className="p-5 border border-surface-200 dark:border-surface-700">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Our Vision</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400">
                  A cleaner Uganda where waste is properly managed and every space is pristine and healthy.
                </p>
              </Card>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="heading-md text-center mb-12">Meet Our Team</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={item}>
                <div className="group relative overflow-hidden rounded-xl aspect-square mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={cn(
                      "w-full h-full object-cover object-center",
                      "transition-transform duration-500 group-hover:scale-110"
                    )}
                  />
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-surface-900/90 via-surface-900/50 to-transparent",
                    "flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  )}>
                    <div className="p-6">
                      <p className="text-surface-200 mb-4">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-primary-600 dark:text-primary-400">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="bg-surface-100 dark:bg-surface-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="heading-md mb-6">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-400">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Excellence</h4>
              <p className="text-surface-600 dark:text-surface-400">
                We strive for excellence in every service we provide.
              </p>
            </div>
            <div>
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-400">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Innovation</h4>
              <p className="text-surface-600 dark:text-surface-400">
                We continuously innovate to improve our processes.
              </p>
            </div>
            <div>
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-400">
                  <path d="M12 3v12"></path>
                  <path d="m8 11 4 4 4-4"></path>
                  <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Sustainability</h4>
              <p className="text-surface-600 dark:text-surface-400">
                We are committed to environmentally friendly practices.
              </p>
            </div>
            <div>
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-400">
                  <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <circle cx="12" cy="10" r="2"></circle>
                  <line x1="8" y1="2" x2="8" y2="4"></line>
                  <line x1="16" y1="2" x2="16" y2="4"></line>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Community</h4>
              <p className="text-surface-600 dark:text-surface-400">
                We value our role in creating cleaner communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
