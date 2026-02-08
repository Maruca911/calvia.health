/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#87CEEB',
        'sky-blue-dark': '#5BB5D5',
        'mint': '#98FB98',
        'mint-dark': '#6BCB6B',
        'dark-teal': '#008080',
        'dark-teal-light': '#00A3A3',
        'subtle-grey': '#D3D3D3',
        'text-grey': '#6B7280',
        'text-dark': '#1F2937',
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body': ['18px', { lineHeight: '1.6' }],
        'body-sm': ['16px', { lineHeight: '1.6' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(152, 251, 152, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(152, 251, 152, 0.6)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
