module.exports = {
  entry: "./app/scripts/app.js",
  output: {
    path: require("path").resolve("./dist/public"),
    filename: "app.js",
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
