/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      'team-img': "url('/src/img/team.jpg')",
    },

    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
