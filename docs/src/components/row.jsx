/** @jsx React.DOM */

var React = require('react');
var Chip = require('./chip.jsx');

module.exports = React.createClass({

  renderChip: function(combo) {
    var props = this.props;
    props.combo = combo;
    return (
      <Chip {...props} />
    )
  },

  render: function() {
    return (
      <div className="flex">
        {this.props.combinations.map(this.renderChip)}
      </div>
    )
  }

});

