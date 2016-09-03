// webpack.config.js
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './jsx/type_selection.jsx',

  output: {
    filename: 'assistant.js',
    path: __dirname + '/js/'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
};
