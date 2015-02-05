
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var Humanize = require('humanize-plus');
var clrs = require('colors.css/js/colors');
var blkfooter = require('blk-footer');
//var autobass = require('autobass');

var colorcheck = require('..');

var pkg = require('../package.json');

var template;
var colors = [];
var result = [];
var html = '';

pkg.Humanize = Humanize;

template = _.template( fs.readFileSync(path.join(__dirname, './template.html')) );

_.forIn(clrs, function(val, key) {
  colors.push(val);
});

var options = {
  compact: true,
  threshold: 0
};

pkg.colors = colorcheck(colors, options);

pkg.footer = blkfooter(pkg);

html = template(pkg);

fs.writeFileSync(path.join(__dirname, '../index.html'), html);

