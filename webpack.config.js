/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './index.js',
  context: path.join(__dirname, 'src'), //Entry folder for entry prop
  devtool: 'inline-sourcemap',
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js.?$/,
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-decorators-legacy', 'transform-class-properties'],
      },
    }],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.min.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },    
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false,
    })
  );

  config.devtool = false;
}

module.exports = config;