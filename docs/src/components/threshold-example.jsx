/** @jsx React.DOM */

var React = require('react');
var Chip = require('./chip.jsx');

module.exports = React.createClass({

  renderChip: function(chip) {
    console.log(chip.hex, chip.combo.hex);
    return (
      <Chip {...chip} />
    )
  },

  render: function() {
    var matrix = this.props.thresholdExample;
    var rows = [];
    var chips = [];
    matrix.forEach(function(color) {
      color.combinations.forEach(function(combo) {
        var chip = color;
        chip.combo = combo;
        chips.push(chip);
        combo = null;
      });
    });
    return (
      <div className="container px2 py3">
        <h2>Example: 4.5 threshold (Level AA)</h2>
        <div className="flex flex-wrap">
          {chips.map(this.renderChip)}
        </div>
      </div>
    )
  }

});

