/** @jsx React.DOM */

var React = require('react');
var colorable = require('../../..');
var Row = require('./row.jsx');
var List = require('./list.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      colors: this.props.colors,
      matrix: colorable(this.props.colors),
      isEditing: false
    }
  },

  updateColors: function(colors) {
    this.setState({ colors: colors });
    this.updateMatrix();
  },

  updateMatrix: function() {
    var matrix = colorable(this.state.colors);
    this.setState({ matrix: matrix });
  },

  toggleEdit: function() {
    var isEditing = !this.state.isEditing;
    this.setState({ isEditing: isEditing });
  },

  renderRow: function(color) {
    return (
      <Row {...color} />
    )
  },

  render: function() {
    var matrix = this.state.matrix;
    var style = {
      height: this.state.isEditing ? '100vh' : '60vh',
      transition: 'height .3s ease-out'
    };
    var gridStyle = {
      overflow: this.state.isEditing ? 'auto' : 'hidden'
    };
    var listStyle = {
      width: '16rem',
      marginRight: this.state.isEditing ? '0' : '-16rem',
      transition: 'margin .2s ease-out'
    };
    var toggleButtonStyle = {
      display: this.state.isEditing ? 'none' : 'inline-block'
    };
    return (
      <div className="mb3">
        <div className="relative flex overflow-hidden" style={style}>
          <div className="flex-auto" style={gridStyle}>
            {matrix.map(this.renderRow)}
          </div>
          <div className="flex-none p2 overflow-auto white bg-dark-gray"
            style={listStyle}>
            <div className="flex flex-center mb2">
              <h3 className="flex-auto m0">Edit Colors</h3>
              <button className="h3 button button-nav-dark"
                title="Close edit panel"
                onClick={this.toggleEdit}>
                &times;
              </button>
            </div>
            <List {...this.props} handleChange={this.updateColors} />
          </div>
          <button className="absolute top-0 right-0 m2 button button-small button-nav-dark rounded bg-dark-gray"
            style={toggleButtonStyle}
            onClick={this.toggleEdit}>
            Edit Colors
          </button>
        </div>
        <p className="right-align h5 px2 mt1">
          Colors from
          <a href="//clrs.cc">mrmrs/colors</a>
        </p>
      </div>
    )
  }

});

