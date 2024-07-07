/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        customized_lime:"#6CBC50",
        customized_d_gray:"#454252",
        customized_l_gray:"#928990",
        customized_purble:"#49389B",
        customized1:"#BBC4C6",
        customized2:"#8B9EB2",
      }
    },
  },
  plugins: [],
}

