var React = require('react');

function precipitation(props) {

  return (
    <section className='precipitation'>

      {props.nextEightHours.map(function (chance, index) {

        let hue = 30 - ((chance.precipProbability/100) * 30);

        let rainWidth = {
          width: chance.precipProbability + '%',
          backgroundColor: `HSL(${hue + 175}, 100%, 50%)`
        }

        return (
          <div key={index} className='precip-chance'>
            <span className='precip-time'>{chance.time}</span>
            <span className='precip-bar'>
              <span className='rain' style={rainWidth}></span>
            </span>
            <span className='precip-percent'>{chance.precipProbability}</span>
          </div>
        )
      })}

    </section>
  )
}

module.exports = precipitation;
