/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-color":"#F6F6F6",
        "text-color-head":'#989898',
        "text-name":"#3C3C3C",
        "upcoming-text":"#323335"
      }
    },
  },
  plugins: [],
}
