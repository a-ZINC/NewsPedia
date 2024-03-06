/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
    },
    colors: {
      'parent-bg': '#f7f7f7',
      'bg': '#ffffff',
      'heading': '#333333',
      'all-text': '#000000',
      'red-': '#DD534D',
      'date': '#434343',
      'para': '#4D4D4D',
      'dot-line': '#D2D2D2',
      'transparent': '#00000000',
      'menubg': '#495057',
      'menuheader': '#343a40',
      'menuheaderd': '#212529',
      'menulight': '#ced4da'


    },
    fontFamily: {
      work: ['"Work Sans"',...defaultTheme.fontFamily.sans],
      'serif': ["Poppins"],
    },
  },
  plugins: [],
};
