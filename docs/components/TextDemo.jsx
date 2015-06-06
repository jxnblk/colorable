
var React = require('react')
var _debounce = require('lodash').debounce
var qs = require('query-string')
var colorable = require('../..')

var ColorPreview = require('./ColorPreview.jsx')
var ForegroundBackgroundForm = require('./ForegroundBackgroundForm.jsx')
var Footer = require('./Footer.jsx')

module.exports = React.createClass({

  getInitialState: function() {
    return {
      foreground: '#AACCFF',
      background: '#222233',
    }
  },

  pushState: _debounce(function() {
    if (!window) return false
    var query = '?' + qs.stringify(this.state)
    window.history.pushState(this.state, 'Colorable', query)
  }, 200),

  setForeground: function(hex) {
    this.setState({ foreground: hex }, this.pushState)
  },

  setBackground: function(hex) {
    this.setState({ background: hex }, this.pushState)
  },

  componentDidMount: function() {
    if (window) {
      var params = qs.parse(window.location.search)
      this.setState(params)
    }
  },

  render: function() {
    var self = this
    var foreground = this.state.foreground
    var background = this.state.background
    try {
      var color = colorable([foreground, background])[0]
      color.combo = color.combinations[0]
    } catch(e) {
      var color = {
        combo: {
          contrast: 0
        }
      }
    }
    var styles = {
      container: {
        color: foreground,
        backgroundColor: background,
        minHeight: '100vh'
      },
      inner: {
        maxWidth: '56rem',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      preview: {
        minHeight: '70vh',
        boxSizing: 'border-box'
      },
      controls: {
        minHeight: '30vh',
        boxSizing: 'border-box',
      }
    }
    return (
      <div style={styles.container}>
        <div style={styles.inner}>
          <div className="flex flex-center px2 py3"
            style={styles.preview}>
            <ColorPreview {...color} />
          </div>
          <div className="px2 py3"
            style={styles.controls}>
            <ForegroundBackgroundForm
              {...this.props}
              {...this.state}
              setForeground={this.setForeground}
              setBackground={this.setBackground}
              />
          </div>
        </div>
      </div>
    )
  }

})

