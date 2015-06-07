
var React = require('react')
var Head = require('./Head.jsx')
var Nav = require('./Nav.jsx')
var Footer = require('./Footer.jsx')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler

var Root = React.createClass({

  render: function() {
    var initialProps = {
      __html: safeStringify(this.props)
    }
    return (
      <html>
        <Head {...this.props} />
        <body>
          <Nav {...this.props} />
          <RouteHandler {...this.props} />
          <Footer {...this.props} />
          <script id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src={this.props.baseUrl + 'bundle.js'} />
        </body>
      </html>
    )
  }

})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = Root

