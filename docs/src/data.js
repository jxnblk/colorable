
var fs = require('fs');
var path = require('path');
var marked = require('marked');
var colors = require('colors.css/js/colors');

var data = require('../../package.json');
var readme = fs.readFileSync(path.join(__dirname, '../../README.md'), 'utf8');
data.readme = marked(readme);

data.colors = [];

Object.keys(colors).forEach(function(key) {
  data.colors.push(colors[key]);
});

module.exports = data;

