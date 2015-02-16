/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  render: function() {
    var html = this.props.readme;
    var style = {
      position: this.props.isApp ? 'fixed' : ''
    };
    return (
      <div style={style}>
        <div className="right px2">
          <a href="https://twitter.com/intent/tweet?text=Test color palettes for readable color combinations &amp;url=http://jxnblk.com/colorable&amp;via=jxnblk"
            className="button button-light-gray">
            Tweet
          </a>
        </div>
        <div className="container px2"
          dangerouslySetInnerHTML={{__html: html}} />
      </div>
    )
  }

});

