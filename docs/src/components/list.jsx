/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      colors: this.props.colors
    }
  },

  updateColor: function(e) {
    var colors = this.state.colors;
    var color = e.target.value;
    var key = e.target.id;
    colors[key] = color;
    this.setState({ colors: colors });
    this.props.handleChange(this.state.colors);
  },

  renderItem: function(key) {
    var color = this.state.colors[key];
    return (
      <li>
        <input type="text"
          id={key}
          className="full-width field-dark"
          value={color}
          onChange={this.updateColor} />
      </li>
    )
  },

  render: function() {
    var colors = this.state.colors;
    return (
      <ul className="list-reset">
        {Object.keys(colors).map(this.renderItem)}
      </ul>
    )
  }

});

