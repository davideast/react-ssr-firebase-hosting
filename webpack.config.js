const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [{
  entry: './src/index.js',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  output: {
    filename: 'public/bundle.js',
    path: __dirname
  }
}];
