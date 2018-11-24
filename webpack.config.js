const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('babel-register');

const config = {
  mode: 'development',
  entry: './script/src/index.js',
  output: {
    path: path.resolve(__dirname, 'script', 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules : [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      title: 'My project',
      style: path.resolve(__dirname),
      hash: true
    })
  ]
};

module.exports = config;