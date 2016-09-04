let React = require('react');
let HighLow = require('../components/weather/highLow');
let Sun = require('../components/weather/sun');
let Temp = require('../components/weather/temp');
let IconLeftArrow = require('../images/left-arrow');
let WeatherDetailsContainer = require('./WeatherDetailsContainer');

let WeatherContainer = React.createClass({

  getInitialState: function () {
    return {
      currentTemp: 54.23,
      summary: 'Light rain starting in the afternoon.',
      highTemp: 68.23,
      lowTemp: 51.14,
      humidity: 0.37,
      humiditySummary: null,
      sunrise: 1472477947,
      sunset: 1472519086,
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
        }, {
          "time": 1472691600,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.25,
          "temperature": 70,
          "apparentTemperature": 70.84,
          "dewPoint": 59.01,
          "humidity": 0.66,
          "windSpeed": 12.16,
          "windBearing": 358,
          "visibility": 10,
          "cloudCover": 0.22,
          "pressure": 1017.24,
          "ozone": 293.98
        }, {
          "time": 1472695200,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.20,
          "temperature": 69,
          "apparentTemperature": 70.35,
          "dewPoint": 59.96,
          "humidity": 0.7,
          "windSpeed": 12.21,
          "windBearing": 1,
          "visibility": 9.75,
          "cloudCover": 0.14,
          "pressure": 1017.59,
          "ozone": 294.3
        }, {
          "time": 1472698800,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.29,
          "temperature": 69,
          "apparentTemperature": 69.17,
          "dewPoint": 59.99,
          "humidity": 0.73,
          "windSpeed": 13.12,
          "windBearing": 6,
          "visibility": 9.55,
          "cloudCover": 0.08,
          "pressure": 1017.88,
          "ozone": 294.6
        }, {
          "time": 1472702400,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.36,
          "temperature": 68,
          "apparentTemperature": 68.82,
          "dewPoint": 60.42,
          "humidity": 0.75,
          "windSpeed": 12.8,
          "windBearing": 9,
          "visibility": 9.41,
          "cloudCover": 0.07,
          "pressure": 1017.98,
          "ozone": 295.04
        }, {
          "time": 1472706000,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.41,
          "temperature": 68,
          "apparentTemperature": 68.16,
          "dewPoint": 60.69,
          "humidity": 0.77,
          "windSpeed": 12.17,
          "windBearing": 13,
          "visibility": 9.32,
          "cloudCover": 0.07,
          "pressure": 1018.02,
          "ozone": 295.47
        }, {
          "time": 1472709600,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.62,
          "temperature": 67,
          "apparentTemperature": 67.32,
          "dewPoint": 60.1,
          "humidity": 0.78,
          "windSpeed": 11.83,
          "windBearing": 16,
          "visibility": 9.31,
          "cloudCover": 0.11,
          "pressure": 1018.1,
          "ozone": 295.84
        }, {
          "time": 1472713200,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.73,
          "temperature": 66.74,
          "apparentTemperature": 66.74,
          "dewPoint": 60.03,
          "humidity": 0.79,
          "windSpeed": 11.61,
          "windBearing": 19,
          "visibility": 9.27,
          "cloudCover": 0.09,
          "pressure": 1018.23,
          "ozone": 296.01
        }, {
          "time": 1472716800,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.81,
          "temperature": 66.32,
          "apparentTemperature": 66.32,
          "dewPoint": 59.95,
          "humidity": 0.8,
          "windSpeed": 11.46,
          "windBearing": 22,
          "visibility": 9.26,
          "cloudCover": 0.13,
          "pressure": 1018.38,
          "ozone": 296.12
        }, {
          "time": 1472720400,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.90,
          "temperature": 66.3,
          "apparentTemperature": 66.3,
          "dewPoint": 60.26,
          "humidity": 0.81,
          "windSpeed": 11.27,
          "windBearing": 23,
          "visibility": 9.26,
          "cloudCover": 0.12,
          "pressure": 1018.61,
          "ozone": 296.63
        }, {
          "time": 1472724000,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0.82,
          "temperature": 66.12,
          "apparentTemperature": 66.12,
          "dewPoint": 60.31,
          "humidity": 0.82,
          "windSpeed": 10.94,
          "windBearing": 23,
          "visibility": 9.26,
          "cloudCover": 0.2,
          "pressure": 1018.94,
          "ozone": 297.85
        }, {
          "time": 1472727600,
          "summary": "Partly Cloudy",
          "icon": "partly-cloudy-night",
          "precipIntensity": 0,
          "precipProbability": 0.74,
          "temperature": 65.79,
          "apparentTemperature": 65.79,
          "dewPoint": 60.27,
          "humidity": 0.82,
          "windSpeed": 10.78,
          "windBearing": 21,
          "visibility": 9.16,
          "cloudCover": 0.39,
          "pressure": 1019.35,
          "ozone": 299.47
        }, {
          "time": 1472731200,
          "summary": "Partly Cloudy",
          "icon": "partly-cloudy-day",
          "precipIntensity": 0.0046,
          "precipProbability": 0.56,
          "precipType": "rain",
          "temperature": 66.44,
          "apparentTemperature": 66.44,
          "dewPoint": 61.19,
          "humidity": 0.83,
          "windSpeed": 10.98,
          "windBearing": 18,
          "visibility": 9,
          "cloudCover": 0.44,
          "pressure": 1019.74,
          "ozone": 300.93
        }, {
          "time": 1472734800,
          "summary": "Light Rain",
          "icon": "rain",
          "precipIntensity": 0.0129,
          "precipProbability": 0.45,
          "precipType": "rain",
          "temperature": 67.84,
          "apparentTemperature": 67.84,
          "dewPoint": 61.93,
          "humidity": 0.81,
          "windSpeed": 11.65,
          "windBearing": 14,
          "visibility": 8.9,
          "cloudCover": 0.58,
          "pressure": 1020.11,
          "ozone": 302.08
        }, {
          "time": 1472738400,
          "summary": "Light Rain",
          "icon": "rain",
          "precipIntensity": 0.0109,
          "precipProbability": 0.44,
          "precipType": "rain",
          "temperature": 69.26,
          "apparentTemperature": 69.26,
          "dewPoint": 62.11,
          "humidity": 0.78,
          "windSpeed": 12.51,
          "windBearing": 10,
          "visibility": 8.95,
          "cloudCover": 0.61,
          "pressure": 1020.47,
          "ozone": 303.07
        }, {
          "time": 1472742000,
          "summary": "Drizzle",
          "icon": "rain",
          "precipIntensity": 0.0078,
          "precipProbability": 0.34,
          "precipType": "rain",
          "temperature": 69.85,
          "apparentTemperature": 69.85,
          "dewPoint": 61.02,
          "humidity": 0.74,
          "windSpeed": 13.69,
          "windBearing": 9,
          "visibility": 9.36,
          "cloudCover": 0.64,
          "pressure": 1020.77,
          "ozone": 303.8
        }, {
          "time": 1472745600,
          "summary": "Drizzle",
          "icon": "rain",
          "precipIntensity": 0.0052,
          "precipProbability": 0.2,
          "precipType": "rain",
          "temperature": 70.43,
          "apparentTemperature": 70.43,
          "dewPoint": 60.01,
          "humidity": 0.7,
          "windSpeed": 14.3,
          "windBearing": 9,
          "visibility": 9.65,
          "cloudCover": 0.66,
          "pressure": 1020.96,
          "ozone": 304.17
        }, {
          "time": 1472749200,
          "summary": "Mostly Cloudy",
          "icon": "partly-cloudy-day",
          "precipIntensity": 0.0035,
          "precipProbability": 0.11,
          "precipType": "rain",
          "temperature": 71.15,
          "apparentTemperature": 71.15,
          "dewPoint": 59.86,
          "humidity": 0.68,
          "windSpeed": 14.49,
          "windBearing": 11,
          "visibility": 9.82,
          "cloudCover": 0.67,
          "pressure": 1021.07,
          "ozone": 304.29
        }, {
          "time": 1472752800,
          "summary": "Mostly Cloudy",
          "icon": "partly-cloudy-day",
          "precipIntensity": 0.0025,
          "precipProbability": 0.07,
          "precipType": "rain",
          "temperature": 71.3,
          "apparentTemperature": 71.3,
          "dewPoint": 59.52,
          "humidity": 0.66,
          "windSpeed": 14.62,
          "windBearing": 14,
          "visibility": 9.9,
          "cloudCover": 0.67,
          "pressure": 1021.05,
          "ozone": 304.33
        }, {
          "time": 1472756400,
          "summary": "Mostly Cloudy",
          "icon": "partly-cloudy-day",
          "precipIntensity": 0.0012,
          "precipProbability": 0.02,
          "precipType": "rain",
          "temperature": 72.5,
          "apparentTemperature": 72.5,
          "dewPoint": 60.2,
          "humidity": 0.65,
          "windSpeed": 15.23,
          "windBearing": 13,
          "visibility": 10,
          "cloudCover": 0.6,
          "pressure": 1020.82,
          "ozone": 304.33
        }, {
          "time": 1472760000,
          "summary": "Partly Cloudy",
          "icon": "partly-cloudy-day",
          "precipIntensity": 0.0011,
          "precipProbability": 0.02,
          "precipType": "rain",
          "temperature": 73.81,
          "apparentTemperature": 73.81,
          "dewPoint": 61.22,
          "humidity": 0.65,
          "windSpeed": 15.27,
          "windBearing": 11,
          "visibility": 10,
          "cloudCover": 0.5,
          "pressure": 1020.48,
          "ozone": 304.26
        }
      ],
      backgroundImage: 'partly-cloudy-day',
      mainWeatherView: true
    }
  },

  componentWillMount: function () {

    // Get weather for the first load
    this.getWeather();
  },

  componentDidMount: function () {

    // Get weather after every ## minutes
    setInterval(this.getWeather, 30000);
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

    jsonp(`https://api.forecast.io/forecast/${apiKey}/${longitude},${latitude}`, function (data) {
      console.log(data);
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
    let timeString = new Date(timeStamp * 1000).toLocaleTimeString();
    if (timeString[0] == 0) {
      timeString = timeString.slice(0, 5) + ' ' + timeString.slice(9, 11);
    } else {
      timeString = timeString.slice(0, 4) + ' ' + timeString.slice(8, 10);
    }
    return timeString;
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
                  <Temp currentTemp={currentTemp} summary={summary}/>
                </div>
                <div>
                  <HighLow highTemp={highTemp} lowTemp={lowTemp} humidity={humidity} humiditySummary={humiditySummary}/>
                  <Sun sunrise={sunrise} sunset={sunset} toggleView={toggleView} raining={raining}/>
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
