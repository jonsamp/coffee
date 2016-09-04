let React = require('react');
let Precipitation = require('../components/weather/precipitation');
let TemperatureDetails = require('../components/weather/temperatureDetails');

let WeatherDetailsContainer = React.createClass({

  getInitialState: function () {
    return {
      precipDetails: true,
      tempDetails: false,
      nextEightHours: this.props.nextEightHours
    };
  },

  handleClick: function (e) {
    let selectedButton = e.target.getAttribute('value');

    this.setState({
      precipDetails: selectedButton === 'precip' ? true : false,
      tempDetails: selectedButton === 'temp' ? true : false
    });
  },

  render: function () {
    return (
      <section className='weather-details'>
        <div className='categories'>
          <div className='title' value='precip' onClick={this.handleClick}>Precipitation</div>
          <div className='title' value='temp' onClick={this.handleClick}>Temperature</div>
        </div>
        {(() => {
          if (this.state.precipDetails) {
            return (
              <Precipitation nextEightHours={this.state.nextEightHours}/>
            )
          } else if (this.state.tempDetails) {
            return (
              <TemperatureDetails nextEightHours={this.state.nextEightHours}/>
            )
          }
        })()}

      </section>
    );
  }

});

module.exports = WeatherDetailsContainer;
