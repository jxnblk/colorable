/** @jsx React.DOM */

var React = require('react');
var Color = require('color');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      isOpen: false
    }
  },

  toggleForm: function() {
    var isOpen = !this.state.isOpen;
    this.setState({ isOpen: isOpen });
  },

  addColor: function(e) {
    e.preventDefault();
    var value = e.target[0].value;
    e.target[0].value = '';
    var colors = this.props.colors;
    colors[colors.length] = value;
    //this.setState({ isOpen: false });
    this.props.handleChange(colors);
  },

  render: function() {
    var formClass = this.props.className += ' flex flex-center';
    var isOpen = this.state.isOpen;
    var toggleStyle = {
      display: isOpen ? 'none' : ''
    };
    var formStyle = {
      display: isOpen ? '' : 'none'
    };
    return (
      <div>
        <button className="button-nav-dark" style={toggleStyle} onClick={this.toggleForm}>
          Add Color
        </button>
        <form className={formClass}
          style={formStyle}
          onSubmit={this.addColor}>
          <label className="hide h5 bold mr1">Add Color</label>
          <input type="text" className="flex-auto mb0 mr1 field-dark"/>
          <button className="flex-none button button-blue">
            Add
          </button>
        </form>
      </div>
    )
  }

});
