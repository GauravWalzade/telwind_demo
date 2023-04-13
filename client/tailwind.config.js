/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
    },fontFamily:{
        'comf':['Comfortaa','sans-serif'],
        'lora':['Lora','serif'],
        'nun':['Nunito','sans-serif'],
        'libre':['Libre Baskerville','serif'],
        'monte':['Montserrat','sans-serif'],
        sans:['Nunito',...defaultTheme.fontFamily.sans],
      }
  },
  plugins: [],
}