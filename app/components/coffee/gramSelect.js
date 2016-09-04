import React from 'react';
import GramSlider from './gramSlider';


function gramSelect(props) {
  return (
    <div className='gram-select'>
      <h1>{props.grams}g</h1>
      <GramSlider onSliderChange={props.onSliderChange} min={props.min} max={props.max}/>
    </div>
  )
}

module.exports = gramSelect;
