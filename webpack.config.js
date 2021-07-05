/**
 * Webpack config for the static documentation
 *
 * **This only builds the docs.** The main matter of this module,
 * index.js is useable as-is in node.js (and should be transpiled
 * to use in the browser from your project, in a way that is
 * outside the scope of colorable itself).
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./docs/data');

const  postcssOptions = {
    plugins: [
        'postcss-import',
        'postcss-css-variables',
        'postcss-preset-env'
    ],
};

module.exports = {

  entry: './docs/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    //publicPath: '/colorable/',
    libraryTarget: 'umd',
    globalObject: 'this'    // There are chunks of `self` in UMD
                            // by default for some reason
  },

  module: {
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        { loader: 'postcss-loader', options: { postcssOptions } }
      ]}
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: "docs.css" }),
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]

};
