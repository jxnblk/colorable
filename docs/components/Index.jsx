
var React = require('react')
var Header = require('./Header.jsx')
var Readme = require('./Readme.jsx')

module.exports = React.createClass({

  componentDidMount: function () {
    if (window) {
    }
  },

  render: function() {
    return (
      <main className='container px3'>
        <Header {...this.props} />
        <Readme {...this.props} />
      </main>
    )
  }

})

