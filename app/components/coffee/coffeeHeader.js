import React from 'react';
import IconCoffeeBeans from '../../images/coffee-beans';

function coffeeHeader(props) {
  return (
    <div className='header' onClick={props.reloadPage}>
      <IconCoffeeBeans /> <span>Coffee</span>
    </div>
  )
}

module.exports = coffeeHeader;
