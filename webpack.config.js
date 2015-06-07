
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./docs/data');

module.exports = {

  entry: './docs/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    //publicPath: '/colorable/',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]

};

