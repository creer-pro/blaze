module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ocean': '#0b319c',
        'goldish': '#ffb90a'
      }, 
      fontFamily: {
        'montserrat': ['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
