/** @jsx React.DOM */

var React = require('react');
var Color = require('color');

var HslForm = require('./hsl-form.jsx');

module.exports = React.createClass({

  handleChange: function(e) {
    var hex = e.target.value;
    this.props.updateColor(hex);
  },

  edit: function() {
    if (this.props.isEditing == false) {
      this.props.toggleEdit();
    }
  },

  render: function() {
    var color = this.props.color;
    try {
      var light = Color(color).light();
    } catch(e) {
      var light = true; 
    }
    var isEditing = this.props.isEditing;
    var style = {
      height: '6rem',
      color: light ? '#111' : 'white',
      backgroundColor: color,
    };
    var disclosureStyle = {
      display: isEditing ? '' : 'none'
    };
    return (
      <div className="flex flex-column px1"
        style={style}>
        <div className="flex-auto flex flex-center">
          <input type="text"
            className="h5 bold block full-width m0 field-transparent"
            value={color}
            onChange={this.handleChange}
            onFocus={this.edit}/>
          <div style={disclosureStyle}>
            <button className="h3 button-muted"
              title="Remove Color"
              tabIndex="-1"
              onClick={this.props.removeColor}>
              &times;
            </button>
          </div>
        </div>
        <div className="flex-auto" style={disclosureStyle}>
          <HslForm color={color} updateColor={this.props.updateColor} />
        </div>
      </div>
    )
  }

});
