
var React = require('react')
var Header = require('./Header.jsx')
var Footer = require('./Footer.jsx')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler

var Body = React.createClass({

  render: function () {
    return (
      <body className="container px2">
        <Header {...this.props} />
        <RouteHandler {...this.props} />
        <Footer {...this.props} />
      </body>
    )
  }

})

module.exports = Body

