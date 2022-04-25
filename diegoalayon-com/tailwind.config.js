const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sfproDisplayRegular': 'sfpro-display-regular',
        'sfproDisplayBold': 'sfpro-display-bold'
      }
    },
  },
  plugins: [
    plugin(function({addComponents, addBase, addUtilities, theme}){
      addComponents({
        'myClass': {}
      }),
      addBase({
        'body': {
          fontSize: theme('fontFamily.sfproDisplayBold')
        }
      })
    })
  ],
}
