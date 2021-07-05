/**
 * Webpack config for the static documentation
 *
 * **This only builds the docs.** The main matter of this module,
 * index.js is useable as-is in node.js (and should be transpiled
 * to use in the browser from your project, in a way that is
 * outside the scope of colorable itself).
 */

const path = require('path')
const { AdditionalAssetsPlugin } = require('./docs/additional-assets-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const data = require('./docs/data')

const  postcssOptions = {
    plugins: [
        'postcss-import',
        'postcss-css-variables',
        'postcss-preset-env'
    ],
};

module.exports = {

  entry: './docs/entry.jsx',

  output: {
    filename: 'bundle.js',

    // Lay out files and URLs like GitHub Pages does:
    path: __dirname,
    publicPath: '/colorable/',
    libraryTarget: 'umd',   // So that we can consume bundle.js
                            // directly from this here
                            // webpack.config.js; see above
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
    new AdditionalAssetsPlugin(renderStaticPages)
  ]
}


/**
 * (Ab)use special-purpose code in docs/entry.jsx to preprocess
 * the github.io documentation w/ server-side rendering
 */
async function renderStaticPages () {
  const entryFunc = 
        this.getDefaultExport("bundle.js"), // The one that
                                            // docs/entry.jsx exports
        staticPages = {}
  if (typeof entryFunc !== 'function') {
    throw new Error(`Default export from ./docs/entry.jsx must be a function that returns HTML`);
    // This is achieved by setting libraryTarget: 'umd', above
  }

  await Promise.all(data.routes.map(async function(location) {
    const relUrl = location.replace(/^\/colorable/, ''),
          staticPath = path.join(relUrl, '/index.html')
    staticPages[staticPath] = await entryFunc({location, ...data})
  }))

  return staticPages
}
