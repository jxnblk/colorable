
var React = require('react')

var Head = React.createClass({

  render: function () {
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="author" content={this.props.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </head>
    )
  }

})

module.exports = Head

