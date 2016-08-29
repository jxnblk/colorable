
var React = require('react')
var _assign = require('lodash').assign

var SuperModal = React.createClass({

  getDefaultProps: function() {
    return {
      flush: false,
      style: {}
    }
  },

  close: function(e) {
    this.props.onDismiss(e)
  },

  render: function() {
    var isOpen = this.props.isOpen
    var header = this.props.header
    var styles = {
      container: _assign(this.props.style, {
        display: isOpen ? '' : 'none',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 4,
        overflow: 'auto',
        cursor: 'pointer'
      }),
      header: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
      },
      body: {
        position: 'relative',
        minWidth: '16rem',
        maxWidth: '48rem',
        margin: 'auto'
      }
    }

    //var containerClass = 'flex flex-center popin '
    //containerClass += this.props.flush ? '' : 'p2'

    return (
      <div className=''
        onClick={this.close}
        style={styles.container}>
        <div className="p2" style={styles.header}>
          <div className="flex flex-center">
            <div className="bold flex-auto">{header}</div>
            <button className="h3 btn muted"
              onClick={this.close}
              title="Dismiss modal overlay">
              &times;
            </button>
          </div>
        </div>
        <div className='flex flex-center' style={{ height: '100%' }}>
          <div style={styles.body}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

})

module.exports = SuperModal

