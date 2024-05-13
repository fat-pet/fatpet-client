module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"  
  ],
  theme: {
    extend: {
      screens: {
        'xxsm' : '400px',
        'xsm' : '420px',
        'sm': '480px',
      },
      height:{
        'layout-main' : '92%',
        'layout-footer' : '8%'
      }
    },
  },
  plugins: [],
}