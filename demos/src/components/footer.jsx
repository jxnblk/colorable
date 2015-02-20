
var React = require('react');

module.exports = React.createClass({

  render: function() {
    var homeLink = '//jxnblk.com/' + this.props.name;
    var npmLink = '//npmjs.com/package/' + this.props.name;
    return (
      <footer className="container px2 mt4">
        <div className="flex flex-center flex-wrap py3">
          <h4 className="m0">
            <a href={homeLink} className="blue">
              {this.props.name}
            </a>
            <span className="h5 regular"> v{this.props.version}</span>
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

