const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [{
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: 'public/bundle.js',
    path: __dirname
  }
}];
