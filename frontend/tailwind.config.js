/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#967969',
        'primary-light': '#B8A08A',
        'primary-dark': '#6D594D',
        background: '#ffffff',
        'text-primary': '#000000',
        'text-secondary': '#4B4B4B',
        romance: '#F5F2EA',    
        westar: '#D0C7C2',       
        donkey: '#896B60',       
        spice: '#6C4A3F',        
        espresso: '#4A332D',  
      },
    },
  },
  plugins: [],
}

