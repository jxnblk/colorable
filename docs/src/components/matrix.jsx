/** @jsx React.DOM */

var React = require('react');
var colorable = require('../../..');
var Row = require('./row.jsx');
var List = require('./list.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      colors: this.props.colors,
      matrix: colorable(this.props.colors)
    }
  },

  updateColors: function(colors) {
    this.setState({ colors: colors });
    this.updateMatrix();
  },

  updateMatrix: function() {
    var matrix = colorable(this.state.colors);
    this.setState({ matrix: matrix });
  },

  renderRow: function(color) {
    return (
      <div>
        <Row {...color} />
      </div>
    )
  },

  render: function() {
    var matrix = this.state.matrix;
    var style = {
      height: '80vh'
    };
    return (
      <div className="flex" style={style}>
        <div className="col-9 overflow-auto">
          {matrix.map(this.renderRow)}
        </div>
        <div className="p2 col-3 overflow-auto white bg-mid-gray">
          <h2>Color List</h2>
          <List {...this.props} handleChange={this.updateColors} />
        </div>
      </div>
    )
  }

});

