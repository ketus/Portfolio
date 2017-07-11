/* eslint-disable */
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './index.js',
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : false,
  module: {
    loaders: [{
      test: /\.js.?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-decorators-legacy', 'transform-class-properties'],
      },
    }],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'client.min.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },    
  plugins: debug ? [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false,
    }),
  ],
};