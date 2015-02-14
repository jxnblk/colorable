/** @jsx React.DOM */

var React = require('react');
var Color = require('color');

module.exports = React.createClass({

  handleColorChange: function(e) {
    var hex = e.target.value;
    this.props.updateColor(hex, this.props.index);
  },

  removeColor: function(e) {
    e.stopPropagation();
    this.props.removeColor(this.props.index);
  },

  render: function() {
    var self = this;
    var color = this.props.color;
    var light = Color(color).light();
    var style = {
      height: '5rem',
      color: light ? '#111' : 'white',
      backgroundColor: color
    };
    var inputClass = 'bold full-width m0 not-rounded field-transparent ' + (light ? 'black' : 'white');
    var labelClass = 'h5 bold flex-auto ' + (light ? 'black' : 'white');
    var buttonClass = 'button button-narrow button-muted ' + (light ? 'black' : 'white');

    var handleClick = function(e) {
      self.props.openModal(color, self.props.index);
    };

    return (
      <div className="flex flex-center px1"
        style={style}>
        {/*
        <input type="text"
          className={inputClass}
          value={color}
          onChange={this.handleColorChange} />
        */}
        <div className={labelClass}>{color}</div>
        <a href="#!" className={buttonClass}
          onClick={handleClick}>
          Edit
        </a>
        {/*
        <a href="#!"
          onClick={this.removeColor}
          className={buttonClass}
          title="Remove color">
            &times;
        </a>
        */}
      </div>
    )
  }

});
