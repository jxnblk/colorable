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
    var style = {
      height: '5rem'
    };
    return (
      <div className="flex flex-stretch" style={style}>
        {this.props.combinations.map(this.renderChip)}
      </div>
    )
  }

});

