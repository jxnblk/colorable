/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  render: function() {
    var npmLink = '//npmjs.com/package/' + this.props.name;
    return (
      <footer className="container px2 mt4">
        <div className="flex flex-center flex-wrap py3 border-top">
          <h4 className="m0">
            {this.props.name}
            <span className="h5">v{this.propsversion}</span>
          </h4>
          <a href={npmLink} className="button">NPM</a>
          <a href={this.props.homepage} className="button">Github</a>
          <div className="flex-auto"></div>
          <p className="h5 m0">
            Made by <a href="//jxnblk.com">Jxnblk</a>
          </p>
        </div>
      </footer>
    )
  }

});

