module.exports = {
  buildPath: 'dist',
  cssLoaders: [
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        modules: true,
        localIdentName: '[name]__[local]--[hash:base64:5]',
      }
    },
    'postcss-loader',
    'sass-loader',
  ]
}
