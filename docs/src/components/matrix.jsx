/** @jsx React.DOM */

var React = require('react');
var qs = require('query-string');
var colorable = require('../../..');

var Modal = require('./modal.jsx');
var SuperModal = require('./super-modal.jsx');

var MatrixRow = require('./matrix-row.jsx');
var ColorList = require('./color-list.jsx');
var Toolbar = require('./toolbar.jsx');
var ColorPreview = require('./color-preview.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    var params = {};
    if (typeof window !== 'undefined') {
      params = qs.parse(window.location.search);
    }
    if (params.colors) {
      var colors = params.colors.split('.');
    } else {
      var colors = this.props.colors
    }
    return {
      colors: colors,
      matrix: colorable(colors),
      threshold: 0,
      modalColor: false,
    }
  },

  pushState: function() {
    if (!window) return false;
    var colorString = this.state.colors.join('.');
    var params = {
      mode: this.props.isApp ? 'app' : '',
      colors: this.props.isApp ? colorString : '',
    };
    var query = '?' + qs.stringify(params);
    window.history.pushState(params, 'Colorable', query);
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
    try {
      var matrix = colorable(this.state.colors, { threshold: this.state.threshold });
      this.setState({ matrix: matrix });
    } catch(e) {
    }
  },

  openModal: function(color) {
    this.setState({ modalColor: color });
  },

  closeModal: function() {
    this.setState({ modalColor: false });
  },

  componentDidUpdate: function() {
    this.pushState();
  },

  renderRow: function(color) {
    return (
      <MatrixRow {...color} openModal={this.openModal} />
    )
  },

  render: function() {
    var matrix = this.state.matrix;
    var colors = this.state.colors;
    var isApp = this.props.isApp;
    var threshold = this.state.threshold;
    var modalIsOpen = !!this.state.modalColor;
    var modalColor = this.state.modalColor;
    var modalStyle = {
      color: this.state.modalColor ? this.state.modalColor.hex : '#111',
      backgroundColor: this.state.modalColor ? this.state.modalColor.combo.hex : 'white',
    };

    var style = {
      height: isApp ? '100vh' : '60vh',
      position: isApp ? 'fixed' : '',
      transition: 'height .3s ease-out',
      boxSizing: 'border-box'
    };
    var gridStyle = {
      marginTop: isApp ? '3.25rem' : '',
      transition: 'margin .2s ease-out'
    };
    var listStyle = {
      marginTop: isApp ? '3.25rem' : '',
      marginLeft: isApp ? '0' : '-6rem',
      transition: 'margin .2s ease-out'
    };
    var toggleButtonStyle = {
      display: isApp ? 'none' : 'block',
    };
    var bottomBarStyle = {
      display: isApp ? '' : 'none'
    };

    var modalHeader = modalColor ? modalColor.hex + ' on ' + modalColor.combo.hex : 'Blank';

    return (
      <div className="relative mb3">
        <Toolbar {...this.props}
          isApp={isApp}
          threshold={threshold}
          updateThreshold={this.updateThreshold}
          handleChange={this.updateColors}
          />
        <div className="relative overflow-y-auto top-0 right-0 bottom-0 left-0 z1 white bg-dark-gray" style={style}>
          <div className="flex">
            <div className="flex-none" style={listStyle}>
              <ColorList {...this.props}
                colors={colors}
                updateColors={this.updateColors} />
            </div>
            <div className="flex-auto overflow-x-auto" style={gridStyle}>
              {matrix.map(this.renderRow)}
            </div>
          </div>
        </div>
        <SuperModal
          header={modalHeader}
          onDismiss={this.closeModal}
          style={modalStyle}
          isOpen={modalIsOpen}>
          <ColorPreview {...modalColor} />
        </SuperModal>
        <div className="flex flex-center py1">
          <div className="flex-auto px2">
            <button className="button button-small button-light-gray"
              style={toggleButtonStyle}
              onClick={this.props.toggleApp}>
              View Demo
            </button>
          </div>
          <p className="h5 px2">
            Colors from
            <a href="//clrs.cc">mrmrs/colors</a>
          </p>
        </div>
      </div>
    )

  }

});

