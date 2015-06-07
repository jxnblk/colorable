
var React = require('react')
var Color = require('color')

var HslSliders = require('react-hsl-sliders')

var ColorListItem = React.createClass({

  propTypes: {
    id: React.PropTypes.string
  },

  handleChange: function(e) {
    var hex = e.target.value
    this.props.updateColor(hex)
  },

  render: function() {
    var color = this.props.color
    if (!color.match(/^\#/)) {
      console.log('no #')
      color = '#' + color
    }
    try {
      var light = Color(color).light()
    } catch(e) {
      var light = true 
    }
    var styles = {
      container: {
        height: '6rem',
        color: light ? '#111' : 'white',
        backgroundColor: color,
      },
      disclosure: {
      },
      input: {
        //height: '1.75rem',
        color: 'inherit',
        backgroundColor: 'transparent',
        border: 'none'
      },
      button: {
        //height: '1.75rem'
      }
    }

    return (
      <div className="flex flex-column px1"
        style={styles.container}>
        <div className="flex-auto flex flex-center">
          <label htmlFor={this.props.id + '-hex'}
            className="hide">
            {this.props.itemId}
          </label>
          <input type="text"
            id={this.props.id + '-hex'}
            className="h5 bold block col-12 m0"
            style={styles.input}
            value={color}
            onChange={this.handleChange} />
          <div>
            <button className="h3 btn muted"
              style={styles.button}
              title="Remove Color"
              tabIndex="-1"
              onClick={this.props.removeColor}>
              &times;
            </button>
          </div>
        </div>
        <div className="flex-auto">
          <HslSliders
            id={this.props.id + '-hsl'}
            value={color}
            tabIndex="-1"
            hideValues={true}
            onChange={this.props.updateColor} />
        </div>
      </div>
    )
  }

})

module.exports = ColorListItem

