import React from 'react';
import GramSelect from '../components/coffee/gramSelect';
import Timer from '../components/coffee/timer';

let CoffeeContainer = React.createClass({

  getInitialState: function () {
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
      }
    }
  },

  onSliderChange: function(value) {
    this.setState({
      grams: value
    })
  },

  nextStep: function () {

    if (this.state.step < 3) {
      if (this.state.step === 1) {
        this.generateRecipe();
      }
      this.setState({
        step: this.state.step + 1
      });
    } else {
      this.props.handleClick();
      this.setState({
        step: 1
      })
    }
  },

  reset: function () {
    this.props.handleClick();
    this.setState({
      step: 1
    })
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
    })
  },

  setRemainingTime: function (remainingTime) {
    this.setState({
      remainingTime: remainingTime
    });
  },

  render: function () {

    // Header text
    // Main content
    // Bottom buttons

    return (
      <div className='brew'>

        <div className="background-progress" style={{
            width: '10%'
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
                  <Timer duration={this.props.recipe.bloom.time} nextStep={this.nextStep} setRemainingTime={this.setRemainingTime}/>
                </div>
              )
            }

            if (this.state.step === 3) {
              return (
                <div className='timer'>
                  <Timer duration={this.props.recipe.pour.time} nextStep={this.nextStep} setRemainingTime={this.setRemainingTime}/>
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
                  <span>Coffee: {this.state.grams}</span>
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
