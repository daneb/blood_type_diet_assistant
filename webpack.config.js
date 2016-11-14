// webpack.config.js
var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'assistant.js',
    path: __dirname + '/js/'
  },


  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        exclude: /node_modules/, 
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};
