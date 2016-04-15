const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['babel-polyfill', './app/scripts/app.js'],
    vendor: [
      'd3',
      'react',
      'react-dnd',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'reqwest'
    ]
  },
  output: {
    path: require("path").resolve("./dist/public"),
    filename: "app.js",
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
};
