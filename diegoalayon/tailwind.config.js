const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Global: {
          Moradul:{
            100:'#F3EDFF',
            200:'#E8DEFF',
            300:'#D2BFFF',
            400:'#B696FF',
            50:'#FAF8FF',
            500:'#8C5CFF',
            600:'#7145D6',
            700:'#5B39A8',
            800:'#44307A',
            850:'#372D5E',
            900:'#2C2643',
          },
          Neutral: {
            100: '#F2F2FA',
            200: '#E4E4F7',
            300: '#CBCBEB',
            400: '#ADADD6',
            50: '#F7F7FC',
            500: '#8383AD',
            600: '#62628A',
            700: '#434466',
            800: '#323252',
            850: '#262645',
            900: '#1A1A38',
          },
          Blue: {
            200: '#D1F1FF',
            300: '#ADE6FF',
            400: '#85DAFF',
            500: '#32BEFA',
            600: '#2097C9',
            700: '#2F7699',
            800: '#36526B',
          },
          Green: {
            100: '#E6FAF2',
            200: '#D2F5E7',
            300: '#B1EED5',
            400: '#8AE5C1',
            500: '#41CC94',
            600: '#30A375',
            700: '#2A7B5C',
            800: '#275252',
          }
        }
      },
      fontFamily: {
        'sfproDisplayRegular': 'sfpro-display-regular',
        'sfproDisplayBold': 'sfpro-display-bold',
        'html': ['sfpro-display-bold']
      }
    },
  },
  plugins: [
    plugin(function({addComponents, addBase, addUtilities, theme}){
      addComponents({
        'myClass': {}
      }),
      addBase({
        'html': {fontFamily: theme('fontFamily.sfproDisplayRegular'),
        'h1': {fontFamily: theme('fontFamily.sfproDisplayBold')}
        }
      })
    })
  ],
}
