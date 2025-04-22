import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../../types';
import { generateStars } from '../../lib/utils';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Mukasa',
    role: 'Residential Client',
    content: 'WinKlin has transformed the way we handle waste in our community. Their punctual service and professional staff have made a real difference in keeping our neighborhood clean.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Sarah Nanyonga',
    role: 'Office Manager',
    content: 'We hired WinKlin for our office cleaning needs and have been thoroughly impressed. Their attention to detail and eco-friendly practices align perfectly with our company values.',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Robert Okello',
    role: 'Restaurant Owner',
    content: 'As a restaurant owner, proper waste management is crucial. WinKlin provides reliable service that keeps our premises clean and compliant with health regulations. Highly recommended!',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Grace Akello',
    role: 'Property Manager',
    content: 'Managing multiple properties requires dependable service providers. WinKlin has exceeded our expectations with their consistent quality and excellent communication.',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-surface-800">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-surface-600 dark:text-surface-400 text-lg">
            Don't just take our word for it. Hear from our satisfied clients about their experience with WinKlin.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevTestimonial}
              className="p-2 md:p-3 rounded-full bg-white dark:bg-surface-700 shadow-md hover:bg-surface-100 dark:hover:bg-surface-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-surface-700 dark:text-surface-300" />
            </button>
          </div>

          <div className="overflow-hidden px-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-surface-50 dark:bg-surface-900 rounded-xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center">{testimonials[activeIndex].name}</h3>
                    <p className="text-primary-600 dark:text-primary-400 text-center">{testimonials[activeIndex].role}</p>
                    <div className="flex mt-3">
                      {generateStars(testimonials[activeIndex].rating).map((type, index) => (
                        <span key={index}>
                          {type === 'full' && <Star className="w-5 h-5 text-accent-500 fill-accent-500" />}
                          {type === 'half' && (
                            <span className="relative">
                              <Star className="w-5 h-5 text-surface-300 dark:text-surface-600" />
                              <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                              </div>
                            </span>
                          )}
                          {type === 'empty' && <Star className="w-5 h-5 text-surface-300 dark:text-surface-600" />}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="text-4xl text-primary-500 mb-4">"</div>
                    <p className="text-surface-700 dark:text-surface-300 text-lg mb-6 italic">
                      {testimonials[activeIndex].content}
                    </p>
                    <div className="text-4xl text-primary-500 text-right">"</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextTestimonial}
              className="p-2 md:p-3 rounded-full bg-white dark:bg-surface-700 shadow-md hover:bg-surface-100 dark:hover:bg-surface-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-surface-700 dark:text-surface-300" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === activeIndex
                  ? 'bg-primary-500'
                  : 'bg-surface-300 dark:bg-surface-600 hover:bg-surface-400 dark:hover:bg-surface-500'
              } transition-colors`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}