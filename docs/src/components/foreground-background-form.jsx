
var React = require('react');
var HslForm = require('./hsl-form.jsx');

module.exports = React.createClass({

  handleForegroundChange: function(e) {
    this.props.setForeground(e.target.value);
  },

  handleBackgroundChange: function(e) {
    this.props.setBackground(e.target.value);
  },

  render: function() {
    var foreground = this.props.foreground;
    var background = this.props.background;
    return (
      <div className="sm-flex flex-center mxn2">
        <div className="sm-col-6 px2">
          <label className="h5 bold">Foreground</label>
          <input type="text"
            value={foreground}
            onChange={this.handleForegroundChange}
            className="block full-width field-dark" />
          <HslForm color={foreground}
            updateColor={this.props.setForeground} />
        </div>
        <div className="sm-col-6 px2">
          <label className="h5 bold">Background</label>
          <input type="text"
            value={background}
            onChange={this.handleBackgroundChange}
            className="block full-width field-dark" />
          <HslForm color={background}
            updateColor={this.props.setBackground} />
        </div>
      </div>
    )
  }

});

