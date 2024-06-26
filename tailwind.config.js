module.exports = {
  content: ['*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ocean': '#0b319c',
        'oceandeep': '#0a1a4a',
        'oceandark': '#081333',
        'goldish': '#ffb90a',
        'sand': '#facb57',
      }, 
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      backgroundImage: 
        theme => ({
          'amazon-advertising-gray': "url('../logos/amazon-advertising-gray.png')",
          'amazon-advertising': "url('../logos/amazon-advertising.png')",
          'amazon-gray': "url('../logos/amazon-gray.png')",
          'amazon': "url('../logos/amazon.png')",
          'jet-gray': "url('../logos/jet-gray.png')",
          'jet': "url('../logos/jet.png')",
          'shopify-gray': "url('../logos/shopify-gray.png')",
          'shopify': "url('../logos/shopify.png')",
          'walmart-gray': "url('../logos/walmart-gray.png')",
          'walmart': "url('../logos/walmart.png')",
          'woocommerce-gray': "url('../logos/woocommerce-gray.png')",
          'woocommerce': "url('../logos/woocommerce.png')",
      }),
    },
  },
  plugins: [],
}
