
var fs = require('fs')
var path = require('path')
var marked = require('marked')
var cssnext = require('cssnext')
var colors = require('colors.css')

var pkg = require('../package.json')
var md = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8')
var readme = marked(md)

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
        }
      }
    }
  }),
  readme: readme,
  colors: Object.keys(colors).map(function(key) { return colors[key] }),
  routes: [
    '/'
  ]
}

