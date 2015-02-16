/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  handleChange: function(e) {
    var value = e.target.value;
    this.props.updateThreshold(value);
  },

  render: function() {
    var self = this;
    var buttons = [
      { text: 'None', value: 0 },
      { text: 'AA Large', value: 3 },
      { text: 'AA', value: 4.5 },
      { text: 'AAA', value: 7 },
    ];
    var renderButton = function(button, i) {
      var checked = (button.value == self.props.threshold);
      var buttonClass = 'button button-small button-blue-outline ';
      if (i == 0) {
        buttonClass += 'rounded-left ';
      } else if (i == buttons.length - 1) {
        buttonClass += 'rounded-right ';
      } else {
        buttonClass += 'not-rounded ';
      }
      buttonClass += checked ? 'is-active' : '';
      return (
        <label>
          <input type="radio"
            value={button.value}
            checked={checked}
            onChange={self.handleChange}
            className="hide"/>
          <span className={buttonClass}>
            {button.text}
          </span>
        </label>
      );
    };
    var formClass = 'flex flex-center ';
    formClass += this.props.className;
    return (
      <form className={formClass}>
        <label className="h5 bold mr1 sm-show">Threshold</label>
        {buttons.map(renderButton)}
      </form>
    )
  }

});
