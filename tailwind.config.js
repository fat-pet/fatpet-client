module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"  
  ],
  theme: {
    extend: {
      screens: {
        'xsm' : '420px',
        'sm': '480px',
      }
    },
  },
  plugins: [],
}