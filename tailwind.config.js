/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'SoftBlue': 'hsl(231, 69%, 60%)',
        'SoftRed': 'hsl(0, 94%, 66%)',
        'GrayishBlue': 'hsl(229, 8%, 60%)',
        'VeryDarkBlue': 'hsl(229, 31%, 21%)',
        'white': '#fff',
        'black': '#000',
      }
    },
    
  },
  plugins: [],
}
