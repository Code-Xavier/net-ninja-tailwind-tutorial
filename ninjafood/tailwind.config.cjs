/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2d5',
          200: '#888883'
        } 
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  plugins: [],
}
