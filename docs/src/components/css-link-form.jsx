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
      colors: this.props.colors,
      isOpen: false
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
    this.setState({ colors: colors, isOpen: false });
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

  toggleForm: function() {
    var isOpen = !this.state.isOpen;
    this.setState({ isOpen: isOpen });
  },

  render: function() {
    var colors = this.state.colors;
    var isOpen = this.state.isOpen;
    var wrapperClass = this.props.className + ' ';
    wrapperClass += isOpen ? 'flex-auto' : '';
    var formClass = 'flex flex-center';
    var formStyle = {
      display: isOpen ? '' : 'none',
    };
    var toggleStyle = {
      display: isOpen ? 'none' : '',
    };
    return (
      <div className={wrapperClass}>
        <button className="button-nav-dark" style={toggleStyle} onClick={this.toggleForm}>
          CSS
        </button>
        <form onSubmit={this.getCss}
          style={formStyle}
          className={formClass}>
          <label className="hide h5 bold mr1">CSS</label>
          <input type="text"
            ref="url"
            placeholder="CORS-Enabled CSS Link"
            className="flex-auto mb0 mr1 field-dark"/>
          <button className="flex-none button button-blue">
            Get
          </button>
        </form>
      </div>
    )
  }

});

