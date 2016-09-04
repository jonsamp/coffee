var React = require('react');

var IconSunrise = require('../../images/sunrise');
var IconSunset = require('../../images/sunset');
var IconRightArrow = require('../../images/right-arrow');

function sun(props) {

  if (props.raining) {
    var rainFill = '#00B6FF';
  }

  return (
    <section className='sun'>
      <div>
        <IconSunrise />
        {props.sunrise}
      </div>
      <div>
        <IconSunset />
        {props.sunset}
      </div>
      <div className='right-arrow' onClick={props.toggleView}>
        <IconRightArrow backgroundColor={rainFill}/>
      </div>
    </section>
  )
}

module.exports = sun;
