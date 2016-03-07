var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/main.js'
    ]
  },
  output: {
    path: './app',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
      loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
