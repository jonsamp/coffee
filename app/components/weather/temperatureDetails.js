var React = require('react');

function temperatureDetails(props) {

  return (
    <section className='temperature'>

      {props.nextEightHours.map(function (chance, index) {

        let hue = 270 - ((chance.temperature/10) * 30);

        let tempWidth = {
          width: chance.temperature > 0 ? chance.temperature + '%' : '1%',
          backgroundColor: `HSL(${hue}, 100%, 50%)`,
          minWidth: '1%',
          maxWidth: '100%'
        }

        return (
          <div key={index} className='temp-chance'>
            <span className='temp-time'>{chance.time}</span>
            <span className='temp-bar'>
              <span className='temp-fill' style={tempWidth}></span>
            </span>
            <span className='temp-value'>{chance.temperature}</span>
          </div>
        )
      })}

    </section>
  )
}

module.exports = temperatureDetails;
