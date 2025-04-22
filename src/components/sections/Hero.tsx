import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 image-overlay">
        <div 
          className={cn(
            "absolute inset-0 bg-center bg-cover bg-no-repeat",
            "bg-hero-pattern"
          )}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl text-white mb-6">
              Professional <span className="text-primary-400">Waste Management</span> & <span className="text-primary-400">Cleaning Services</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-surface-100 mb-8 md:leading-relaxed">
              WinKlin provides premium waste collection, disposal, and cleaning services
              for residential and commercial clients across Uganda. Experience cleanliness like never before.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="btn-primary text-base md:text-lg px-6 py-3 rounded-lg"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services" 
              className="btn-outline border-white text-white hover:bg-white/10 text-base md:text-lg px-6 py-3 rounded-lg"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Overlay gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-900/50 to-transparent z-10"></div>
    </section>
  );
}