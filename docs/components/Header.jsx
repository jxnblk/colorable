
var React = require('react')
var Ad = require('./Ad.jsx')
var TweetButton = require('./TweetButton.jsx')

var Header = React.createClass({

  render: function () {
    return (
      <header className='py3'>
        <div className='sm-flex flex-center mxn2'>
          <div className='flex-auto px2 py3'>
            <h1 className='m0'>{this.props.title}</h1>
            <p className='h3 m0'>{this.props.description}</p>
          </div>
          <div className='px2 py3'>
            <Ad />
          </div>
        </div>
        <TweetButton {...this.props} />
      </header>
    )
  }

})

module.exports = Header

