/** @jsx React.DOM */

var React = require('react');
var colorable = require('../..');
var Row = require('./row.jsx');
var List = require('./list.jsx');

var CssLinkForm = require('./css-link-form.jsx');
var AddColorForm = require('./add-color-form.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      colors: this.props.colors,
      matrix: colorable(this.props.colors)
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

  renderRow: function(color) {
    return (
      <Row {...color} />
    )
  },

  render: function() {
    var matrix = this.state.matrix;
    var colors = this.state.colors;
    var isEditing = this.props.isEditing;
    var style = {
      height: isEditing ? '100vh' : '60vh',
      position: isEditing ? 'fixed' : '',
      //top: isEditing ? '1rem' : '',
      transition: 'height .3s ease-out',
      //paddingTop: '3rem',
      boxSizing: 'border-box'
    };
    var gridStyle = {
      marginTop: isEditing ? '3.25rem' : '',
    };
    var listStyle = {
      width: '16rem',
      marginTop: isEditing ? '3.25rem' : '',
      marginLeft: isEditing ? '0' : '-16rem',
      transition: 'margin .2s ease-out'
    };
    var toggleButtonStyle = {
      display: isEditing ? 'none' : 'block',
    };
    var toolbarStyle = {
      top: isEditing ? '' : '-3.5rem',
      transition: 'top .2s ease-out',
    };
    return (
      <div className="mb3">
        <div className="fixed top-0 left-0 right-0 z2 flex flex-stretch flex-wrap white bg-dark-gray" style={toolbarStyle}>
          <div className="p2">Colorable</div>
          <div className="flex-auto" />
          <AddColorForm {...this.props} handleChange={this.updateColors} className="py1 mr2" />
          <CssLinkForm {...this.props} handleChange={this.updateColors} className="py1 mr2" />
          <div className="p1">
            <button className="button py1 button-gray"
              onClick={this.props.toggleEdit}>
              Done
            </button>
          </div>
        </div>
        <div className="relative overflow-y-auto top-0 right-0 bottom-0 left-0 z1 white bg-dark-gray" style={style}>
          <div className="flex">
            <div className="flex-none" style={listStyle}>
              <List {...this.props} colors={colors} handleChange={this.updateColors} />
            </div>
            <div className="flex-auto overflow-x-auto" style={gridStyle}>
              {matrix.map(this.renderRow)}
            </div>
          </div>
          <button className="absolute top-0 right-0 m2 button button-small button-nav-dark rounded bg-dark-gray"
            style={toggleButtonStyle}
            onClick={this.props.toggleEdit}>
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

