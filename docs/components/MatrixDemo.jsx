
var React = require('react')
//var qs = require('query-string')
//var _debounce = require('lodash').debounce
var colorable = require('../..')
var SuperModal = require('./SuperModal.jsx')
var MatrixRow = require('./MatrixRow.jsx')
var ColorList = require('./ColorList.jsx')
var Toolbar = require('./Toolbar.jsx')
var ColorPreview = require('./ColorPreview.jsx')

var MatrixDemo = React.createClass({

  getInitialState: function() {
    var params = {}
    console.log('query', this.props.query);
    if (typeof window !== 'undefined') {
      //params = qs.parse(window.location.search)
      //params = this.props.query
    }
    if (params.colors) {
      var colors = params.colors.split('.')
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

  //pushState: _debounce(function() {
  //  if (!window) return false
  //  var colorString = this.state.colors.join('.')
  //  var params = {
  //    colors: colorString,
  //  }
  //  var query = '?' + qs.stringify(params)
  //  window.history.pushState(params, 'Colorable', query)
  //}, 200),

  updateColors: function(colors) {
    this.setState({ colors: colors })
    this.updateMatrix()
  },

  updateThreshold: function(threshold) {
    this.setState({ threshold: threshold }, function() {
      this.updateMatrix()
    })
  },

  updateMatrix: function() {
    try {
      var matrix = colorable(this.state.colors, { threshold: this.state.threshold })
      this.setState({ matrix: matrix })
    } catch(e) {
    }
  },

  openModal: function(color) {
    this.setState({ modalColor: color })
  },

  closeModal: function() {
    this.setState({ modalColor: false })
  },

  componentDidUpdate: function() {
    //this.pushState()
  },

  renderRow: function(color, i) {
    return (
      <MatrixRow key={i}
        {...color}
        openModal={this.openModal} />
    )
  },

  render: function() {
    var matrix = this.state.matrix
    var colors = this.state.colors
    var threshold = this.state.threshold
    var modalIsOpen = !!this.state.modalColor
    var modalColor = this.state.modalColor
    var styles = {
      stage: {
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch'
      },
      matrix: {
      },
      list: {
      },
      modal: {
        color: this.state.modalColor ? this.state.modalColor.hex : '#111',
        backgroundColor: this.state.modalColor ? this.state.modalColor.combo.hex : 'white'
      }
    }

    var modalHeader = modalColor ? modalColor.hex + ' on ' + modalColor.combo.hex : 'Blank';

    return (
      <div className="mb4">
        <div className="white bg-black" style={styles.stage}>
          <div className="flex">
            <div className="flex-none" style={styles.list}>
              <ColorList {...this.props}
                colors={colors}
                updateColors={this.updateColors} />
            </div>
            <div className="flex-auto" style={styles.matrix}>
              {matrix.map(this.renderRow)}
            </div>
          </div>
        </div>
        <SuperModal
          header={modalHeader}
          onDismiss={this.closeModal}
          style={styles.modal}
          isOpen={modalIsOpen}>
          <ColorPreview {...modalColor} />
        </SuperModal>
      </div>
    )

  }

})

module.exports = MatrixDemo

