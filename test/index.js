
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var Humanize = require('humanize-plus');

var colorcheck = require('..');

var template;
var colors;
var result;
var html;
var pkg;

pkg = require('../package.json');

pkg.percentage = function(n) {
  return Humanize.formatNumber(n*100) + '%';
};

template = _.template( fs.readFileSync(path.join(__dirname, './template.html')) );


colors = [
  '#001F3F',
  '#0074D9',
  '#7FDBFF',
  '#39CCCC',
  '#3D9970',
  '#2ECC40',
  '#01FF70',
  '#FFDC00',
];

pkg.colors = colorcheck(colors);

html = template(pkg);


fs.writeFileSync(path.join(__dirname, './results.json'), JSON.stringify(pkg.colors, null, '  '));

fs.writeFileSync(path.join(__dirname, './index.html'), html);

