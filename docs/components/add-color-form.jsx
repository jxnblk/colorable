/** @jsx React.DOM */

var React = require('react');
var Color = require('color');

var Modal = require('./modal.jsx');

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
    var isOpen = this.state.isOpen;
    var wrapperClass = this.props.className + ' ';
    //wrapperClass += isOpen ? 'flex-auto' : '';
    console.log('color form', isOpen);
    return (
      <div className={wrapperClass}>
        <button className="button-nav-dark"
          onClick={this.toggleForm}>
          Add Color
        </button>
        <Modal isOpen={isOpen}
          onDismiss={this.toggleForm}
          header="Add Color">
          <form className=""
            onSubmit={this.addColor}>
            <label className="h5 bold block">Add Color</label>
            <input type="text" className="block full-width field-light"/>
            <button className="flex-none button button-blue">
              Add
            </button>
          </form>
        </Modal>
      </div>
    )
  }

});
