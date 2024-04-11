/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  colors: {
    'tahiti': {
      light: '#67e8f9',
      DEFAULT: '#06b6d4',
      dark: '#0e7490',
    },
    fontFamily: {
      sans: ['Mona Sans', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Menlo', 'Monaco', 'monospace'],
      // Add more font families as needed
    },
  
  },
  plugins: [],
}