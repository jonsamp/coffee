let React = require('react');
let HighLow = require('../components/weather/highLow');
let Sun = require('../components/weather/sun');
let Temp = require('../components/weather/temp');
let IconLeftArrow = require('../images/left-arrow');
let WeatherDetailsContainer = require('./WeatherDetailsContainer');

let WeatherContainer = React.createClass({

  getInitialState: function () {
    return {
      currentTemp: null,
      summary: '---',
      highTemp: null,
      lowTemp: null,
      humidity: null,
      humiditySummary: null,
      sunrise: null,
      sunset: null,
      raining: false,
      hourly: [
        {
          "time": 1472677200,
          "summary": "Clear",
          "icon": "clear-day",
          "precipIntensity": 0,
          "precipProbability": 0,
          "temperature": 78,
          "apparentTemperature": 74.55,
          "dewPoint": 59.94,
          "humidity": 0.6,
          "windSpeed": 9.4,
          "windBearing": 1,
          "visibility": 10,
          "cloudCover": 0.17,
          "pressure": 1017.26,
          "ozone": 288.53
        }, {
          "time": 1472680800,
          "summary": "Partly Cloudy",
          "icon": "partly-cloudy-day",
          "precipIntensity": 0,
          "precipProbability": 0.12,
          "temperature": 77,
          "apparentTemperature": 74.19,
          "dewPoint": 59.03,
          "humidity": 0.59,
          "windSpeed": 12.25,
          "windBearing": 0,
          "visibility": 10,
          "cloudCover": 0.26,
          "pressure": 1017.12,
          "ozone": 290.04
        }, {
          "time": 1472684400,
          "summary": "Partly Cloudy",
          "icon": "partly-cloudy-day",
          "precipIntensity": 0,
          "precipProbability": 0.15,
          "temperature": 76,
          "apparentTemperature": 73.18,
          "dewPoint": 58.1,
          "humidity": 0.59,
          "windSpeed": 12.42,
          "windBearing": 359,
          "visibility": 10,
          "cloudCover": 0.25,
          "pressure": 1017,
          "ozone": 291.85
        }, {
          "time": 1472688000,
          "summary": "Clear",
          "icon": "clear-day",
          "precipIntensity": 0,
          "precipProbability": 0.21,
          "temperature": 71.64,
          "apparentTemperature": 71.64,
          "dewPoint": 57.73,
          "humidity": 0.62,
          "windSpeed": 12.25,
          "windBearing": 358,
          "visibility": 10,
          "cloudCover": 0.23,
          "pressure": 1017.02,
          "ozone": 293.28
        }
      ],
      backgroundImage: 'no-bg-image',
      mainWeatherView: true,
      getWeatherInterval: setInterval(this.getWeather, 180000)
    }
  },

  componentDidMount: function () {
    this.getWeather();
    this.state.getWeatherInterval;
  },

  componentWillUnmount: function () {
    clearInterval(this.state.getWeatherInterval);
  },

  getWeather: function () {
    function jsonp(url, callback) {
      let callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
      window[callbackName] = function (data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
      };

      let script = document.createElement('script');
      script.src = url + (url.indexOf('?') >= 0
        ? '&'
        : '?') + 'callback=' + callbackName;
      document.body.appendChild(script);
    }

    const apiKey = 'a0851d6b87a2a541d0fbaff2d0f7518b';
    const latitude = '-87.701378';
    const longitude = '41.902881';

    jsonp(`https://api.darksky.net/forecast/${apiKey}/${longitude},${latitude}`, function (data) {
      this.setState({
        currentTemp: data.currently.temperature,
        summary: data.minutely.summary,
        highTemp: data.daily.data[0].temperatureMax,
        lowTemp: data.daily.data[0].temperatureMin,
        humidity: data.currently.humidity,
        sunrise: data.daily.data[0].sunriseTime,
        sunset: data.daily.data[0].sunsetTime,
        hourly: data.hourly.data,
        raining: data.currently.precipIntensity > 14 ? true : false,
        backgroundImage: data.currently.icon
      })
    }.bind(this));
  },

  // Epoch -> human time
  parseTime: function (timeStamp) {
    if (timeStamp) {
      let timeString = new Date(timeStamp * 1000).toLocaleTimeString();
      if (timeString[0] == 0) {
        timeString = timeString.slice(0, 5) + ' ' + timeString.slice(9, 11);
      } else {
        timeString = timeString.slice(0, 4) + ' ' + timeString.slice(8, 10);
      }
      return timeString;
    } else {
      return '--:--';
    }
  },

  roundNumber: function (number) {
    return Math.round(number);
  },

  getPercent: function (number) {
    return Math.round((number * 100)) + '%'
  },

  // Calculate humidity description
  getHumiditySummary: function () {
    let humiditySummary;
    if (this.state.humidity < 0.33) {
      humiditySummary = 'Dry';
    } else if (this.state.humidity < 0.66) {
      humiditySummary = 'Nice';
    } else {
      humiditySummary = 'Muggy';
    }

    return humiditySummary;
  },

  toggleView: function () {
    let toggleMainWeatherView = this.state.mainWeatherView
      ? false
      : true;

    this.setState({mainWeatherView: toggleMainWeatherView})
  },

  nextEightHours: function () {
    let hourly = [];
    this.state.hourly.some(function (hour, index) {
      let time = new Date(hour.time * 1000).getHours();
      let precipProbability = Math.round(hour.precipProbability * 100);
      let temperature = Math.round(hour.temperature);

      if (time > 12) {
        time = time - 12 + 'PM';
      } else if (time == 0) {
        time = '12AM';
      } else {
        time = time + 'AM';
      }

      hourly.push({
        time: time,
        precipProbability: precipProbability,
        temperature: temperature
       });

      if (index > 22) {
        return true;
      } else {
        return false;
      }
    });
    return hourly;
  },

  render: function () {

    // Prepare data to be passed to presentational components
    let backgroundImage = this.state.backgroundImage;
    let currentTemp = this.roundNumber(this.state.currentTemp);
    let summary = this.state.summary;
    let highTemp = this.roundNumber(this.state.highTemp);
    let lowTemp = this.roundNumber(this.state.lowTemp);
    let humidity = this.getPercent(this.state.humidity);
    let humiditySummary = this.getHumiditySummary();
    let sunrise = this.parseTime(this.state.sunrise);
    let sunset = this.parseTime(this.state.sunset);
    let toggleView = this.toggleView;
    let raining = this.state.raining;
    let nextEightHours = this.nextEightHours();

    return (
      <div className='weather'>
        {(() => {
          if (this.state.mainWeatherView) {
            return (
              <section className={backgroundImage}>
                <div>
                  <Temp currentTemp={currentTemp} summary={summary} />
                </div>
                <div>
                  <HighLow highTemp={highTemp} lowTemp={lowTemp} humidity={humidity} humiditySummary={humiditySummary}/>
                  <Sun sunrise={sunrise} sunset={sunset} toggleView={toggleView} raining={raining} />
                </div>
              </section>
            )
          } else {
            return (
              <section className={'more-info ' + backgroundImage}>
                <div onClick={toggleView}>
                  <IconLeftArrow/>
                </div>
                <WeatherDetailsContainer nextEightHours={nextEightHours} />
              </section>
            )
          }
        })()}
      </div>
    )
  }
});

module.exports = WeatherContainer;
