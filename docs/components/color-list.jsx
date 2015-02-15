/** @jsx React.DOM */

var React = require('react');

var ColorListItem = require('./color-list-item.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      isEditing: false
    }
  },

  toggleEdit: function() {
    var isEditing = !this.state.isEditing;
    this.setState({ isEditing: isEditing });
  },

  updateColors: function(colors) {
    this.props.updateColors(colors);
  },

  renderItem: function(key, i) {
    var self = this;
    var color = this.props.colors[i];
    var updateColor = function(hex) {
      var colors = self.props.colors;
      colors[i] = hex;
      self.updateColors(colors);
    };
    var removeColor = function() {
      var colors = self.props.colors;
      colors.splice(i, 1);
      self.updateColors(colors);
    };
    return (
      <li>
        <ColorListItem color={color}
          isEditing={this.state.isEditing}
          removeColor={removeColor}
          updateColor={updateColor}
          toggleEdit={this.toggleEdit} />
      </li>
    )
  },

  render: function() {
    var colors = this.props.colors;
    var isEditing = this.props.isApp ? this.state.isEditing : false;
    var style = {
      width: isEditing ? '20rem' : '6rem',
      transition: 'width .2s ease-out',
    }
    var overlayStyle = {
      display: isEditing ? '' : 'none'
    };
    return (
      <div>
        <div className="fixed top-0 right-0 bottom-0 left-0 z1"
          style={overlayStyle}
          onClick={this.toggleEdit} />
        <ul className="relative z1 list-reset mb0" style={style}>
          {colors.map(this.renderItem)}
        </ul>
      </div>
    )
  }

});

