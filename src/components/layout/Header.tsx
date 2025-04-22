import React, { useEffect, useState } from 'react';
import { Menu, X, SunMedium, Moon } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import { cn } from '../../lib/utils';
import { MenuItem } from '../../types';
import Logo from '../ui/Logo';

const menuItems: MenuItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-surface-900/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {menuItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-surface-700 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-surface-200 dark:hover:bg-surface-800 transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <SunMedium className="w-5 h-5 text-accent-400" />
                ) : (
                  <Moon className="w-5 h-5 text-secondary-500" />
                )}
              </button>
              <a href="#contact" className="btn-primary">
                Book Now
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-surface-200 dark:hover:bg-surface-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunMedium className="w-5 h-5 text-accent-400" />
              ) : (
                <Moon className="w-5 h-5 text-secondary-500" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-[65px] z-40 bg-white dark:bg-surface-900 shadow-lg md:hidden transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <nav className="container py-5">
          <ul className="flex flex-col space-y-4">
            {menuItems.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 text-surface-700 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className="btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}