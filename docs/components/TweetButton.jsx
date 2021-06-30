
var React = require('react')
var createReactClass = require('create-react-class')

var TweetButton = createReactClass({

  render: function () {
    //var script = {
    //  __html: this.props.twitter.script
    //}
    var text = this.props.twitter.text
    return (
      <div className='inline-block'>
        <a href='https://twitter.com/share'
          className='twitter-share-button'
          data-text={text}
          data-via='jxnblk'
          data-size='large'>
          Tweet
        </a>
      </div>
    )
  }

})

module.exports = TweetButton

