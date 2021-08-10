module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ocean': '#0b319c',
        'goldish': '#ffb90a',
      }, 
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      backgroundImage: theme => ({
        'amazon-advertising-gray': "url('../res/logos/amazon-advertising-gray.png')",
        'amazon-advertising': "url('../res/logos/amazon-advertising.png')",
        'amazon-gray': "url('../res/logos/amazon-gray.png')",
        'amazon': "url('../res/logos/amazon.png')",
        'jet-gray': "url('../res/logos/jet-gray.png')",
        'jet': "url('../res/logos/jet.png')",
        'shopify-gray': "url('../res/logos/shopify-gray.png')",
        'shopify': "url('../res/logos/shopify.png')",
        'walmart-gray': "url('../res/logos/walmart-gray.png')",
        'walmart': "url('../res/logos/walmart.png')",
        'woocommerce-gray': "url('../res/logos/woocommerce-gray.png')",
        'woocommerce': "url('../res/logos/woocommerce.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
