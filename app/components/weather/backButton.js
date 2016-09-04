var React = require('react');
var IconLeftArrow = require('../../images/left-arrow');

function backButton(props) {
  return (
    <div className='back-button' >
      <IconLeftArrow onClick={props.toggleView} />
    </div>
  )
}

module.exports = backButton;
