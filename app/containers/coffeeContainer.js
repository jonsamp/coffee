import React from 'react';
import GramSelect from '../components/coffee/gramSelect';
import Timer from '../components/coffee/timer';

let CoffeeContainer = React.createClass({

  getInitialState: function () {
    let minutes = parseInt(this.props.recipe.bloom.time / 60, 10);
    let seconds = parseInt(this.props.recipe.bloom.time % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return {
      grams: this.props.recipe.min || 10,
      step: 1,
      recipe: {
        grams: 0,
        bloom: {
          grams: 0,
          time: 0
        },
        pour: {
          grams: 0,
          time: 0
        }
      },
      timeRemaining: this.props.recipe.bloom.time,
      startTime: this.props.recipe.bloom.time,
      countdown: true
    }
  },

  onSliderChange: function(value) {
    this.setState({
      grams: value
    })
  },

  startTimer: function (duration) {
    var timer = duration, minutes, seconds;

    let interval = setInterval(function () {

      if (this.state.countdown) {
        this.updateTimer(timer);
      } else {
        clearInterval(interval);
        this.nextStep();
      }

      if (--timer < 0) {
        clearInterval(interval);
        this.nextStep();
      }
    }.bind(this), 1000);
  },

  updateTimer: function (remainingTime) {
    if (this.state.countdown) {
      this.setState({
        timeRemaining: remainingTime
      });
    }
  },

  nextStep: function () {

    console.log('Step in the nextStep function: ', this.state.step);

    if (this.state.step < 3) {

      if (this.state.step === 1) {
        this.setState({
          step: this.state.step + 1
        });
        this.generateRecipe();
      }

      if (this.state.step === 2) {
        this.setState({
          step: this.state.step + 1,
          startTime: this.props.recipe.pour.time,
          timeRemaining: this.props.recipe.pour.time
        });
        this.startTimer(this.state.startTime - 1);
      }
    } else {
      this.reset();
    }
  },

  reset: function () {
    this.state.countdown = false;
    this.props.handleClick();
  },

  generateRecipe: function () {

    let totalWater = this.state.grams * this.props.recipe.intensity;

    this.setState({
      recipe: {
        grams: this.state.grams,
        bloom: {
          grams: Math.round(this.props.recipe.bloom.grams * totalWater),
          time: this.props.recipe.bloom.time
        },
        pour: {
          grams: totalWater,
          time: this.props.recipe.pour.time
        }
      }
    });
  },

  updateTimers: function (states) {
    this.setState({
      timeRemaining: states.timeRemaining,
      countdown: states.countdown
    })
  },

  updateBackground: function () {
    if (this.state.timeRemaining === 0) {
      return '0%';
    }
    return ((1 - (this.state.timeRemaining / this.state.startTime)) * 100) + '%';
  },

  formatTime: function () {
    let minutes = parseInt(this.state.timeRemaining / 60, 10);
    let seconds = parseInt(this.state.timeRemaining % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ':' + seconds;
  },

  render: function () {
    return (
      <div className='brew'>

        <div className="background-progress" style={{
            width: this.updateBackground()
          }}></div>

        <div className="header">
          {(() => {
            if (this.state.step === 1) {
              return (
                <div>
                  <h3>{this.props.recipe.method}</h3>
                  <h4>Grind at {this.props.recipe.grind} coarseness</h4>
                </div>
              )
            }

            if (this.state.step === 2) {
              return (
                <div>
                  <h3>Bloom</h3>
                  <h4>Pour {this.state.recipe.bloom.grams}g of water</h4>
                </div>
              )
            }

            if (this.state.step === 3) {
              return (
                <div>
                  <h3>Pour</h3>
                  <h4>Pour up to {Math.round(this.state.recipe.pour.grams / 2)}g of water <br />
                    Then pour up to {this.state.recipe.pour.grams}g
                  </h4>
                </div>
              )
            }
          })()}
        </div>

        <div className="main">
          {(() => {
            if (this.state.step === 1) {
              return (
                <GramSelect grams={this.state.grams} onSliderChange={this.onSliderChange} min={this.props.recipe.min} max={this.props.recipe.max}/>
              )
            }

            if (this.state.step === 2) {
              return (
                <div className='timer'>
                  <Timer duration={this.props.recipe.bloom.time} timeRemaining={this.formatTime()} countdown={this.state.countdown} startTimer={this.startTimer} updateTimers={this.updateTimers}/>
                </div>
              )
            }

            if (this.state.step === 3) {
              return (
                <div className='timer'>
                  <Timer duration={this.props.recipe.pour.time} timeRemaining={this.formatTime()} countdown={this.state.countdown} startTimer={this.startTimer} updateTimers={this.updateTimers}/>
                </div>
              )
            }
          })()}
        </div>

        <div className='footer'>
          {(() => {
            if (this.state.step === 1) {
              return (
                <div className='start-brew' onClick={this.nextStep}>Start</div>
              )
            }

            if (this.state.step === 2 || this.state.step === 3) {
              return (
                <div className='brew-details'>
                  <span>{this.props.recipe.method}</span>
                  <span>Coffee: {this.state.grams}g</span>
                  <span>Bloom: {this.state.recipe.bloom.grams}g</span>
                  <span>Half: {Math.round(this.state.recipe.pour.grams / 2)}g</span>
                  <span>Pour: {this.state.recipe.pour.grams}g</span>
                  <span className='reset-button' onClick={this.reset}>Reset</span>
                </div>
              )
            }
          })()}
        </div>

      </div>
    )
  }
});

module.exports = CoffeeContainer;
