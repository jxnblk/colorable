
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

pkg.Humanize = Humanize;

template = _.template( fs.readFileSync(path.join(__dirname, './template.html')) );


colors = [
  '#7fdbff',
  '#0074d9',
  '#001f3f',
  '#39cccc',
  '#2ecc40',
  '#3d9970',
  '#01ff70',
  '#ffdc00',
  '#ff851b',
  '#ff4136',
  '#f012be',
  '#b10dc9',
  '#85144b',
  '#fff',
  '#ddd',
  '#aaa',
  '#111',
];

pkg.colors = colorcheck(colors, { compact: true });

html = template(pkg);


fs.writeFileSync(path.join(__dirname, './results.json'), JSON.stringify(pkg.colors, null, '  '));

fs.writeFileSync(path.join(__dirname, './index.html'), html);

