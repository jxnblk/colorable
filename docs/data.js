
var fs = require('fs')
var path = require('path')
var marked = require('marked')
var cssnext = require('cssnext')
var clrs = require('colors.css')

var pkg = require('../package.json')
var md = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8')
var readme = marked(md)

var colors = Object.keys(clrs).map(function (key) {
  return clrs[key]
})

module.exports = {
  title: 'Colorable',
  description: pkg.description,
  version: pkg.version,
  css: cssnext([
    '@import "basscss";',
  ].join(' '), {
    compress: true,
    features: {
      colorRgba: false,
      rem: false,
      pseudoElements: false,
      customProperties: {
        variables: {
          'bold-font-weight': '500',
          'heading-font-weight': '500',
          'button-font-weight': '500',
          'button-font-sie': 'var(--h5)',
        }
      }
    }
  }),
  readme: readme,
  colors: colors,
  baseUrl: '/',
  // baseUrl: '/colorable',
  routes: [
    '/',
    '/demos',
    '/demos/text',
    '/demos/matrix',
  ]
}

