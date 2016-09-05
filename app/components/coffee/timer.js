import React from 'react';

let Timer = React.createClass({

  componentDidMount: function () {
    this.props.startTimer(this.props.duration - 1);
  },

  componentWillUnmount: function () {
    this.props.updateTimers({
      timeRemaining: 0
    });
  },

  render: function () {
    return <h1>{this.props.timeRemaining}</h1>
  }
});


module.exports = Timer;
