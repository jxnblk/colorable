/** @jsx React.DOM */

var React = require('react');
var Color = require('color');

module.exports = React.createClass({

  addColor: function(e) {
    e.preventDefault();
    var value = e.target[0].value;
    e.target[0].value = '';
    var colors = this.props.colors;
    colors[colors.length] = value;
    this.props.handleChange(colors);
  },


  render: function() {
    var formClass = this.props.className += ' flex flex-center';
    return (
      <form className={formClass} onSubmit={this.addColor}>
        <label className="h5 bold mr1">Add Color</label>
        <input type="text" className="flex-auto mb0 mr1 field-dark"/>
        <button className="flex-none button button-blue">
          Add
        </button>
      </form>
    )
  }

});
