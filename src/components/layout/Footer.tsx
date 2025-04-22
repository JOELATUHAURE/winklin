import React from 'react';
import { Facebook, Twitter, Instagram, Send, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-900 text-surface-100 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo variant="light" className="mb-4" />
            <p className="text-surface-400 mb-6">
              Premium waste management and cleaning services for residential and commercial clients across Uganda.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-surface-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-surface-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-surface-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-surface-400 hover:text-primary-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-surface-400 hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-surface-400 hover:text-primary-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-surface-400 hover:text-primary-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-surface-400 hover:text-primary-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-surface-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-surface-400">+256 789 123 456</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-surface-400">info@winklin.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-surface-400">
                  Plot 123, Kampala Road, Kampala, Uganda
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-surface-400 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg bg-surface-800 border border-surface-700 py-2 px-4 pr-12 text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-primary-500 hover:text-primary-400 p-1"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-surface-500 text-sm">
              &copy; {year} WinKlin. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-surface-500">
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}