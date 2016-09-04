require('rc-slider/assets/index.css');

var React = require('react');
var Rcslider = require('rc-slider');

let gramSlider = React.createClass({
  getInitialState: function () {
    return {
      min: 10,
      max: 40
    }
  },

  render: function  () {
    return <Rcslider tipFormatter={null} defaultValue={this.props.min} onChange={this.props.onSliderChange} min={this.props.min} max={this.props.max}/>;
  }
});

module.exports = gramSlider;
