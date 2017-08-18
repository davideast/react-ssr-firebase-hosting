const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [{
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  output: {
    filename: 'public/bundle.js',
    path: __dirname
  }
}];
