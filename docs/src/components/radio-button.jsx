/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      value: '',
      model: ''
    }
  },

  getInitialState: function() {
    return {
      checked: this.props.value == this.props.model
    }
  },

  handleChange: function(e) {
    this.props.onChange(value);
  },

  render: function() {
    var checked = this.state.checked;
    var buttonClass = 'button button-blue-outline';
    buttonClass += checked ? 'is-active' : '';
    return (
      <form onChange={this.handleChange}>
        <label>
          <input type="radio"
            ref={this.props.value}
            name="threshold-radio"
            checked={checked}
            onChange={this.handleChange}
            className="xhide" />
          <span className="button button-blue-outline rounded-left">
            All
          </span>
        </label>
        <label>
          <input type="radio"
            ref="4.5"
            name="threshold-radio"
            checked={checked}
            onChange={this.handleChange}
            className="hide" />
          <span className="button button-blue-outline not-rounded">
            AA
          </span>
        </label>
        <label>
          <input type="radio"
            ref="7"
            name="threshold-radio"
            checked={checked}
            onChange={this.handleChange}
            className="hide" />
          <span className="button button-blue-outline rounded-right">
            AAA
          </span>
        </label>
      </form>
    )
  }

});
