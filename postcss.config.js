module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-custom-media')({
      importFrom: {
        customMedia: {
          '--phone': '(max-width: 500px)'
        }//,
      //   customMedia: { '--small-viewport': '(max-width: 500px)' }
      // },
      // exportTo: 'src/BookCard/index.css'
    }})
  ]
};
