
var React = require('react');
var Color = require('color');

var HslSliders = require('react-hsl-sliders');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      id: '',
    }
  },

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
    if (!color.match(/^\#/)) {
      console.log('no #');
      color = '#' + color;
    }
    try {
      var light = Color(color).light();
    } catch(e) {
      var light = true; 
    }
    var isEditing = this.props.isEditing;
    var style = {
      height: '5rem',
      color: light ? '#111' : 'white',
      backgroundColor: color,
    };
    var disclosureStyle = {
      display: isEditing ? '' : 'none'
    };
    var inputStyle = {
      height: '1.75rem'
    };
    var buttonStyle = inputStyle;
    return (
      <div className="flex flex-column px1"
        style={style}>
        <div className="flex-auto flex flex-center">
          <label htmlFor={this.props.id + '-hex'} className="hide">{this.props.itemId}</label>
          <input type="text"
            id={this.props.id + '-hex'}
            className="h5 bold block full-width m0 field-transparent"
            style={inputStyle}
            value={color}
            onChange={this.handleChange}
            onFocus={this.edit}/>
          <div style={disclosureStyle}>
            <button className="h3 button-small button-muted"
              style={buttonStyle}
              title="Remove Color"
              tabIndex="-1"
              onClick={this.props.removeColor}>
              &times;
            </button>
          </div>
        </div>
        <div className="flex-auto" style={disclosureStyle}>
          <HslSliders
            id={this.props.id + '-hsl'}
            value={color}
            tabIndex="-1"
            hideValues={true}
            onChange={this.props.updateColor} />
        </div>
      </div>
    )
  }

});
