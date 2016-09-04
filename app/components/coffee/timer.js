import React from 'react';

let Timer = React.createClass({

  getInitialState: function () {
    let minutes = parseInt(this.props.duration / 60, 10);
    let seconds = parseInt(this.props.duration % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return {
      timeRemaining: minutes + ':' + seconds,
      countdown: true
    }
  },

  componentDidMount: function () {
    console.log(this.props.duration);
    this.startTimer(this.props.duration - 1);
  },

  componentWillReceiveProps: function (nextProps) {
    let minutes = parseInt(nextProps.duration / 60, 10);
    let seconds = parseInt(nextProps.duration % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    this.setState({
      timeRemaining: minutes + ':' + seconds,
      countdown: true
    });

    this.startTimer(nextProps.duration - 1);
  },

  startTimer: function (duration) {
    var timer = duration, minutes, seconds;
    let interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        console.log(minutes + ":" + seconds);

        if (this.state.countdown) {
          this.updateTimer(minutes + ":" + seconds);
        } else {
          clearInterval(interval);
        }

        if (--timer < 0) {
          clearInterval(interval);
          // Proceed to the next step!
          this.setState({
            countdown: true
          })
          this.props.nextStep();
        }

    }.bind(this), 1000);
  },

  updateTimer: function (remainingTime) {
    this.setState({
      timeRemaining: remainingTime
    });
  },

  componentWillUnmount: function () {
    console.log('About to unmount');
    this.state.countdown = false;
  },

  render: function () {
    return <h1>{this.state.timeRemaining}</h1>
  }
});


module.exports = Timer;
