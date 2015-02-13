/** @jsx React.DOM */

var React = require('react');
var colorable = require('../..');
var Row = require('./row.jsx');
var List = require('./list.jsx');

var CssLinkForm = require('./css-link-form.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      colors: this.props.colors,
      matrix: colorable(this.props.colors),
      isEditing: true
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
    var colors = this.state.colors;
    var isEditing = this.state.isEditing;
    console.log('matrix', colors[0]);
    var style = {
      height: isEditing ? '100vh' : '60vh',
      position: isEditing ? 'fixed' : '',
      top: isEditing ? '1rem' : '',
      transition: 'height .3s ease-out',
      paddingTop: '3rem',
      boxSizing: 'border-box'
    };
    var gridStyle = {
      //overflow: this.state.isEditing ? 'auto' : 'hidden'
    };
    var listStyle = {
      width: '16rem',
      marginLeft: this.state.isEditing ? '0' : '-16rem',
      transition: 'margin .2s ease-out'
    };
    var toggleButtonStyle = {
      //display: this.state.isEditing ? 'none' : 'inline-block'
    };
    var toolbarStyle = {
      top: isEditing ? '' : '-3rem',
    };
    return (
      <div className="mb3">
        <div className="fixed top-0 left-0 right-0 flex flex-stretch white bg-dark-gray" style={toolbarStyle}>
          <div className="flex-auto px2 py2">Colorable</div>
          <div className="px2 py1">
            <button className="button button-small button-nav-dark"
              style={toggleButtonStyle}
              onClick={this.toggleEdit}>
              Close App
            </button>
          </div>
        </div>
        <div className="relative overflow-y-auto top-0 right-0 bottom-0 left-0 white bg-darken-4" style={style}>
          <div className="flex">
            <div className="flex-none" style={listStyle}>
              <List {...this.props} colors={colors} handleChange={this.updateColors} />
              <hr />
              <CssLinkForm {...this.props} className="mt4" handleChange={this.updateColors} />
            </div>
            <div className="flex-auto overflow-x-auto" style={gridStyle}>
              {matrix.map(this.renderRow)}
            </div>
          </div>
          <button className="absolute top-0 right-0 m2 button button-small button-nav-dark rounded bg-dark-gray"
            style={toggleButtonStyle}
            onClick={this.toggleEdit}>
            Toggle App
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

