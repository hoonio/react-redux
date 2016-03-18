module.exports = {
  entry: "./app/scripts/app.js",
  output: {
    path: './dist/public/scripts',
    filename: "app.js",
    publicPath: '/scripts'
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
