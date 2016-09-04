import React from 'react';
import IconCoffeeBeans from '../../images/coffee-beans';
import IconPourOver from '../../images/pour-over';
import IconAeropress from '../../images/aeropress';
import IconIcedCoffee from '../../images/iced-coffee';
import IconChemex from '../../images/chemex';
import RightArrow from '../../images/right-arrow';

function menuItem(props) {
  return (
    // <div className='menu-item' onClick={() => props.selectMenuItem(props.recipe.recipeId)}>
    <div className='menu-item' onClick={() => props.handleClick(props.recipe)}>
      <div>
        {(() => {
          switch (props.recipe.method.toLowerCase()) {
           case 'pour over':
            return (
              <IconPourOver />
            )
          case 'aeropress':
            return (
              <IconAeropress />
            )
          case 'iced coffee':
            return (
              <IconIcedCoffee />
            )
          case 'chemex':
            return (
              <IconChemex />
            )
          }
        })()}
        <p>{props.recipe.method}</p>
      </div>
      <RightArrow />
    </div>
  )
}

module.exports = menuItem;
