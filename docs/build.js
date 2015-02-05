
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var Humanize = require('humanize-plus');
var colors = require('colors.css/js/colors');
var watch = require('watch');
var blkfooter = require('blk-footer');
var Autobass = require('autobass');

var colorable = require('..');
var autobass = new Autobass();
var marked = require('marked');
var markedExample = require('marked-example');

function build() {

  var data = require('../package.json');

  var renderer = new marked.Renderer();
  renderer.code = markedExample();
  data.readme = marked(fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8'), { renderer: renderer });

  var result = [];
  var html = '';

  data.source = './docs';
  data.dest = '.';
  data.layout = './layout.html';

  data.Humanize = Humanize;

  var options = {
    compact: true,
    threshold: 0
  };

  data.colors = colorable(colors, options);

  data.aaColors = colorable(colors, { threshold: 4.5 });

  data.footer = blkfooter(data);

  data.routes = {
    home: {
      path: '/'
    }
  };

  autobass.init(data);
  autobass.compile();

};

build();

watch.watchTree('./', function(f) {
  if (typeof f === 'object') {
  }
  console.log('rebuild');
  build();
});

module.exports = build;

