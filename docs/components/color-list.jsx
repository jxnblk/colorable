/** @jsx React.DOM */

var React = require('react');

var Modal = require('./modal.jsx');

var ColorListItem = require('./color-list-item.jsx');
var HslForm = require('./hsl-form.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      modalEditColor: false,
      currentIndex: 0
    }
  },

  updateColor: function(hex, i) {
    var colors = this.props.colors;
    colors[i] = hex;
    this.props.handleChange(colors);
    if (this.state.modalEditColor) {
      this.setState({ modalEditColor: hex });
    }
  },

  removeColor: function(i) {
    var colors = this.props.colors;
    colors.splice(i, 1);
    this.props.handleChange(colors);
  },

  openModal: function(color, index) {
    this.setState({
      modalEditColor: color,
      currentIndex: index
    });
  },

  closeModal: function() {
    this.setState({ modalEditColor: false });
  },

  renderItem: function(key, i) {
    var self = this;
    var color = this.props.colors[i];
    return (
      <li>
        <ColorListItem color={color}
          index={i}
          removeColor={this.removeColor}
          updateColor={this.updateColor}
          openModal={this.openModal} />
      </li>
    )
  },

  render: function() {
    var self = this;
    var colors = this.props.colors;
    var modalIsOpen = !!this.state.modalEditColor;
    var modalColor = this.state.modalEditColor;
    var currentIndex = this.state.currentIndex;
    //var inputRef = 'color-' + currentIndex;
    var handleChange = function(e) {
      var hex = e.target.value;
      var index = e.target.ref;
      self.updateColor(hex, index);
    };
    var removeColor = function(e) {
      self.closeModal();
      self.removeColor(currentIndex);
    };
    var updateColor = function(hex) {
      self.updateColor(hex, currentIndex);
    };
    var modalChipStyle = {
      backgroundColor: modalColor
    };
    return (
      <div>
        <ul className="list-reset mb0">
          {colors.map(this.renderItem)}
        </ul>
        <Modal isOpen={modalIsOpen}
          flush={true}
          onDismiss={this.closeModal}
          header="Edit Color">
          <div className="p4" style={modalChipStyle} />
          <div className="p2">
            <input type="text"
              className="field-light"
              ref={currentIndex}
              onChange={handleChange}
              value={modalColor}/>
            <HslForm
              color={modalColor}
              updateHex={updateColor}
              />
          </div>
          <div className="flex flex-center p2 border-top">
            <div className="flex-auto" />
            <button className="button button-small mr2 red button-muted"
              onClick={removeColor}>
              Remove
            </button>
            <button
              className="button button-blue"
              onClick={this.closeModal}>
              Done
            </button>
          </div>
        </Modal>
      </div>
    )
  }

});

