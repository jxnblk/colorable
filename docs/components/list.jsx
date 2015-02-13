/** @jsx React.DOM */

var React = require('react');
var Color = require('color');

module.exports = React.createClass({

  updateColor: function(e) {
    var colors = this.props.colors;
    var color = e.target.value;
    var i = e.target.id;
    colors[i] = color;
    //this.setState({ colors: colors });
    this.props.handleChange(colors);
  },

  removeColor: function(e) {
    var i = e.target.dataset.index;
    var colors = this.props.colors;
    colors.splice(i, 1);
    this.props.handleChange(colors);
  },

  addColor: function(e) {
    e.preventDefault();
    var value = e.target[0].value;
    e.target[0].value = '';
    var colors = this.props.colors;
    colors[colors.length] = value;
    this.props.handleChange(colors);
  },

  renderItem: function(key, i) {
    var color = this.props.colors[i];
    var light = Color(color).light();
    var style = {
      height: '5rem',
      color: light ? '#111' : 'white',
      backgroundColor: color
    };
    var inputClass = 'bold full-width m0 not-rounded field-transparent ' + (light ? 'black' : 'white');
    var buttonClass = 'h3 button button-narrow button-muted ' + (light ? 'black' : 'white');
    return (
      <li className="" style={style}>
        <div className="flex flex-stretch">
          <input type="text"
            id={i}
            className={inputClass}
            value={color}
            onChange={this.updateColor} />
          <a href="#!"
            data-index={i}
            onClick={this.removeColor}
            className={buttonClass}
            title="Remove color">
              &times;
          </a>
        </div>
      </li>
    )
  },

  render: function() {
    var colors = this.props.colors;
    console.log('list', colors[0]);
    return (
      <div>
        <ul className="list-reset">
          {colors.map(this.renderItem)}
        </ul>
        <form className="p2" onSubmit={this.addColor}>
          <label className="h5 bold block">Add Color</label>
          <div className="flex">
            <input type="text" className="flex-auto mb0 mr1 field-dark"/>
            <button className="flex-none button button-blue">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }

});

