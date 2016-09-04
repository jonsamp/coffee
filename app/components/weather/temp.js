var React = require('react');

function temp(props) {
  return (
    <section className='temp'>
      <h1 className='degrees'>{props.currentTemp}</h1>
      <h3>{props.summary}</h3>
    </section>
  )
}

module.exports = temp;
