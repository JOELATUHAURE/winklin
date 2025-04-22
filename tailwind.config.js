/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6F7F4',
          100: '#CCEFE8',
          200: '#99DFD1',
          300: '#66D0BA',
          400: '#33C0A3',
          500: '#00A896', // main primary
          600: '#00867A',
          700: '#00655D',
          800: '#004341',
          900: '#002220',
        },
        secondary: {
          50: '#E6F0F5',
          100: '#CCE1EB',
          200: '#99C3D7',
          300: '#66A4C3',
          400: '#3386AF',
          500: '#05668D', // main secondary
          600: '#045271',
          700: '#033E55',
          800: '#022939',
          900: '#01151C',
        },
        accent: {
          50: '#FEF4E6',
          100: '#FDE9CC',
          200: '#FBD399',
          300: '#F9BD66',
          400: '#F8A833',
          500: '#F79824', // main accent
          600: '#DE7B06',
          700: '#A85C05',
          800: '#713E03',
          900: '#391F02',
        },
        success: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          500: '#4CAF50',
          700: '#388E3C',
        },
        warning: {
          50: '#FFF8E1',
          100: '#FFECB3',
          500: '#FFC107',
          700: '#FFA000',
        },
        error: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          500: '#F44336',
          700: '#D32F2F',
        },
        surface: {
          50: '#FFFFFF',
          100: '#F8F9FA',
          200: '#F1F3F5',
          300: '#E9ECEF',
          400: '#DEE2E6',
          500: '#CED4DA',
          600: '#ADB5BD',
          700: '#6C757D',
          800: '#343A40',
          900: '#212529',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.7s ease-out',
        'pulse-slow': 'pulse-slow 3s infinite',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'neumorphic': '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
        'neumorphic-dark': '12px 12px 24px #1a1a1a, -12px -12px 24px #2c2c2c',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
