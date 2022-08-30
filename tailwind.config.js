/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"]
    },
  
    extend: {
      dropShadow: {
        'blue': '0px 4px 8px rgba(55, 125, 255, 0.5)',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
