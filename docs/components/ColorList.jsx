
var React = require('react')
var ColorListItem = require('./ColorListItem.jsx')

var ColorList = React.createClass({

  getInitialState: function() {
    return {
      focus: false
    }
  },

  addColor: function(e) {
    var colors = this.props.colors
    colors.push('#444')
    this.props.updateColors(colors)
    this.setState({ focus: this.props.colors.length - 1 })
  },

  renderItem: function(key, i) {
    var self = this
    var color = this.props.colors[i]
    var updateColor = function(hex) {
      var colors = self.props.colors
      colors[i] = hex
      self.props.updateColors(colors)
    }
    var removeColor = function() {
      var colors = self.props.colors
      colors.splice(i, 1)
      self.props.updateColors(colors)
    }
    var ref = 'color-' + i
    var id = color
    var itemId = 'color-item-' + i
    return (
      <li ref={ref} key={ref}>
        <ColorListItem color={color}
          id={itemId}
          isEditing={true}
          removeColor={removeColor}
          updateColor={updateColor} />
      </li>
    )
  },

  focusInput: function(i) {
    var li = this.refs['color-' + i].getDOMNode()
    var input = li.querySelector('input')
    input.focus()
    input.select()
  },

  componentDidUpdate: function() {
    if (this.state.focus) {
      this.focusInput(this.state.focus)
      this.setState({ focus: false })
    }
  },

  render: function() {
    var colors = this.props.colors
    var styles = {
      container: {
        position: 'relative',
        zIndex: 1,
        width: '20rem'
      }
    }
    return (
      <div>
        <ul className="list-reset mb0"
          style={styles.container}>
          {colors.map(this.renderItem)}
        </ul>
        <div className="p1 white bg-black">
          <button className='btn block col-12'
            onClick={this.addColor}>
            Add Color
          </button>
        </div>
      </div>
    )
  }

})

module.exports = ColorList

