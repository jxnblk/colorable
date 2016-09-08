
var _ = require('lodash');
var Color = require('color');

var minimums = {
  aa: 4.5,
  aaLarge: 3,
  aaa: 7,
  aaaLarge: 4.5
};

var flattenColors = function(color, bg) {
  var alpha = color.alpha();

  return bg.clone().alpha(1).mix(color.clone().alpha(1), alpha);
};

module.exports = function(colors, options) {

  var arr = [];
  var results = [];
  var combinations = [];

  var options = options || {};

  _.defaults(options, {
    threshold: 0,
    compact: false,
    uniq: true
  });


  if (!Array.isArray(colors)) {
    if (typeof colors === 'object') {
      _.forIn(colors, function(val, key) {
        var color = Color(val);
        color.name = key;
        arr.push(color);
      });
      if (options.uniq) {
        arr = _.uniq(arr);
      }
    } else {
      console.error('Must provide an array or object');
      return false;
    }
  } else {
    if (options.uniq) {
      colors = _.uniq(colors);
    }
    colors.forEach(function(color) {
      arr.push(Color(color));
    });
  }

  arr.forEach(function(color) {
    var result = options.compact ? {} : _.clone(color);
    var colorHasAlpha = color.alpha() < 1;

    if (colorHasAlpha) {
      result.rgba = color.rgbaString();
    } else {
      result.hex = color.hexString();
    }

    if (color.name) { result.name = color.name; }
    result.combinations = [];
    arr.forEach(function(bg) {
      if (color === bg || bg.alpha() < 1) { return false; }
      var combination = options.compact ? {} : _.clone(bg);
      var contrastColor = colorHasAlpha ? flattenColors(color, bg) : color;

      combination.hex = bg.hexString();

      if (bg.name) { combination.name = bg.name; }

      combination.contrast = contrastColor.contrast(bg);
      combination.accessibility = {
        aa: combination.contrast >= minimums.aa,
        aaLarge: combination.contrast >= minimums.aaLarge,
        aaa: combination.contrast >= minimums.aaa,
        aaaLarge: combination.contrast >= minimums.aaaLarge,
      };
      if (combination.contrast > options.threshold) {
        result.combinations.push(combination);
      }
    });
    results.push(result);
  });

  return results;

};
