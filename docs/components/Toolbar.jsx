
var React = require('react')

var ThresholdToggle = require('./ThresholdToggle.jsx')

var Toolbar = React.createClass({

  render: function() {
    var styles = {
      container: {
        //position: 'fixed',
        //top: 0,
        //right: 0,
        //bottom: 0,
        //left: 0,
        //zIndex: 2,
      }
    }
    return (
      <div className="flex flex-center flex-wrap white bg-black"
        style={styles.container}>
        <div className="flex-auto" />
        <div className="sm-show">
          <ThresholdToggle {...this.props}
            updateThreshold={this.props.updateThreshold}
            className="p1" />
        </div>
      </div>
    )
  }

})

module.exports = Toolbar

