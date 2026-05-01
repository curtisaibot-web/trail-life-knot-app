/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trail-red': '#C41E3A',
        'trail-blue': '#003DA5',
        'forest-green': '#2D5016',
        'earthy-brown': '#8B6F47',
        'parchment': '#F5E6D3',
        'campfire': '#D4A574',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'wood-texture': "url('data:image/svg+xml,...')",
        'forest-gradient': 'linear-gradient(135deg, #2D5016 0%, #1a3a0a 100%)',
      },
    },
  },
  plugins: [],
}
