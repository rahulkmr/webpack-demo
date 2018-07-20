module.exports = {
  buildPath: 'dist',
  cssLoaders: [
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
      }
    },
    'sass-loader',
    'postcss-loader',
  ]
}
