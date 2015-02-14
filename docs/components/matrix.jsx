/** @jsx React.DOM */

var React = require('react');
var colorable = require('../..');

var Modal = require('./modal.jsx');

var MatrixRow = require('./matrix-row.jsx');
var AddColorForm = require('./add-color-form.jsx');
var ColorList = require('./color-list.jsx');
var Toolbar = require('./toolbar.jsx');
var ColorPreview = require('./color-preview.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      colors: this.props.colors,
      matrix: colorable(this.props.colors),
      threshold: 0,
      modalColor: false
    }
  },

  updateColors: function(colors) {
    this.setState({ colors: colors });
    this.updateMatrix();
  },

  updateThreshold: function(threshold) {
    this.setState({ threshold: threshold }, function() {
      this.updateMatrix();
    });
  },

  updateMatrix: function() {
    var matrix = colorable(this.state.colors, { threshold: this.state.threshold });
    this.setState({ matrix: matrix });
  },

  openModal: function(color) {
    this.setState({ modalColor: color });
  },

  closeModal: function() {
    this.setState({ modalColor: false });
  },

  addColor: function(color) {
    var colors = this.state.colors;
    colors.push('#000');
    this.updateColors(colors);
  },

  renderRow: function(color) {
    return (
      <MatrixRow {...color} openModal={this.openModal} />
    )
  },

  render: function() {
    var matrix = this.state.matrix;
    var colors = this.state.colors;
    var isEditing = this.props.isEditing;
    var threshold = this.state.threshold;
    var modalIsOpen = !!this.state.modalColor;
    var modalColor = this.state.modalColor;
    var style = {
      height: isEditing ? '100vh' : '60vh',
      position: isEditing ? 'fixed' : '',
      transition: 'height .3s ease-out',
      boxSizing: 'border-box'
    };
    var gridStyle = {
      marginTop: isEditing ? '3.25rem' : '',
    };
    var listStyle = {
      width: '10rem',
      marginTop: isEditing ? '3.25rem' : '',
      marginLeft: isEditing ? '0' : '-10rem',
      transition: 'margin .2s ease-out'
    };
    var toggleButtonStyle = {
      display: isEditing ? 'none' : 'block',
    };
    var modalHeader = modalColor ? modalColor.hex + ' on ' + modalColor.combo.hex : 'Blank';
    return (
      <div className="mb3">
        <Toolbar {...this.props}
          isEditing={isEditing}
          threshold={threshold}
          updateThreshold={this.updateThreshold}
          handleChange={this.updateColors}
          />
        <div className="relative overflow-y-auto top-0 right-0 bottom-0 left-0 z1 white bg-dark-gray" style={style}>
          <div className="flex">
            <div className="flex-none" style={listStyle}>
              <ColorList {...this.props} colors={colors} handleChange={this.updateColors} />
              <div className="center p2">
                <button className="button-blue"
                  onClick={this.addColor}>
                  Add Color
                </button>
              </div>
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
        <Modal
          header={modalHeader}
          onDismiss={this.closeModal}
          flush={true}
          isOpen={modalIsOpen}>
            <ColorPreview {...modalColor} />
        </Modal>
        <p className="right-align h5 px2 mt1">
          Colors from
          <a href="//clrs.cc">mrmrs/colors</a>
        </p>
      </div>
    )
  }

});

