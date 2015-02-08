/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      colors: this.props.colors
    }
  },

  updateColor: function(e) {
    var colors = this.state.colors;
    var color = e.target.value;
    var key = e.target.id;
    colors[key] = color;
    this.setState({ colors: colors });
    this.props.handleChange(this.state.colors);
  },

  removeColor: function(e) {
    var key = e.target.dataset.key;
    var colors = this.state.colors;
    delete colors[key];
    this.setState({ colors: colors });
    this.props.handleChange(this.state.colors);
  },

  addColor: function(e) {
    e.preventDefault();
    var value = e.target[0].value;
    e.target[0].value = '';
    var key = 'new-color-' + Math.floor(Math.random()*90000);
    var colors = this.state.colors;
    colors[key] = value;
    this.setState({ colors: colors });
    this.props.handleChange(this.state.colors);
  },

  renderItem: function(key) {
    var color = this.state.colors[key];
    return (
      <li className="flex flex-stretch">
        <input type="text"
          id={key}
          className="full-width m0 not-rounded field-dark"
          value={color}
          onChange={this.updateColor} />
        <a href="#!"
          data-key={key}
          onClick={this.removeColor}
          className="h3 button button-narrow button-nav-dark"
          title="Remove color">
            &times;
        </a>
      </li>
    )
  },

  render: function() {
    var colors = this.state.colors;
    return (
      <ul className="list-reset">
        {Object.keys(colors).map(this.renderItem)}
        <li className="mt3">
          <form onSubmit={this.addColor}>
            <label className="h5 bold block">Add Color</label>
            <div className="flex">
              <input type="text" className="flex-auto mb0 mr1 field-dark"/>
              <button className="flex-none button button-blue">
                Add
              </button>
            </div>
          </form>
        </li>
      </ul>
    )
  }

});

