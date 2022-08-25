/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"]
    },
    backgroundImage: {
      'bg-image': "url('../src/assets/bg.png')",
    },

    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
