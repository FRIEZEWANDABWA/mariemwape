/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf7f0',
          100: '#faebd7',
          200: '#f4d4ae',
          300: '#ecb87a',
          400: '#e39544',
          500: '#dc7b1f',
          600: '#cd6515',
          700: '#aa4f13',
          800: '#884016',
          900: '#6f3515',
        },
        earth: {
          50: '#f9f7f4',
          100: '#f0ebe2',
          200: '#e0d5c7',
          300: '#cbb8a4',
          400: '#b59a7e',
          500: '#a08264',
          600: '#8b6f56',
          700: '#735c49',
          800: '#5e4c3e',
          900: '#4d3f35',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}