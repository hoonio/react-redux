module.exports = {
  entry: "./app/tests/components/portfolio.spec.js",
  output: {
    path: './app/tests',
    filename: "spec.js",
    publicPath: '/tests'
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
  }
};
