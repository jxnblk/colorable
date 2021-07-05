
var fs = require('fs')
var path = require('path')
var marked = require('marked')
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
  readme: readme,
  colors: colors,
  //baseUrl: '/',
  baseUrl: '/colorable/',
  routes: [
    '/colorable/',
    '/colorable/demos/',
    '/colorable/demos/text/',
    '/colorable/demos/matrix/',
  ],
  twitter: {
    text: 'Test color palettes for readable color combinations',
    script: '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");'
  }
}
