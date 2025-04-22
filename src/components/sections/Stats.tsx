import React from 'react';
import { Recycle, Users, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { Stat } from '../../types';

const stats: Stat[] = [
  {
    value: '5000+',
    label: 'Tonnes Collected',
    icon: 'Recycle'
  },
  {
    value: '10,000+',
    label: 'Happy Clients',
    icon: 'Users'
  },
  {
    value: '200+',
    label: 'Commercial Partners',
    icon: 'Building'
  }
];

const getStatIcon = (iconName: string) => {
  switch (iconName) {
    case 'Recycle':
      return <Recycle className="w-10 h-10" />;
    case 'Users':
      return <Users className="w-10 h-10" />;
    case 'Building':
      return <Building className="w-10 h-10" />;
    default:
      return <Recycle className="w-10 h-10" />;
  }
};

export default function Stats() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-secondary-500 clip-path-slant">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                {getStatIcon(stat.icon)}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}