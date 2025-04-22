import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export default function Contact() {
  return (
    <section id="contact" className="section bg-surface-100 dark:bg-surface-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Contact & Support</h2>
          <p className="text-surface-600 dark:text-surface-400 text-lg">
            Have questions or ready to book a service? Get in touch with our team and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <div className="text-center p-6">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-surface-600 dark:text-surface-400 mb-4">
                  Our customer service team is available Monday to Saturday, 8am to 6pm.
                </p>
                <a 
                  href="tel:+256789123456" 
                  className="text-lg font-medium text-primary-600 dark:text-primary-400 hover:underline"
                >
                  +256 789 123 456
                </a>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <div className="text-center p-6">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-surface-600 dark:text-surface-400 mb-4">
                  Send us an email and we'll respond within 24 hours during business days.
                </p>
                <a 
                  href="mailto:info@winklin.com" 
                  className="text-lg font-medium text-primary-600 dark:text-primary-400 hover:underline"
                >
                  info@winklin.com
                </a>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <div className="text-center p-6">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-surface-600 dark:text-surface-400 mb-4">
                  Chat with our support team instantly through WhatsApp for immediate assistance.
                </p>
                <a 
                  href="https://wa.me/256789123456" 
                  className="text-lg font-medium text-primary-600 dark:text-primary-400 hover:underline"
                >
                  WhatsApp Support
                </a>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    >
                      <option value="">Select a service</option>
                      <option value="waste">Waste Management</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
                <div className="relative rounded-lg overflow-hidden mb-6 h-64">
                  <div className="absolute inset-0 flex items-center justify-center bg-surface-200 dark:bg-surface-700">
                    <p className="text-center px-4 text-surface-600 dark:text-surface-400">
                      Interactive map would display here
                    </p>
                  </div>
                  <img 
                    src="https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Map location"
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4">Office Address</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-surface-700 dark:text-surface-300">
                          Plot 123, Kampala Road<br />
                          Kampala, Uganda
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <p className="text-surface-700 dark:text-surface-300">
                        +256 789 123 456
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <p className="text-surface-700 dark:text-surface-300">
                        info@winklin.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-surface-600 dark:text-surface-400">Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-surface-600 dark:text-surface-400">Saturday:</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-surface-600 dark:text-surface-400">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}