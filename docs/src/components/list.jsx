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

  removeColor: function(e) {
    var key = e.target.dataset.key;
    var colors = this.state.colors;
    console.log('remove', key);
    delete colors[key];
    this.setState({ colors: colors });
    this.props.handleChange(this.state.colors);
  },

  renderItem: function(key) {
    var color = this.state.colors[key];
    return (
      <li className="flex flex-stretch">
        <input type="text"
          id={key}
          className="full-width m0 field-dark"
          value={color}
          onChange={this.updateColor} />
        <a href="#!"
          data-key={key}
          onClick={this.removeColor}
          className="h3 button button-narrow button-nav-dark"
          title="Remove color">
            &times;
        </a>
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

