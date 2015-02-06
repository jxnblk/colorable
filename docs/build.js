
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var colors = require('colors.css/js/colors');
var blkfooter = require('blk-footer');
var Autobass = require('autobass');
var cheerio = require('cheerio');
var marked = require('marked');
var markedExample = require('marked-example');

var colorable = require('..');
var autobass = new Autobass();

function build() {

  var data = require('../package.json');

  function parseReadme() {
    var renderer = new marked.Renderer();
    renderer.code = markedExample();
    var readme = marked(fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8'), { renderer: renderer });
    var $ = cheerio.load(readme);
    var h1 = $('h1').first();
    var p1 = $('p').first();
    if (_.kebabCase(h1.html()) == data.name) {
      h1.remove();
    }
    if (p1.html() == data.description) {
      p1.remove();
    }
    data.readme = $.html();
  }

  parseReadme();

  var result = [];
  var html = '';

  data.source = './docs';
  data.dest = '.';
  data.layout = './layout.html';

  data.grid = require('./partials/grid');
  data.matrix = require('./partials/matrix');

  var options = {
    compact: true,
    threshold: 0
  };

  data.colors = colorable(colors, options);
  data.aaColors = colorable(colors, { threshold: 4.5 });
  data.footer = blkfooter(data);

  data.routes = {
    home: { path: '/' }
  };

  autobass.init(data);
  autobass.compile();

};

build();

module.exports = build;

