
var React = require('react')
var createReactClass = require('create-react-class')

var Readme = createReactClass({

  render: function () {
    return (
      <div
        className='prose mb4'
        dangerouslySetInnerHTML={{ __html: this.props.readme }} />
    )
  }

})

module.exports = Readme

