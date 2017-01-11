var React = require('react');

function temp(props) {
  return (
    <section className='temp'>
      <h1 className='degrees'>{props.currentTemp}°</h1>

      {/* Display the apparent temperature if December through March */}
      {(() => {
        let month = (new Date).getMonth() + 1;

        // Display the apparent temp if different from current temp
        if (props.feelsLike !== props.currentTemp) {
          return <p>
            <em>Feels like {props.feelsLike}°</em>
          </p>
        }
      })()}

      <h3>{props.summary}</h3>
      <p style={{
        fontFamily: 'Courier',
        maxWidth: '10em',
        display: 'block'
      }}>{props.lastWeatherCall}
      </p>
    </section>
  )
}

module.exports = temp;
