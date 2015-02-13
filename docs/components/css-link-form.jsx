/** @jsx React.DOM */

var React = require('react');
var Color = require('color');
var _ = require('lodash');
var request = require('superagent');
//var cssstats = require('cssstats');
var postcss = require('postcss');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      className: 'mb2'
    }
  },

  getInitialState: function() {
    return {
      colors: this.props.colors
    }
  },

  parseCss: function(css) {
    var root = postcss.parse(css);
    var colors = [];
    root.eachDecl(function(dec) {
      if (dec.prop == 'color' || dec.prop == 'background-color') {
        try {
          var c = Color(dec.value).hexString();
          colors.push(c);
        } catch(e) {
          //console.error('Couldnt parse ' + color.value);
        }
      }
    });
    colors = _.uniq(colors);
    this.setState({ colors: colors });
    this.props.handleChange(this.state.colors);
  },

  getCss: function(e) {
    e.preventDefault();
    var self = this;
    var url = this.refs.url.getDOMNode().value;
    request.get(url)
      .set('Content-Type', 'text/plain')
      .end(function(res) {
        var css = res.text;
        self.parseCss(css);
      });
  },

  render: function() {
    var colors = this.state.colors;
    var formClass = this.props.className += ' flex flex-center';
    return (
      <form onSubmit={this.getCss} className={this.props.className}>
        <label className="h5 bold mr1">CSS</label>
        <input type="text"
          ref="url"
          placeholder="CORS-Enabled CSS Link"
          className="flex-auto mb0 mr1 field-dark"/>
        <button className="flex-none button button-blue">
          Get
        </button>
      </form>
    )
  }

});

