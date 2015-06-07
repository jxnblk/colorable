
var React = require('react')
var Router = require('react-router')
var Routes = require('./Routes.jsx')

if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.querySelector('#initial-props').innerHTML)
  Router.run(Routes, Router.HistoryLocation, function (Handler, state) {
    //initialProps.params = state.params
    React.render(React.createElement(Handler, initialProps), document)
  })

  // Tweet button
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");

}

module.exports = function render(locals, callback) {
  Router.run(Routes, locals.path, function(Handler, state) {
    //locals.params = state.params
    var html = React.renderToString(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
}


