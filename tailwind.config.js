/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#fffaf4", // helles, warmes Beige
          "coffee-light": "#f9f5f0", // Abschnitte mit leichtem Hintergrund
          "coffee-dark": "#6B4F3B", // Braun für Buttons und Headlines
          "coffee-darker": "#594130", // Dunkleres Braun für Hover
          "coffee-cream": "#C28F5C", // Creme/Braunakzent
          "coffee-text": "#2D1E12", // Text Primary
        },
        fontFamily: {
          sans: ["Inter", "Poppins", "Satoshi", "sans-serif"],
        },
        animation: {
          'steam': 'steam 2s ease-out infinite',
        },
        keyframes: {
          steam: {
            '0%': { transform: 'translateY(0) scale(0.1)', opacity: '0' },
            '15%': { opacity: '0.8' },
            '50%': { transform: 'translateY(-10px) scale(0.4)', opacity: '0.5' },
            '95%': { opacity: '0' },
            '100%': { transform: 'translateY(-20px) scale(0.1)', opacity: '0' },
          },
        },
        scale: {
          '102': '1.02',
        },
      },
    },
    plugins: [
      function({ addUtilities }) {
        const newUtilities = {
          '.animation-delay-300': {
            'animation-delay': '300ms',
          },
          '.animation-delay-600': {
            'animation-delay': '600ms',
          },
        }
        addUtilities(newUtilities)
      }
    ],
  };
  