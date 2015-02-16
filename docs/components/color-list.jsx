/** @jsx React.DOM */

var React = require('react');

var ColorListItem = require('./color-list-item.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      isEditing: false,
      colors: this.props.colors,
      focus: false
    }
  },

  toggleEdit: function() {
    var isEditing = !this.state.isEditing;
    this.setState({ isEditing: isEditing });
  },

  updateColors: function(colors) {
    this.props.updateColors(colors);
  },

  addColor: function(e) {
    var colors = this.state.colors;
    colors.push('#444');
    this.props.updateColors(colors);
    this.setState({ focus: this.state.colors.length - 1 });
  },

  renderItem: function(key, i) {
    var self = this;
    var color = this.state.colors[i];
    var updateColor = function(hex) {
      var colors = self.state.colors;
      colors[i] = hex;
      self.updateColors(colors);
    };
    var removeColor = function() {
      var colors = self.state.colors;
      colors.splice(i, 1);
      self.updateColors(colors);
    };
    var isEditing = this.props.isApp ? this.state.isEditing : false;
    var ref = 'color-' + i;
    var id = color;
    return (
      <li ref={ref} id={id}>
        <ColorListItem color={color}
          isEditing={isEditing}
          removeColor={removeColor}
          updateColor={updateColor}
          toggleEdit={this.toggleEdit} />
      </li>
    )
  },

  focusInput: function(i) {
    var li = this.refs['color-' + i].getDOMNode();
    var input = li.querySelector('input');
    input.focus();
    input.select();
  },

  componentDidUpdate: function() {
    if (this.state.focus) {
      this.focusInput(this.state.focus);
      this.setState({ focus: false });
    }
  },

  render: function() {
    var colors = this.state.colors;
    var isEditing = this.props.isApp ? this.state.isEditing : false;
    var style = {
      width: isEditing ? '20rem' : '6rem',
      transition: 'width .2s ease-out',
    }
    var overlayStyle = {
      display: isEditing ? '' : 'none'
    };
    var footerStyle = {
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
        <div className="relative z1 flex flex-center p1 white bg-dark-gray" style={footerStyle}>
          <button className="button-small button-gray"
            onClick={this.addColor}>
            Add Color
          </button>
          <div className="flex-auto" />
          <button className="button-small button-gray"
            onClick={this.toggleEdit}>
            Done
          </button>
        </div>
      </div>
    )
  }

});

