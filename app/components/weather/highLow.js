var React = require('react');
var IconLowTemp = require('../../images/low-temp');
var IconHighTemp = require('../../images/high-temp');
var IconHumidity = require('../../images/humidity');

function highLow (props) {
  return (
    <section className='high-low'>
      <div>
        <IconLowTemp /> <br />
        <p><span className='degrees'>{props.lowTemp}</span> Low</p>
        </div>
      <div>
        <IconHighTemp /> <br />
        <p><span className='degrees'>{props.highTemp}</span> High</p>
        </div>
      <div>
        <IconHumidity />
        {props.humidity}<br />
        {props.humiditySummary}
      </div>
    </section>
  )
}

highLow.propTypes = {
  lowTemp: React.PropTypes.number.isRequired,
  highTemp: React.PropTypes.number.isRequired,
  humidity: React.PropTypes.string.isRequired,
  humiditySummary: React.PropTypes.string.isRequired
}

module.exports = highLow;
