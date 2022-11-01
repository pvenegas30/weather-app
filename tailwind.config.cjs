module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

    },

    scale: {
      '80': '0.8',
      '100': '1',
      '120': '1.2',
      '135': '1.35',
      '150': '1.5',
      '165': '1.65',
      '175': '1.75',
      '185': '1.85',
    },
    
    fontSize: {
      xxs: '10px'
    }
  },
  plugins: [],
}

