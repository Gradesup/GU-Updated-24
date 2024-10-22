const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js', // Use [contenthash] for cache busting
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // Modify this as needed based on your server setup
  },
  module: {
    rules: [
      // ... Other rules for handling JSX, CSS, etc.
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  devServer: {
    setupMiddlewares: (middlewares) => {
      // Configure your middlewares here
      middlewares.use(/* ... */);
    },
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    // ...other devServer options
  },
};